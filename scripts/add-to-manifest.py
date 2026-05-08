#!/usr/bin/env python3
"""Add classified entries to data/manifest.json.

Reads a list of (full_name, category, subcategory_or_null, zh) records from
a JSON file passed as argv[1]. Idempotent: skips entries already in manifest
unless --overwrite is passed.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "data" / "manifest.json"
CATEGORIES = ROOT / "data" / "categories.json"


def main() -> None:
    if len(sys.argv) < 2:
        print("usage: add-to-manifest.py <records.json>", file=sys.stderr)
        sys.exit(2)

    records = json.loads(Path(sys.argv[1]).read_text())
    overwrite = "--overwrite" in sys.argv

    cats = {c["id"]: {s["id"] for s in (c.get("subcategories") or [])} for c in json.loads(CATEGORIES.read_text())["categories"]}

    manifest = json.loads(MANIFEST.read_text())

    added, updated, skipped, invalid = 0, 0, 0, []
    for r in records:
        full = r["full_name"]
        cat = r["category"]
        sub = r.get("subcategory")
        zh = r.get("zh", "")

        if cat not in cats:
            invalid.append((full, f"unknown category: {cat}"))
            continue
        if sub and sub not in cats[cat]:
            invalid.append((full, f"unknown subcategory: {cat}/{sub}"))
            continue

        if full in manifest and not overwrite:
            skipped += 1
            continue

        existed = full in manifest
        manifest[full] = {"category": cat, "subcategory": sub, "zh": zh}
        if existed:
            updated += 1
        else:
            added += 1

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True))

    print(f"added: {added}, updated: {updated}, skipped: {skipped}, invalid: {len(invalid)}")
    for n, why in invalid:
        print(f"  ! {n}: {why}")


if __name__ == "__main__":
    main()
