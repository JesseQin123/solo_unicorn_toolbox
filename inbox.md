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


## Auto-classified 2026-05-25

- https://github.com/affaan-m/ECC  → ai-agents/claude-code
- https://github.com/asgeirtj/system_prompts_leaks  → tutorials/awesome-lists
- https://github.com/HKUDS/CLI-Anything  → backend-infra/ai-toolkit
- https://github.com/colbymchenry/codegraph  → rag-kg-memory/null
- https://github.com/google/eng-practices  → tutorials/system-design
- https://github.com/OpenBMB/VoxCPM  → multimedia/audio
- https://github.com/waooAI/waoowaoo  → multimedia/video
- https://github.com/linyqh/NarratoAI  → multimedia/video
- https://github.com/HKUDS/ViMax  → multimedia/video
- https://github.com/modelscope/FunClip  → multimedia/video
- https://github.com/Forget-C/Jellyfish  → multimedia/video
- https://github.com/alecm20/story-flicks  → multimedia/video
- https://github.com/yaojingang/GEOFlow  → crawler-publish/publish
- https://github.com/shuyu-labs/BigBanana-AI-Director  → multimedia/video
- https://github.com/tukuaiai/tradecat-public  → finance-career/finance
- https://github.com/xhongc/ai_story  → multimedia/video
- https://github.com/xuanyustudio/LocalMiniDrama  → multimedia/video

<!-- synced 2026-06-01T15:28:40Z -->
- https://github.com/norahe0304-art/30x-growth-marketing-panel  — ⭐ 24 · Shell · AI Growth Marketing Expert Panel — 11 world-class experts distilled from 3,500+ YouTube videos. Claude Code Skill.
- https://github.com/p-e-w/heretic  — ⭐ 22933 · Python · Fully automatic censorship removal for language models
- https://github.com/tradecatlabs/tradecat-public  — ⭐ 952 · Python · 交易猫数据系统
- https://github.com/tradecatlabs/vibe-coding-cn  — ⭐ 14101 · Python · Vibe Coding 从入门到精通教程｜AI 结对编程工作流｜Prompt、Skill、Workflow、上下文管理、codex实战指南

<!-- synced 2026-06-01T15:28:47Z -->
- https://github.com/ConardLi/garden-skills  — ⭐ 6880 · CSS · ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.
- https://github.com/Donchitos/Claude-Code-Game-Studios  — ⭐ 20570 · Shell · Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy.
- https://github.com/StarTrail-org/LEANN  — ⭐ 11845 · Python · [MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device.
- https://github.com/anthropics/financial-services  — ⭐ 29236 · Python · 
- https://github.com/greensock/gsap-skills  — ⭐ 7079 · — · Official AI skills for GSAP. These skills teach AI coding agents how to correctly use GSAP (GreenSock Animation Platform), including best practices, common animation patterns, and plugin usage.
- https://github.com/tradecatlabs/vibe-coding-cn  — ⭐ 14101 · Python · Vibe Coding 从入门到精通教程｜AI 结对编程工作流｜Prompt、Skill、Workflow、上下文管理、codex实战指南
- https://github.com/velobase/velobase-harness  — ⭐ 438 · TypeScript · From code to cash — open-source SaaS boilerplate with Stripe, affiliate, attribution & usage-based billing for AI apps. T3 stack + Next.js 16.

<!-- synced 2026-06-08T13:11:44Z -->
- https://github.com/ConardLi/garden-skills  — ⭐ 7562 · CSS · ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.
- https://github.com/Makisuo/maple  — ⭐ 1187 · TypeScript · OpenTelemetry observability platform
- https://github.com/VoltAgent/voltagent  — ⭐ 9472 · TypeScript · AI Agent Engineering Platform built on an Open Source TypeScript AI Agent Framework
- https://github.com/collabs-inc/collab-public  — ⭐ 2521 · TypeScript · Collaborator is a place to create with agents.
- https://github.com/mvanhorn/last30days-skill  — ⭐ 33175 · Python · AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary
- https://github.com/norahe0304-art/30x-growth-marketing-panel  — ⭐ 24 · Shell · AI Growth Marketing Expert Panel — 11 world-class experts distilled from 3,500+ YouTube videos. Claude Code Skill.
- https://github.com/p-e-w/heretic  — ⭐ 23985 · Python · Fully automatic censorship removal for language models
- https://github.com/tradecatlabs/tradecat-public  — ⭐ 954 · Python · 交易猫数据系统
- https://github.com/tradecatlabs/vibe-coding-cn  — ⭐ 14514 · Python · Vibe Coding 从入门到精通教程｜AI 结对编程工作流｜Prompt、Skill、Workflow、上下文管理、codex实战指南

<!-- synced 2026-06-08T13:11:49Z -->
- https://github.com/AgentWrapper/agent-orchestrator  — ⭐ 7455 · TypeScript ·  Agentic orchestrator for parallel coding agents — plans tasks, spawns agents, and autonomously handles CI fixes, merge conflicts, and code reviews.
- https://github.com/ConardLi/garden-skills  — ⭐ 7562 · CSS · ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.
- https://github.com/Donchitos/Claude-Code-Game-Studios  — ⭐ 21154 · Shell · Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy.
- https://github.com/FoundationAgents/MetaGPT  — ⭐ 68641 · Python · 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming
- https://github.com/StarTrail-org/LEANN  — ⭐ 11895 · Python · [MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device.
- https://github.com/anthropics/financial-services  — ⭐ 30483 · Python · 
- https://github.com/greensock/gsap-skills  — ⭐ 8516 · — · Official AI skills for GSAP. These skills teach AI coding agents how to correctly use GSAP (GreenSock Animation Platform), including best practices, common animation patterns, and plugin usage.
- https://github.com/mvanhorn/last30days-skill  — ⭐ 33175 · Python · AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary
- https://github.com/pewdiepie-archdaemon/odysseus  — ⭐ 62795 · Python · Self-hosted AI workspace. 
- https://github.com/tradecatlabs/vibe-coding-cn  — ⭐ 14514 · Python · Vibe Coding 从入门到精通教程｜AI 结对编程工作流｜Prompt、Skill、Workflow、上下文管理、codex实战指南
- https://github.com/velobase/velobase-harness  — ⭐ 475 · TypeScript · From code to cash — open-source SaaS boilerplate with Stripe, affiliate, attribution & usage-based billing for AI apps. T3 stack + Next.js 16.

## Auto-classified 2026-06-08

- https://github.com/norahe0304-art/30x-growth-marketing-panel  → skills-mcp/null
- https://github.com/p-e-w/heretic  → misc/osint
- https://github.com/tradecatlabs/tradecat-public  → finance-career/finance
- https://github.com/tradecatlabs/vibe-coding-cn  → tutorials/context-vibe
- https://github.com/ConardLi/garden-skills  → skills-mcp/null
- https://github.com/Donchitos/Claude-Code-Game-Studios  → ai-agents/claude-code
- https://github.com/StarTrail-org/LEANN  → rag-kg-memory/null
- https://github.com/anthropics/financial-services  → tutorials/llm-en
- https://github.com/greensock/gsap-skills  → skills-mcp/null
- https://github.com/velobase/velobase-harness  → backend-infra/auth-billing
- https://github.com/Makisuo/maple  → backend-infra/databases-analytics
- https://github.com/VoltAgent/voltagent  → ai-agents/agent-platforms
- https://github.com/collabs-inc/collab-public  → ai-agents/agent-platforms
- https://github.com/mvanhorn/last30days-skill  → skills-mcp/null
- https://github.com/AgentWrapper/agent-orchestrator  → ai-agents/multi-orchestration
- https://github.com/FoundationAgents/MetaGPT  → ai-agents/multi-orchestration
- https://github.com/pewdiepie-archdaemon/odysseus  → ai-agents/agent-platforms

## Auto-classified 2026-06-15

- https://github.com/orange2ai/renwei-writing  → skills-mcp/null  ⭐654 · jesseqin123
- https://github.com/chopratejas/headroom  → backend-infra/ai-toolkit  ⭐28.3k · jesseqin-kamiwaza
- https://github.com/joeseesun/qiaomu-goal-meta-skill  → skills-mcp/null  ⭐603 · jesseqin-kamiwaza
- https://github.com/muxuuu/serenity-skill  → finance-career/finance  ⭐2.3k · jesseqin-kamiwaza
- https://github.com/21st-dev/magic-mcp  → skills-mcp/null  ⭐5.1k · jesseqin-kamiwaza

<!-- synced 2026-06-15T15:20:24Z -->
- https://github.com/ALwrity/ALwrity  — ⭐ 1063 · Python · ALwrity - AI-first Digital Marketing Platform. AI Content Strategy and Planning, Multimodal content generation, Publishing, Analytics, AI SEO, Connect & Manage Social Accounts. Marketing OS - WIP

## Auto-classified 2026-06-16

- https://github.com/ALwrity/ALwrity  → finance-career/marketing-growth  ⭐1063 · Python

<!-- synced 2026-06-22T14:47:06Z -->
- https://github.com/DietrichGebert/ponytail  — ⭐ 48709 · JavaScript · Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 185 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero  — ⭐ 4128 · — · 🚀 Awesome System for Machine Learning ⚡️ AI System Papers and Industry Practice. ⚡️ System for Machine Learning, LLM (Large Language Model), GenAI (Generative AI). 🍻 OSDI, NSDI, SIGCOMM, SoCC, MLSys, etc. 🗃️ Llama3, Mistral, etc. 🧑‍💻 Video Tutorials. 
- https://github.com/MIT-MI/how2ai-course  — ⭐ 467 · SCSS · How to AI (Almost) Anything Course
- https://github.com/freestylefly/awesome-gpt-image-2  — ⭐ 7798 · JavaScript · Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，470+ 个案例逆向工程，20+ 套工业级模板，并提炼出Skills，持续更新中
- https://github.com/jasontang-ai/Context-Engineering  — ⭐ 9104 · Python · "Context engineering is the delicate art and science of filling the context window with just the right information for the next step." — Andrej Karpathy. A frontier, first-principles handbook inspired by Karpathy and 3Blue1Brown for moving beyond prompt engineering to the wider discipline of context design, orchestration, and optimization.

<!-- synced 2026-06-22T14:47:10Z -->
- https://github.com/DeusData/codebase-memory-mcp  — ⭐ 11086 · C · High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.
- https://github.com/DietrichGebert/ponytail  — ⭐ 48710 · JavaScript · Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- https://github.com/Egonex-AI/Understand-Anything  — ⭐ 65947 · TypeScript · Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.
- https://github.com/EverMind-AI/EverOS  — ⭐ 8368 · Python · Self-evolving memory across Agent and platform. The one portable memory layer for every agent they use - Claude Code, Codex, OpenClaw, Hermes, and more
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 652 · — · The living ecosystem where AI agents learn from real-world work through iterative workflow loops, reusable experience, and collective training signal exchange.
- https://github.com/Thysrael/Horizon  — ⭐ 6955 · Python · 📡 Your own AI-powered news radar. Generates daily briefings in English & Chinese. | 用 AI 构建你专属的新闻雷达
- https://github.com/alibaba/open-code-review  — ⭐ 8423 · Go · Open-source & free — Battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in fine-tuned ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.
- https://github.com/chatwoot/chatwoot  — ⭐ 33226 · Ruby · Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc. 🔥💬
- https://github.com/code-yeongyu/lazycodex  — ⭐ 1765 · TypeScript · The one and only agent harness for complex codebases. Project memory, planning, execution, and verified completion inside Codex.
- https://github.com/code-yeongyu/oh-my-openagent  — ⭐ 63236 · TypeScript · omo/lazycodex: The coding agent for tokenmaxxers;the one and only agent harness for complex codebases. For your Codex, for your OpenCode
- https://github.com/frappe/erpnext  — ⭐ 35953 · Python · Free and Open Source Enterprise Resource Planning (ERP)
- https://github.com/freeCodeCamp/freeCodeCamp  — ⭐ 450175 · TypeScript · freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.
- https://github.com/google-deepmind/science-skills  — ⭐ 2014 · Python · GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.
- https://github.com/headroomlabs-ai/headroom  — ⭐ 46418 · Python · Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.
- https://github.com/microsoft/SkillOpt  — ⭐ 8726 · Python · SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.
- https://github.com/opentsc/opentsc  — ⭐ 13 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 6 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/staru09/open-paxel  — ⭐ 19 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/steipete/agent-scripts  — ⭐ 5140 · Shell · Scripts for agents, shared between my repositories.
- https://github.com/trustgraph-ai/TrustGraph  — ⭐ 2214 · Python · Write context once. Run agents anywhere. Discover the power of holonic context graphs and dramatically reduce your token usage.
