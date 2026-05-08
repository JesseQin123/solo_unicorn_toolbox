#!/usr/bin/env bash
# Read GitHub URLs from inbox.md and emit a categorization-ready summary line
# per repo (description, language, stars, topics) so you can paste into the
# manifest or use to decide a category.
#
# Usage: scripts/enrich-inbox.sh
#
# Reads:  inbox.md
# Writes: stdout (a per-URL one-line summary)
#
# Requires: gh (logged in), jq.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ ! -f inbox.md ]; then
  echo "inbox.md not found." >&2
  exit 1
fi

# Extract owner/repo from any GitHub URL in inbox.md (dedup)
URLS=$(grep -oE 'https://github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+' inbox.md \
       | sed 's|https://github.com/||; s|\.git$||' \
       | sort -u)

if [ -z "$URLS" ]; then
  echo "No GitHub URLs found in inbox.md." >&2
  exit 0
fi

while IFS= read -r repo; do
  [ -z "$repo" ] && continue
  if ! data=$(gh api "repos/${repo}" 2>/dev/null); then
    echo "  [skip] ${repo} (could not fetch)" >&2
    continue
  fi
  desc=$(echo "$data"     | jq -r '.description // ""')
  lang=$(echo "$data"     | jq -r '.language    // "—"')
  stars=$(echo "$data"    | jq -r '.stargazers_count')
  topics=$(echo "$data"   | jq -r '(.topics // []) | join(",")')
  archived=$(echo "$data" | jq -r '.archived')

  arch_marker=""
  [ "$archived" = "true" ] && arch_marker=" ⚠️archived"

  echo ""
  echo "## ${repo}${arch_marker}"
  echo "- ⭐ ${stars} · ${lang}"
  echo "- topics: ${topics:-—}"
  echo "- desc: ${desc:-—}"
  echo "- manifest entry (paste into data/manifest.json after picking category/subcategory):"
  printf '  "%s": {"category": "FIXME", "subcategory": null, "zh": "%s"}\n' "$repo" "$desc"
done <<< "$URLS"
