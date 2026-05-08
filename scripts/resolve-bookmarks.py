#!/usr/bin/env python3
"""Resolve t.co links and extract GitHub repos from sweep output.

Reads data/bookmarks_all.json. For every tweet:
  - Normalize text (strip line-break splits in URLs).
  - Pull t.co URLs from links + cleaned text.
  - Resolve each t.co via HEAD/GET redirect chain.
  - Pull github.com URLs from links + cleaned text + resolved.

Writes data/bookmarks_resolved.json with a resolved_links + github_repos field.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "bookmarks_all.json"
OUT = ROOT / "data" / "bookmarks_resolved.json"
CACHE = ROOT / "data" / "tco_cache.json"

TCO_RE = re.compile(r"https://t\.co/[A-Za-z0-9]+")
# github.com/owner/repo (allow no trailing slash, no ? # at end of repo segment)
GH_RE = re.compile(r"https?://github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)(?:[/?#][^\s\"]*)?")


def clean_text(text: str) -> str:
    """Stitch URLs that Twitter visually split across lines.

    Twitter renders long URLs broken across lines like:
        https://
        github.com/foo/bar
    We collapse newlines that occur right after `://` or before path segments.
    """
    if not text:
        return ""
    # Normalize: collapse newlines that immediately follow a scheme or live inside a URL token.
    # Greedy: any sequence "https://\n<word>" → "https://<word>"; also "<url>\n<word>" inside known hosts.
    out = re.sub(r"(https?://)\s*\n\s*", r"\1", text)
    # Also handle line breaks INSIDE github paths e.g. "github.com/owner/repo\n-ui"
    # Heuristic: collapse a newline + 0-2 word chars when the previous token ends with / or alphanumeric and looks like a URL fragment.
    # Easier approach: greedy collapse of newlines inside any token that looks like a URL.
    def collapse(m: re.Match) -> str:
        return m.group(0).replace("\n", "").replace(" ", "")

    out = re.sub(r"https?://[A-Za-z0-9_./?=&%#:+\-\n ]{4,200}", collapse, out)
    return out


def load_cache() -> dict[str, str]:
    if CACHE.exists():
        return json.loads(CACHE.read_text())
    return {}


def save_cache(cache: dict[str, str]) -> None:
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2))


def resolve_tco(url: str, cache: dict[str, str]) -> str | None:
    if url in cache:
        return cache[url]
    try:
        # -L follow redirects, -s silent, -o /dev/null discard body, -w final URL
        result = subprocess.run(
            [
                "curl", "-sLI",
                "-A", "Mozilla/5.0",
                "--max-time", "10",
                "-o", "/dev/null",
                "-w", "%{url_effective}",
                url,
            ],
            capture_output=True, text=True, timeout=15,
        )
        final = result.stdout.strip()
        if not final or final == url:
            # Try GET instead (some redirectors only redirect on GET)
            result = subprocess.run(
                [
                    "curl", "-sL",
                    "-A", "Mozilla/5.0",
                    "--max-time", "10",
                    "-o", "/dev/null",
                    "-w", "%{url_effective}",
                    url,
                ],
                capture_output=True, text=True, timeout=15,
            )
            final = result.stdout.strip()
        cache[url] = final
        return final
    except Exception as e:
        print(f"  [resolve-fail] {url}: {e}", file=sys.stderr)
        cache[url] = ""
        return None


def main() -> None:
    bookmarks = json.loads(SRC.read_text())
    print(f"Loaded {len(bookmarks)} bookmarks")

    cache = load_cache()
    # Collect all unique t.co URLs first
    all_tco: set[str] = set()
    for bm in bookmarks:
        cleaned = clean_text(bm.get("text", ""))
        bm["_cleaned_text"] = cleaned
        for src in (bm.get("links") or []):
            if src.startswith("https://t.co/"):
                all_tco.add(src)
        for m in TCO_RE.findall(cleaned):
            all_tco.add(m)

    to_resolve = [u for u in all_tco if u not in cache]
    print(f"Need to resolve {len(to_resolve)} t.co URLs (cached: {len(all_tco) - len(to_resolve)})")
    if to_resolve:
        with ThreadPoolExecutor(max_workers=8) as ex:
            futures = {ex.submit(resolve_tco, u, cache): u for u in to_resolve}
            done = 0
            for fut in as_completed(futures):
                done += 1
                if done % 10 == 0:
                    print(f"  resolved {done}/{len(to_resolve)}")
        save_cache(cache)

    # Now annotate each bookmark
    enriched = []
    for bm in bookmarks:
        cleaned = bm.pop("_cleaned_text", "") or clean_text(bm.get("text", ""))
        tco_set = set()
        for src in (bm.get("links") or []):
            if src.startswith("https://t.co/"):
                tco_set.add(src)
        for m in TCO_RE.findall(cleaned):
            tco_set.add(m)

        resolved_pairs = []
        for tco in sorted(tco_set):
            final = cache.get(tco) or tco
            resolved_pairs.append({"tco": tco, "final": final})

        # Extract GitHub repos: from inline links + resolved finals + cleaned text
        gh_repos: set[tuple[str, str]] = set()
        gh_urls: set[str] = set()

        def add_gh(s: str) -> None:
            if not s:
                return
            for m in GH_RE.finditer(s):
                owner, name = m.group(1), m.group(2)
                # Filter out non-repo paths
                if owner.lower() in {"orgs", "marketplace", "topics", "trending", "search", "settings", "about", "pricing", "features"}:
                    return
                if name.lower() in {"followers", "following", "stars", "repositories"}:
                    return
                # Strip trailing punctuation that regex may have grabbed in name
                name = re.sub(r"[).,;]+$", "", name)
                # Strip a trailing .git
                if name.endswith(".git"):
                    name = name[:-4]
                gh_repos.add((owner, name))
                gh_urls.add(f"https://github.com/{owner}/{name}")

        for src in (bm.get("links") or []):
            add_gh(src)
        add_gh(cleaned)
        for r in resolved_pairs:
            add_gh(r["final"])

        bm["cleaned_text"] = cleaned
        bm["resolved_links"] = resolved_pairs
        bm["github_repos"] = sorted({f"https://github.com/{o}/{n}" for o, n in gh_repos})
        enriched.append(bm)

    OUT.write_text(json.dumps(enriched, ensure_ascii=False, indent=2))

    # Summary
    with_gh = [b for b in enriched if b["github_repos"]]
    all_repos = sorted({r for b in enriched for r in b["github_repos"]})
    print(f"\nWrote {OUT}")
    print(f"  tweets with github_repos: {len(with_gh)}/{len(enriched)}")
    print(f"  unique github repos: {len(all_repos)}")


if __name__ == "__main__":
    main()
