#!/usr/bin/env python3
"""Consolidate per-folder bookmark JSONs + legacy bookmarks.json into a single canonical bookmarks.json.

Normalizes schema across:
  - Old format: {id, author, name, text, likes, retweets, bookmarks, created_at, url}
  - New format: {id, handle, time, authorText, text, links, tco_links, github_inline, url}

Output: data/bookmarks.json (deduped by id, sorted by id desc)
Cleans up: data/bookmarks_*.json (per-folder files) by moving to data/_archive/
"""

from __future__ import annotations

import json
import shutil
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
CANONICAL = DATA / "bookmarks.json"
ARCHIVE = DATA / "_archive"


def normalize(rec: dict) -> dict:
    """Return canonical-shape record from either schema."""
    out = {
        "id": rec["id"],
        "handle": rec.get("handle") or rec.get("author") or "",
        "name": rec.get("name") or "",
        "time": rec.get("time") or rec.get("created_at") or "",
        "text": rec.get("text") or "",
        "url": rec.get("url") or "",
        "likes": rec.get("likes"),
        "retweets": rec.get("retweets"),
        "bookmarks": rec.get("bookmarks"),
        "links": rec.get("links") or [],
    }
    return {k: v for k, v in out.items() if v not in (None, "", [])}


def main() -> None:
    sources = sorted(DATA.glob("bookmarks_*.json"))
    # Exclude resolved file (it's a derived view, not a raw sweep)
    sources = [p for p in sources if p.name not in {"bookmarks_resolved.json", "bookmarks_all.json"}]

    merged: dict[str, dict] = {}

    if CANONICAL.exists():
        for r in json.loads(CANONICAL.read_text()):
            merged[r["id"]] = normalize(r)
        print(f"[load] canonical bookmarks.json: {len(merged)} entries")

    for src in sources:
        try:
            data = json.loads(src.read_text())
        except Exception as e:
            print(f"  [skip] {src.name}: {e}")
            continue
        added = 0
        for r in data:
            if not isinstance(r, dict) or "id" not in r:
                continue
            n = normalize(r)
            if n["id"] not in merged:
                added += 1
            else:
                # Prefer richer record (more fields)
                if len(n) > len(merged[n["id"]]):
                    merged[n["id"]] = n
                    continue
            merged[n["id"]] = n
        print(f"  [+] {src.name}: +{added} (total {len(merged)})")

    # sort by id desc (most recent first)
    out = sorted(merged.values(), key=lambda r: int(r["id"]), reverse=True)
    CANONICAL.write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"[write] {CANONICAL}: {len(out)} entries")

    # Archive per-folder files
    ARCHIVE.mkdir(exist_ok=True)
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    for src in sources:
        dest = ARCHIVE / f"{src.stem}.{ts}{src.suffix}"
        shutil.move(str(src), str(dest))
        print(f"[archive] {src.name} -> {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
