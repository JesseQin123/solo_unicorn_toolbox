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


## Newly starred (overflow)

<!-- Top 20 were auto-classified. These 20 need manual review next run. -->
- https://github.com/vogtsw/boss-skills  — ⭐ 199 · Python · 老板.skills. 把老板炼入token，把生产力的解放留给自己。Alchemize your boss into a token, and keep the
- https://github.com/AxDSan/mnemosyne  — ⭐ 197 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents
- https://github.com/alchaincyf/naval-skill  — ⭐ 146 ·  · 纳瓦尔.skill — Naval Ravikant的认知操作系统。由女娲.skill生成。
- https://github.com/alchaincyf/feynman-skill  — ⭐ 142 ·  · 费曼.skill — 理查德·费曼的认知操作系统。由女娲.skill生成。
- https://github.com/alchaincyf/karpathy-skill  — ⭐ 127 ·  · Andrej Karpathy的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill
- https://github.com/alchaincyf/zhang-yiming-skill  — ⭐ 99 ·  · 张一鸣的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill
- https://github.com/alchaincyf/taleb-skill  — ⭐ 76 ·  · 塔勒布.skill — Nassim Taleb的认知操作系统。由女娲.skill生成。
- https://github.com/YIKUAIBANZI/forge-skill  — ⭐ 72 · Python · 人格蒸馏引擎 · 蒸馏自己看清自己，蒸馏亲友留住余温与回声 · Claude Code Skill
- https://github.com/YourongZhou/chat_with_me  — ⭐ 57 · Python · 
- https://github.com/alchaincyf/paul-graham-skill  — ⭐ 53 ·  · Paul Graham的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill
- https://github.com/Abruptive/Ankh.md  — ⭐ 51 · Shell · A mysterious multi-agent swarm framework summoned by TAW Agent from 1971 to help
- https://github.com/Kori-x/hermes-dashboard  — ⭐ 47 · TypeScript · Dashboard for monitoring and managing Hermes agent sessions, tool usage, and act
- https://github.com/alchaincyf/mrbeast-skill  — ⭐ 42 · Python · MrBeast的内容创造操作系统。不是语录合集，是可运行的内容方法论。Made with 女娲.skill
- https://github.com/alchaincyf/ilya-sutskever-skill  — ⭐ 32 ·  · Ilya Sutskever的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill
- https://github.com/jtshow/Medusa  — ⭐ 22 · Rust · Medusa Skill Framework for AI Agents.
- https://github.com/xiaohei-info/oh-my-agent-skills  — ⭐ 14 · Python · Open-source bundle of agent methodologies and Hermes-compatible skills.
- https://github.com/GUNAASHRINM/Hermes-Agent-Wizard  — ⭐ 11 ·  · 🚀 Hermes Agent GUI Launcher 2026 – Windows & macOS 1-Click Setup Tool 🖱️
- https://github.com/xujfcn/crazyrouter-hermes  — ⭐ 5 · Shell · Use Hermes Agent (NousResearch) with Crazyrouter — 600+ AI models, 30-50% cheape
- https://github.com/wysie/drawthings-grpc-hermes-plugin  — ⭐ 4 · Python · Hermes Agent plugin for local Draw Things image generation via gRPC
- https://github.com/AlexanderWhitestone/hermes-dashboard-sovereign-ops  — ⭐ 3 · JavaScript · Sovereign Ops dashboard plugin + theme for Hermes Agent

## Auto-classified 2026-05-10

- https://github.com/KKKKhazix/khazix-skills  → skills-mcp/null

## Auto-classified 2026-05-08

- https://github.com/alchaincyf/nuwa-skill  → skills-mcp/N/A
- https://github.com/alchaincyf/zhangxuefeng-skill  → skills-mcp/N/A
- https://github.com/therealXiaomanChu/ex-skill  → skills-mcp/N/A
- https://github.com/1weiho/open-slide  → multimedia/documents-slides
- https://github.com/notdog1998/yourself-skill  → skills-mcp/N/A
- https://github.com/leilei926524-tech/anti-distill  → skills-mcp/N/A
- https://github.com/jinchenma94/bazi-skill  → skills-mcp/N/A
- https://github.com/DestinyLinker/MingLi-Bench  → misc/personal-projects
- https://github.com/yifanfeng97/Hyper-Extract  → rag-kg-memory/N/A
- https://github.com/alchaincyf/steve-jobs-skill  → skills-mcp/N/A
- https://github.com/alchaincyf/x-mentor-skill  → skills-mcp/N/A
- https://github.com/yaojingang/yao-open-skills  → skills-mcp/N/A
- https://github.com/FANzR-arch/Numerologist_skills  → misc/personal-projects
- https://github.com/kitfunso/hippo-memory  → rag-kg-memory/N/A
- https://github.com/awizemann/scarf  → ai-agents/openclaw-hermes
- https://github.com/alchaincyf/elon-musk-skill  → skills-mcp/N/A
- https://github.com/xr843/Master-skill  → skills-mcp/N/A
- https://github.com/alchaincyf/trump-skill  → skills-mcp/N/A
- https://github.com/alchaincyf/munger-skill  → skills-mcp/N/A
- https://github.com/Ming-H/yinyuan-skills  → skills-mcp/N/A

<!-- synced 2026-05-18T12:39:18Z -->
- https://github.com/QuantumNous/new-api  — ⭐ 34032 · Go · A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥
- https://github.com/fathah/hermes-desktop  — ⭐ 5718 · TypeScript · Desktop Companion for Hermes Agent
- https://github.com/lissy93/dashy  — ⭐ 25185 · Vue · 🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!
- https://github.com/vasu-devs/JustHireMe  — ⭐ 1742 · Python · Local-first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials.

<!-- synced 2026-05-18T12:39:24Z -->
- https://github.com/D4Vinci/Scrapling  — ⭐ 50905 · Python · 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!
- https://github.com/MarquezProject/marquez  — ⭐ 2192 · Java · Collect, aggregate, and visualize a data ecosystem's metadata
- https://github.com/OpenLineage/OpenLineage  — ⭐ 2461 · Java · An Open Standard for lineage metadata collection
- https://github.com/airbytehq/airbyte  — ⭐ 21279 · Python · Open-source data movement for ELT pipelines and AI agents — from APIs, databases & files to warehouses, lakes, and AI applications. Both self-hosted and Cloud.
- https://github.com/fastino-ai/GLiNER2  — ⭐ 1530 · Python · Unified Schema-Based Information Extraction
- https://github.com/hasura/graphql-engine  — ⭐ 31966 · TypeScript · Blazing fast, instant realtime GraphQL APIs on all your data with fine grained access control, also trigger webhooks on database events.
- https://github.com/huangserva/3DCellForge  — ⭐ 2128 · JavaScript · AI-powered interactive 3D model generation, inspection, and presentation studio.
- https://github.com/lissy93/web-check  — ⭐ 33107 · TypeScript · 🕵️‍♂️ All-in-one OSINT tool for analysing any website
- https://github.com/moj-analytical-services/splink  — ⭐ 2156 · Python · Fast, accurate and scalable probabilistic data linkage with support for multiple SQL backends
- https://github.com/neo4j-labs/neosemantics  — ⭐ 932 · Java · Graph+Semantics: Import/Export RDF from Neo4j. SHACL Validation, Model mapping and more.... If you like it, please ★ ⇧
- https://github.com/ontop/ontop  — ⭐ 843 · Java · Ontop is a platform to query relational databases as Virtual RDF Knowledge Graphs using SPARQL
- https://github.com/safishamsi/graphify  — ⭐ 48971 · Python · AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more). Turn any folder of code, SQL schemas, R scripts, shell scripts, docs, papers, images, or videos into a queryable knowledge graph. App code + database schema + infrastructure in one graph.
- https://github.com/trinodb/trino  — ⭐ 12828 · Java · Official repository of Trino, the distributed SQL query engine for big data, formerly known as PrestoSQL (https://trino.io)
- https://github.com/zeroclaw-labs/zeroclaw  — ⭐ 31418 · Rust · Fast, small, and fully autonomous AI personal assistant infrastructure, ANY OS, ANY PLATFORM — deploy anywhere, swap anything 🦀

## Auto-classified 2026-05-18

- https://github.com/D4Vinci/Scrapling  → crawler-publish/crawler
- https://github.com/safishamsi/graphify  → skills-mcp/null
- https://github.com/QuantumNous/new-api  → backend-infra/llm-gateway
- https://github.com/lissy93/web-check  → misc/osint
- https://github.com/hasura/graphql-engine  → backend-infra/databases-analytics
- https://github.com/zeroclaw-labs/zeroclaw  → ai-agents/openclaw-hermes
- https://github.com/lissy93/dashy  → kb-productivity/dashboard
- https://github.com/airbytehq/airbyte  → backend-infra/databases-analytics
- https://github.com/trinodb/trino  → backend-infra/databases-analytics
- https://github.com/fathah/hermes-desktop  → ai-agents/openclaw-hermes
- https://github.com/OpenLineage/OpenLineage  → backend-infra/databases-analytics
- https://github.com/MarquezProject/marquez  → backend-infra/databases-analytics
- https://github.com/moj-analytical-services/splink  → backend-infra/databases-analytics
- https://github.com/huangserva/3DCellForge  → multimedia/image
- https://github.com/vasu-devs/JustHireMe  → finance-career/career
- https://github.com/fastino-ai/GLiNER2  → rag-kg-memory/null
- https://github.com/neo4j-labs/neosemantics  → rag-kg-memory/null
- https://github.com/ontop/ontop  → rag-kg-memory/null
