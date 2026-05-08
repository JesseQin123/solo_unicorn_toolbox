#!/usr/bin/env python3
"""Sweep Twitter bookmark folders via opencli browser.

Usage: python3 scripts/sweep-bookmarks.py <folder_id> <out_path>

Navigates to /i/bookmarks/<folder_id>, scrolls until no new tweets load,
extracts {id, handle, time, author_text, text, links} for every article,
writes the merged dict to out_path.

Idempotent: re-running merges into existing out_path.
"""

from __future__ import annotations

import json
import shlex
import subprocess
import sys
import time
from pathlib import Path

INIT_AND_HARVEST_JS = r"""
(() => {
  if (!window.__bm) window.__bm = {};
  const arts = document.querySelectorAll('article');
  let added = 0;
  arts.forEach(a => {
    const linkEl = a.querySelector('a[href*="/status/"]');
    if (!linkEl) return;
    const href = linkEl.getAttribute('href');
    const m = href.match(/\/([^/]+)\/status\/(\d+)/);
    if (!m) return;
    const id = m[2];
    if (window.__bm[id]) return;
    const textEl = a.querySelector('[data-testid="tweetText"]');
    const text = textEl ? textEl.innerText : '';
    const authorEl = a.querySelector('[data-testid="User-Name"]');
    const authorText = authorEl ? authorEl.innerText.replace(/\n+/g,' | ').slice(0,300) : '';
    const timeEl = a.querySelector('time');
    const t = timeEl ? timeEl.getAttribute('datetime') : '';
    const links = Array.from(a.querySelectorAll('a[href]'))
      .map(el => el.href)
      .filter(h => h && (h.startsWith('http')))
      .filter(h => !h.includes('/status/') && !h.includes('/i/web/status/'));
    const handle = m[1];
    window.__bm[id] = { id, handle, time: t, authorText, text, links, url: `https://x.com/${handle}/status/${id}` };
    added++;
  });
  return JSON.stringify({ total: Object.keys(window.__bm).length, added, scrollY: window.scrollY, scrollH: document.documentElement.scrollHeight });
})()
"""

DUMP_JS = r"""
(() => JSON.stringify(Object.values(window.__bm || {})))()
"""

RESET_JS = r"""
(() => { window.__bm = {}; return JSON.stringify({reset:true}); })()
"""


def run(cmd: list[str]) -> str:
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    if res.returncode != 0:
        print(f"[err] {' '.join(shlex.quote(c) for c in cmd)}", file=sys.stderr)
        print(res.stderr, file=sys.stderr)
    return res.stdout.strip()


def opencli_eval(js: str) -> dict | list:
    out = run(["opencli", "browser", "eval", js])
    # opencli prints raw string for string results, JSON for objects.
    # Our JS always JSON.stringify's, so result is a string-encoded JSON.
    # opencli wraps that in a JSON string itself. Try parse twice.
    try:
        first = json.loads(out)
        if isinstance(first, str):
            return json.loads(first)
        return first
    except Exception:
        # Sometimes opencli outputs the raw JSON string without wrapping.
        try:
            return json.loads(out)
        except Exception:
            print(f"[parse-fail] {out[:500]}", file=sys.stderr)
            raise


def sweep_folder(folder_id: str, out_path: Path) -> None:
    url = f"https://x.com/i/bookmarks/{folder_id}"
    print(f"[nav] {url}")
    run(["opencli", "browser", "open", url])
    time.sleep(3)

    # reset accumulator
    opencli_eval(RESET_JS)

    last_total = -1
    stagnant = 0
    iteration = 0
    while True:
        iteration += 1
        info = opencli_eval(INIT_AND_HARVEST_JS)
        total = info["total"]
        print(f"  iter {iteration}: total={total} added={info['added']} scrollY={info['scrollY']} scrollH={info['scrollH']}")
        if total == last_total:
            stagnant += 1
        else:
            stagnant = 0
        last_total = total

        if stagnant >= 4:
            print(f"  [done] no new tweets after {stagnant} stagnant rounds")
            break
        if iteration > 60:
            print(f"  [stop] iteration cap reached at {total} tweets")
            break

        # scroll the page; bookmarks page uses window scroll
        run(["opencli", "browser", "scroll", "down", "--amount", "1500"])
        time.sleep(1.5 + min(stagnant * 0.5, 2.0))

    # dump
    raw = run(["opencli", "browser", "eval", DUMP_JS])
    try:
        outer = json.loads(raw)
        items = json.loads(outer) if isinstance(outer, str) else outer
    except Exception:
        items = json.loads(raw)
    print(f"[dump] {len(items)} tweets")

    # merge with existing
    merged: dict[str, dict] = {}
    if out_path.exists():
        prev = json.loads(out_path.read_text())
        if isinstance(prev, list):
            for r in prev:
                merged[r["id"]] = r
    for r in items:
        merged[r["id"]] = r

    out_path.write_text(json.dumps(list(merged.values()), ensure_ascii=False, indent=2))
    print(f"[write] {len(merged)} total in {out_path}")


def main() -> None:
    if len(sys.argv) < 3:
        print("usage: sweep-bookmarks.py <folder_id> <out_path>", file=sys.stderr)
        sys.exit(2)
    folder_id = sys.argv[1]
    out_path = Path(sys.argv[2])
    sweep_folder(folder_id, out_path)


if __name__ == "__main__":
    main()
