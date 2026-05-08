# Inbox · 待分类 / Pending

> 从 Twitter / 小红书 / Slack / 聊天 / 任何地方看到的 GitHub 链接，先粘到这里。
> 处理完移除并合入 `data/manifest.json`，然后跑 `python3 scripts/build-readme.py`。
>
> Lines you paste here are picked up by `scripts/enrich-inbox.sh`, which calls
> `gh api repos/<owner>/<repo>` to fetch description / language / topics / stars.

## Pending

<!-- 格式建议（可选）：
- https://github.com/owner/repo  — 来源：@xxx 的推文 / 小红书 @yyy / 朋友推荐 — 备注：用来做 X
-->

<!-- 404 / 已下线 — 保留可见，便于将来确认 -->
- ~~https://github.com/AkoliteZA/hermes-agent-superpowers-chatgpt~~  — 来源：@GitTrend0x 推文 — ⚠️ 404 unavailable，作者已删除/改名

## Newly starred (auto-appended by sync-stars.sh)

<!-- This section is appended to by scripts/sync-stars.sh when it detects new stars
     that aren't yet in data/manifest.json. Move them up into "Pending" once you
     decide where to file them. -->

## 处理记录 / Sweep history

- `2026-05-08` · Twitter bookmarks 全量 sweep（@Jesse8868 账号下 9 个文件夹，共 217 条 bookmark）：
  - 第一轮（顶层 / All Bookmarks）→ 24 推文 → 44 个 GitHub repo（`data/twitter_finds.json`）
  - 第二轮（9 个文件夹合并）→ 5 推文 → 6 个 GitHub repo（`data/bookmarks_resolved.json`）
  - 累计 star + 入档 49 个 repo，`data/manifest.json` 从 446 → 486
  - 未抓到 GitHub 链接的 119 条主要为：DeepSeek/Claude 演示、推荐文章、视频、小红书内容、纯文字推文
