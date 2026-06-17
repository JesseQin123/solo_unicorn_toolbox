#!/usr/bin/env python3
"""
Build README.md (English) and README.zh-CN.md (Chinese) from:
  - data/stars.json      (full GitHub starred metadata)
  - data/categories.json (category tree, bilingual labels)
  - data/manifest.json   (per-repo: category, subcategory, zh description)

Re-run this script after editing manifest.json or categories.json.
"""
from __future__ import annotations
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STARS = json.loads((ROOT / "data" / "stars.json").read_text())
CATS = json.loads((ROOT / "data" / "categories.json").read_text())["categories"]
MANIFEST = json.loads((ROOT / "data" / "manifest.json").read_text())

STARS_BY_NAME = {r["full_name"]: r for r in STARS}


def fmt_stars(n: int) -> str:
    if n >= 1000:
        return f"{n/1000:.1f}k".replace(".0k", "k")
    return str(n)


def slug(text: str) -> str:
    """Match GitHub's github-slugger algorithm: lowercase, space→dash, then strip
    invalid chars (emoji, punctuation) WITHOUT collapsing dashes."""
    s = text.strip().lower()
    s = s.replace(" ", "-")
    # Keep: word chars (incl. unicode letters/digits/_), hyphens, CJK ranges.
    # Strip: emoji, punctuation like & / etc.
    s = re.sub(r"[^\w一-鿿㐀-䶿-]", "", s)
    return s


def topics_cell(topics: list[str], max_n: int = 4) -> str:
    if not topics:
        return ""
    chosen = topics[:max_n]
    return " ".join(f"`{t}`" for t in chosen)


def archived_marker(repo: dict) -> str:
    return " ⚠️" if repo.get("archived") else ""


def repo_link(name: str) -> str:
    return f"[{name}](https://github.com/{name})"


def description_for(name: str, lang: str) -> str:
    repo = STARS_BY_NAME[name]
    desc = (repo.get("description") or "").strip()
    if lang == "en":
        return desc or "—"
    # Chinese
    return MANIFEST[name].get("zh") or desc or "—"


def build_table(rows: list[str], lang: str) -> str:
    if lang == "en":
        header = "| Repo | Description | Lang | ⭐ | Topics |\n|---|---|---|---|---|"
    else:
        header = "| 仓库 | 描述 | 语言 | ⭐ | 标签 |\n|---|---|---|---|---|"
    return "\n".join([header] + rows)


def assignments_index() -> dict:
    """Return {cat_id: {sub_id_or_None: [full_name, ...]}}, sorted by stars desc."""
    idx: dict = {}
    for name, m in MANIFEST.items():
        cat = m["category"]
        sub = m.get("subcategory")
        idx.setdefault(cat, {}).setdefault(sub, []).append(name)
    # sort each list by stars desc
    for cat in idx.values():
        for sub_list in cat.values():
            sub_list.sort(
                key=lambda n: STARS_BY_NAME[n].get("stargazers_count", 0),
                reverse=True,
            )
    return idx


def build_readme(lang: str) -> str:
    assert lang in ("en", "zh")
    idx = assignments_index()
    out: list[str] = []

    # Header
    n = len(MANIFEST)
    if lang == "en":
        out.append("# Solo Unicorn Toolbox 🛠️\n")
        out.append(
            f"> A bilingual, weekly-synced catalog of **{n} curated GitHub repos** — "
            "AI agents, coding harnesses, RAG, multimedia, tutorials, and more — "
            "aggregated from GitHub stars, Twitter bookmarks, and 小红书.\n"
        )
        out.append(
            "> 中文版本：[README.zh-CN.md](./README.zh-CN.md) · "
            "Maintenance guide: [CLAUDE.md](./CLAUDE.md)\n"
        )
        out.append("### Why this exists\n")
        out.append(
            "I keep finding the same kinds of tools across different platforms "
            "(GitHub, X/Twitter, 小红书) and losing track of them in scattered "
            "bookmarks. This repo is the single index I actually come back to.\n"
        )
        out.append("### What's inside\n")
        out.append(
            f"- **{n} repositories** across 12 categories — see the table of contents below\n"
            "- Twitter bookmark sweeps — GitHub URLs hand-picked from threads I save on X\n"
            "- Weekly auto-sync via [`.github/workflows/sync-stars.yml`](.github/workflows/sync-stars.yml)\n"
        )
        out.append("### Smart Toolbox Navigator\n")
        out.append(
            "The repo also includes a lightweight `solo` CLI that turns the catalog "
            "into a smarter toolbox: usage cards, intent-based recommendations, "
            "reverse idea generation, cost-aware browsing, and recommendation evals.\n"
        )
        out.append(
            "```bash\n"
            "bun run solo card ALwrity/ALwrity\n"
            "bun run solo find \"I want to build an AI content growth system\"\n"
            "bun run solo ideas ALwrity/ALwrity\n"
            "bun run solo browse --time 15min --difficulty easy --kind skill\n"
            "bun run solo eval\n"
            "bun run solo cards coverage\n"
            "```\n"
        )
        out.append(
            "The navigator is intentionally not an auto-installer. It helps you decide "
            "what to try, why it fits, the first 15-minute validation task, and what "
            "ideas a tool can unlock. Usage cards now cover the full manifest/starred "
            "catalog, while low-evidence tools stay marked as candidate or reference-only.\n"
        )
        out.append("### How to read each row\n")
        out.append(
            "`Repo · Description · Language · ⭐ stars · Topic tags`. "
            "Entries within each (sub)category are sorted by stars descending. "
            "⚠️ marks repos archived by their authors.\n"
        )
        out.append("### How to add an entry\n")
        out.append(
            "Paste a GitHub URL into [`inbox.md`](./inbox.md) → run "
            "`scripts/enrich-inbox.sh` → assign a category in "
            "[`data/manifest.json`](./data/manifest.json) → run "
            "`python3 scripts/build-readme.py`. The full workflow is in "
            "[`CLAUDE.md`](./CLAUDE.md).\n"
        )
        out.append("---\n")
        out.append("## Table of Contents\n")
    else:
        out.append("# Solo Unicorn Toolbox 🛠️\n")
        out.append(
            f"> 一份双语整理的 **{n} 个 GitHub 项目** 目录——AI agents、coding harnesses、"
            "RAG、多媒体、教程等等——汇总自 GitHub stars、Twitter bookmarks 和小红书收藏。\n"
        )
        out.append(
            "> English: [README.md](./README.md) · "
            "维护说明：[CLAUDE.md](./CLAUDE.md)\n"
        )
        out.append("### 为什么做这个\n")
        out.append(
            "同一类工具老是散落在 GitHub、X/Twitter、小红书等不同平台的收藏里，"
            "想找的时候永远翻不到。这个 repo 就是我会真的回头查的那个索引。\n"
        )
        out.append("### 里面有什么\n")
        out.append(
            f"- **共 {n} 个项目**，分布在 12 个大类——见下方目录\n"
            "- Twitter bookmarks 整理——从我在 X 收藏的推文线程里手动挑出的 GitHub URL\n"
            "- 每周自动同步：[`.github/workflows/sync-stars.yml`](.github/workflows/sync-stars.yml)\n"
        )
        out.append("### 智能工具箱导航器\n")
        out.append(
            "这个 repo 现在也包含一个轻量 `solo` CLI，把收藏目录变成更聪明的工具箱："
            "usage card、按 idea 推荐工具组合、按工具反推 idea、按上手成本筛选，以及推荐质量评估。\n"
        )
        out.append(
            "```bash\n"
            "bun run solo card ALwrity/ALwrity\n"
            "bun run solo find \"我想做一个 AI 内容增长系统\"\n"
            "bun run solo ideas ALwrity/ALwrity\n"
            "bun run solo browse --time 15min --difficulty easy --kind skill\n"
            "bun run solo eval\n"
            "bun run solo cards coverage\n"
            "```\n"
        )
        out.append(
            "Navigator 不做外部 repo 自动安装；它的目标是告诉你该试什么、为什么适合、"
            "15 分钟怎么验证，以及这个工具能反向启发哪些 idea。usage cards 现在覆盖完整 "
            "manifest/starred catalog；证据较少的工具会保持 candidate 或 reference-only 状态。\n"
        )
        out.append("### 每行表格怎么看\n")
        out.append(
            "`仓库 · 描述 · 语言 · ⭐ Star 数 · Topic 标签`。"
            "每个（子）分类内部按 star 数倒序。"
            "⚠️ 标记的是已被原作者 archive 的项目。\n"
        )
        out.append("### 怎么加新条目\n")
        out.append(
            "把 GitHub URL 粘到 [`inbox.md`](./inbox.md) → 跑 "
            "`scripts/enrich-inbox.sh` → 在 "
            "[`data/manifest.json`](./data/manifest.json) 里写分类 → 跑 "
            "`python3 scripts/build-readme.py`。完整流程见 "
            "[`CLAUDE.md`](./CLAUDE.md)。\n"
        )
        out.append("---\n")
        out.append("## 目录\n")

    # TOC
    for cat in CATS:
        cat_count = sum(len(v) for v in idx.get(cat["id"], {}).values())
        if cat_count == 0:
            continue
        label = cat["en"] if lang == "en" else cat["zh"]
        anchor = slug(f"{cat['emoji']} {label}")
        out.append(f"- [{cat['emoji']} {label} ({cat_count})](#{anchor})")
    out.append("")

    out.append("---\n")

    # Sections
    for cat in CATS:
        sub_index = idx.get(cat["id"], {})
        cat_count = sum(len(v) for v in sub_index.values())
        if cat_count == 0:
            continue
        label = cat["en"] if lang == "en" else cat["zh"]
        out.append(f"## {cat['emoji']} {label}\n")

        # If subcategories defined, render each as ###
        sub_defs = cat.get("subcategories") or []
        sub_id_to_def = {s["id"]: s for s in sub_defs}

        # Order: defined subcats first, then None ("uncategorized in section")
        ordered_sub_ids = [s["id"] for s in sub_defs if s["id"] in sub_index]
        if None in sub_index:
            ordered_sub_ids.append(None)

        for sub_id in ordered_sub_ids:
            names = sub_index[sub_id]
            if not names:
                continue
            if sub_id is not None:
                sdef = sub_id_to_def[sub_id]
                slabel = sdef["en"] if lang == "en" else sdef["zh"]
                out.append(f"### {slabel} ({len(names)})\n")
            elif sub_defs:
                # Uncategorized within a section that has subcats
                slabel = "Other" if lang == "en" else "其他"
                out.append(f"### {slabel} ({len(names)})\n")
            # Build rows
            rows = []
            for name in names:
                repo = STARS_BY_NAME[name]
                lang_field = repo.get("language") or "—"
                star = fmt_stars(repo.get("stargazers_count", 0))
                topics = topics_cell(repo.get("topics") or [])
                desc = description_for(name, lang)
                # Escape pipes inside description
                desc = desc.replace("|", "\\|")
                marker = archived_marker(repo)
                rows.append(
                    f"| {repo_link(name)}{marker} | {desc} | {lang_field} | {star} | {topics} |"
                )
            out.append(build_table(rows, lang))
            out.append("")

        out.append("")

    # Footer
    out.append("---\n")
    if lang == "en":
        out.append("**Legend**: ⚠️ = repo is archived. Stars are point-in-time. Topic tags are from GitHub.\n")
        out.append("**Maintenance**: Run `scripts/sync-stars.sh` to pull new stars into `inbox.md`. Edit `data/manifest.json` to (re)classify or rewrite descriptions, then run `python3 scripts/build-readme.py`.\n")
    else:
        out.append("**图例**：⚠️ = 项目已被原作者 archive。Star 数为某时点快照。Topic 标签来自 GitHub。\n")
        out.append("**维护**：跑 `scripts/sync-stars.sh` 把新增 star 拉进 `inbox.md`；编辑 `data/manifest.json` 调整分类或重写描述，再跑 `python3 scripts/build-readme.py`。\n")

    return "\n".join(out)


def main() -> None:
    en = build_readme("en")
    zh = build_readme("zh")
    (ROOT / "README.md").write_text(en)
    (ROOT / "README.zh-CN.md").write_text(zh)
    print(f"Wrote README.md ({len(en):,} chars)")
    print(f"Wrote README.zh-CN.md ({len(zh):,} chars)")
    # Coverage stats per category
    idx = assignments_index()
    print("\nCoverage:")
    for cat in CATS:
        total = sum(len(v) for v in idx.get(cat["id"], {}).values())
        print(f"  {cat['emoji']} {cat['en']:48s} {total:>4d}")
    print(f"  {'TOTAL':>50s}  {len(MANIFEST):>4d}")


if __name__ == "__main__":
    main()
