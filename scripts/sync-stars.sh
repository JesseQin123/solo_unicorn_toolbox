#!/usr/bin/env bash
# Sync newly starred repos from GitHub into inbox.md (and refresh data/stars.json).
#
# Usage: scripts/sync-stars.sh
#
# - Re-fetches all starred repos via `gh api user/starred --paginate`
# - Diffs against current data/stars.json
# - Appends newly starred repos (not yet in data/manifest.json) under
#   "## Newly starred" in inbox.md
# - Updates data/stars.json in place
#
# Requires: gh (logged in), jq.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mkdir -p data
TMP_RAW="$(mktemp)"
TMP_SLIM="$(mktemp)"
trap 'rm -f "$TMP_RAW" "$TMP_SLIM"' EXIT

echo "Fetching starred repos from GitHub..."
gh api user/starred --paginate -H "Accept: application/vnd.github.star+json" > "$TMP_RAW"

jq '[.[] | {
  full_name: .repo.full_name,
  html_url: .repo.html_url,
  description: .repo.description,
  language: .repo.language,
  topics: .repo.topics,
  stargazers_count: .repo.stargazers_count,
  homepage: .repo.homepage,
  archived: .repo.archived,
  starred_at: .starred_at,
  pushed_at: .repo.pushed_at
}]' "$TMP_RAW" > "$TMP_SLIM"

NEW_COUNT=$(jq 'length' "$TMP_SLIM")
OLD_COUNT=$(jq 'length' data/stars.json 2>/dev/null || echo 0)
echo "Remote: $NEW_COUNT  ·  Local cache: $OLD_COUNT"

# Compute newly starred (in remote, not in manifest)
jq -r '.[].full_name' "$TMP_SLIM" | sort -u > /tmp/.remote-stars.txt
jq -r 'keys[]' data/manifest.json | sort -u > /tmp/.manifest-keys.txt
NEW_REPOS=$(comm -23 /tmp/.remote-stars.txt /tmp/.manifest-keys.txt)

if [ -z "$NEW_REPOS" ]; then
  echo "No new repos to inbox."
else
  echo ""
  echo "New repos to triage (not yet in manifest):"
  echo "$NEW_REPOS" | sed 's/^/  /'
  echo ""

  TS=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  {
    echo ""
    echo "<!-- synced $TS -->"
    while IFS= read -r repo; do
      [ -z "$repo" ] && continue
      desc=$(jq -r --arg r "$repo" '.[] | select(.full_name == $r) | .description // ""' "$TMP_SLIM")
      lang=$(jq -r --arg r "$repo" '.[] | select(.full_name == $r) | .language // "—"' "$TMP_SLIM")
      stars=$(jq -r --arg r "$repo" '.[] | select(.full_name == $r) | .stargazers_count' "$TMP_SLIM")
      echo "- https://github.com/${repo}  — ⭐ ${stars} · ${lang} · ${desc}"
    done <<< "$NEW_REPOS"
  } >> inbox.md
  echo "Appended $(echo "$NEW_REPOS" | grep -c .) entry/entries to inbox.md"
fi

# Refresh local cache
mv "$TMP_SLIM" data/stars.json
echo "Updated data/stars.json"
