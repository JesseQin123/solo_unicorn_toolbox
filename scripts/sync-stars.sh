#!/usr/bin/env bash
# Sync newly starred repos from GitHub into inbox.md (and refresh data/stars.json).
#
# Usage:
#   scripts/sync-stars.sh                    # authenticated account
#   scripts/sync-stars.sh <github-username>  # public stars for a user
#
# - Re-fetches all starred repos via `gh api user/starred --paginate` or
#   `gh api users/<github-username>/starred --paginate`
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
TMP_OLD="$(mktemp)"
TMP_MERGED="$(mktemp)"
TMP_REMOTE_NAMES="$(mktemp)"
TMP_MANIFEST_NAMES="$(mktemp)"
trap 'rm -f "$TMP_RAW" "$TMP_SLIM" "$TMP_OLD" "$TMP_MERGED" "$TMP_REMOTE_NAMES" "$TMP_MANIFEST_NAMES"' EXIT

STAR_USER="${1:-${GITHUB_STAR_USER:-}}"
if [ -n "$STAR_USER" ]; then
  API_PATH="users/${STAR_USER}/starred"
  echo "Fetching public starred repos for ${STAR_USER} from GitHub..."
else
  API_PATH="user/starred"
  echo "Fetching starred repos for the authenticated GitHub account..."
fi

gh api "${API_PATH}?per_page=100" --paginate -H "Accept: application/vnd.github.star+json" > "$TMP_RAW"

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

REMOTE_COUNT=$(jq 'length' "$TMP_SLIM")
OLD_COUNT=$(jq 'length' data/stars.json 2>/dev/null || echo 0)
echo "Remote: $REMOTE_COUNT  ·  Local cache: $OLD_COUNT"

# Compute newly starred (in remote, not in manifest)
jq -r '.[].full_name' "$TMP_SLIM" | sort -u > "$TMP_REMOTE_NAMES"
jq -r 'keys[]' data/manifest.json | sort -u > "$TMP_MANIFEST_NAMES"
NEW_REPOS=$(comm -23 "$TMP_REMOTE_NAMES" "$TMP_MANIFEST_NAMES")

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

# Refresh local cache. Keep existing metadata for repos sourced elsewhere, while
# letting freshly fetched GitHub metadata replace stale rows for overlapping repos.
if [ -f data/stars.json ]; then
  cp data/stars.json "$TMP_OLD"
else
  echo "[]" > "$TMP_OLD"
fi

jq -s '
  .[0] as $old
  | .[1] as $new
  | (($old | map({(.full_name): .}) | add) // {}) as $old_by_name
  | (($new | map({(.full_name): .}) | add) // {}) as $new_by_name
  | ($old_by_name + $new_by_name)
  | [.[]]
  | sort_by(.full_name | ascii_downcase)
' "$TMP_OLD" "$TMP_SLIM" > "$TMP_MERGED"

mv "$TMP_MERGED" data/stars.json
MERGED_COUNT=$(jq 'length' data/stars.json)
echo "Updated data/stars.json (${MERGED_COUNT} repos)"
