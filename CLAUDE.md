# CLAUDE.md — Maintenance Guide for Future Claude Code Sessions

## What this repo is

A personal aggregator of GitHub tools, tutorials, and resources collected
across **GitHub stars, Twitter bookmarks, 小红书 (Xiaohongshu) collections** and
other channels. The goal is one place to look up "where did I save that tool?"

The user (`JesseQin123` on GitHub) curates 12 top-level categories. The catalog
is 500+ repos and now has usage cards covering the full manifest/starred set.

## Layout

```
solo_unicorn_toolbox/
├── README.md              # English catalog (auto-generated)
├── README.zh-CN.md        # 中文 catalog (auto-generated)
├── inbox.md               # Staging area for new URLs from external sources
├── data/
│   ├── stars.json         # Cached metadata from gh api user/starred (slimmed)
│   ├── categories.json    # Bilingual category tree (12 cats + subcategories)
│   ├── manifest.json      # Per-repo: {category, subcategory, zh description}
│   ├── usage_cards.json   # Smart toolbox cards: what a tool is, how to try it
│   ├── use_cases.json     # Standard intent/use-case taxonomy for recommendations
│   └── evaluation_cases.json # Fixed cases for recommendation quality checks
├── src/solo/
│   ├── navigator.ts       # Catalog loading, recommendation, ideas, browse, eval logic
│   ├── evaluator.ts       # Card/catalog quality gates and coverage reporting
│   ├── cardGeneration.ts  # Audit, draft, validate, and promote usage cards
│   └── cli.ts             # `bun run solo ...` command-line interface
├── tests/
│   ├── solo-navigator.test.ts
│   ├── solo-evaluator.test.ts
│   └── solo-card-generation.test.ts
├── scripts/
│   ├── build-readme.py    # Generates both READMEs from data/
│   ├── sync-stars.sh      # Pulls latest stars from GitHub → diff → inbox.md
│   └── enrich-inbox.sh    # Fetches metadata for URLs in inbox.md
├── CLAUDE.md              # This file
└── LICENSE
```

## Core workflows

### 0. Use the smart toolbox navigator

The generated README is still the full catalog, but the `solo` CLI is the
primary way to *use* the toolbox:

```bash
bun run solo card ALwrity/ALwrity
bun run solo find "我想做一个 AI 内容增长系统"
bun run solo ideas ALwrity/ALwrity
bun run solo browse --time 15min --difficulty easy --kind skill
bun run solo eval
bun run solo eval --quality
bun run solo cards coverage
```

`usage_cards.json` covers the full manifest/starred catalog. High-evidence cards
can be `verified`; generated or lower-evidence cards should stay `candidate` or
`reference-only`. Every card should answer: what it is, best use cases, not-for
cases, first 15-minute test, inputs/outputs, related tools, idea prompts, and
minimum demo when applicable.

### 0.1. Maintain usage-card coverage

```bash
bun run solo cards coverage
bun run solo cards missing --limit 50
bun run solo cards draft --limit 100 --out data/usage_card_drafts.json
bun run solo cards validate --draft data/usage_card_drafts.json
bun run solo cards promote --draft data/usage_card_drafts.json --accepted-only
bun run solo eval --quality
```

For sparse metadata, the generator creates conservative candidate/reference-only
cards instead of pretending a tool is verified. Use `--accepted-only` for normal
automation. Use promote without `--accepted-only` only when validation reports no
blockers and you intentionally want to include low-evidence candidate cards.

### 1. Add new entries (the main ongoing flow)

1. Paste GitHub URLs into `inbox.md` (one per line, optional notes after `—`).
   Sources can be Twitter bookmarks, 小红书 collections, Slack messages, etc.
2. Run `scripts/enrich-inbox.sh` to fetch description/lang/topics/stars per URL.
3. For each, pick a `category` and `subcategory` from `data/categories.json`,
   write a short Chinese description, and add an entry to `data/manifest.json`.
4. Run `python3 scripts/build-readme.py` to regenerate both READMEs.
5. Run the usage-card coverage flow above so new repos get cards.
6. Remove processed entries from `inbox.md`.

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

### 5. Add or improve a usage card

Edit `data/usage_cards.json`, then run:

```bash
bun test tests/solo-navigator.test.ts
bun run solo eval
```

Only add cards for tools that are worth helping users try. Do not auto-generate
cards for all repos unless the card says something specific and actionable.

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
- **Usage cards are not installers**: they guide discovery and first tests.
  They should not promise that unrelated repos are already integrated.
- **Recommendation results should stay compact**: `solo find` returns at most
  7 tools by default to avoid recreating the original information overload.

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
