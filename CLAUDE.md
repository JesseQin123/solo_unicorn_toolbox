# CLAUDE.md — Maintenance Guide for Future Claude Code Sessions

## What this repo is

A personal aggregator of GitHub tools, tutorials, and resources collected
across **GitHub stars, Twitter bookmarks, 小红书 (Xiaohongshu) collections** and
other channels. The goal is one place to look up "where did I save that tool?"

The user (`JesseQin123` on GitHub) curates 12 top-level categories. As of v1
the catalog is 211 repos sourced entirely from `gh api user/starred`.

## Layout

```
solo_unicorn_toolbox/
├── README.md              # English catalog (auto-generated)
├── README.zh-CN.md        # 中文 catalog (auto-generated)
├── inbox.md               # Staging area for new URLs from external sources
├── data/
│   ├── stars.json         # Cached metadata from gh api user/starred (slimmed)
│   ├── categories.json    # Bilingual category tree (12 cats + subcategories)
│   └── manifest.json      # Per-repo: {category, subcategory, zh description}
├── scripts/
│   ├── build-readme.py    # Generates both READMEs from data/
│   ├── sync-stars.sh      # Pulls latest stars from GitHub → diff → inbox.md
│   └── enrich-inbox.sh    # Fetches metadata for URLs in inbox.md
├── CLAUDE.md              # This file
└── LICENSE
```

## Core workflows

### 1. Add new entries (the main ongoing flow)

1. Paste GitHub URLs into `inbox.md` (one per line, optional notes after `—`).
   Sources can be Twitter bookmarks, 小红书 collections, Slack messages, etc.
2. Run `scripts/enrich-inbox.sh` to fetch description/lang/topics/stars per URL.
3. For each, pick a `category` and `subcategory` from `data/categories.json`,
   write a short Chinese description, and add an entry to `data/manifest.json`.
4. Run `python3 scripts/build-readme.py` to regenerate both READMEs.
5. Remove processed entries from `inbox.md`.

### 2. Sync newly starred GitHub repos

```bash
scripts/sync-stars.sh                 # authenticated user
scripts/sync-stars.sh <username>      # public stars for any user
```

Refreshes `data/stars.json` and appends repos newly starred since the last
sync to `inbox.md` under "## Newly starred". Then follow the flow above.

This is also automated: `.github/workflows/sync-stars.yml` runs every Monday
at 09:00 UTC (and on manual `workflow_dispatch`), syncs both `JesseQin123` and
`jesseqin-kamiwaza`, and commits any changes back to `main`. Switch the cron
to `'0 9 * * *'` for daily. Uses `GITHUB_TOKEN` for public stars; for private
stars, add a `STARS_PAT` secret with `read:user` scope.

### 3. Re-classify or rewrite a description

Edit `data/manifest.json` directly, then re-run `python3 scripts/build-readme.py`.

### 4. Add or rename a category / subcategory

Edit `data/categories.json` (the structure is bilingual). Then update affected
entries in `data/manifest.json` to use the new id. Re-run the build script.

## Conventions

- **Single classification**: each repo lives in exactly one `(category, subcategory)`
  pair. Use the project's primary purpose. GitHub topics in the table act as
  cross-reference tags.
- **Bilingual descriptions**: original `description` from GitHub is shown in the
  English README; the Chinese version of `manifest.json[*].zh` is shown in the
  Chinese README. Keep tech terms (Claude Code, RAG, Next.js, MCP, etc.) in
  English even inside Chinese sentences to avoid ambiguity.
- **Sorting**: entries within a (sub)category are sorted by stargazers
  descending — handled automatically by `build-readme.py`.
- **Archived repos**: marked ⚠️ next to the repo link.

## Coverage check

```bash
jq -r '.[].full_name' data/stars.json | sort > /tmp/all.txt
jq -r 'keys[]' data/manifest.json | sort > /tmp/manifest.txt
diff /tmp/all.txt /tmp/manifest.txt   # empty = full coverage
```

## Future (v2) — not yet implemented

- Twitter bookmarks auto-fetch (could integrate `ythx-101/x-tweet-fetcher`)
- Static site / web view (search, filter by topic/lang)
- Personal rating + status ("已用过 / 想试试 / 仅收藏")
- Activity stats ("本月新增", "已 archived 但仍 listed")
