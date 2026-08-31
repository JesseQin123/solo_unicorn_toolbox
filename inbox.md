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

<!-- synced 2026-06-29T13:11:35Z -->
- https://github.com/DietrichGebert/ponytail  — ⭐ 66379 · JavaScript · Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 228 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero  — ⭐ 4153 · — · 🚀 Awesome System for Machine Learning ⚡️ AI System Papers and Industry Practice. ⚡️ System for Machine Learning, LLM (Large Language Model), GenAI (Generative AI). 🍻 OSDI, NSDI, SIGCOMM, SoCC, MLSys, etc. 🗃️ Llama3, Mistral, etc. 🧑‍💻 Video Tutorials. 
- https://github.com/MIT-MI/how2ai-course  — ⭐ 471 · SCSS · How to AI (Almost) Anything Course
- https://github.com/code-yeongyu/oh-my-openagent  — ⭐ 64142 · TypeScript · omo/lazycodex: The coding agent for tokenmaxxers;the one and only agent harness for complex codebases. For your Codex, for your OpenCode
- https://github.com/freestylefly/awesome-gpt-image-2  — ⭐ 8022 · JavaScript · Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，470+ 个案例逆向工程，20+ 套工业级模板，并提炼出Skills，持续更新中
- https://github.com/jasontang-ai/Context-Engineering  — ⭐ 9127 · Python · "Context engineering is the delicate art and science of filling the context window with just the right information for the next step." — Andrej Karpathy. A frontier, first-principles handbook inspired by Karpathy and 3Blue1Brown for moving beyond prompt engineering to the wider discipline of context design, orchestration, and optimization.
- https://github.com/mnemosyne-oss/mnemosyne  — ⭐ 1327 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Everyone Else!
- https://github.com/zerostaticthemes/square-ui  — ⭐ 5909 · TypeScript · Collection of beautifully crafted open-source layouts UI built with shadcn/ui.

<!-- synced 2026-06-29T13:11:39Z -->
- https://github.com/DeusData/codebase-memory-mcp  — ⭐ 20813 · C · High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.
- https://github.com/DietrichGebert/ponytail  — ⭐ 66379 · JavaScript · Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- https://github.com/Egonex-AI/Understand-Anything  — ⭐ 69123 · TypeScript · Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.
- https://github.com/EverMind-AI/EverOS  — ⭐ 9727 · Python · One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving across apps, tools, and workflows.
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 1046 · — · The living ecosystem where AI agents run automated workflow loops on any task, improve through execution, and turn each run into reusable work experience + data to improve future agents.
- https://github.com/Thysrael/Horizon  — ⭐ 7586 · Python · 📡 Your own AI-powered news radar. Generates daily briefings in English & Chinese. | 用 AI 构建你专属的新闻雷达
- https://github.com/alibaba/open-code-review  — ⭐ 9576 · Go · Open-source & free — Battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in fine-tuned ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.
- https://github.com/biolink/kgx  — ⭐ 175 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/calesthio/OpenMontage  — ⭐ 28051 · Python · World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio.
- https://github.com/chatwoot/chatwoot  — ⭐ 33717 · Ruby · Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc. 🔥💬
- https://github.com/code-yeongyu/lazycodex  — ⭐ 2147 · TypeScript · The one and only agent harness for complex codebases. Project memory, planning, execution, and verified completion inside Codex.
- https://github.com/code-yeongyu/oh-my-openagent  — ⭐ 64142 · TypeScript · omo/lazycodex: The coding agent for tokenmaxxers;the one and only agent harness for complex codebases. For your Codex, for your OpenCode
- https://github.com/dontbesilent2025/dbskill  — ⭐ 7153 · JavaScript · dontbesilent 的商业诊断 Skills
- https://github.com/frappe/erpnext  — ⭐ 36188 · Python · Free and Open Source Enterprise Resource Planning (ERP)
- https://github.com/freeCodeCamp/freeCodeCamp  — ⭐ 450723 · TypeScript · freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.
- https://github.com/google-deepmind/science-skills  — ⭐ 2119 · Python · GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.
- https://github.com/headroomlabs-ai/headroom  — ⭐ 53537 · Python · Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.
- https://github.com/microsoft/SkillOpt  — ⭐ 9826 · Python · SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.
- https://github.com/opensearch-project/OpenSearch  — ⭐ 13289 · Java · 🔎 Open source distributed and RESTful search engine.
- https://github.com/opentsc/opentsc  — ⭐ 28 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 11 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/run-llama/llama_index  — ⭐ 50498 · Python · LlamaIndex is the leading document agent and OCR platform
- https://github.com/staru09/open-paxel  — ⭐ 20 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/steipete/agent-scripts  — ⭐ 5210 · Shell · Scripts for agents, shared between my repositories.
- https://github.com/sumelabs/clawra  — ⭐ 2340 · TypeScript · Clawra - Openclaw as your companion
- https://github.com/vasturiano/3d-force-graph  — ⭐ 6166 · HTML · 3D force-directed graph component using ThreeJS/WebGL

## Newly starred (overflow) 2026-06-29

<!-- Top 20 were auto-classified. These 14 need manual review next run. -->
- https://github.com/steipete/agent-scripts  — ⭐ 5,210 · Shell · Scripts for agents, shared between my repositories.
- https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero  — ⭐ 4,153 ·  · 🚀 Awesome System for Machine Learning ⚡️ AI System Papers and Industry Practice.
- https://github.com/sumelabs/clawra  — ⭐ 2,340 · TypeScript · Clawra - Openclaw as your companion
- https://github.com/trustgraph-ai/TrustGraph  — ⭐ 2,214 · Python · Write context once. Run agents anywhere. Discover the power of holonic context g
- https://github.com/code-yeongyu/lazycodex  — ⭐ 2,147 · TypeScript · The one and only agent harness for complex codebases. Project memory, planning, 
- https://github.com/google-deepmind/science-skills  — ⭐ 2,119 · Python · GDM Science Skills to speed up agentic scientific workflows with better groundin
- https://github.com/mnemosyne-oss/mnemosyne  — ⭐ 1,327 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Ever
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 1,046 ·  · The living ecosystem where AI agents run automated workflow loops on any task, i
- https://github.com/MIT-MI/how2ai-course  — ⭐ 471 · SCSS · How to AI (Almost) Anything Course
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 228 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully o
- https://github.com/biolink/kgx  — ⭐ 175 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/opentsc/opentsc  — ⭐ 28 · Python · A private, offline 'second brain' for the people, projects, and decisions you ju
- https://github.com/staru09/open-paxel  — ⭐ 20 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/opentsc/tsc  — ⭐ 11 ·  · The Thin-Shell Company: a whitepaper on running a large, self-evolving organizat

## Auto-classified 2026-06-29

- https://github.com/freeCodeCamp/freeCodeCamp  → misc/education  ⭐450,723 · TypeScript
- https://github.com/Egonex-AI/Understand-Anything  → skills-mcp/null  ⭐69,123 · TypeScript
- https://github.com/DietrichGebert/ponytail  → ai-agents/generic  ⭐66,379 · JavaScript
- https://github.com/code-yeongyu/oh-my-openagent  → ai-agents/codex  ⭐64,142 · TypeScript
- https://github.com/headroomlabs-ai/headroom  → backend-infra/ai-toolkit  ⭐53,537 · Python
- https://github.com/run-llama/llama_index  → rag-kg-memory/null  ⭐50,498 · Python
- https://github.com/frappe/erpnext  → backend-infra/self-host  ⭐36,188 · Python
- https://github.com/chatwoot/chatwoot  → backend-infra/self-host  ⭐33,717 · Ruby
- https://github.com/calesthio/OpenMontage  → multimedia/video  ⭐28,051 · Python
- https://github.com/DeusData/codebase-memory-mcp  → skills-mcp/null  ⭐20,813 · C
- https://github.com/opensearch-project/OpenSearch  → backend-infra/databases-analytics  ⭐13,289 · Java
- https://github.com/microsoft/SkillOpt  → skills-mcp/null  ⭐9,826 · Python
- https://github.com/EverMind-AI/EverOS  → rag-kg-memory/null  ⭐9,727 · Python
- https://github.com/alibaba/open-code-review  → ai-agents/generic  ⭐9,576 · Go
- https://github.com/jasontang-ai/Context-Engineering  → tutorials/context-vibe  ⭐9,127 · Python
- https://github.com/freestylefly/awesome-gpt-image-2  → multimedia/image  ⭐8,022 · JavaScript
- https://github.com/Thysrael/Horizon  → kb-productivity/dashboard  ⭐7,586 · Python
- https://github.com/dontbesilent2025/dbskill  → skills-mcp/null  ⭐7,153 · JavaScript
- https://github.com/vasturiano/3d-force-graph  → frontend/components  ⭐6,166 · HTML
- https://github.com/zerostaticthemes/square-ui  → frontend/components  ⭐5,909 · TypeScript

<!-- synced 2026-07-06T12:53:40Z -->
- https://github.com/0xNyk/council-of-high-intelligence  — ⭐ 3351 · Shell · 18 AI personas deliberate your hardest decisions across multiple LLM providers. Structured multi-round deliberation, confidence-weighted verdicts, genuine model diversity. Install as a Claude Code plugin — one command: /council
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 237 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/GoogleCloudPlatform/knowledge-catalog  — ⭐ 6318 · HTML · Google Cloud Knowledge Catalog Tools and Samples
- https://github.com/HKUDS/OpenHarness  — ⭐ 14575 · Python · "OpenHarness: Open Agent Harness with a Built-in Personal Agent--Ohmo!"
- https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero  — ⭐ 4162 · — · 🚀 Awesome System for Machine Learning ⚡️ AI System Papers and Industry Practice. ⚡️ System for Machine Learning, LLM (Large Language Model), GenAI (Generative AI). 🍻 OSDI, NSDI, SIGCOMM, SoCC, MLSys, etc. 🗃️ Llama3, Mistral, etc. 🧑‍💻 Video Tutorials. 
- https://github.com/LiuMengxuan04/shushu-internship-tool  — ⭐ 1694 · Python · 把岗位描述变项目，把项目变简历，把简历变面试。
- https://github.com/MIT-MI/how2ai-course  — ⭐ 474 · SCSS · How to AI (Almost) Anything Course
- https://github.com/MadsLorentzen/ai-job-search  — ⭐ 5968 · TypeScript · AI-powered job application framework built on Claude Code. Fork it, fill in your profile, and let Claude evaluate jobs, tailor CVs, write cover letters, and prepare you for interviews.
- https://github.com/MapleTechLabs/maple  — ⭐ 1512 · TypeScript · OpenTelemetry observability platform
- https://github.com/baojie/shiji-kb  — ⭐ 2215 · HTML · 
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/hasaneyldrm/exercises-dataset  — ⭐ 10090 · HTML · A comprehensive dataset of 433 fitness exercises. Each entry includes name, category, target muscle group, equipment, instructions, thumbnail image, and animation video.
- https://github.com/humanlayer/12-factor-agents  — ⭐ 23974 · TypeScript · What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?
- https://github.com/kyegomez/OpenMythos  — ⭐ 14629 · Python · A theoretical reconstruction of the Claude Mythos architecture, built from first principles using the available research literature.
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 85 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive — track her, analyze like her, anticipate her next focus. Bilingual 中文/English.
- https://github.com/mnemosyne-oss/mnemosyne  — ⭐ 1414 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Everyone Else!
- https://github.com/norahe0304-art/30x-video  — ⭐ 18 · TypeScript · Tell it what you want, get a video. Agency-grade marketing videos with auto-composed BGM and voice over.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 
- https://github.com/rynfar/meridian  — ⭐ 1571 · TypeScript · Use your Claude Max subscription with OpenCode, Pi, Droid, Aider, Crush, Cline. Proxy that bridges Anthropic's official SDK to enable Claude Max in third-party tools.

<!-- synced 2026-07-06T12:53:43Z -->
- https://github.com/ATH-MaaS/Pixelle-Video  — ⭐ 24214 · Python · 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine
- https://github.com/EKKOLearnAI/hermes-studio  — ⭐ 8867 · TypeScript · Web dashboard for Hermes Agent — multi-platform AI chat, session management, scheduled jobs, usage analytics 
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 1259 · Python · The living ecosystem where AI agents complete tasks through workflow loops, improve through iterative execution, are evaluated by mentor agents or humans in the loop, and turn completed work into reusable work experience and data to improve future agents.
- https://github.com/Graphify-Labs/graphify  — ⭐ 78457 · Python · AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more). Turn any folder of code, SQL schemas, R scripts, shell scripts, docs, papers, images, or videos into a queryable knowledge graph. App code + database schema + infrastructure in one graph.
- https://github.com/HKUDS/OpenOPC  — ⭐ 464 · Python · OpenOPC: Build Your Personal AI-Native Company — Self-Built, Self-Run, Self-Grown
- https://github.com/Renhuai123/ziwei-doushu  — ⭐ 2920 · TypeScript · 紫微斗数开源排盘引擎 — 基于倪海夏《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据
- https://github.com/biolink/kgx  — ⭐ 179 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/blader/humanizer  — ⭐ 27704 · — · Claude Code skill that removes signs of AI-generated writing from text
- https://github.com/code-yeongyu/lazycodex  — ⭐ 2468 · TypeScript · The one and only agent harness for complex codebases. Project memory, planning, execution, and verified completion inside Codex.
- https://github.com/facebook/astryx  — ⭐ 6263 · TypeScript · An open source design system that's fully customizable and agent ready
- https://github.com/google-deepmind/science-skills  — ⭐ 2251 · Python · GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.
- https://github.com/opentsc/opentsc  — ⭐ 30 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 11 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/staru09/open-paxel  — ⭐ 23 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/steipete/agent-scripts  — ⭐ 5250 · Shell · Scripts for agents, shared between my repositories.
- https://github.com/sumelabs/clawra  — ⭐ 2339 · TypeScript · Clawra - Openclaw as your companion

## Needs manual classification (2026-07-06)

- https://github.com/baojie/shiji-kb  — ⭐ 2,215 · HTML · (no description available)

## Newly starred (overflow) 2026-07-06

<!-- Top 20 were auto-classified. These 16 need manual review next run. -->
- https://github.com/LiuMengxuan04/shushu-internment-tool  — ⭐ 1,694 · Python · 把岗位描述变项目，把项目变简历，把简历变面试。
- https://github.com/rynfar/meridian  — ⭐ 1,571 · TypeScript · Use your Claude Max subscription with OpenCode, Pi, Droid, Aider, Crush, Cline. 
- https://github.com/MapleTechLabs/maple  — ⭐ 1,512 · TypeScript · OpenTelemetry observability platform
- https://github.com/mnemosyne-oss/mnemosyne  — ⭐ 1,414 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Ever
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 1,259 · Python · The living ecosystem where AI agents complete tasks through workflow loops, impr
- https://github.com/MIT-MI/how2ai-course  — ⭐ 474 · SCSS · How to AI (Almost) Anything Course
- https://github.com/HKUDS/OpenOPC  — ⭐ 464 · Python · OpenOPC: Build Your Personal AI-Native Company — Self-Built, Self-Run, Self-Grow
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 237 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully o
- https://github.com/biolink/kgx  — ⭐ 179 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 85 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full publi
- https://github.com/opentsc/opentsc  — ⭐ 30 · Python · A private, offline 'second brain' for the people, projects, and decisions you ju
- https://github.com/staru09/open-paxel  — ⭐ 23 · Python · AI native open-source analyser for your coding patterns
- https://github.com/norahe0304-art/30x-video  — ⭐ 18 · TypeScript · Tell it what you want, get a video. Agency-grade marketing videos with auto-comp
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and 
- https://github.com/opentsc/tsc  — ⭐ 11 · None · The Thin-Shell Company: a whitepaper on running a large, self-evolving organizat
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 

## Auto-classified 2026-07-06

- https://github.com/Graphify-Labs/graphify  → skills-mcp/null  ⭐78,457 · Python
- https://github.com/blader/humanizer  → skills-mcp/null  ⭐27,704 · 
- https://github.com/ATH-MaaS/Pixelle-Video  → multimedia/video  ⭐24,214 · Python
- https://github.com/humanlayer/12-factor-agents  → tutorials/llm-en  ⭐23,974 · TypeScript
- https://github.com/kyegomez/OpenMythos  → ai-agents/generic  ⭐14,629 · Python
- https://github.com/HKUDS/OpenHarness  → ai-agents/agent-platforms  ⭐14,575 · Python
- https://github.com/hasaneyldrm/exercises-dataset  → misc/lifestyle  ⭐10,090 · HTML
- https://github.com/EKKOLearnAI/hermes-studio  → ai-agents/openclaw-hermes  ⭐8,867 · TypeScript
- https://github.com/GoogleCloudPlatform/knowledge-catalog  → backend-infra/databases-analytics  ⭐6,318 · HTML
- https://github.com/facebook/astryx  → frontend/components  ⭐6,263 · TypeScript
- https://github.com/MadsLorentzen/ai-job-search  → finance-career/career  ⭐5,968 · TypeScript
- https://github.com/steipete/agent-scripts  → skills-mcp/null  ⭐5,250 · Shell
- https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero  → tutorials/llm-en  ⭐4,162 · 
- https://github.com/0xNyk/council-of-high-intelligence  → skills-mcp/null  ⭐3,351 · Shell
- https://github.com/Renhuai123/ziwei-doushu  → misc/personal-projects  ⭐2,920 · TypeScript
- https://github.com/code-yeongyu/lazycodex  → ai-agents/codex  ⭐2,468 · TypeScript
- https://github.com/sumelabs/clawra  → ai-agents/openclaw-hermes  ⭐2,339 · TypeScript
- https://github.com/google-deepmind/science-skills  → skills-mcp/null  ⭐2,251 · Python
- https://github.com/trustgraph-ai/TrustGraph  → rag-kg-memory/null  ⭐2,214 · Python

<!-- synced 2026-07-13T12:11:32Z -->
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 241 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/Hao0321/video-autopilot-kit  — ⭐ 1203 · Python · Fill-in-your-own-data framework for YouTube / short-form video automation: CapCut JSON + ffmpeg tooling + an onboarding questionnaire. Ships with zero private data.
- https://github.com/LiuMengxuan04/shushu-internship-tool  — ⭐ 1735 · Python · 把岗位描述变项目，把项目变简历，把简历变面试。
- https://github.com/MIT-MI/how2ai-course  — ⭐ 477 · SCSS · How to AI (Almost) Anything Course
- https://github.com/MapleTechLabs/maple  — ⭐ 1525 · TypeScript · OpenTelemetry observability platform
- https://github.com/Younesfdj/gitfut  — ⭐ 2025 · TypeScript · Your GitHub stats, turned into a World-Cup-style player card 
- https://github.com/baojie/shiji-kb  — ⭐ 2295 · HTML · 
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/galacean/effects-runtime  — ⭐ 727 · TypeScript · It can load and render cool animation effects
- https://github.com/hugohe3/ppt-master  — ⭐ 38703 · Python · AI generates a real, editable PowerPoint from any document — native shapes & animations, editable charts & tables you can change the data on, speaker notes voiced as audio narration, and the option to follow your own .pptx template, not slide images · by Hugo He
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 89 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive — track her, analyze like her, anticipate her next focus. Bilingual 中文/English.
- https://github.com/lemma-work/lemma-platform  — ⭐ 290 · Python · The open-source workspace where humans and AI agents work as one team.
- https://github.com/lipku/LiveTalking  — ⭐ 8384 · Python · Real time interactive streaming digital human
- https://github.com/louislam/uptime-kuma  — ⭐ 89072 · JavaScript · A fancy self-hosted monitoring tool
- https://github.com/macrozheng/mall  — ⭐ 84146 · Java · mall项目是一套电商系统，包括前台商城系统及后台管理系统，基于Spring Boot+MyBatis实现，采用Docker容器化部署。 前台商城系统包含首页门户、商品推荐、商品搜索、商品展示、购物车、订单流程、会员中心、客户服务、帮助中心等模块。 后台管理系统包含商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、设置等模块。
- https://github.com/mnemosyne-oss/mnemosyne  — ⭐ 1508 · Python · The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Everyone Else!
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 100 · — · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/norahe0304-art/30x-video  — ⭐ 54 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React) with a 16-law taste codex — 12 brands, 12 worlds, zero templates.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 
- https://github.com/rynfar/meridian  — ⭐ 1657 · TypeScript · Use your Claude Max subscription with OpenCode, Pi, Droid, Aider, Crush, Cline. Proxy that bridges Anthropic's official SDK to enable Claude Max in third-party tools.
- https://github.com/xszyou/Fay  — ⭐ 13045 · Python · fay是一个帮助数字人（2.5d、3d、移动、pc、网页）或大语言模型（openai兼容、deepseek）连通业务系统的agent框架。

<!-- synced 2026-07-13T12:11:36Z -->
- https://github.com/Forsy-AI/agent-apprenticeship  — ⭐ 1315 · Python · The living ecosystem where AI agents complete tasks through workflow loops, improve through iterative execution, are evaluated by mentor agents or humans in the loop, and turn completed work into reusable work experience and data to improve future agents.
- https://github.com/HKUDS/OpenOPC  — ⭐ 713 · Python · OpenOPC: Build Your Personal AI-Native Company — Self-Built, Self-Run, Self-Grown
- https://github.com/HKUDS/OpenSpace  — ⭐ 6720 · Python · "OpenSpace: The Quality-First Skill Hub for AI Agents" -- https://open-space.cloud/
- https://github.com/MengTo/Skills  — ⭐ 2006 · Python · Agent skills for designers and builders using Codex, Claude, Cursor, and other AI coding agents
- https://github.com/Sjj1024/PakePlus  — ⭐ 13652 · HTML · Turn any webpage/HTML/Vue/React and so on into desktop and mobile app under 5M with easy in few minutes. 轻松将任意网站/HTML/Vue/React等项目构建为轻量级(小于5M)多端桌面应用和手机应用仅需几分钟. https://ppofficial.netlify.app
- https://github.com/anthropics/claude-cookbooks  — ⭐ 48709 · Jupyter Notebook · A collection of notebooks/recipes showcasing some fun and effective ways of using Claude.
- https://github.com/biolink/kgx  — ⭐ 181 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/electron/electron  — ⭐ 121986 · C++ · :electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS
- https://github.com/emilkowalski/skills  — ⭐ 12030 · — · Skills for Design Engineers.
- https://github.com/fqscfqj/Y2A-Auto  — ⭐ 1647 · Python · YouTube到AcFun和bilibili自动化搬运工具，支持AI翻译、字幕生成、内容审核、智能监控
- https://github.com/iOfficeAI/OfficeCLI  — ⭐ 15850 · C# · OfficeCLI is the first and best Office suite  purpose-built for AI agents to read, edit, and automate Word, Excel, and PowerPoint files. Free, open-source, single binary, no Office installation required.
- https://github.com/kangarooking/cangjie-skill  — ⭐ 2688 · Python · 把书、长视频、播客等高价值内容蒸馏成可执行的 Agent Skills
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 5 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/lyon-industries/graphrag-workbench  — ⭐ 710 · TypeScript · Interactive 3D visualization of knowledge graphs generated by Microsoft GraphRAG. Explore entities, relationships, and communities with immersive visual analytics.
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 2 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns 

## Auto-classified 2026-07-13

- https://github.com/electron/electron  → frontend/desktop  ⭐121,986 · C++
- https://github.com/louislam/uptime-kuma  → backend-infra/self-host  ⭐89,072 · JavaScript
- https://github.com/macrozheng/mall  → backend-infra/self-host  ⭐84,146 · Java
- https://github.com/anthropics/claude-cookbooks  → tutorials/llm-en  ⭐48,709 · Jupyter Notebook
- https://github.com/hugohe3/ppt-master  → multimedia/documents-slides  ⭐38,703 · Python
- https://github.com/iOfficeAI/OfficeCLI  → skills-mcp/null  ⭐15,850 · C#
- https://github.com/Sjj1024/PakePlus  → frontend/desktop  ⭐13,652 · HTML
- https://github.com/xszyou/Fay  → ai-agents/agent-platforms  ⭐13,045 · Python
- https://github.com/emilkowalski/skills  → skills-mcp/null  ⭐12,030 · 
- https://github.com/lipku/LiveTalking  → multimedia/video  ⭐8,384 · Python
- https://github.com/HKUDS/OpenSpace  → skills-mcp/null  ⭐6,720 · Python
- https://github.com/kangarooking/cangjie-skill  → skills-mcp/null  ⭐2,688 · Python
- https://github.com/Younesfdj/gitfut  → misc/personal-projects  ⭐2,025 · TypeScript
- https://github.com/MengTo/Skills  → skills-mcp/null  ⭐2,006 · Python
- https://github.com/LiuMengxuan04/shushu-internship-tool  → finance-career/career  ⭐1,735 · Python
- https://github.com/rynfar/meridian  → backend-infra/llm-gateway  ⭐1,657 · TypeScript
- https://github.com/fqscfqj/Y2A-Auto  → crawler-publish/publish  ⭐1,647 · Python
- https://github.com/mnemosyne-oss/mnemosyne  → rag-kg-memory/null  ⭐1,508 · Python
- https://github.com/Forsy-AI/agent-apprenticeship  → ai-agents/multi-orchestration  ⭐1,315 · Python
- https://github.com/Hao0321/video-autopilot-kit  → multimedia/video  ⭐1,203 · Python

## Needs manual classification (2026-07-13)

- https://github.com/baojie/shiji-kb  — ⭐ 2,295 · HTML · (no description available)

## Newly starred (overflow) 2026-07-13

<!-- Top 20 were auto-classified. These 17 need manual review next run. -->
- https://github.com/galacean/effects-runtime  — ⭐ 727 · TypeScript · It can load and render cool animation effects
- https://github.com/HKUDS/OpenOPC  — ⭐ 713 · Python · OpenOPC: Build Your Personal AI-Native Company — Self-Built, Self-Run, Self-Grow
- https://github.com/lyon-industries/graphrag-workbench  — ⭐ 710 · TypeScript · Interactive 3D visualization of knowledge graphs generated by Microsoft GraphRAG
- https://github.com/MIT-MI/how2ai-course  — ⭐ 477 · SCSS · How to AI (Almost) Anything Course
- https://github.com/lemma-work/lemma-platform  — ⭐ 290 · Python · The open-source workspace where humans and AI agents work as one team.
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 241 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully o
- https://github.com/biolink/kgx  — ⭐ 181 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 100 · A review-first reference architecture for AI-assisted personal content knowledge
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 89 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full publi
- https://github.com/norahe0304-art/30x-video  — ⭐ 54 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for the people, projects, and decisions you ju
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and 
- https://github.com/opentsc/tsc  — ⭐ 12 · The Thin-Shell Company: a whitepaper on running a large, self-evolving organizat
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 5 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents d
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 2 · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.

<!-- synced 2026-07-20T11:50:11Z -->
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 250 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/MIT-MI/how2ai-course  — ⭐ 479 · SCSS · How to AI (Almost) Anything Course
- https://github.com/MapleTechLabs/maple  — ⭐ 1539 · TypeScript · OpenTelemetry observability platform
- https://github.com/baojie/shiji-kb  — ⭐ 2342 · HTML · 
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/bojieli/ai-agent-book  — ⭐ 8724 · Python · 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码
- https://github.com/galacean/effects-runtime  — ⭐ 735 · TypeScript · It can load and render cool animation effects
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 92 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive — track her, analyze like her, anticipate her next focus. Bilingual 中文/English.
- https://github.com/lemma-work/lemma-platform  — ⭐ 331 · Python · The open-source workspace where humans and AI agents work as one team.
- https://github.com/luongnv89/claude-howto  — ⭐ 40035 · Python · A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 111 · — · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/norahe0304-art/30x-video  — ⭐ 60 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React) with a 16-law taste codex — 12 brands, 12 worlds, zero templates.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 

<!-- synced 2026-07-20T11:50:15Z -->
- https://github.com/GiovanniPasq/agentic-rag-for-dummies  — ⭐ 3768 · Jupyter Notebook · A modular Agentic RAG built with LangGraph — learn Retrieval-Augmented Generation Agents in minutes.
- https://github.com/HKUDS/OpenOPC  — ⭐ 924 · Python · OpenOPC: Build Your Personal AI-Native Company — Self-Built, Self-Run, Self-Grown
- https://github.com/INCATools/ontology-development-kit  — ⭐ 348 · Dockerfile · Ontology lifecycle management
- https://github.com/KRR-Oxford/DeepOnto  — ⭐ 303 · Python · A package for ontology engineering with deep learning and language models.
- https://github.com/MaibornWolff/codecharta  — ⭐ 477 · TypeScript · CodeCharta is a visualization tool that transforms complex software architecture and code metrics into interactive, customizable visual maps, empowering everyone to communicate and analyze your codebase. Improve code quality, maintainability, and architectural decisions
- https://github.com/RyanCodrai/turbovec  — ⭐ 13612 · Python · A vector index built on TurboQuant, written in Rust with Python bindings
- https://github.com/Zleap-AI/SAG  — ⭐ 2171 · TypeScript · Where knowledge becomes a universe
- https://github.com/biolink/kgx  — ⭐ 182 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/braedonsaunders/codeflow  — ⭐ 4631 · HTML · Paste any GitHub URL → interactive architecture map. See how files connect, find what breaks if you change something. No install, no accounts — runs entirely in your browser.
- https://github.com/diet103/claude-code-infrastructure-showcase  — ⭐ 9927 · TypeScript · Examples of my Claude Code infrastructure with skill auto-activation, hooks, and agents
- https://github.com/edmcouncil/fibo  — ⭐ 630 · Shell · The Financial Industry Business Ontology (FIBO) defines the sets of things that are of interest in financial business applications and the ways that those things can relate to one another. In this way, FIBO can give meaning to any data (e.g., spreadsheets, relational databases, XML documents) that describe the business of finance.
- https://github.com/huangyun101/AI-Business-Hunter  — ⭐ 120 · — · 分享一些用 AI 来变现的小生意
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/lyon-industries/graphrag-workbench  — ⭐ 711 · TypeScript · Interactive 3D visualization of knowledge graphs generated by Microsoft GraphRAG. Explore entities, relationships, and communities with immersive visual analytics.
- https://github.com/odysseus-dev/odysseus  — ⭐ 83314 · Python · Self-hosted AI workspace. 
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/palemoky/chinese-poetry-api  — ⭐ 1959 · Go · 📜 诗泉：高性能中国古诗词 API 服务
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 6 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/ray-r-ren/agent-apprenticeship  — ⭐ 1321 · Python · The living ecosystem where AI agents complete tasks through workflow loops, improve through iterative execution, are evaluated by mentor agents or humans in the loop, and turn completed work into reusable work experience and data to improve future agents.
- https://github.com/semantica-agi/semantica  — ⭐ 1416 · Python · Semantica  • Build AI systems that can explain, trace, and justify every decision. Knowledge graphs, context graphs, reasoning engines, provenance, and governance for production AI.
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/xai-org/grok-build  — ⭐ 20530 · Rust · SpaceXAI's coding agent harness and TUI. Fullscreen, mouse interactive, extensible.

## Auto-classified 2026-07-20

- https://github.com/odysseus-dev/odysseus  → ai-agents/agent-platforms  ⭐83,314 · Python
- https://github.com/luongnv89/claude-howto  → tutorials/llm-en  ⭐40,035 · Python
- https://github.com/xai-org/grok-build  → ai-agents/agent-platforms  ⭐20,530 · Rust
- https://github.com/RyanCodrai/turbovec  → backend-infra/databases-analytics  ⭐13,612 · Python
- https://github.com/diet103/claude-code-infrastructure-showcase  → ai-agents/claude-code  ⭐9,927 · TypeScript
- https://github.com/bojieli/ai-agent-book  → tutorials/llm-cn  ⭐8,724 · Python
- https://github.com/braedonsaunders/codeflow  → rag-kg-memory/null  ⭐4,631 · HTML
- https://github.com/GiovanniPasq/agentic-rag-for-dummies  → tutorials/llm-en  ⭐3,768 · Jupyter Notebook
- https://github.com/Zleap-AI/SAG  → rag-kg-memory/null  ⭐2,171 · TypeScript
- https://github.com/palemoky/chinese-poetry-api  → misc/personal-projects  ⭐1,959 · Go
- https://github.com/MapleTechLabs/maple  → backend-infra/databases-analytics  ⭐1,539 · TypeScript
- https://github.com/semantica-agi/semantica  → rag-kg-memory/null  ⭐1,416 · Python
- https://github.com/ray-r-ren/agent-apprenticeship  → ai-agents/multi-orchestration  ⭐1,321 · Python
- https://github.com/HKUDS/OpenOPC  → ai-agents/agent-platforms  ⭐924 · Python
- https://github.com/galacean/effects-runtime  → frontend/components  ⭐735 · TypeScript
- https://github.com/lyon-industries/graphrag-workbench  → rag-kg-memory/null  ⭐711 · TypeScript
- https://github.com/edmcouncil/fibo  → finance-career/finance  ⭐630 · Shell
- https://github.com/MIT-MI/how2ai-course  → tutorials/llm-en  ⭐479 · SCSS
- https://github.com/MaibornWolff/codecharta  → rag-kg-memory/null  ⭐477 · TypeScript
- https://github.com/INCATools/ontology-development-kit  → rag-kg-memory/null  ⭐348 · Dockerfile

## Needs manual classification (2026-07-20)

- https://github.com/baojie/shiji-kb  — ⭐ 2,342 · HTML · (no description available — recurring, needs manual review)

## Newly starred (overflow) 2026-07-20

<!-- Top 20 were auto-classified. These 15 need manual review next run. -->
- https://github.com/lemma-work/lemma-platform  — ⭐ 331 · Python · The open-source workspace where humans and AI agents work as one team.
- https://github.com/KRR-Oxford/DeepOnto  — ⭐ 303 · Python · A package for ontology engineering with deep learning and language models.
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 250 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/biolink/kgx  — ⭐ 182 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/huangyun101/AI-Business-Hunter  — ⭐ 120 · — · 分享一些用 AI 来变现的小生意
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 111 · — · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 92 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive
- https://github.com/norahe0304-art/30x-video  — ⭐ 60 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React)
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for people, projects, and decisions you juggle
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 6 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · (no description)

<!-- synced 2026-07-27T12:30:19Z -->
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  — ⭐ 250 · Swift · A native Mac App for LLM fine-tuning on Apple Silicon — fully on-device, fully open source.
- https://github.com/HKUDS/AgentSpace  — ⭐ 862 · TypeScript · "AgentSpace: Human + Agents. One Team. One Workspace"
- https://github.com/OpenBMB/StaffDeck  — ⭐ 1065 · Python · Enterprise Digital Employee Platform
- https://github.com/OpenMinis/OpenMinis  — ⭐ 2112 · Swift · OpenMinis — The AI Agent app across platforms. Fully free and open source.
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/baojie/shiji-kb  — ⭐ 2366 · HTML · 
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 92 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive — track her, analyze like her, anticipate her next focus. Bilingual 中文/English.
- https://github.com/lemma-work/lemma-platform  — ⭐ 350 · Python · The open-source workspace where humans and AI agents work as one team.
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 114 · — · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/norahe0304-art/30x-video  — ⭐ 61 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React) with a 16-law taste codex — 12 brands, 12 worlds, zero templates.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · 
- https://github.com/zhayujie/CowAgent  — ⭐ 46151 · Python · Open-source super AI assistant & Agent Harness. Plans tasks, runs tools and skills, self-evolves with memory and knowledge. Multi-model, multi-channel. Lightweight, extensible, one-line install. (formerly chatgpt-on-wechat)

<!-- synced 2026-07-27T12:30:23Z -->
- https://github.com/FlagOpen/FlagEmbedding  — ⭐ 11990 · Python · Retrieval and Retrieval-augmented LLMs
- https://github.com/FoundationAgents/OpenManus  — ⭐ 57710 · Python · No fortress, purely open ground.  OpenManus is Coming.
- https://github.com/JerBouma/FinanceDatabase  — ⭐ 8263 · Python · This is a database of 300.000+ symbols containing Equities, ETFs, Funds, Indices, Currencies, Cryptocurrencies and Money Markets.
- https://github.com/KRR-Oxford/DeepOnto  — ⭐ 309 · Python · A package for ontology engineering with deep learning and language models.
- https://github.com/OpenBMB/PilotDeck  — ⭐ 3895 · TypeScript · Task-oriented AI Agent productivity platform
- https://github.com/OpenBMB/StaffDeck  — ⭐ 1065 · Python · Enterprise Digital Employee Platform
- https://github.com/OpenBMB/UltraRAG  — ⭐ 5664 · Python · A Low-Code MCP Framework for Building Complex and Innovative RAG Pipelines
- https://github.com/biolink/kgx  — ⭐ 183 · Python · KGX is a Python library for exchanging Knowledge Graphs
- https://github.com/block/buzz  — ⭐ 14171 · Rust · A hive mind communication platform
- https://github.com/hacksider/Deep-Live-Cam  — ⭐ 95299 · Python · real time face swap and one-click video deepfake with only a single image
- https://github.com/huangyun101/AI-Business-Hunter  — ⭐ 125 · — · 分享一些用 AI 来变现的小生意
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/oblien/openship  — ⭐ 8822 · TypeScript · Self-hosted deployment platform
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 8 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/refactoringhq/tolaria  — ⭐ 19029 · TypeScript · Desktop app to manage markdown knowledge bases
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/tirth8205/code-review-graph  — ⭐ 26816 · Python · Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows.
- https://github.com/usestrix/strix  — ⭐ 44796 · Python · Open-source AI penetration testing tool to find and fix your app’s vulnerabilities.

## Auto-classified 2026-07-27

- https://github.com/hacksider/Deep-Live-Cam  → multimedia/video  ⭐95,299 · Python
- https://github.com/FoundationAgents/OpenManus  → ai-agents/generic  ⭐57,710 · Python
- https://github.com/zhayujie/CowAgent  → ai-agents/agent-platforms  ⭐46,151 · Python
- https://github.com/usestrix/strix  → misc/osint  ⭐44,796 · Python
- https://github.com/tirth8205/code-review-graph  → rag-kg-memory/null  ⭐26,816 · Python
- https://github.com/refactoringhq/tolaria  → kb-productivity/note  ⭐19,029 · TypeScript
- https://github.com/block/buzz  → kb-productivity/note  ⭐14,171 · Rust
- https://github.com/FlagOpen/FlagEmbedding  → rag-kg-memory/null  ⭐11,990 · Python
- https://github.com/oblien/openship  → backend-infra/self-host  ⭐8,822 · TypeScript
- https://github.com/JerBouma/FinanceDatabase  → finance-career/finance  ⭐8,263 · Python
- https://github.com/OpenBMB/UltraRAG  → rag-kg-memory/null  ⭐5,664 · Python
- https://github.com/OpenBMB/PilotDeck  → ai-agents/agent-platforms  ⭐3,895 · TypeScript
- https://github.com/OpenMinis/OpenMinis  → ai-agents/agent-platforms  ⭐2,112 · Swift
- https://github.com/OpenBMB/StaffDeck  → ai-agents/agent-platforms  ⭐1,065 · Python
- https://github.com/HKUDS/AgentSpace  → ai-agents/agent-platforms  ⭐862 · TypeScript
- https://github.com/lemma-work/lemma-platform  → ai-agents/agent-platforms  ⭐350 · Python
- https://github.com/KRR-Oxford/DeepOnto  → rag-kg-memory/null  ⭐309 · Python
- https://github.com/Goekdeniz-Guelmez/MLX-LoRA-Studio  → backend-infra/ai-toolkit  ⭐250 · Swift
- https://github.com/biolink/kgx  → rag-kg-memory/null  ⭐183 · Python

## Needs manual classification (2026-07-27)

- https://github.com/baojie/shiji-kb  — ⭐ 2,366 · HTML · (no description available — recurring, needs manual review)

## Newly starred (overflow) 2026-07-27

<!-- Top 20 were auto-classified. These 12 need manual review next run. -->
- https://github.com/huangyun101/AI-Business-Hunter  — ⭐ 125 ·  · 分享一些用 AI 来变现的小生意
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 114 ·  · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 92 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive
- https://github.com/norahe0304-art/30x-video  — ⭐ 61 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React)
- https://github.com/opentsc/opentsc  — ⭐ 31 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle
- https://github.com/staru09/open-paxel  — ⭐ 24 · Python · AI native open-source analyser for your coding patterns
- https://github.com/binghe1980/cueflow  — ⭐ 14 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls
- https://github.com/opentsc/tsc  — ⭐ 12 ·  · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 8 ·  · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/olaxbt/serenity-skill  — ⭐ 5 · Python · (no description)

<!-- synced 2026-08-03T12:30:36Z -->
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/baojie/shiji-kb  — ⭐ 2381 · HTML · 
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/clockworklabs/SpacetimeDB  — ⭐ 24972 · Rust · Development at the speed of light
- https://github.com/lanfuli/aleabito-serenity-skills  — ⭐ 92 · JavaScript · Claude/Codex agent skills distilled from @aleabitoreddit (Serenity)'s full public archive — track her, analyze like her, anticipate her next focus. Bilingual 中文/English.
- https://github.com/langchain-ai/langgraph  — ⭐ 38759 · Python · Build resilient agents.
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 4 · Python · 
- https://github.com/modoojunko/awesome-novel-skill  — ⭐ 493 · Python · 让 AI agent成为你的小说创作搭档。从世界观搭建到角色塑造，从章节规划到正文写作，一步步陪你完成整部小说。
- https://github.com/mrbear1024/ai-content-kb  — ⭐ 114 · — · A review-first reference architecture for AI-assisted personal content knowledge systems
- https://github.com/norahe0304-art/30x-video  — ⭐ 61 · TypeScript · One URL in, an agency-grade launch video out. A Claude Code skill (Remotion + React) with a 16-law taste codex — 12 brands, 12 worlds, zero templates.
- https://github.com/olaxbt/serenity-skill  — ⭐ 6 · Python · 
- https://github.com/phuryn/pm-skills  — ⭐ 24812 · — · PM Skills Marketplace: 100+ agentic skills, commands, and plugins — from discovery to strategy, execution, launch, and growth.
- https://github.com/qiuyiwu1989-star/opendesign  — ⭐ 62 · JavaScript · Open standard for extracting reusable web design tokens via Playwright + Vision LLM. AI-ready.
- https://github.com/robbin/wechat-exporter  — ⭐ 188 · — · A Claude Code / Codex skill to export and decrypt WeChat (macOS) chat history into plaintext SQLite databases
- https://github.com/sgl-project/sglang  — ⭐ 31151 · Python · SGLang is a high-performance serving framework for large language models and multimodal models.
- https://github.com/worldwonderer/oh-story-claudecode  — ⭐ 4954 · JavaScript · 网文/小说写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程 | An all-in-one skill pack for long- and short-form web fiction.

<!-- synced 2026-08-03T12:30:41Z -->
- https://github.com/Untrivial-ai/agent-orchestrator  — ⭐ 8765 · Go · Agent IDE that enables you to manage fleets of coding agents. It comes with an agentic orchestrator that plans tasks, spawns agents, and autonomously handles CI fixes, merge conflicts, and code reviews.
- https://github.com/deerwork-ai/deer-workflow  — ⭐ 382 · TypeScript · An open-source graph engineering runtime that keeps orchestration in TypeScript and delegates semantic work to replaceable Agent runtimes.
- https://github.com/huangyun101/AI-Business-Hunter  — ⭐ 129 · — · 分享一些用 AI 来变现的小生意
- https://github.com/krishagarwal314/CodeJury  — ⭐ 135 · Python · Terminal-first, knowledge-grounded multi-agent software delivery pipeline: scope requirements, implement changes, run tests, and gate pull requests with deterministic QA and ensemble code review.
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/opentsc/opentsc  — ⭐ 32 · Python · A private, offline 'second brain' for the people, projects, and decisions you juggle — and it keeps score of whether your judgment was right. 本地私密的人际情报与决策记忆系统。
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 9 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/robbin/wechat-exporter  — ⭐ 188 · — · A Claude Code / Codex skill to export and decrypt WeChat (macOS) chat history into plaintext SQLite databases
- https://github.com/staru09/open-paxel  — ⭐ 26 · Python · AI native open-source analyser for your coding patterns 
- https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer  — ⭐ 1924 · — · FDE（前沿部署工程师）从零入门指南（基于范冰《增长黑客》原书框架）
- https://github.com/yc-software/qm  — ⭐ 8448 · TypeScript · Multiplayer agent harness for work

## Auto-classified 2026-08-03

- https://github.com/langchain-ai/langgraph  → ai-agents/multi-orchestration  ⭐38,759 · Python
- https://github.com/sgl-project/sglang  → backend-infra/llm-gateway  ⭐31,151 · Python
- https://github.com/clockworklabs/SpacetimeDB  → backend-infra/databases-analytics  ⭐24,972 · Rust
- https://github.com/phuryn/pm-skills  → skills-mcp/null  ⭐24,812 · —
- https://github.com/Untrivial-ai/agent-orchestrator  → ai-agents/multi-orchestration  ⭐8,765 · Go
- https://github.com/yc-software/qm  → ai-agents/agent-platforms  ⭐8,448 · TypeScript
- https://github.com/worldwonderer/oh-story-claudecode  → skills-mcp/null  ⭐4,954 · JavaScript
- https://github.com/baojie/shiji-kb  → rag-kg-memory/null  ⭐2,381 · HTML
- https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer  → finance-career/career  ⭐1,924 · —
- https://github.com/modoojunko/awesome-novel-skill  → skills-mcp/null  ⭐493 · Python
- https://github.com/deerwork-ai/deer-workflow  → ai-agents/multi-orchestration  ⭐382 · TypeScript
- https://github.com/robbin/wechat-exporter  → skills-mcp/null  ⭐188 · —
- https://github.com/krishagarwal314/CodeJury  → ai-agents/multi-orchestration  ⭐135 · Python
- https://github.com/huangyun101/AI-Business-Hunter  → finance-career/indie-hacker  ⭐129 · —
- https://github.com/mrbear1024/ai-content-kb  → rag-kg-memory/null  ⭐114 · —
- https://github.com/lanfuli/aleabito-serenity-skills  → skills-mcp/null  ⭐92 · JavaScript
- https://github.com/qiuyiwu1989-star/opendesign  → frontend/components  ⭐62 · JavaScript
- https://github.com/norahe0304-art/30x-video  → skills-mcp/null  ⭐61 · TypeScript
- https://github.com/opentsc/opentsc  → rag-kg-memory/null  ⭐32 · Python
- https://github.com/staru09/open-paxel  → ai-agents/generic  ⭐26 · Python

## Newly starred (overflow) 2026-08-03

<!-- Top 20 were auto-classified. These 7 need manual review next run. -->
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · macOS 刘海提词器，语音识别自动跟随滚动
- https://github.com/opentsc/tsc  — ⭐ 12 · — · 薄壳公司白皮书：一人用 AI agent 运营大型自进化组织
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server for Revit automation via APS Automation API
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 9 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight agent-facing routed knowledge base skill
- https://github.com/olaxbt/serenity-skill  — ⭐ 6 · Python · (no description)
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 4 · Python · (no description)

<!-- synced 2026-08-10T10:22:03Z -->
- https://github.com/AMAP-ML/LongHorizon-Harness  — ⭐ 532 · Python · The long-horizon computer-use harness. Run AI agents across desktop apps and the CLI for extended periods while preserving task state and making reliable progress on complex workflows. Features fresh-context execution, durable verified state, independent auditing, recoverable progress, and native Claude Code / Codex / OpenClaw integration.
- https://github.com/GVCLab/PersonaLive  — ⭐ 3511 · Python · [CVPR 2026] PersonaLive! : Expressive Portrait Image Animation for Live Streaming
- https://github.com/HKUDS/AutoAgent  — ⭐ 9731 · Python · "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/h4ckf0r0day/obscura  — ⭐ 21063 · Rust · The headless browser for AI agents and web scraping
- https://github.com/huangruiteng/loopx  — ⭐ 3854 · Python · Lightweight loop engineering state kernel for long-running AI agent teams. Agent-loop agnostic across Codex, Claude Code, and other coding agents, with durable goals, quota-aware auto-wake, executable todos, evidence logs, and verifiable handoffs.
- https://github.com/huangserva/ComfyUI_MiniMaxH3_Director  — ⭐ 460 · — · ComfyUI MiniMax H3 Director workflow
- https://github.com/langchain-ai/open_deep_research  — ⭐ 12580 · Python · 
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 5 · Python · 
- https://github.com/microsoft/Orchard  — ⭐ 427 · — · Orchard: An Open-Source Agentic Modeling Framework
- https://github.com/modoojunko/awesome-novel-agent  — ⭐ 554 · Python · 让 AI agent成为你的小说创作搭档。从世界观搭建到角色塑造，从章节规划到正文写作，一步步陪你完成整部小说。
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · 
- https://github.com/zosmaai/pi-llm-wiki  — ⭐ 484 · TypeScript · Self-maintaining, Obsidian-compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds. Native Open Knowledge Format (OKF) v0.2.

<!-- synced 2026-08-10T10:22:07Z -->
- https://github.com/KnockOutEZ/wigolo  — ⭐ 4461 · TypeScript · The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.
- https://github.com/MervinPraison/PraisonAI  — ⭐ 8794 · Python · PraisonAI 🦞 — Hire a 24/7 AI Workforce. Stop writing boilerplate and start shipping autonomous self-improving agents that research, plan, code, and execute tasks. Deployed in 5 lines of code with built-in memory, RAG, and support for 100+ LLMs.
- https://github.com/Nutlope/logocreator  — ⭐ 8001 · TypeScript · A free + OSS logo generator powered by Flux on Together AI
- https://github.com/PrimeIntellect-ai/prime-agent  — ⭐ 12371 · TypeScript · A self-improving RLM agent for coding workflows and long-running autonomous tasks.
- https://github.com/TencentCloud/Octop  — ⭐ 1056 · Python · A smarter, self-hosted AI assistant — multi-user, multi-agent.
- https://github.com/ethanjlimgit/android-action-kernel  — ⭐ 1704 · Python · 
- https://github.com/frappe/hrms  — ⭐ 8546 · Python · Open Source HR and Payroll Software
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 10 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/roboflow/supervision  — ⭐ 49229 · Python · We write your reusable computer vision tools. 💜
- https://github.com/taosdata/TDengine  — ⭐ 25050 · C · High-performance, scalable time-series database designed for Industrial IoT (IIoT) scenarios
- https://github.com/zarazhangrui/codebase-to-course  — ⭐ 5362 · CSS · A Claude Code skill that turns any codebase into a beautiful, interactive single-page HTML course for non-technical vibe coders.

## Auto-classified 2026-08-10

- https://github.com/roboflow/supervision  → multimedia/image  ⭐49,229 · Python
- https://github.com/taosdata/TDengine  → backend-infra/databases-analytics  ⭐25,050 · C
- https://github.com/h4ckf0r0day/obscura  → browser-automation/null  ⭐21,063 · Rust
- https://github.com/langchain-ai/open_deep_research  → rag-kg-memory/null  ⭐12,580 · Python
- https://github.com/PrimeIntellect-ai/prime-agent  → ai-agents/generic  ⭐12,371 · TypeScript
- https://github.com/HKUDS/AutoAgent  → ai-agents/agent-platforms  ⭐9,731 · Python
- https://github.com/MervinPraison/PraisonAI  → ai-agents/agent-platforms  ⭐8,794 · Python
- https://github.com/frappe/hrms  → backend-infra/self-host  ⭐8,546 · Python
- https://github.com/Nutlope/logocreator  → multimedia/image  ⭐8,001 · TypeScript
- https://github.com/zarazhangrui/codebase-to-course  → skills-mcp/null  ⭐5,362 · CSS
- https://github.com/KnockOutEZ/wigolo  → skills-mcp/null  ⭐4,461 · TypeScript
- https://github.com/huangruiteng/loopx  → ai-agents/multi-orchestration  ⭐3,854 · Python
- https://github.com/GVCLab/PersonaLive  → multimedia/video  ⭐3,511 · Python
- https://github.com/TencentCloud/Octop  → ai-agents/agent-platforms  ⭐1,056 · Python
- https://github.com/modoojunko/awesome-novel-agent  → skills-mcp/null  ⭐554 · Python
- https://github.com/AMAP-ML/LongHorizon-Harness  → ai-agents/claude-code  ⭐532 · Python
- https://github.com/zosmaai/pi-llm-wiki  → rag-kg-memory/null  ⭐484 · TypeScript
- https://github.com/huangserva/ComfyUI_MiniMaxH3_Director  → multimedia/video  ⭐460 · (none)
- https://github.com/microsoft/Orchard  → ai-agents/generic  ⭐427 · (none)

## Needs manual classification (2026-08-10)

- https://github.com/ethanjlimgit/android-action-kernel  — ⭐ 1,704 · Python · (no description available — needs manual review)

## Newly starred (overflow) 2026-08-10

<!-- Top 20 were auto-classified (1 of those sent to Needs manual classification). These 7 need manual review next run. -->
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — macOS 刘海提词器，语音识别自动跟随滚动
- https://github.com/opentsc/tsc  — ⭐ 12 · — · 薄壳公司白皮书：一人用 AI agent 运营大型自进化组织
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 10 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server for Revit automation via APS Automation API
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight agent-facing routed knowledge base skill
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · (no description)
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 5 · Python · (no description)

<!-- synced 2026-08-17T09:48:58Z -->
- https://github.com/MengTo/kage  — ⭐ 1064 · HTML · An interactive five-chapter night walk through a Kyoto mountain temple, rendered live in Three.js.
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/herdrdev/herdr  — ⭐ 29902 · Rust · the runtime your coding agents live on
- https://github.com/img2threejs/img2threejs  — ⭐ 12017 · Python · Rebuild the object in a reference image as a code-only, procedural, quality-gated, animation-ready Three.js model. Token-efficient image-to-3D.
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 6 · Python · 
- https://github.com/mindscale-noah/MindMemOS  — ⭐ 937 · Python · 
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · 
- https://github.com/pbakaus/impeccable  — ⭐ 59786 · JavaScript · The design language that makes your AI harness better at design.
- https://github.com/rampstackco/claude-skills  — ⭐ 552 · Python · Stack-agnostic Claude Skills covering the full website lifecycle: brand, design, content, SEO, dev, ops, growth, and research. Build, ship, audit, optimize.
- https://github.com/tamnd/kage  — ⭐ 3237 · Go · Shadow any website for offline viewing, with the JavaScript stripped out

<!-- synced 2026-08-17T09:49:02Z -->
- https://github.com/KKKKhazix/human-writing  — ⭐ 2800 · Python · 让 AI 写的中文读起来像一个具体的人在说话。通用创作与改稿 Skill，开箱即用。
- https://github.com/ReScienceLab/opc-skills  — ⭐ 1573 · Python · Agent Skills for Solopreneurs
- https://github.com/YouMind-OpenLab/ai-image-prompts-skill  — ⭐ 661 · TypeScript · AI Image Prompts — 10,000+ curated prompts for any model. Works with Nano Banana Pro, Nano Banana 2, Seedream 5.0, GPT Image 1.5, Midjourney, DALL-E, Flux, Stable Diffusion, and more.
- https://github.com/alchaincyf/deepseek-harness-orange-book  — ⭐ 938 · HTML · DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML免费下载
- https://github.com/antirez/h3.c  — ⭐ 2105 · C · MiniMax H3 inference engine for Mac computers
- https://github.com/anywhere-labs/deepseek-harness-desktop  — ⭐ 10910 · TypeScript · 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。
- https://github.com/assistant-ui/assistant-ui  — ⭐ 11693 · TypeScript · Typescript/React Library for AI Chat💬🚀
- https://github.com/codeman008/Financial_freedom  — ⭐ 2876 · — · Technical guide to making money and investing（最全赚钱投资指南）
- https://github.com/earendil-works/pi  — ⭐ 92027 · TypeScript · AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI
- https://github.com/embeddings-benchmark/mteb  — ⭐ 3396 · Python · MTEB: State-of-the-art evaluation of embeddings across languages and modalities
- https://github.com/ethanjlimgit/android-action-kernel  — ⭐ 1704 · Python · 
- https://github.com/hanliang97/MatrixMedia  — ⭐ 445 · JavaScript · 视频矩阵工具 vue electorn puppeteer 批量发布 视频到各个视频平台 自媒体 矩阵 抖音 小红书 头条 视频号 快手等 ai 自动化 cli
- https://github.com/herdrdev/herdr  — ⭐ 29902 · Rust · the runtime your coding agents live on
- https://github.com/img2threejs/img2threejs  — ⭐ 12017 · Python · Rebuild the object in a reference image as a code-only, procedural, quality-gated, animation-ready Three.js model. Token-efficient image-to-3D.
- https://github.com/leaperone/MultiPost-Extension  — ⭐ 3046 · TypeScript · A browser extension that helps users publish content to multiple social media platforms with one click.
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/opensandbox-group/OpenSandbox  — ⭐ 14088 · Python · Secure, Fast, and Extensible Sandbox runtime for AI agents.
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/petergyang/no-ai-slop  — ⭐ 5210 · Python · Removes 20+ patterns of AI slop from any piece of writing.
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 12 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/swjybky/deepwrite  — ⭐ 200 · TypeScript · 深度专门用于写作的Harness智能体
- https://github.com/thebuggeddev/promise-wall  — ⭐ 63 · HTML · A digital promise wall developed in three.js using Fable 5
- https://github.com/tw93/Kami  — ⭐ 10638 · HTML · 👩‍🚒 Good content deserves good paper.
- https://github.com/xai-org/x-algorithm  — ⭐ 31615 · Rust · Algorithm powering the For You feed on X
- https://github.com/ysharma3501/LuxTTS  — ⭐ 5111 · Python · A high-quality rapid TTS voice cloning model that reaches speeds of 150x realtime.


## Auto-classified 2026-08-17

- https://github.com/earendil-works/pi  → ai-agents/agent-platforms  ⭐92,027 · TypeScript
- https://github.com/pbakaus/impeccable  → skills-mcp/null  ⭐59,786 · JavaScript
- https://github.com/xai-org/x-algorithm  → tutorials/build-your-own  ⭐31,615 · Rust
- https://github.com/herdrdev/herdr  → ai-agents/agent-platforms  ⭐29,902 · Rust
- https://github.com/opensandbox-group/OpenSandbox  → backend-infra/self-host  ⭐14,088 · Python
- https://github.com/img2threejs/img2threejs  → multimedia/image  ⭐12,017 · Python
- https://github.com/assistant-ui/assistant-ui  → frontend/components  ⭐11,693 · TypeScript
- https://github.com/anywhere-labs/deepseek-harness-desktop  → ai-agents/agent-platforms  ⭐10,910 · TypeScript
- https://github.com/tw93/Kami  → kb-productivity/note  ⭐10,638 · HTML
- https://github.com/petergyang/no-ai-slop  → skills-mcp/null  ⭐5,210 · Python
- https://github.com/ysharma3501/LuxTTS  → multimedia/audio  ⭐5,111 · Python
- https://github.com/embeddings-benchmark/mteb  → rag-kg-memory/null  ⭐3,396 · Python
- https://github.com/tamnd/kage  → crawler-publish/crawler  ⭐3,237 · Go
- https://github.com/leaperone/MultiPost-Extension  → crawler-publish/publish  ⭐3,046 · TypeScript
- https://github.com/codeman008/Financial_freedom  → finance-career/indie-hacker  ⭐2,876 · —
- https://github.com/KKKKhazix/human-writing  → skills-mcp/null  ⭐2,800 · Python
- https://github.com/antirez/h3.c  → backend-infra/ai-toolkit  ⭐2,105 · C
- https://github.com/ethanjlimgit/android-action-kernel  → ai-agents/generic  ⭐1,704 · Python
- https://github.com/ReScienceLab/opc-skills  → skills-mcp/null  ⭐1,573 · Python
- https://github.com/MengTo/kage  → misc/personal-projects  ⭐1,064 · HTML

## Newly starred (overflow) 2026-08-17

<!-- Top 20 were auto-classified. These 14 need manual review next run. -->
- https://github.com/alchaincyf/deepseek-harness-orange-book  — ⭐ 938 · HTML · DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML
- https://github.com/mindscale-noah/MindMemOS  — ⭐ 937 · Python · (no description available)
- https://github.com/YouMind-OpenLab/ai-image-prompts-skill  — ⭐ 661 · TypeScript · AI Image Prompts — 10,000+ curated prompts for any model. Works with Nano Banana
- https://github.com/rampstackco/claude-skills  — ⭐ 552 · Python · Stack-agnostic Claude Skills covering the full website lifecycle: brand, design,
- https://github.com/hanliang97/MatrixMedia  — ⭐ 445 · JavaScript · 视频矩阵工具 vue electorn puppeteer 批量发布 视频到各个视频平台 自媒体 矩阵 抖音 小红书 头条 视频号 快手等 ai 自动化 cli
- https://github.com/swjybky/deepwrite  — ⭐ 200 · TypeScript · 深度专门用于写作的Harness智能体
- https://github.com/thebuggeddev/promise-wall  — ⭐ 63 · HTML · A digital promise wall developed in three.js using Fable 5
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and 
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organizat
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 12 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · (no description available)
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents d
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 6 · Python · (no description available)

<!-- synced 2026-08-24T09:53:57Z -->
- https://github.com/EZ-VAI/outsider  — ⭐ 2 · JavaScript · Open-source controller and tamper-evident evidence layer for long-running AI workers
- https://github.com/MengTo/threeui  — ⭐ 3218 · HTML · Open-source ThreeUI Community catalog with live interactive components and complete Community source.
- https://github.com/QuentinFuxa/WhisperLiveKit  — ⭐ 10907 · Python · Real-time, local speech-to-text with streaming ASR, speaker diarization, translation, and OpenAI/Deepgram-compatible APIs.
- https://github.com/StarTrail-org/PixelRAG  — ⭐ 9687 · Python · The end of web parsing. The beginning of scalable pixel-native search. link: https://pixelrag.ai/
- https://github.com/VectifyAI/OpenKB  — ⭐ 3837 · Python · OpenKB: Open LLM Knowledge Base
- https://github.com/Vincentwei1021/video-shotcraft  — ⭐ 6204 · TypeScript · AI video skill for Claude Code & Codex — cinematic product videos with Remotion: 152 shot recipe cards, 209 motion previews, a production-ready template
- https://github.com/WecomTeam/wecom-cli  — ⭐ 2951 · Rust · 企业微信开放平台命令行工具 — 让人类和 AI Agent 都能在终端中操作企业微信
- https://github.com/antlionguard/DilMesh  — ⭐ 4 · TypeScript · Live Instant Subtitles & Real-time Multi-language Translation
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrolls to follow you. 会听你朗读、自动跟随滚动的 Mac 刘海提词器。
- https://github.com/bytedance/UI-TARS-desktop  — ⭐ 38701 · TypeScript · The Open-Source Multimodal AI Agent Stack: Connecting Cutting-Edge AI Models and Agent Infra
- https://github.com/dataPro-lgtm/fde-interview-fieldbook  — ⭐ 30 · Python · Source-backed, production-first FDE interview fieldbook with cases, scorecards, and current role research.
- https://github.com/fastapi-practices/ai_mcp  — ⭐ 1 · Python · FastAPI Best Architecture ai mcp 插件
- https://github.com/g0v/OpenTransLive  — ⭐ 36 · Python · An open-source, broadcast-style live translation framework — built for event organizers.
- https://github.com/harry0703/AudioNotes  — ⭐ 2458 · Python · 快速提取音视频内容，整理成一份结构化的markdown笔记
- https://github.com/infiniflow/ragflow  — ⭐ 89141 · Go · RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs
- https://github.com/kirodotdev/KiroCrew  — ⭐ 3207 · Python · A persistent workspace for development work that self-improves and continues beyond one session.
- https://github.com/langfuse/langfuse  — ⭐ 33616 · TypeScript · 🪢 Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM, and more. 🍊YC W23 
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 9 · Python · 
- https://github.com/mindscale-noah/MindMemOS  — ⭐ 949 · Python · 
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · 
- https://github.com/openai/codex  — ⭐ 116502 · Rust · Lightweight coding agent that runs in your terminal
- https://github.com/payloadcms/payload  — ⭐ 44368 · TypeScript · Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Payload as a headless CMS or for building powerful applications.
- https://github.com/rampstackco/claude-skills  — ⭐ 697 · Python · Stack-agnostic Claude Skills covering the full website lifecycle: brand, design, content, SEO, dev, ops, growth, and research. Build, ship, audit, optimize.
- https://github.com/simular-ai/Agent-S  — ⭐ 12188 · Python · Agent S: an open agentic framework that uses computers like a human
- https://github.com/titanwings/distilly  — ⭐ 23891 · Python · Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.

<!-- synced 2026-08-24T09:54:02Z -->
- https://github.com/YouMind-OpenLab/ai-image-prompts-skill  — ⭐ 687 · TypeScript · AI Image Prompts — 10,000+ curated prompts for any model. Works with Nano Banana Pro, Nano Banana 2, Seedream 5.0, GPT Image 1.5, Midjourney, DALL-E, Flux, Stable Diffusion, and more.
- https://github.com/alchaincyf/deepseek-harness-orange-book  — ⭐ 1173 · HTML · DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML免费下载
- https://github.com/cloudflare/cloudflare-os  — ⭐ 9047 · TypeScript · Agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with your company’s context and systems.
- https://github.com/davidahmann/fde-guide  — ⭐ 60 · JavaScript · Forward deployed engineering guide for production AI systems: value, architecture, evals, security, deployment, and operations.
- https://github.com/docling-project/docling  — ⭐ 65467 · Python · Get your documents ready for gen AI
- https://github.com/goday-org/FDE-Handbook  — ⭐ 14 · Python · A production-ready handbook for Forward Deployed Engineers (FDEs). Covers enterprise landing zones, VPC Service Controls, data auditing, multi-agent orchestration, and LLM evaluation (中英双语).
- https://github.com/hanliang97/MatrixMedia  — ⭐ 694 · JavaScript · 视频矩阵工具 vue electorn puppeteer 批量发布 视频到各个视频平台 自媒体 矩阵 抖音 小红书 头条 视频号 快手等 ai 自动化 cli
- https://github.com/iAmCorey/Wake  — ⭐ 573 · Rust · Every coding-agent session on your Mac in one place — browse, search, resume. Rust + GPUI.
- https://github.com/infiniflow/ragflow  — ⭐ 89141 · Go · RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable project memory.
- https://github.com/mallahyari/ml-practical-usecases  — ⭐ 1297 · — · A database of 650 Machine Learning (ML) system design case studies from 100+ companies.
- https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory  — ⭐ 190 · — · The 2025 consolidation of AI use case inventories across U.S. Federal agencies.
- https://github.com/opentsc/tsc  — ⭐ 12 · — · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one person with AI agents. 薄壳公司白皮书。
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 14 · — · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/swjybky/deepwrite  — ⭐ 243 · TypeScript · 深度专门用于写作的Harness智能体
- https://github.com/thebuggeddev/promise-wall  — ⭐ 69 · HTML · A digital promise wall developed in three.js using Fable 5
- https://github.com/titanwings/distilly  — ⭐ 23891 · Python · Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.

## Auto-classified 2026-08-24

- https://github.com/openai/codex  → ai-agents/codex  ⭐116,502 · Rust
- https://github.com/infiniflow/ragflow  → rag-kg-memory/null  ⭐89,141 · Go
- https://github.com/docling-project/docling  → rag-kg-memory/null  ⭐65,467 · Python
- https://github.com/payloadcms/payload  → backend-infra/self-host  ⭐44,368 · TypeScript
- https://github.com/bytedance/UI-TARS-desktop  → ai-agents/agent-platforms  ⭐38,701 · TypeScript
- https://github.com/langfuse/langfuse  → backend-infra/ai-toolkit  ⭐33,616 · TypeScript
- https://github.com/titanwings/distilly  → skills-mcp/null  ⭐23,891 · Python
- https://github.com/simular-ai/Agent-S  → ai-agents/generic  ⭐12,188 · Python
- https://github.com/QuentinFuxa/WhisperLiveKit  → multimedia/audio  ⭐10,907 · Python
- https://github.com/StarTrail-org/PixelRAG  → rag-kg-memory/null  ⭐9,687 · Python
- https://github.com/cloudflare/cloudflare-os  → ai-agents/agent-platforms  ⭐9,047 · TypeScript
- https://github.com/Vincentwei1021/video-shotcraft  → skills-mcp/null  ⭐6,204 · TypeScript
- https://github.com/VectifyAI/OpenKB  → rag-kg-memory/null  ⭐3,837 · Python
- https://github.com/MengTo/threeui  → frontend/components  ⭐3,218 · HTML
- https://github.com/kirodotdev/KiroCrew  → ai-agents/agent-platforms  ⭐3,207 · Python
- https://github.com/WecomTeam/wecom-cli  → skills-mcp/null  ⭐2,951 · Rust
- https://github.com/harry0703/AudioNotes  → multimedia/audio  ⭐2,458 · Python
- https://github.com/mallahyari/ml-practical-usecases  → tutorials/system-design  ⭐1,297 · 
- https://github.com/alchaincyf/deepseek-harness-orange-book  → tutorials/context-vibe  ⭐1,173 · HTML

## Needs manual classification (2026-08-24)

- https://github.com/mindscale-noah/MindMemOS  — ⭐ 949 · Python · (no description available — needs manual review)

## Newly starred (overflow) 2026-08-24

<!-- Top 19 were auto-classified (1 sent to Needs manual classification). These 21 need manual review next run. -->
- https://github.com/rampstackco/claude-skills  — ⭐ 697 · Python · Stack-agnostic Claude Skills covering the full website lifecycle: brand, design, content, 
- https://github.com/hanliang97/MatrixMedia  — ⭐ 694 · JavaScript · 视频矩阵工具，批量发布视频到抖音、小红书、头条、视频号、快手等平台，AI 自动化 CLI
- https://github.com/YouMind-OpenLab/ai-image-prompts-skill  — ⭐ 687 · TypeScript · AI Image Prompts — 10,000+ curated prompts for any model.
- https://github.com/iAmCorey/Wake  — ⭐ 573 · Rust · Every coding-agent session on your Mac in one place — browse, search, resume.
- https://github.com/swjybky/deepwrite  — ⭐ 243 · TypeScript · 深度专门用于写作的Harness智能体
- https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory  — ⭐ 190 · The 2025 consolidation of AI use case inventories across U.S. Federal agencies.
- https://github.com/thebuggeddev/promise-wall  — ⭐ 69 · HTML · A digital promise wall developed in three.js using Fable 5
- https://github.com/davidahmann/fde-guide  — ⭐ 60 · JavaScript · Forward deployed engineering guide for production AI systems.
- https://github.com/g0v/OpenTransLive  — ⭐ 36 · Python · An open-source, broadcast-style live translation framework — built for event organizers.
- https://github.com/dataPro-lgtm/fde-interview-fieldbook  — ⭐ 30 · Python · Source-backed, production-first FDE interview fieldbook with cases, scorecards, and curren
- https://github.com/binghe1980/cueflow  — ⭐ 15 · Swift · CueFlow (随读) — a notch-adjacent macOS teleprompter that listens as you read and auto-scrol
- https://github.com/goday-org/FDE-Handbook  — ⭐ 14 · Python · A production-ready handbook for Forward Deployed Engineers (FDEs).
- https://github.com/qbdx-hub/sunzi-bingfa-skill  — ⭐ 14 · AI skill pack distilled from Sunzi Bingfa for strategy and decision making.
- https://github.com/opentsc/tsc  — ⭐ 12 · The Thin-Shell Company: a whitepaper on running a large, self-evolving organization as one
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  — ⭐ 9 · C# · Sample MCP server to automate Revit via Automation API using SSA
- https://github.com/lyrcsjy/wechat-decrypt  — ⭐ 9 · Python · (no description available)
- https://github.com/olaxbt/serenity-skill  — ⭐ 7 · Python · (no description available)
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  — ⭐ 7 · Python · Lightweight, agent-facing routed knowledge base skill that gives coding agents durable pro
- https://github.com/antlionguard/DilMesh  — ⭐ 4 · TypeScript · Live Instant Subtitles & Real-time Multi-language Translation
- https://github.com/EZ-VAI/outsider  — ⭐ 2 · JavaScript · Open-source controller and tamper-evident evidence layer for long-running AI workers
- https://github.com/fastapi-practices/ai_mcp  — ⭐ 1 · Python · FastAPI Best Architecture ai mcp 插件

## Newly starred (overflow) 2026-08-31

<!-- Top 20 were auto-classified. These 2 need manual review next run. -->
- https://github.com/EZ-VAI/outsider  — ⭐ 2 · JavaScript · Open-source controller and tamper-evident evidence layer for long-running AI workers
- https://github.com/fastapi-practices/ai_mcp  — ⭐ 1 · Python · FastAPI Best Architecture ai mcp 插件

## Auto-classified 2026-08-31

- https://github.com/mindscale-noah/MindMemOS  → rag-kg-memory/null  ⭐949 · Python
- https://github.com/rampstackco/claude-skills  → skills-mcp/null  ⭐697 · Python
- https://github.com/hanliang97/MatrixMedia  → crawler-publish/publish  ⭐694 · JavaScript
- https://github.com/YouMind-OpenLab/ai-image-prompts-skill  → skills-mcp/null  ⭐687 · TypeScript
- https://github.com/iAmCorey/Wake  → ai-agents/agent-platforms  ⭐573 · Rust
- https://github.com/swjybky/deepwrite  → ai-agents/generic  ⭐243 · TypeScript
- https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory  → tutorials/awesome-lists  ⭐190 · none
- https://github.com/thebuggeddev/promise-wall  → misc/personal-projects  ⭐69 · HTML
- https://github.com/davidahmann/fde-guide  → tutorials/system-design  ⭐60 · JavaScript
- https://github.com/g0v/OpenTransLive  → multimedia/audio  ⭐36 · Python
- https://github.com/dataPro-lgtm/fde-interview-fieldbook  → finance-career/career  ⭐30 · Python
- https://github.com/binghe1980/cueflow  → frontend/desktop  ⭐15 · Swift
- https://github.com/goday-org/FDE-Handbook  → tutorials/system-design  ⭐14 · Python
- https://github.com/qbdx-hub/sunzi-bingfa-skill  → skills-mcp/null  ⭐14 · none
- https://github.com/opentsc/tsc  → finance-career/indie-hacker  ⭐12 · none
- https://github.com/autodesk-platform-services/aps-sample-mcp-server-revit-automation  → skills-mcp/null  ⭐9 · C#
- https://github.com/lyrcsjy/wechat-decrypt  → misc/osint  ⭐9 · Python
- https://github.com/lesliebiubiubiu/agent-context-kb-skill  → skills-mcp/null  ⭐7 · Python
- https://github.com/olaxbt/serenity-skill  → skills-mcp/null  ⭐7 · Python
- https://github.com/antlionguard/DilMesh  → multimedia/audio  ⭐4 · TypeScript
