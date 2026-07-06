# Solo Unicorn Toolbox 🛠️

> 一份双语整理的 **584 个 GitHub 项目** 目录——AI agents、coding harnesses、RAG、多媒体、教程等等——汇总自 GitHub stars、Twitter bookmarks 和小红书收藏。

> English: [README.md](./README.md) · 维护说明：[CLAUDE.md](./CLAUDE.md)

### 为什么做这个

同一类工具老是散落在 GitHub、X/Twitter、小红书等不同平台的收藏里，想找的时候永远翻不到。这个 repo 就是我会真的回头查的那个索引。

### 里面有什么

- **共 584 个项目**，分布在 12 个大类——见下方目录
- 两个 GitHub 账号的 stars：`JesseQin123`（个人）+ `jesseqin-kamiwaza`（工作）
- Twitter bookmarks 整理——从我在 X 收藏的推文线程里手动挑出的 GitHub URL
- 每周自动同步：[`.github/workflows/sync-stars.yml`](.github/workflows/sync-stars.yml)

### 每行表格怎么看

`仓库 · 描述 · 语言 · ⭐ Star 数 · Topic 标签`。每个（子）分类内部按 star 数倒序。⚠️ 标记的是已被原作者 archive 的项目。

### 怎么加新条目

把 GitHub URL 粘到 [`inbox.md`](./inbox.md) → 跑 `scripts/enrich-inbox.sh` → 在 [`data/manifest.json`](./data/manifest.json) 里写分类 → 跑 `python3 scripts/build-readme.py`。完整流程见 [`CLAUDE.md`](./CLAUDE.md)。

---

## 目录

- [🤖 AI 智能体与编码助手生态 (101)](#-ai-智能体与编码助手生态)
- [🛠 智能体 Skills 与 MCP (74)](#-智能体-skills-与-mcp)
- [🌐 浏览器与网页自动化 (12)](#-浏览器与网页自动化)
- [🧠 RAG / 知识图谱 / 记忆 (50)](#-rag--知识图谱--记忆)
- [🎨 多媒体 AI (64)](#-多媒体-ai)
- [📊 爬虫与内容发布 (31)](#-爬虫与内容发布)
- [💻 前端模板与 UI (26)](#-前端模板与-ui)
- [🏗 后端与基础设施 (56)](#-后端与基础设施)
- [📝 知识库与个人生产力 (25)](#-知识库与个人生产力)
- [💰 金融、职业与独立开发者 (32)](#-金融职业与独立开发者)
- [🎓 教程与精选列表 (80)](#-教程与精选列表)
- [🌈 杂项 / 生活娱乐 (33)](#-杂项--生活娱乐)

---

## 🤖 AI 智能体与编码助手生态

### Claude Code 生态 (17)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | agent harness 性能优化系统：skills、本能、记忆、安全、research-first 开发，兼容 Claude Code、Codex、Opencode、Cursor 等主流 coding agent。 | JavaScript | 226.5k | `ai-agents` `anthropic` `claude` `claude-code` |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | agent harness 性能优化系统：skills、本能、记忆、安全、research-first 开发，覆盖 Claude Code/Codex/Opencode/Cursor 等 | JavaScript | 186.2k | `ai-agents` `anthropic` `claude` `claude-code` |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Garry Tan 的 Claude Code 配置：23 个工具，扮演 CEO、Designer、Eng Manager、Release Manager、Doc Engineer、QA | TypeScript | 119.9k |  |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies | Rust | 68.8k | `agentic-coding` `ai-coding` `anthropic` `claude-code` |
| [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) ⚠️ | Claude Code 的 meta-prompting、context engineering 与 spec-driven development 系统 | JavaScript | 64.7k | `claude-code` `context-engineering` `meta-prompting` `spec-driven-development` |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill：给 AI 注入审美，避免生成粗糙、千篇一律的内容 | JavaScript | 58.3k | `agent` `ai` `claude` `claude-code` |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Code | Python | 28.5k | `anthropic` `anthropic-claude` `claude` `claude-code` |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 将 Claude Code 打造为完整游戏开发工作室，含 49 个 AI agent、72 个 workflow skill 及模拟真实工作室层级的协作系统 | Shell | 22.7k | `ai-agents` `ai-assisted-development` `anthropic` `claude` |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness | Rust | 8.2k | `ai` `ai-agent` `ai-coding-agent` `claude` |
| [breaking-brake/cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio) | CC Workflow Studio | TypeScript | 5.3k | `agent-skills` `claude-code` `mcp-tools` `slash-commands` |
| [matt1398/claude-devtools](https://github.com/matt1398/claude-devtools) | Claude Code 的 DevTools：可视化检查 session 日志、tool calls、token 用量、subagents 与 context window | TypeScript | 3.7k | `ai` `ai-agent` `ai-debugging` `ai-tools` |
| [ZeframLou/call-me](https://github.com/ZeframLou/call-me) | Minimal plugin that lets Claude Code call you on the phone. | TypeScript | 2.6k |  |
| [1rgs/nanocode](https://github.com/1rgs/nanocode) | Minimal Claude Code alternative. Single Python file, zero dependencies, ~250 lines. | Python | 2.5k |  |
| [mikekelly/claude-sneakpeek](https://github.com/mikekelly/claude-sneakpeek) | 解锁 feature-flagged 能力（如 swarm mode）的 Claude Code 平行版 | TypeScript | 1.1k |  |
| [op7418/Claude-to-IM](https://github.com/op7418/Claude-to-IM) | Host-agnostic bridge connecting Claude Code SDK to IM platforms (Telegram, Discord, Feishu) | TypeScript | 472 | `claude` `claude-code` `discord-bot` `feishu` |
| [ChanMeng666/echook](https://github.com/ChanMeng666/echook) | 🔊 echook — AI-operated audio notifications for Claude Code, Cursor IDE & Codex CLI — 26 hooks, voice + chime themes, TTS, webhooks, rate-limit alerts, status line. Tell your AI agent to install — natural language forever after. | Python | 76 | `ai-operated` `audio-notifications` `automation` `bash` |
| [contextgraph/claude-code-plugin](https://github.com/contextgraph/claude-code-plugin) | ContextGraph plugin for Claude Code - AI-forward persistent task management | — | 1 |  |

### Codex (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 专为 Codex 与 OpenCode 用户设计的复杂代码库 coding agent harness，具备项目记忆与执行验证能力。 | TypeScript | 65k | `ai` `ai-agents` `anthropic` `chatgpt` |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 在 Claude Code 里使用 Codex 来 review 代码或派发任务 | JavaScript | 26k |  |
| [code-yeongyu/lazycodex](https://github.com/code-yeongyu/lazycodex) | 复杂代码库专用 Codex Agent Harness，内置项目记忆、任务规划与验证完成机制。 | TypeScript | 2.5k | `ai` `ai-agents` `claude` `claude-code` |

### OpenClaw / Hermes / Paperclip (24)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | OpenClaw：你自己的个人 AI 助手，跨任意 OS 与平台 🦞 | TypeScript | 381.9k | `ai` `assistant` `crustacean` `molty` |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you | Python | 210.1k | `ai` `ai-agent` `ai-agents` `anthropic` |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | Paperclip：零员工公司的开源编排框架 | TypeScript | 72.8k |  |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | "🐈 nanobot: The Ultra-Lightweight Personal AI Agent" | Python | 45.1k | `ai` `ai-agent` `ai-agents` `anthropic` |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 基于 Rust 的轻量级全自主 AI 个人助手基础设施，支持跨 OS / 平台部署，组件可热替换。 | Rust | 32.2k | `agent` `agentic` `ai` `infra` |
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | Garry's Opinionated OpenClaw/Hermes Agent Brain | TypeScript | 25.2k |  |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI：从网页或手机使用 Hermes Agent 的最佳方式 | Python | 15.6k | `agent` `ai-agents` `hermes` `hermes-agent` |
| [fathah/hermes-desktop](https://github.com/fathah/hermes-desktop) | Hermes Agent 的桌面端伴侣应用，方便本地管理和运行 Hermes AI 智能体。 | TypeScript | 13.1k | `ai` `ai-agent` `autonomous-agents` `chatbot` |
| [nearai/ironclaw](https://github.com/nearai/ironclaw) | IronClaw is an Agent OS focused on privacy, security and extensibility | Rust | 12.5k | `codeact` `openclaw` `rlm` `rust` |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | Hermes Agent 的 Web 控制台，支持多平台 AI 对话、会话管理、定时任务与使用量分析。 | TypeScript | 8.9k | `agent` `ai-agent` `chat-ui` `dashboard` |
| [outsourc-e/hermes-workspace](https://github.com/outsourc-e/hermes-workspace) | Hermes Agent 的原生 web workspace：chat、终端、记忆、skills、inspector | JavaScript | 6k | `agent-ui` `ai-workspace` `hackathon` `hermes-agent` |
| [memovai/mimiclaw](https://github.com/memovai/mimiclaw) | MimiClaw: Run OpenClaw on a $5 chip. No OS(Linux). No Node.js. No Mac mini. No Raspberry Pi. No VPS. Hardware agents OS. | C | 5.5k | `ai` `assistant` `clawdbot` `edge-ai-agents` |
| [miaoxworld/OpenClawInstaller](https://github.com/miaoxworld/OpenClawInstaller) | ClawdBot 一键部署工具 | Shell | 3.4k | `clawdbot` `moltbot` `openclaw` |
| [sumelabs/clawra](https://github.com/sumelabs/clawra) | Clawra — 专为 Openclaw 设计的伴侣工具，扩展其功能与集成能力。 | TypeScript | 2.3k |  |
| [SumeLabs/clawra](https://github.com/SumeLabs/clawra) | Clawra - Openclaw as your companion | TypeScript | 2.3k |  |
| [NousResearch/hermes-paperclip-adapter](https://github.com/NousResearch/hermes-paperclip-adapter) | Paperclip 的 Hermes adapter：把 Hermes 当作 managed employee 跑在 Paperclip company 里 | TypeScript | 1.7k |  |
| [awizemann/scarf](https://github.com/awizemann/scarf) | 🪟 Hermes Agent 的 macOS / iOS 原生 GUI — 多窗口、多服务（本地+远端）。 | Swift | 703 | `ai-agent` `gui` `hermes` `macos` |
| [AnthonyDavidAdams/zero-employee-company-book](https://github.com/AnthonyDavidAdams/zero-employee-company-book) | Headcount Zero：用 Paperclip 构建 AI 驱动公司的方法论书籍 | — | 537 |  |
| [Yesterday-AI/paperclip-plugin-company-wizard](https://github.com/Yesterday-AI/paperclip-plugin-company-wizard) | 从模块化模板 bootstrap AI agent 公司 | TypeScript | 151 | `ai-agents` `bootstrap` `cli` `company-as-code` |
| [Kori-x/hermes-dashboard](https://github.com/Kori-x/hermes-dashboard) | 📊 Hermes Agent 会话、工具调用与活动的实时 dashboard。 | TypeScript | 61 | `agent-framework` `ai-agents` `dashboard` `devtools` |
| [GUNAASHRINM/Hermes-Agent-Wizard](https://github.com/GUNAASHRINM/Hermes-Agent-Wizard) | 🚀 Hermes Agent GUI 一键启动器 — Windows / macOS 双平台。 | — | 11 | `ai-agent` `beginner-friendly` `chinese-ui` `desktop-app` |
| [wysie/drawthings-grpc-hermes-plugin](https://github.com/wysie/drawthings-grpc-hermes-plugin) | 🎨 Hermes Agent 插件 — 通过 gRPC 调用本地 Draw Things 生图。 | Python | 5 | `apple-silicon` `draw-things` `grpc` `hermes-agent` |
| [xujfcn/crazyrouter-hermes](https://github.com/xujfcn/crazyrouter-hermes) | 🛣️ 把 Hermes Agent 接到 CrazyRouter — 600+ 模型、比官方便宜 30-50%。 | Shell | 5 | `ai-agent` `crazyrouter` `crazyrouter-integration` `hermes-agent` |
| [AlexanderWhitestone/hermes-dashboard-sovereign-ops](https://github.com/AlexanderWhitestone/hermes-dashboard-sovereign-ops) | 📈 Hermes Agent 的「主权运维」dashboard 插件与主题。 | JavaScript | 4 | `dashboard` `hackathon` `hermes-agent` `local-first` |

### 多智能体编排 (17)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 字节出品的开源 long-horizon SuperAgent harness，做研究/写代码/创作，沙盒、记忆、工具、skill、subagent 一应俱全 | Python | 76.2k | `agent` `agentic` `agentic-framework` `agentic-workflow` |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | MetaGPT 多智能体框架，首个 AI 软件公司范式，支持自然语言驱动的软件开发全流程 | Python | 69.2k | `agent` `gpt` `llm` `metagpt` |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 主流的 Claude agent 编排平台：智能多 agent swarm、自治工作流、对话式 AI 系统 | TypeScript | 63.2k | `agentic-ai` `agentic-framework` `agentic-rag` `agentic-workflow` |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | Flowise：可视化构建 AI Agent | TypeScript | 54.3k | `agentic-ai` `agentic-workflow` `agents` `artificial-intelligence` |
| [multica-ai/multica](https://github.com/multica-ai/multica) | 开源的 managed agents 平台，把 coding agent 变成可分配任务、可追踪进度的真队友 | Go | 39.2k |  |
| [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | Conductor：事件驱动的 agentic 工作流引擎，为应用与 AI Agent 提供持久、高韧性的执行 | Java | 32k | `distributed-systems` `durable-execution` `grpc` `java` |
| [openai/symphony](https://github.com/openai/symphony) | Symphony turns project work into isolated, autonomous implementation runs, allowing teams to manage work instead of supervising coding agents. | Elixir | 25.8k |  |
| [camel-ai/owl](https://github.com/camel-ai/owl) | 🦉 OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation | Python | 19.9k | `agent` `artificial-intelligence` `multi-agent-systems` `task-automation` |
| [gastownhall/gastown](https://github.com/gastownhall/gastown) | Gas Town - multi-agent workspace manager | Go | 16.5k |  |
| [superset-sh/superset](https://github.com/superset-sh/superset) | Code Editor for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine | TypeScript | 12.3k | `agentic-ai` `ai-agents` `claude-code` `cli` |
| [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) | 并行编程 agent 的编排引擎，自动规划任务、派生 agent，并自主处理 CI 修复、合并冲突与代码审查 | Go | 8.1k | `agent-fleet` `agent-swarm` `claude-code` `codex-cli` |
| [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) | Agentic orchestrator for parallel coding agents — plans tasks, spawns agents, and autonomously handles CI    fixes, merge conflicts, and code reviews. | TypeScript | 7.4k | `agent-fleet` `agent-swarm` `claude-code` `codex-cli` |
| [camel-ai/oasis](https://github.com/camel-ai/oasis) | 🏝️ OASIS: Open Agent Social Interaction Simulations with One Million Agents. | Python | 4.9k | `agent-based-framework` `agent-based-simulation` `ai-societies` `deep-learning` |
| [gensyn-ai/rl-swarm](https://github.com/gensyn-ai/rl-swarm) | 完全开源的框架，用于在互联网上创建 RL 训练 swarm | Python | 1.7k |  |
| [KroMiose/nekro-agent](https://github.com/KroMiose/nekro-agent) | NekroAgent：多人互动场景的跨平台 Agent 框架，集 Claude Code 沙盒、记忆、MCP 管理与可视化控制台于一体，支持 QQ/Discord/Telegram/B 站直播等 | Python | 977 | `agent` `ai` `chatbot` `claudecode` |
| [coleam00/Linear-Coding-Agent-Harness](https://github.com/coleam00/Linear-Coding-Agent-Harness) | Linear Autonomous Coding Agent Harness | Python | 223 |  |
| [Abruptive/Ankh.md](https://github.com/Abruptive/Ankh.md) | 🐝 多智能体蜂群框架 — TAW Agent 召唤的「来自 1971 年」的神秘 swarm。 | Shell | 71 | `abruptive` `agent` `agent-so` `agents` |

### 智能体平台与 UI (25)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. | Shell | 127.9k |  |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 开源的 AI agent，把 Gemini 的能力直接带到终端 | TypeScript | 105.8k | `ai` `ai-agents` `cli` `gemini` |
| [pewdiepie-archdaemon/odysseus](https://github.com/pewdiepie-archdaemon/odysseus) | 自托管 AI 工作空间，集成多模型与工具调用于一体的本地优先 AI 助理平台 | Python | 81.1k |  |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 🙌 OpenHands: AI-Driven Development | Python | 79.6k | `agent` `artificial-intelligence` `chatgpt` `claude-ai` |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | LobeHub：协同 agent 团队的工作与生活空间，多 agent 协作、agent 团队设计、agent 作为工作交互单元 | TypeScript | 79.5k | `agent` `agent-collaboration` `agent-harness` `ai` |
| [cline/cline](https://github.com/cline/cline) | Cline：IDE 内的自治 coding agent，可创建/编辑文件、执行命令、使用浏览器 | TypeScript | 64.3k |  |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AnythingLLM：一体化的 AI 生产力加速器，本地优先，免恼人配置 | JavaScript | 62.7k | `agent-harness` `agentic-ai` `ai-agents` `hermes-agent` |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | Cherry Studio：智能聊天、自治 agent、300+ 助手的 AI 生产力工作室，统一接入前沿 LLM | TypeScript | 48.2k | `agent-skills` `ai-agent` `awesome-skills` `claude-code` |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨ | Python | 35.9k | `agent` `ai` `chatbot` `chatgpt` |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | DSPy: The framework for programming—not prompting—language models | Python | 35.9k |  |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | The Frontend Stack for Agents & Generative UI. React + Angular.  Makers of the AG-UI Protocol | TypeScript | 35.8k | `agent` `agent-native` `agentic-ai` `agents` |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 免费、本地、开源的 24/7 Cowork 应用，支持 OpenClaw/Hermes/Claude Code/Codex/OpenCode/Gemini CLI 等 20+ CLI | TypeScript | 29.3k | `acp` `agent-team` `ai` `ai-agent` |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | Composio：1000+ 工具包、tool search、上下文管理、鉴权和沙盒工作台，帮助构建把意图变成行动的 AI agent | TypeScript | 29.1k | `agentic-ai` `agents` `ai` `ai-agents` |
| [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | Integrate cutting-edge LLM technology quickly and easily into your apps | C# | 28.3k | `ai` `artificial-intelligence` `llm` `openai` |
| [google/adk-python](https://github.com/google/adk-python) | An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control. | Python | 20.5k | `agent` `agentic` `agentic-ai` `agents` |
| [kortix-ai/suna](https://github.com/kortix-ai/suna) | Suna：自治公司操作系统 | TypeScript | 19.9k | `ai` `ai-agents` `llm` |
| [emcie-co/parlant](https://github.com/emcie-co/parlant) | Build reliable customer-facing AI agents with Parlant: an interaction control harness optimized for controlled, consistent, and predictable LLM interactions. | Python | 18.2k | `ai-agents` `ai-alignment` `customer-service` `customer-success` |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents. | Python | 17.4k | `agent` `agentic-ai` `llm` `mlops` |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 开源 Agent Harness，内置个人 AI Agent Ohmo，提供完整的智能体运行与管理平台。 | Python | 14.6k |  |
| [VoltAgent/voltagent](https://github.com/VoltAgent/voltagent) | 基于开源 TypeScript AI Agent 框架构建的 AI 智能体工程平台 | TypeScript | 10k | `agents` `ai` `ai-agents` `ai-agents-framework` |
| [anthropics/claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) | 暂无描述 | Python | 7.5k |  |
| [enricoros/big-AGI](https://github.com/enricoros/big-AGI) | big-AGI：由前沿模型驱动的 AI suite，含 personas、Beam 多模型聊天、文生图、语音、流式响应、PDF 导入等 | TypeScript | 7k | `agi` `ai-agents` `ai-suite` `ai-workspace` |
| [dtyq/magic](https://github.com/dtyq/magic) | Magicrew. The first open-source all-in-one AI productivity platform (Generalist AI Agent + Workflow Engine + IM + Online collaborative office system) | TypeScript | 4.9k | `agent` `agi` `ai` `gpt` |
| [collabs-inc/collab-public](https://github.com/collabs-inc/collab-public) | 与 AI agent 共同创作的协作平台，支持 Claude Code 与 Codex CLI | TypeScript | 2.8k | `agents` `ai` `claude-code` `codex-cli` |
| [collaborator-ai/collab-public](https://github.com/collaborator-ai/collab-public) | Collaborator：一个和 agent 共同创造的空间 | TypeScript | 2.5k | `agents` `ai` `claude-code` `codex-cli` |

### 通用 / 研究型智能体 (15)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Karpathy 出品：在单 GPU 上自动跑 nanochat 训练研究的 AI agent | Python | 90k |  |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 让 AI agent 像资深懒惰工程师一样思考——最好的代码是你永远不需要写的代码。 | JavaScript | 75.5k | `agent-skills` `ai-agents` `claude` `claude-code` |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | 简洁通用的群体智能引擎，预测万物（agent-memory、社会预测、群体智能） | Python | 67.9k | `agent-memory` `financial-forecasting` `future-prediction` `knowledge-graph` |
| [AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer) ⚠️ | gpt-engineer：实验 codegen 的 CLI 平台（Lovable.dev 的前身） | Python | 55.2k | `ai` `autonomous-agent` `code-generation` `codebase-generation` |
| [666ghj/BettaFish](https://github.com/666ghj/BettaFish) | 微舆：人人可用的多 Agent 舆情分析助手，从 0 实现，不依赖任何框架 | Python | 41.6k | `agent-framework` `data-analysis` `deep-research` `deep-search` |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | An Open Phone Agent Model & Framework. Unlocking the AI Phone for Everyone | Python | 25.7k | `agent` `phone-use-agent` |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 基于公开研究文献从第一原理重建的 Claude Mythos 架构，探索大型自主 AI Agent 的核心设计。 | Python | 14.6k | `ai` `anthropic` `attention` `claude` |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 自演化 agent：从 3.3K 行种子代码生长出 skill 树，达成全系统控制，token 消耗减少 6 倍 | Python | 13.3k | `ai-agent` `automation` `autonomous-agent` `browser-automation` |
| [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) | 暂无描述 | Python | 12.7k |  |
| [huggingface/ml-intern](https://github.com/huggingface/ml-intern) | 🤗 ml-intern: an open-source ML engineer that reads papers, trains models, and ships ML models | Python | 10.6k |  |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 阿里巴巴开源的混合架构代码审查工具，结合确定性 pipeline 与 LLM Agent，支持精准行级注释与内置安全规则集。 | Go | 10k | `agent` `agent-skills` `code-review` `code-review-assistant` |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is a deep research agent optimized for complex research and prediction tasks. Our latest models, MiroThinker-1.7, achieves 74.0 and 75.3 on the BrowseComp and BrowseComp Zh, respectively. | Python | 8.3k | `agent` `agent-framework` `browsecomp` `deep-research` |
| [Action-State-Labs/android-action-kernel](https://github.com/Action-State-Labs/android-action-kernel) | 暂无描述 | Python | 1.7k |  |
| [SalesforceAIResearch/enterprise-deep-research](https://github.com/SalesforceAIResearch/enterprise-deep-research) | Salesforce 的企业级 Deep Research agent | Python | 1.2k | `deep-research-agent` `e2b` `fastapi` `langchain` |
| [contextgraph/agent](https://github.com/contextgraph/agent) | Autonomous agent for contextgraph action execution | TypeScript | 2 |  |


## 🛠 智能体 Skills 与 MCP

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development methodology that works. | Shell | 247.5k | `ai` `brainstorming` `coding` `obra` |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claude directory. | Shell | 158.2k |  |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | AI SKILL：为多平台 UI/UX 提供专业设计智能 | Python | 101.5k | `ai-skills` `antigravity` `claude` `claude-code` |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | AI 编程助手 skill，可将任意代码库、SQL schema、脚本及文档转换为可查询的知识图谱，兼容 Claude Code、Codex、Cursor 等多种 AI 编码工具。 | Python | 78.5k | `antigravity` `claude-code` `codex` `gemini` |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 将代码仓库、SQL schema、文档等转化为可查询 knowledge graph 的 Claude Code / Codex skill。 | Python | 74.1k | `antigravity` `claude-code` `codex` `gemini` |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | 将任意代码库转换为可交互知识图谱的 AI 工具，支持 Claude Code、Codex、Cursor、Copilot 等主流 coding agent。 | TypeScript | 71.3k | `antigravity-skills` `business-knowledge` `claude-code` `claude-skills` |
| [upstash/context7](https://github.com/upstash/context7) | Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors | TypeScript | 58.7k | `llm` `mcp` `mcp-server` `vibe-coding` |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill，可横跨 Reddit、X、YouTube、HN、Polymarket 等平台深度研究任意话题并生成有据可查的摘要 | Python | 49.5k | `ai-prompts` `ai-skill` `bluesky` `claude` |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 给 coding agent 用的 Chrome DevTools MCP server | TypeScript | 46k | `browser` `chrome` `chrome-devtools` `debugging` |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 即用型 Agent Skills：覆盖科研、科学、工程、分析、金融与写作 | Python | 30.3k | `agent-skills` `ai-scientist` `bioinformatics` `chemoinformatics` |
| [blader/humanizer](https://github.com/blader/humanizer) | Claude Code skill，自动去除 AI 生成文本的机器痕迹，让输出更贴近自然人类写作风格。 | — | 27.7k |  |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and trust. | Python | 27.5k | `agent` `chatbot` `large-language-models` `llm` |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 高性能代码智能 MCP server，毫秒级将代码库索引为持久知识图谱，158 种语言，零依赖单一二进制。 | C | 27.1k | `aider` `ast` `claude-code` `code-analysis` |
| [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 🧬 女娲.skill — 蒸馏任何人思维方式的元 skill，整个「人格蒸馏」热潮的起点。 | Python | 27k |  |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Claude Code skill：实现 Manus 风格的持久化 markdown 规划工作流 | Python | 24.9k | `agent-skills` `agentic-ai` `ai-agents` `autonomous-agents` |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfaces with natural language. | TypeScript | 24.4k | `agent` `ai` `ai-agents` `browser-automation` |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork | Python | 22.4k |  |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶 | Python | 20.1k |  |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | Khazix（数字生命）发布的开源 AI Skills 合集 | Python | 16.6k |  |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 微软出品的文本空间优化器，通过轨迹驱动编辑为冻结 LLM agent 训练可复用自然语言 Skills。 | Python | 11k | `agent-skills` `self-evolving-agents` |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | GSAP 官方发布的 AI Skills，教 AI 编程 agent 正确使用 GreenSock 动画库，包含最佳实践与常见动画模式 | — | 11k |  |
| [huggingface/skills](https://github.com/huggingface/skills) | Give your agents the power of the Hugging Face ecosystem | Python | 10.8k |  |
| [numman-ali/openskills](https://github.com/numman-ali/openskills) | OpenSkills：AI coding agent 的通用 skill 加载器 | TypeScript | 10.6k |  |
| [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | 🎓 张雪峰.skill — 高考志愿/考研/职业规划的实战思维框架，由女娲.skill 生成。 | — | 9.8k |  |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | ConardLi 开源 Skills 合集，涵盖网页设计、知识检索、图像生成等多种场景技能 | CSS | 9.2k | `agent` `claude` `gpt-image-2` `rag` |
| [dontbesilent2025/dbskill](https://github.com/dontbesilent2025/dbskill) | dontbesilent 的商业诊断 Skills，供 AI coding agent 作为商业分析工具调用。 | JavaScript | 7.4k |  |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | 💔 前任.skill — 把前任蒸馏成 AI Skill，用 ta 的方式跟你说话。 | Python | 5.8k |  |
| [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) | Magic MCP — v0 风格的 AI UI 组件生成 MCP server，在 Cursor/Windsurf/VSCode + Cline 中通过自然语言即时创建精美前端组件。 | TypeScript | 5.3k |  |
| [steipete/agent-scripts](https://github.com/steipete/agent-scripts) | 跨项目共享的 AI Agent 实用脚本集合，可直接集成到各类 Agent 工作流中。 | Shell | 5.2k | `ai-agents` |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude. | Python | 3.8k |  |
| [0xNyk/council-of-high-intelligence](https://github.com/0xNyk/council-of-high-intelligence) | Claude Code 插件，召集 18 个 AI 人格跨多家 LLM 提供商进行多轮辩论，通过置信度加权输出决策建议。 | Shell | 3.4k | `ai-agents` `claude` `claude-code` `claude-plugin` |
| [notdog1998/yourself-skill](https://github.com/notdog1998/yourself-skill) | 🪞 自己.skill — 蒸馏自己看清自己，欢迎加入数字永生 1.0。 | Python | 3.1k |  |
| [blader/Claudeception](https://github.com/blader/Claudeception) | Claude Code skill：自治 skill 提取与持续学习，让 Claude Code 越用越聪明 | Shell | 2.4k |  |
| [leilei926524-tech/anti-distill](https://github.com/leilei926524-tech/anti-distill) | 🛡️ 反蒸馏 Skill — 清洗你被迫写的 Skill 文件，看起来完整但留住核心知识。 | — | 2.3k |  |
| [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills) | Google DeepMind 出品的科学研究 Skills，集成 AlphaGenome、AFDB、UniProt 等 30+ 数据库，提升 AI Agent 科研 grounding 能力。 | Python | 2.3k |  |
| [jinchenma94/bazi-skill](https://github.com/jinchenma94/bazi-skill) | 🔮 八字.skill — 四柱八字命理分析的 Claude Code Skill。 | — | 2.1k |  |
| [YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill](https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill) | OpenClaw / Claude Code 的 skill：从 10000+ Nano Banana Pro（Gemini）图像 prompt 中智能推荐 | TypeScript | 1.7k | `ai-agent` `ai-image` `claude-code-skill` `clawhub` |
| [CloudAI-X/claude-workflow-v2](https://github.com/CloudAI-X/claude-workflow-v2) | Universal Claude Code workflow plugin with agents, skills, hooks, and commands | Python | 1.4k | `agent-skills` `ai` `ai-agents` `claude-code` |
| [yaojingang/yao-open-skills](https://github.com/yaojingang/yao-open-skills) | 📚 OpenYao 公开 Skill 合集：把决策、商业分析、学习教程、研究取证、文档生成沉淀成可复用的 AI 资产。 | HTML | 1.2k |  |
| [better-auth/better-icons](https://github.com/better-auth/better-icons) | Skill and MCP server for searching and retrieving icons | TypeScript | 1.1k |  |
| [alchaincyf/x-mentor-skill](https://github.com/alchaincyf/x-mentor-skill) | 📈 X 导师.skill — 蒸馏 6 位顶级 X 创作者方法论 + 算法数据。 | — | 1k |  |
| [huangkiki/dailypaper-skills](https://github.com/huangkiki/dailypaper-skills) | 用Claude Code skills打造我的论文流水线 | Python | 989 |  |
| [orange2ai/renwei-writing](https://github.com/orange2ai/renwei-writing) | 人味儿写作 skill — AI 辅助编辑时保留原作者声音与个性的方法论，附核实清单与真实案例。 | — | 902 |  |
| [alchaincyf/steve-jobs-skill](https://github.com/alchaincyf/steve-jobs-skill) | 🍎 乔布斯.skill — 6 个心智模型 + 8 条决策启发式 + 表达 DNA。 | — | 898 |  |
| [ythx-101/x-tweet-fetcher](https://github.com/ythx-101/x-tweet-fetcher) | 🦞 OpenClaw skill：无需登录或 API key，抓取 X/Twitter 的推文与回复 | Python | 895 | `agent-tools` `ai-agent` `automation` `no-api` |
| [wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill) | Claude Code skill：把 Markdown 文章发布到 X (Twitter) Articles | Python | 825 |  |
| [joeseesun/qiaomu-goal-meta-skill](https://github.com/joeseesun/qiaomu-goal-meta-skill) | 乔木 goal meta-skill — 将模糊的 Codex 任务转化为结构化 /goal 指令，自动生成验证步骤、操作约束与完成证据清单。 | Python | 756 |  |
| [alchaincyf/elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | 🚀 马斯克.skill — Elon Musk 的认知操作系统。 | — | 430 |  |
| [awslabs/graphrag-toolkit](https://github.com/awslabs/graphrag-toolkit) | Python toolkit for building graph-enhanced GenAI applications | Python | 416 | `amazon-neptune` `amazon-opensearch-serverless` `graph-database` `graphrag` |
| [kkoppenhaver/cc-nano-banana](https://github.com/kkoppenhaver/cc-nano-banana) | 用 Nano Banana 生成图像的 Claude Code skill | — | 344 |  |
| [alchaincyf/munger-skill](https://github.com/alchaincyf/munger-skill) | 📊 芒格.skill — Charlie Munger 的认知操作系统。 | — | 312 |  |
| [xr843/Master-skill](https://github.com/xr843/Master-skill) | 🪷 高僧大德 AI 教学角色生成器（汉传/藏传/南传），数据源 CBETA / BDRC / Sutta。 | Python | 299 | `agent-skills` `ai-persona` `bdrc` `buddhism` |
| [keli-wen/agentic-harness-patterns-skill](https://github.com/keli-wen/agentic-harness-patterns-skill) | Agent skill for harness engineering — memory, permissions, context engineering, multi-agent coordination. Distilled from Claude Code, with Codex CLI and Gemini CLI on the roadmap. EN/ZH. Install via npx skills add. | — | 289 | `agent` `claude-code` `codex` `contexts` |
| [1sadjlk/bounty-hunter-skill](https://github.com/1sadjlk/bounty-hunter-skill) | 暂无描述 | Python | 283 |  |
| [alchaincyf/karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | 🤖 Karpathy.skill — Andrej Karpathy 的可运行思维框架。 | — | 259 |  |
| [alchaincyf/trump-skill](https://github.com/alchaincyf/trump-skill) | 🦅 特朗普.skill — 可运行的谈判与权力分析框架，不是模仿秀。 | — | 252 |  |
| [Ming-H/yinyuan-skills](https://github.com/Ming-H/yinyuan-skills) | 🪜 yinyuan-skills — 通用 skill 合集。 | — | 247 |  |
| [vogtsw/boss-skills](https://github.com/vogtsw/boss-skills) | 👔 老板.skills — 把老板炼入 token，把生产力的解放留给自己。 | Python | 222 |  |
| [alchaincyf/feynman-skill](https://github.com/alchaincyf/feynman-skill) | 🔬 费曼.skill — 理查德·费曼的认知操作系统。 | — | 212 |  |
| [alchaincyf/naval-skill](https://github.com/alchaincyf/naval-skill) | 💎 纳瓦尔.skill — Naval Ravikant 的认知操作系统。 | — | 206 |  |
| [alchaincyf/zhang-yiming-skill](https://github.com/alchaincyf/zhang-yiming-skill) | 🐉 张一鸣.skill — 张一鸣的认知操作系统。 | — | 139 |  |
| [wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill) | Agent skill for managing Linear issues, projects, and teams. MCP tools, SDK automation, GraphQL API patterns. | TypeScript | 116 | `claude-code` `claude-code-skills` `claude-skill` `claude-skills` |
| [alchaincyf/taleb-skill](https://github.com/alchaincyf/taleb-skill) | 🦢 塔勒布.skill — Nassim Taleb 的认知操作系统（黑天鹅、反脆弱）。 | — | 103 |  |
| [YIKUAIBANZI/forge-skill](https://github.com/YIKUAIBANZI/forge-skill) | 🔥 人格蒸馏引擎 forge-skill — 蒸馏自己/亲友的 Claude Code Skill。 | Python | 99 | `ai-agent` `claude-code` `claude-skill` `digital-twin` |
| [chendongqi/OPB-Skills](https://github.com/chendongqi/OPB-Skills) | 覆盖完整业务的 SKILL 集合，适用 Claude Code / Codex / OpenCode 等 | Python | 90 |  |
| [alchaincyf/paul-graham-skill](https://github.com/alchaincyf/paul-graham-skill) | 📝 Paul Graham.skill — Paul Graham 的可运行思维框架。 | — | 85 |  |
| [alchaincyf/mrbeast-skill](https://github.com/alchaincyf/mrbeast-skill) | 🎬 MrBeast.skill — 内容创造方法论的可运行版本，不是语录合集。 | Python | 81 |  |
| [YourongZhou/chat_with_me](https://github.com/YourongZhou/chat_with_me) | 💬 chat_with_me — 让 AI 用「你自己」的方式和你说话。 | Python | 72 |  |
| [alchaincyf/ilya-sutskever-skill](https://github.com/alchaincyf/ilya-sutskever-skill) | 🧠 Ilya Sutskever.skill — Ilya 的认知操作系统。 | — | 46 |  |
| [jtshow/Medusa](https://github.com/jtshow/Medusa) | 🐍 Medusa Skill Framework — 给 AI Agent 用的 Rust 写的 skill 框架。 | Rust | 32 |  |
| [ythx-101/x-profile-analyzer](https://github.com/ythx-101/x-profile-analyzer) | 🦞 X/Twitter 用户主页分析工具，无需 API key 或登录 | Python | 31 |  |
| [norahe0304-art/30x-growth-marketing-panel](https://github.com/norahe0304-art/30x-growth-marketing-panel) | AI 增长营销专家面板，从 3,500+ YouTube 视频提炼 11 位世界级专家方法论，Claude Code Skill | Shell | 29 |  |
| [xiaohei-info/oh-my-agent-skills](https://github.com/xiaohei-info/oh-my-agent-skills) | 📦 开源 Agent 方法论与 Hermes 兼容 skill 合集。 | Python | 28 | `ai-agents` `chatops` `hermes` `knowledge-management` |
| [fastapi-practices/mcp](https://github.com/fastapi-practices/mcp) ⚠️ | FastAPI 最佳架构 MCP 插件 | Python | 1 | `ai` `fba` `fba-plugin` `mcp` |


## 🌐 浏览器与网页自动化

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 让 AI agent 操作网页的自动化框架，让网站对 agent 友好 | Python | 103.1k | `ai-agents` `ai-tools` `browser-automation` `browser-use` |
| [microsoft/playwright](https://github.com/microsoft/playwright) | 微软出品的跨浏览器（Chromium/Firefox/WebKit）E2E 测试与自动化框架，单一 API | TypeScript | 92.3k | `automation` `chrome` `chromium` `e2e-testing` |
| [browserbase/stagehand](https://github.com/browserbase/stagehand) | Stagehand：浏览器 agent 的 SDK | TypeScript | 23.4k | `agents` `ai` `llms` `playwright` |
| [trycua/cua](https://github.com/trycua/cua) | Open-source infrastructure for Computer-Use Agents. Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can control full desktops (macOS, Linux, Windows). | HTML | 19.4k | `agent` `ai-agent` `apple` `computer-use` |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | Browser Harness：自愈式 harness，让 LLM 完成任意浏览器任务 | Python | 15.8k | `ai-agent` `browser-agent` `browser-automation` `browser-use` |
| [mobile-dev-inc/Maestro](https://github.com/mobile-dev-inc/Maestro) | 移动端与 Web 的无痛 E2E 自动化测试框架 | Kotlin | 14.7k | `android` `blackbox-testing` `ios` `ui-automation` |
| [pinchtab/pinchtab](https://github.com/pinchtab/pinchtab) | High-performance browser automation bridge and multi-instance orchestrator with advanced stealth injection and real-time dashboard. | Go | 9.4k | `browser-automation` `cdp` `golang` `headless-chrome` |
| [SawyerHood/dev-browser](https://github.com/SawyerHood/dev-browser) | A Claude Skill to give your agent the ability to use a web browser | TypeScript | 6.4k | `claude-code` `playwright` `skills` |
| [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices) | TypeScript | 5.4k | `agent` `android` `emulator` `ios` |
| [magnitudedev/browser-agent](https://github.com/magnitudedev/browser-agent) | 开源的视觉优先 browser agent | TypeScript | 4.1k | `ai` `automation` `browser` `framework` |
| [ghostwright/ghost-os](https://github.com/ghostwright/ghost-os) | Full computer-use for AI agents. Self-learning workflows. Native macOS. No screenshots required. | Swift | 1.6k | `accessibility` `ai-agents` `automation` `claude-code` |
| [hyperbrowserai/HyperAgent](https://github.com/hyperbrowserai/HyperAgent) | AI Browser Automation | TypeScript | 1.5k | `agent` `ai` `automation` `chrome` |


## 🧠 RAG / 知识图谱 / 记忆

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions. | JavaScript | 86.1k | `ai` `ai-agents` `ai-memory` `anthropic` |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Universal memory layer for AI Agents | Python | 60.2k | `agents` `ai` `ai-agents` `application` |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 为 Claude Code、Codex、Cursor、OpenCode、Hermes Agent 提供预构建代码知识图谱，减少 token 消耗与工具调用，完全本地运行。 | TypeScript | 58k |  |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 领先的 RAG 框架 LlamaIndex，支持文档 agent 与 OCR 的一体化平台。 | Python | 50.7k | `agents` `application` `data` `fine-tuning` |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine -       GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration | TypeScript | 43.7k |  |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" | Python | 37.4k | `genai` `gpt` `gpt-4` `graphrag` |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | A modular graph-based Retrieval-Augmented Generation (RAG) system | Python | 34.2k | `gpt` `gpt-4` `gpt4` `graphrag` |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG | Python | 33.8k | `agentic-ai` `agents` `ai` `ai-agents` |
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced features that works with every LLM | Python | 30.7k | `ai` `ai-chat` `chatgpt` `chatui` |
| [getzep/graphiti](https://github.com/getzep/graphiti) | Graphiti：为 AI Agent 构建实时知识图谱 | Python | 28.4k | `agents` `graph` `llms` `rag` |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Memory control plane for AI Agents in 6 lines of code | Python | 27.2k | `agent-memory` `agent-skills` `ai` `ai-agents` |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving. | Python | 26.4k | `agent-memory` `agent-plugins` `agentic-rag` `context-database` |
| [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | "RAG-Anything: All-in-One RAG Framework" | Python | 22k | `multi-modal-rag` `retrieval-augmented-generation` |
| [memvid/memvid](https://github.com/memvid/memvid) | Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory. | Rust | 15.7k | `ai` `context` `embedded` `faiss` |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | Memori is agent-native memory infrastructure. A LLM-agnostic layer that turns agent execution and conversation into structured, persistent state for production systems. | Python | 15.5k | `agent` `agent-memory` `agenticai` `ai` |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like OpenClaw. | Python | 14k | `agent-memory` `claude-skills` `harness` `loop-engineering` |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | LEANN 是 MLsys 2026 入选的 RAG 框架，节省 97% 存储空间，可在个人设备上运行快速、准确且完全私有的 RAG 应用 | Python | 12.7k | `ai` `faiss` `gpt-oss` `langchain` |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codebase the context for any coding agent. | TypeScript | 12.1k | `agent` `agentic-rag` `ai-coding` `claude-code` |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | [MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device. | Python | 11.7k | `ai` `faiss` `gpt-oss` `langchain` |
| [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | CocoIndex：long horizon agent 的增量数据引擎（context engineering、RAG、agentic data framework） | Rust | 10.6k | `agentic-data-framework` `ai` `ai-agents` `change-data-capture` |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 跨平台便携记忆层，兼容 Claude Code、Codex、OpenClaw、Hermes 等主流 AI agent，本地优先 Markdown 原生。 | Python | 10.4k | `agent-memory` `agentic-ai` `ai` `chats` |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | KAG is a logical form-guided reasoning and retrieval framework based on OpenSPG engine and LLMs.  It is used to build logical reasoning and factual Q&A solutions for professional domain knowledge bases. It can effectively overcome the shortcomings of the traditional RAG vector similarity calculation model. | Python | 8.9k | `knowledge-graph` `large-language-model` `logical-reasoning` `multi-hop-question-answering` |
| [zjunlp/DeepKE](https://github.com/zjunlp/DeepKE) | [EMNLP 2022] An Open Toolkit for Knowledge Graph Extraction and Construction | Python | 4.4k | `attribute-extraction` `chinese` `deep-learning` `deepke` |
| [CodeGraphContext/CodeGraphContext](https://github.com/CodeGraphContext/CodeGraphContext) | An MCP server plus a CLI tool that indexes local code into a graph database to provide context to AI assistants. | Python | 3.9k | `hacktoberfest2025` `social-winter-of-code` |
| [yifanfeng97/Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) | 📑 LLM 把非结构化长文本（论文/合同/研报）转成图、超图与结构化知识。 | Python | 3k | `ai` `ai-agents` `cli` `hypergraph` |
| [DEEP-PolyU/Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG) | Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation. | — | 2.5k | `graphrag` `graphrag-paper` `graphrag-survey` `knowledge-graph` |
| [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | The agent runtime platform powered by context graphs. | Python | 2.3k | `agent` `agent-harness` `agent-memory` `agent-runtime` |
| [trustgraph-ai/TrustGraph](https://github.com/trustgraph-ai/TrustGraph) | 通过 holonic 上下文图谱实现「一次写入、随处运行」，显著降低 LLM 调用 token 消耗。 | Python | 2.2k | `agent` `agent-harness` `agent-memory` `agent-runtime` |
| [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) | EdgeQuake 🌋 高性能 GraphRAG，Rust 编写，灵感来自 LightRAG，把文档转化为智能知识图谱 | Rust | 2k | `graphrag` `knowledge-graph` `lightrag` `rag` |
| [fastino-ai/GLiNER2](https://github.com/fastino-ai/GLiNER2) | 基于 schema 的统一信息抽取框架，支持从非结构化文本中提取实体和结构化数据。 | Python | 1.7k |  |
| [GitHamza0206/simba](https://github.com/GitHamza0206/simba) | Simba：开源的生产级客服 RAG，自带 evals 与监控 | TypeScript | 1.5k | `customer-service` `evals` `knowledge-base` `llm` |
| [AxDSan/mnemosyne](https://github.com/AxDSan/mnemosyne) | ⚡ Hermes Agent 的零依赖、亚毫秒级 AI 记忆系统。 | Python | 1.2k | `agents` `ai` `hermes` `hermes-agent` |
| [neo4j-labs/neosemantics](https://github.com/neo4j-labs/neosemantics) | Neo4j 的 RDF / 语义扩展插件，支持 RDF 导入导出、SHACL 验证与知识图谱构建。 | Java | 944 | `knowledge-graph` `linked-data` `neo4j` `ontologies` |
| [whyhow-ai/knowledge-graph-studio](https://github.com/whyhow-ai/knowledge-graph-studio) | WhyHow Knowledge Graph Studio | Python | 928 |  |
| [ontop/ontop](https://github.com/ontop/ontop) | 将关系型数据库映射为虚拟 RDF 知识图谱并通过 SPARQL 查询的 OBDA 平台。 | Java | 874 | `java` `obda` `ontop` `owl` |
| [kweaver-ai/kweaver-core](https://github.com/kweaver-ai/kweaver-core) | KWeaver Core：企业决策智能体的 harness-first 基础框架，把碎片化的数据/知识/工具/政策转化为受治理的上下文与可追溯执行 | Go | 836 | `agents` `bkn` `bussiness-knowledge-network` `decision-intelligence` |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 🧠 受生物学启发的 AI Agent 记忆系统 — 衰减、检索强化、巩固。 | TypeScript | 709 |  |
| [ChristopherLyon/graphrag-workbench](https://github.com/ChristopherLyon/graphrag-workbench) | Interactive 3D visualization of knowledge graphs generated by Microsoft GraphRAG. Explore entities, relationships, and communities with immersive visual analytics. | TypeScript | 705 | `graphrag` `microsoft` `nextjs` `visualization` |
| [GraphRAG-Bench/GraphRAG-Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark) | GraphRAG-Bench：评估 GraphRAG 模型的官方 benchmark（ICLR'26） | Python | 456 | `analysis` `benchmark` `dataset` `graphrag` |
| [TuGraph-family/chat2graph](https://github.com/TuGraph-family/chat2graph) | Chat2Graph: Graph Native Agentic System. | Python | 424 | `agentic-ai` `agentic-rag` `ai-agents` `bionics` |
| [noworneverev/graphrag-visualizer](https://github.com/noworneverev/graphrag-visualizer) | A web-based tool for visualizing and exploring artifacts from Microsoft's GraphRAG. | TypeScript | 421 | `gpt` `gpt-4` `gpt4` `graph-visualization` |
| [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | A survey of Graph-based Agent Memory \| A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based agent memory. | — | 313 | `agent` `agent-memory` `agent-memory-survey` `graph-based-agent-memory` |
| [kweaver-ai/kweaver-dip](https://github.com/kweaver-ai/kweaver-dip) | KWeaver DIP：企业级数字员工平台，基于 KWeaver Core 构建，提供 AI 原生的业务知识网络开发与治理环境 | TypeScript | 293 | `agent-skills` `agents` `ai` `business-knowledge-network` |
| [morph-kgc/morph-kgc](https://github.com/morph-kgc/morph-kgc) | Powerful RDF Knowledge Graph Generation with RML Mappings | Python | 280 | `data-engineering` `data-integration` `database` `etl` |
| [CyberMagician/Project_Golem](https://github.com/CyberMagician/Project_Golem) | A 3D interface for visualizing RAG (Retrieval-Augmented Generation) memory structures in real-time. | HTML | 275 |  |
| [markburgess/SSTorytime](https://github.com/markburgess/SSTorytime) | Semantic Spacetime Story graph database library over postgresql (SSTorytime) | Go | 155 |  |
| [NanGePlus/KagTest](https://github.com/NanGePlus/KagTest) | KAG开源框架介绍及使用KAG实现知识增强生成应用(产品模式测试、开发者模式测试)，KAG是OpenSPG发布v0.5版本中推出的知识增强生成（KAG）的专业领域知识服务框架，旨在充分利用知识图谱和向量检索的优势，增强大型语言模型和知识图谱，以解决 RAG 挑战 | Python | 153 |  |
| [OpenSPG/OneKE](https://github.com/OpenSPG/OneKE) | OneKE is a knowledge extraction framework based on a large model, with preliminary generalized knowledge extraction capabilities in both Chinese and English and in multiple fields and tasks. | HTML | 55 |  |
| [UtrechtUniversity/ricgraph](https://github.com/UtrechtUniversity/ricgraph) | Ricgraph - Research in context graph | Python | 32 | `data-enrichment` `data-harvesting` `data-linking` `enrichment` |
| [shawnsang/auto-openspg-schema](https://github.com/shawnsang/auto-openspg-schema) | 一个基于 Streamlit 的自动化工具，用于从工程设计文档中提取实体信息并生成符合 OpenSPG 标准的知识图谱 Schema。 | Python | 4 |  |


## 🎨 多媒体 AI

### 图像生成与设计 (20)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | Virtual whiteboard for sketching hand-drawn like diagrams | TypeScript | 126.9k | `canvas` `collaboration` `diagrams` `drawing` |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. | Python | 119.6k | `ai` `comfy` `comfyui` `python` |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 🎨 Local-first, open-source alternative to Anthropic's Claude Design. ⚡ 19 Skills · ✨ 71 brand-grade Design Systems 🖼 Generate web · desktop · mobile prototypes · slides · images · videos · HyperFrames 📦 Sandboxed preview · HTML/PDF/PPTX/MP4 export 🤖 Runs on Claude Code / Codex / Cursor / Gemini / OpenCode / Qwen / Copilot / Hermes / Kimi CLI. | TypeScript | 75.4k | `agent-skills` `ai-agents` `ai-design` `byok` |
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | 拖一张截图，转成干净的 HTML/Tailwind/React/Vue 代码 | Python | 73.2k |  |
| [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers) | 给开发者用的设计资源清单：图片素材、模板、CSS 框架、UI 库、工具等 | — | 66.3k |  |
| [penpot/penpot](https://github.com/penpot/penpot) | Penpot：面向设计与代码协作的开源设计工具 | Clojure | 55.1k | `clojure` `clojurescript` `design` `prototyping` |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | tldraw：非常好用的无限画布白板 SDK | TypeScript | 48.6k | `canvas` `collaboration` `design` `diagram` |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | DESIGN.md 规范：用结构化文档让 coding agents 持续理解一个设计系统的视觉身份 | TypeScript | 25.1k |  |
| [danielgatis/rembg](https://github.com/danielgatis/rembg) | 图片背景移除工具 | Python | 23.6k | `background-removal` `image-processing` `python` |
| [wandb/openui](https://github.com/wandb/openui) | OpenUI：用想象力描述 UI，实时渲染出来 | TypeScript | 22.4k | `ai` `generative-ai` `html-css-javascript` `tailwindcss` |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | GPT-Image2 工业级提示词引擎与模板库，470+ 案例逆向工程，20+ 套工业级模板，提炼为可复用 Skills。 | JavaScript | 8.2k | `agents` `ai-image-generation` `chatgpt` `gpt-image-2` |
| [11cafe/jaaz](https://github.com/11cafe/jaaz) | The world's first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritizes privacy and is usable locally. | TypeScript | 6.4k | `agent` `ai` `aiagent` `aiimage` |
| [antvis/Infographic](https://github.com/antvis/Infographic) | 🦋 An Infographic Generation and Rendering Framework, bring words to life with AI! | TypeScript | 5.6k | `ai` `antv` `infographic` `llm` |
| [huangserva/3DCellForge](https://github.com/huangserva/3DCellForge) | AI 驱动的交互式 3D 模型生成、检视与展示工作室。 | JavaScript | 2.5k |  |
| [MeiGen-AI/PosterCraft](https://github.com/MeiGen-AI/PosterCraft) | [ICLR 2026] 在统一框架下重新思考高质量美学海报生成 | Python | 964 |  |
| [LingyiChen-AI/DeepDiagram](https://github.com/LingyiChen-AI/DeepDiagram) | An open-source AI visualization tool that transforms natural language into Mind Maps, Mermaid diagrams, and Echarts. Turn your ideas into structured visuals instantly. | TypeScript | 911 |  |
| [markfulton/NanoBananaEditor](https://github.com/markfulton/NanoBananaEditor) | 最先进的 Nano Banana 图像生成与编辑应用，集成 reference image、image mask、版本历史等 | TypeScript | 686 | `aiimages` `bolt` `imageediting` `imageeditor` |
| [chatfire-AI/huobao-canvas](https://github.com/chatfire-AI/huobao-canvas) | 火宝无限画布：文生图、图生图、图生视频、多模型切换，兼容 OpenAI 标准格式 | Vue | 676 |  |
| [amrrs/fal-nanobanana-studio](https://github.com/amrrs/fal-nanobanana-studio) | 基于 fal AI 与 Nanobanana 的 Photoshop 风格图像工作室 | TypeScript | 342 |  |
| [CopilotKit/scene-creator-copilot](https://github.com/CopilotKit/scene-creator-copilot) | 暂无描述 | Python | 158 | `ag-ui` `copilotkit` `gemini` `langgraph` |

### 视频生成与剪辑 (31)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型，一键生成高清短视频 | Python | 95.9k | `ai` `automation` `chatgpt` `moviepy` |
| [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | OpenCut：开源的 CapCut 替代品 | TypeScript | 61.6k | `editor` `oss` `videoeditor` |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥      Make videos programmatically with React | TypeScript | 52.3k | `javascript` `react` `video` |
| [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | MediaPipe：跨平台、可定制的实时与流媒体 ML 解决方案 | C++ | 36k | `android` `audio-processing` `c-plus-plus` `calculator` |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 全球首个开源 agentic 视频生产系统，12 条 pipeline，从脚本到成片全自动生产。 | Python | 34.1k | `agent` `agentic-ai` `ai` `claude` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents. | TypeScript | 33.4k | `ai` `animation` `ffmpeg` `framework` |
| [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video) | AI 全自动短视频引擎，支持从脚本到成片的端到端视频生成流程。 | Python | 24.2k | `aigc` `comfyui` `image-generation` `tts` |
| [AIDC-AI/Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 🚀 AI 全自动短视频引擎 \| AI Fully Automated Short Video Engine | Python | 23.8k | `aigc` `comfyui` `image-generation` `tts` |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | Visualize Your Ideas With Code | TypeScript | 18.8k | `animation` `presentation` `visualization` |
| [Wan-Video/Wan2.2](https://github.com/Wan-Video/Wan2.2) | Wan: Open and Advanced Large-Scale Video Generative Models | Python | 16.5k | `aigc` `video-generation` |
| [chatfire-AI/huobao-drama](https://github.com/chatfire-AI/huobao-drama) | 🎬 火宝短剧：基于 AI 的一站式短剧生成平台，一句话生成完整短剧，从剧本到成片全自动化 | TypeScript | 13.4k |  |
| [waooAI/waoowaoo](https://github.com/waooAI/waoowaoo) | 工业级 AI 影视全流程生产平台，支持从短剧到真人剧的好莱坞级工作流，提供可控影视 AI Agent 生产线。 | TypeScript | 13.1k | `ai-agent` `ai-agents` `automation` `film-production` |
| [elebumm/RedditVideoMakerBot](https://github.com/elebumm/RedditVideoMakerBot) | Create Reddit Videos with just✨ one command ✨ | Python | 12.5k |  |
| [HBAI-Ltd/Toonflow-app](https://github.com/HBAI-Ltd/Toonflow-app) | Toonflow 是开源一站式 AI 短剧创作工具，将小说、剧本快速转化为动画短剧。集成 AI 编剧、智能分镜、角色与视频生成，跨平台桌面端轻量部署，助力创作者低成本批量产出视觉内容。Toonflow is an open-source AI tool that turns stories and scripts into animated short dramas. Features AI scriptwriting, storyboarding, character and video generation. A cross-platform desktop app for efficient content creation. | TypeScript | 11.1k | `ai` `ai-content-creation` `ai-tool` `ai-video-generation` |
| [HKUDS/ViMax](https://github.com/HKUDS/ViMax) | ViMax：集导演、编剧、制片与视频生成于一体的 agentic 视频生成框架。 | Python | 10.9k | `agentic-aigc` `video-generation` |
| [linyqh/NarratoAI](https://github.com/linyqh/NarratoAI) | 基于 AI 大模型，一键实现视频自动解说与剪辑，支持多语言输出。 | Python | 10.2k | `aiagent` `aiops` `gemini-api` `llm` |
| [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | A feed-forward 3D foundation model for reconstructing scenes from streaming data | Python | 10k |  |
| [freemocap/freemocap](https://github.com/freemocap/freemocap) | Free Motion Capture for Everyone 💀✨ | Python | 9.3k |  |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model. | Python | 8.1k | `generative-ai` `ltx` `ltx-2` |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip：AI 驱动的视频高光提取与剪辑二创工具 | Python | 5.9k | `ai` `ai-agents` `ai-tools` `ai-video` |
| [modelscope/FunClip](https://github.com/modelscope/FunClip) | 开源视频语音识别与 AI 智能剪辑工具，集成 LLM 实现语义化视频片段提取。 | Python | 5.9k | `ai-tools` `ai-video-editing` `asr` `auto-subtitles` |
| [Forget-C/Jellyfish](https://github.com/Forget-C/Jellyfish) | AI 短剧端到端生产工作台，覆盖剧本输入、分镜结构化、角色一致性管理、镜头准备与视频生成全流程。 | Python | 5k | `ai` `short-drama` |
| [YILS-LIN/short-video-factory](https://github.com/YILS-LIN/short-video-factory) | 一键生成产品营销与泛内容短视频，AI批量自动剪辑，高颜值跨平台桌面端工具 One click generation of product marketing and general content short videos, AI batch automatic cliping, beautiful cross platform desktop tool | TypeScript | 4.3k | `ai` `automatic` `automation` `clipping` |
| [MemeCalculate/moyin-creator](https://github.com/MemeCalculate/moyin-creator) | AI 影视生产级工具 \| 支持 Seedance 2.0 \| 剧本到成片全流程批量化 \| AI-powered film production tool with Seedance 2.0 support | TypeScript | 4k |  |
| [sherlockchou86/VideoPipe](https://github.com/sherlockchou86/VideoPipe) | A cross-platform video structuring (video analysis) framework. If you find it helpful, please give it a star: )  跨平台的视频结构化（视频分析）框架，觉得有帮助的请给个星星 : ) | C++ | 2.9k | `ai` `behaviour-analysis` `cv` `deep-learning` |
| [alecm20/story-flicks](https://github.com/alecm20/story-flicks) | 基于 AI 大模型，一键生成高清故事短视频，支持多种风格输出。 | Python | 2.4k | `ai-video` `ai-video-generator` `chatgpt` `moviepy` |
| [shuyu-labs/BigBanana-AI-Director](https://github.com/shuyu-labs/BigBanana-AI-Director) | BigBanana AI Director：工业级 AI 短剧/漫剧导演平台，采用 Script-to-Asset-to-Keyframe 工作流实现从剧本到成片的精准可控生成。 | — | 1.5k | `ai-comic-drama` `ai-short-drama` `ai-video` |
| [timoncool/videosos](https://github.com/timoncool/videosos) | 浏览器内的 AI 视频生产：text-to-video、image-to-video、lip sync，100+ 模型（Veo 3.1/FLUX/Gemini/Imagen 4） | TypeScript | 1.2k | `ai-video` `browser-based` `fal-ai` `flux` |
| [xhongc/ai_story](https://github.com/xhongc/ai_story) | AI 视频、AI 动漫、AI 短剧与漫剧自动化生成工具，支持多种风格与形式输出。 | Python | 1k | `ai` `ai-short-drama` `ai-video-generator` |
| [xuanyustudio/LocalMiniDrama](https://github.com/xuanyustudio/LocalMiniDrama) | 开源本地 AI 短剧 & 漫剧生成工具，从故事到成片一站式完成，支持完全离线运行。 | JavaScript | 787 | `ai` `ai-agent` `ai-mini-drama` `ai-video` |
| [0xsline/short-drama](https://github.com/0xsline/short-drama) | 专业的短剧剧本创作skill,从选题立项到分集撰写、质量自检、合规审核、海外出海，覆盖短剧剧本生产全流程。 | — | 766 |  |

### 音频 / 语音 / 音乐 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, create. | TypeScript | 38.1k | `ai` `cuda` `mlx` `qwen3-tts` |
| [myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) | OpenVoice：MIT 与 MyShell 出品的即时声音克隆 audio 基础模型 | Python | 36.9k | `text-to-speech` `tts` `voice-clone` `zero-shot-tts` |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2：无 tokenizer 架构的多语言 TTS 模型，支持创意声音设计与高保真语音克隆。 | Python | 32.6k | `audio` `deeplearning` `minicpm` `multilingual` |
| [audacity/audacity](https://github.com/audacity/audacity) | Audacity 音频编辑器 | C++ | 17.3k | `audio` `cross-platform` `editor` `gplv2` |
| [mixxxdj/mixxx](https://github.com/mixxxdj/mixxx) | Mixxx：开源 DJ 软件，提供现场混音所需的全部能力 | C++ | 6.9k | `audio` `dj` `hid` `linux` |

### 文档 / 幻灯片 / Office (8)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office documents to Markdown. | Python | 163.3k | `autogen` `autogen-extension` `langchain` `markdown` |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | Transforms complex documents like PDFs and Office docs into LLM-ready markdown/JSON for your Agentic workflows. | Python | 73.6k | `ai4science` `document-analysis` `docx` `extract-data` |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Create beautiful slides on the web using Claude's frontend skills | JavaScript | 24.7k | `ai-slides` `anthropic` `claude` `claude-code` |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 基于 Nano Banana Pro 的 AI 原生 PPT 生成器，支持上传模板、智能解析素材、口头修改、一键导出可编辑 pptx | Python | 15.1k | `ai-ppt-maker` `ai-slide-builder` `ai-slides` `editable-pptx` |
| [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) | Convert documents to structured data effortlessly. Unstructured is open-source ETL solution for transforming complex documents into clean, structured formats for language models.  Visit our website to learn more about our enterprise grade Platform product for production grade workflows, partitioning, enrichments, chunking and embedding. | HTML | 15.1k | `data-pipelines` `deep-learning` `document-image-analysis` `document-image-processing` |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-Source AI Presentation Generator and API (Gamma, Beautiful AI, Decktopus Alternative) | TypeScript | 8.9k | `ai-agent` `ai-presentation` `api` `gamma` |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 🪄 专为 AI Agent 设计的开源 Slide 框架 — 一句 prompt 直接出整套精美幻灯片。 | TypeScript | 5.6k | `agent` `react` `slides` |
| [GordenSun/BananaPPT](https://github.com/GordenSun/BananaPPT) | 暂无描述 | HTML | 54 |  |


## 📊 爬虫与内容发布

### 爬虫与数据采集 (19)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm | Scala | 73.5k |  |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 自适应 Python 爬虫框架，支持单次请求到全量爬取，内置 MCP server 与隐身模式。 | Python | 68.3k | `ai` `ai-scraping` `automation` `crawler` |
| [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | ⭐AI-driven public opinion & trend monitor with multi-platform aggregation, RSS, and smart alerts.🎯 告别信息过载，你的 AI 舆情监控助手与热点筛选工具！聚合多平台热点 +  RSS 订阅，支持关键词精准筛选。AI 智能筛选新闻 + AI 翻译 +  AI 分析简报直推手机，也支持接入 MCP 架构，赋能 AI 自然语言对话分析、情感洞察与趋势预测等。支持 Docker ，数据本地/云端自持。集成微信/飞书/钉钉/Telegram/邮件/ntfy/bark/slack 等渠道智能推送。 | Python | 60.3k | `ai` `bark` `data-analysis` `docker` |
| [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书/抖音/快手/B 站/微博/百度贴吧/知乎 等平台的笔记、视频与评论爬虫 | Python | 55.4k |  |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees. | Python | 51.8k | `agent-infrastructure` `ai-agent` `ai-search` `automation` |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | MCP for xiaohongshu.com | Go | 14.5k | `mcp` `mcp-server` `xiaohongshu-mcp` |
| [wechat-article/wechat-article-exporter](https://github.com/wechat-article/wechat-article-exporter) | 一款在线的 微信公众号文章批量下载 工具，支持导出阅读量与评论数据，无需搭建任何环境，可通过 在线网站 使用，支持 docker 私有化部署和 Cloudflare 部署。  支持下载各种文件格式，其中 HTML 格式可100%还原文章排版与样式。 | TypeScript | 12k | `download` `wechat` `wechat-article` `wechat-download` |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | trafilatura：Python 与命令行工具，抓取并提取 web 上的文本与元数据，支持 CSV/JSON/HTML/MD/XML 输出 | Python | 6.2k | `article-extractor` `corpus-builder` `corpus-tools` `crawler` |
| [joeyism/linkedin_scraper](https://github.com/joeyism/linkedin_scraper) | 抓取 LinkedIn 用户数据的库 | Python | 4.3k | `chrome` `company` `driver` `firefox` |
| [ericciarla/trendFinder](https://github.com/ericciarla/trendFinder) | Stay on top of trending topics on social media and the web with AI | TypeScript | 4.1k |  |
| [joyce677/TrendRadar](https://github.com/joyce677/TrendRadar) | 一键监控今日头条、百度热搜、微博、抖音、知乎、B站等35个平台，智能关键词筛选，自动生成热点分析报告。支持企业微信、飞书、钉钉、Telegram推送，30秒网页部署，1分钟手机通知，无需编程基础。还有文字和图片版api可调用 | HTML | 1.8k |  |
| [6551Team/opennews-mcp](https://github.com/6551Team/opennews-mcp) | News Aggregation · AI Ratings · Trading Signals · Real-time Updates | Python | 1.8k |  |
| [6551Team/opentwitter-mcp](https://github.com/6551Team/opentwitter-mcp) | Twitter/X Data · User Profiles · Tweet Search · Follower Events · KOL Tracking | Python | 1.4k |  |
| [firecrawl/open-scouts](https://github.com/firecrawl/open-scouts) | 🔥 AI-powered web monitoring platform. Create automated scouts that search the web and send email alerts when they find what you're looking for. | TypeScript | 1.3k | `ai-agents` `alerts` `automation` `email-notifications` |
| [liyedanpdx/reddit-ai-trends](https://github.com/liyedanpdx/reddit-ai-trends) | 抓取 Reddit AI 社区，用 DeepSeek R1 总结趋势，每日排名热点话题 | Python | 855 | `ai` `deepseek-r1` `ranking` `reports` |
| [runningZ1/union-search-skill](https://github.com/runningZ1/union-search-skill) | 统一搜索工具集 - 跨平台内容搜索解决方案，支持 B 站/抖音/小红书/GitHub/Twitter 等 20+ 平台 | Python | 590 |  |
| [liyupi/yupi-hot-monitor](https://github.com/liyupi/yupi-hot-monitor) | 2026 年编程导航 AI 编程实战新项目，基于 Node.js + Express + React + OpenRouter 的 AI 热点监控工具，支持多信息源聚合抓取（Twitter / Bing / HackerNews / B 站等 7+ 平台）、AI 查询扩展、AI 真假识别与相关性分析、WebSocket 实时推送、邮件通知、多维度筛选排序，并将热点监控能力封装为 Agent Skills 技能包。覆盖 Prisma + SQLite 数据库、Socket.io 实时通信、Axios + Cheerio 网页爬虫、OpenRouter 大模型接入、Aceternity UI 炫酷前端、node-cron 定时任务、VSCode Copilot Vibe Coding + MCP | TypeScript | 520 | `agent-skills` `ai` `backend` `frontend` |
| [otter1101/blogger-distiller](https://github.com/otter1101/blogger-distiller) | 【小红书 2 万人看过的——博主蒸馏器】输入小红书博主名，蒸馏 TA 的认知和内容打法装进你的 AI | Python | 417 |  |
| [flack0x/trendspyg](https://github.com/flack0x/trendspyg) | Free, open-source Python library for Google Trends data - pytrends alternative with 188K+ configuration options. | Python | 32 | `cli` `data-analysis` `google-trends` `google-trends-api` |

### 内容发布与自媒体 (12)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 终极 agentic 社媒排期工具 | TypeScript | 32.8k | `nextjs` `open-source` `open-source-social-media-scheduling-tool` `oss` |
| [dreammis/social-auto-upload](https://github.com/dreammis/social-auto-upload) | 自动化上传视频到社交媒体：抖音、小红书、视频号、tiktok、youtube、bilibili | Python | 13.1k | `bilibili` `douyin` `tiktok` `xiaohongshu` |
| [inovector/mixpost](https://github.com/inovector/mixpost) | 📅 自托管的社媒内容排期、发布与管理工具（Buffer 替代品） | Vue | 3.4k | `automated-post` `buffer` `buffer-alternative` `content-calendar` |
| [geekjourneyx/md2wechat-skill](https://github.com/geekjourneyx/md2wechat-skill) | 用 Markdown 写公众号文章，一键转换为精美排版并自动上传到微信草稿箱。支持 AI 多主题样式和批量发布，让公众号写作像发朋友圈一样简单。 | Go | 3.1k | `agent-cli` `ai-agent` `ai-writing` `claude-code` |
| [liyown/ai-trend-publish](https://github.com/liyown/ai-trend-publish) | TrendPublish：全自动 AI 内容生成与发布系统，支持微信公众号自动化、多源数据抓取、多模型支持 | TypeScript | 3k | `ai` `weixin` |
| [yaojingang/GEOFlow](https://github.com/yaojingang/GEOFlow) | 开源 GEO 内容工程与多站点分发系统，集成 AI 任务、RAG 语义分块、GEOFlow Agent 与 WordPress 目标发布。 | PHP | 2.8k | `ai` `cms` `content-automation` `geo` |
| [miantiao-me/hacker-podcast](https://github.com/miantiao-me/hacker-podcast) | 基于 AI 的 Hacker News 中文播客，每日抓取热门文章并生成中文播客 | TypeScript | 2.6k | `ai` `ai-agent` `ai-workflow` `cloudflare` |
| [caol64/wenyan-mcp](https://github.com/caol64/wenyan-mcp) | 文颜 MCP Server 可以让 AI 自动将 Markdown 文章排版后发布至微信公众号。 | JavaScript | 1.3k | `mcp-server` `wechat` `wenyan` |
| [gitcoffee-os/postbot](https://github.com/gitcoffee-os/postbot) | PostBot 内容同步助手：一键将文章/笔记/动态/图片/视频/音频同步发布到微信/微博/小红书/知乎/抖音/B 站等主流平台 | TypeScript | 1.1k | `article` `audio` `automation` `blog` |
| [AJaySi/ALwrity](https://github.com/AJaySi/ALwrity) | ALwrity：AI 数字营销平台（开发中） | Python | 1.1k | `ai-agent` `ai-content-generation` `ai-content-marketing` `ai-digital-marketing` |
| [spider-ios/autox-release](https://github.com/spider-ios/autox-release) | 网页自动化工具：YouTube 等视频下载、一键搬家、视频多平台发布（TikTok/小红书/抖音/B 站等） | — | 1k |  |
| [humanwhocodes/crosspost](https://github.com/humanwhocodes/crosspost) | A JavaScript utility for posting across multiple social networks at once | JavaScript | 548 |  |


## 💻 前端模板与 UI

### 组件库 (10)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | shadcn/ui：精心设计的可访问组件与代码分发平台 | TypeScript | 118.2k | `base-ui` `components` `laravel` `nextjs` |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | anime.js：JavaScript 动画引擎 | JavaScript | 70.7k | `animation` `anime` `canvas` `css` |
| [chenglou/pretext](https://github.com/chenglou/pretext) | Fast, accurate & comprehensive text measurement & layout | TypeScript | 49k |  |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 开源的、动画化、可交互、可定制的 React 组件集合 | JavaScript | 42.8k | `3d` `animations` `component-library` `components` |
| [AnmolSaini16/mapcn](https://github.com/AnmolSaini16/mapcn) | Beautiful map components. 100% Free, Zero config, one command setup. | TypeScript | 10.5k |  |
| [facebook/astryx](https://github.com/facebook/astryx) | Facebook 出品的开源设计系统，高度可定制且为 AI Agent 适配，组件开箱即用。 | TypeScript | 6.3k |  |
| [vasturiano/3d-force-graph](https://github.com/vasturiano/3d-force-graph) | 基于 ThreeJS/WebGL 的 3D 力导向图组件库，适用于知识图谱可视化。 | HTML | 6.2k | `3d` `3d-force-graph` `d3js` `data-visualization` |
| [zerostaticthemes/square-ui](https://github.com/zerostaticthemes/square-ui) | 使用 Tailwind CSS 与 Next.js 构建的精美开源 UI 布局组件集合。 | TypeScript | 5.9k | `layout` `shadcn-ui` `template` |
| [ln-dev7/square-ui](https://github.com/ln-dev7/square-ui) | Square UI：用 shadcn/ui 精心打造的开源布局集合 | TypeScript | 5.9k | `layout` `shadcn-ui` `template` |
| [elevenlabs/ui](https://github.com/elevenlabs/ui) | ElevenLabs UI：基于 shadcn/ui 的多模态 agent 组件库 | TypeScript | 2.3k | `agents` `ai` `audio` `components` |

### Next.js 模板 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [firecrawl/open-lovable](https://github.com/firecrawl/open-lovable) | 🔥 Clone and recreate any website as a modern React app in seconds | TypeScript | 27.3k |  |
| [vercel/chatbot](https://github.com/vercel/chatbot) | 全功能、可 hack 的 Next.js AI 聊天机器人模板 | TypeScript | 20.6k | `ai` `chatgpt` `nextjs` `react` |
| [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 基于 Next.js / Postgres / Stripe / shadcn/ui 的 SaaS 起步模板 | TypeScript | 15.9k | `nextjs` `postgres` `shadcn-ui` `stripe` |
| [vercel/nextjs-subscription-payments](https://github.com/vercel/nextjs-subscription-payments) ⚠️ | 一键克隆并部署的 Next.js SaaS 订阅付费应用模板 | TypeScript | 7.7k | `nextjs-starter` `stripe-checkout` `stripe-customer-portal` `supabase` |
| [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) | 用 Next.js 与 Vercel 几分钟内部署你自己的 Notion 网站 | TypeScript | 7k | `blog` `nextjs` `notion` `portfolio` |
| [NaveenDA/shadcn-nextjs-dashboard](https://github.com/NaveenDA/shadcn-nextjs-dashboard) | 用 shadcn 与 Next.js 构建的 Admin Dashboard UI | TypeScript | 107 | `admin-panel` `dashboard` `dashboard-ui` `good-first-issue` |
| [practicalway/next-shadcn-sanity-blog](https://github.com/practicalway/next-shadcn-sanity-blog) | Next.js 14 博客平台模板，shadcn/ui + Sanity.io 作为 headless CMS | TypeScript | 8 | `aceternity-ui` `blog` `blog-template` `framer-motion` |

### Astro 主题 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind) | ⭕️ AstroWind：免费的 Astro 5 + Tailwind CSS 模板 | Astro | 5.8k | `astro` `astro-blog` `astro-starter` `astro-template` |
| [satnaing/astro-paper](https://github.com/satnaing/astro-paper) | 极简、可访问、SEO 友好的 Astro 博客主题 | Astro | 4.8k | `a11y` `accessibility` `astro` `astro-theme` |
| [incluud/accessible-astro-starter](https://github.com/incluud/accessible-astro-starter) | 符合 WCAG 的 Astro 6+ 起步模板，含多种无障碍特性 | Astro | 1.2k | `a11y` `accessibility` `astro` `blog` |
| [cworld1/astro-theme-pure](https://github.com/cworld1/astro-theme-pure) | ⭐ 简洁、快速、强大的 Astro 博客与文档主题 | Astro | 987 | `astro` `astrojs` `blog` `blog-theme` |
| [Mrahmani71/astro-news](https://github.com/Mrahmani71/astro-news) | 用 Astro 构建的新闻网站 | Astro | 144 |  |
| [one-ie/one](https://github.com/one-ie/one) | 用 Astro/React/shadcn/Cloudflare 一句话构建应用、网站与 AI Agent | Astro | 126 | `ai` `astro` `astro-6` `astrojs` |
| [tim-hub/techtim-astro-bento-portfolio](https://github.com/tim-hub/techtim-astro-bento-portfolio) | 个人作品集 Astro 模板（含博客、项目等） | TypeScript | 57 | `astro` `react` `shadcn` `tailwindcss` |

### 桌面端 / 跨平台 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | Tauri：用 web 前端构建更小、更快、更安全的桌面与移动应用 | Rust | 108.7k | `desktop-app` `high-performance` `mobile-app` `native-app` |
| [expo/expo](https://github.com/expo/expo) | An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web. | TypeScript | 50.5k | `android` `app-framework` `expo` `framework` |


## 🏗 后端与基础设施

### Python 与 FastAPI (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [faif/python-patterns](https://github.com/faif/python-patterns) | Python 设计模式与 idiom 合集 | Python | 42.8k | `design-patterns` `idioms` `python` |
| [zhanymkanov/fastapi-best-practices](https://github.com/zhanymkanov/fastapi-best-practices) | FastAPI 最佳实践与约定（来自一家 startup） | — | 17.6k | `best-practices` `fastapi` |
| [mjhea0/awesome-fastapi](https://github.com/mjhea0/awesome-fastapi) | FastAPI 相关 awesome 清单 | — | 11.5k | `awesome` `awesome-list` `fastapi` `starlette` |

### LLM 网关 / SDK (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 统一 AI 模型聚合分发网关，支持 OpenAI、Claude、Gemini 等格式互转，适合个人与企业模型管理。 | Go | 41.3k | `ai-gateway` `claude` `deepseek` `gemini` |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | Wrap Gemini CLI, Antigravity, ChatGPT Codex, Claude Code as an OpenAI/Gemini/Claude/Codex compatible API service, allowing you to enjoy the free Gemini 3.1 Pro, GPT 5.5, Claude model through API | Go | 39.3k | `antigravity` `claude-code` `cluade` `codex` |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | LLM API 管理与分发系统，支持 OpenAI/Anthropic Claude/Gemini/DeepSeek/通义千问等，统一 API 适配 | JavaScript | 35.5k | `api` `api-gateway` `azure-openai-api` `chatgpt` |
| [BlockRunAI/ClawRouter](https://github.com/BlockRunAI/ClawRouter) | OpenClaw 的 agent 原生 LLM 路由器，支持 41+ 模型、亚毫秒路由、Base/Solana 上的 USDC 支付（x402） | TypeScript | 6.6k | `ai` `ai-agents` `anthropic` `cost-optimization` |

### 鉴权 / 计费 / 邮件 (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [getlago/lago](https://github.com/getlago/lago) | Lago：开源的计量与基于使用量的计费 API（消费追踪、订阅管理、定价迭代、支付编排、收入分析） | Go | 10.2k | `analytics` `billing` `clickhouse` `events` |
| [authzed/spicedb](https://github.com/authzed/spicedb) | SpiceDB：开源、Google Zanzibar 风格的细粒度授权数据库 | Go | 6.8k | `abac` `acl` `authorization` `ciam` |
| [velobase/velobase-harness](https://github.com/velobase/velobase-harness) | 开源 AI 应用 SaaS 样板，内置 Stripe 支付、联盟营销、归因追踪与按用量计费，基于 T3 Stack + Next.js 16 | TypeScript | 552 | `ai-agent` `ai-saas` `billing` `monetization` |

### 自托管 / PaaS (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [coollabsio/coolify](https://github.com/coollabsio/coolify) | Coolify：开源、可自托管的 Vercel/Heroku/Netlify 替代品，部署静态站点、数据库与全栈应用 | PHP | 58k | `coolify` `databases` `deployment` `docker` |
| [frappe/erpnext](https://github.com/frappe/erpnext) | 免费开源企业资源规划（ERP）系统，适合中小企业自托管部署。 | Python | 36.6k | `accounting` `asset-management` `crm` `distribution` |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 开源全渠道客服平台，支持实时聊天、邮件与工单，可自托管替代 Intercom 和 Zendesk。 | Ruby | 34.1k | `actioncable` `chat-widget` `conversation` `customer-support` |
| [InsForge/InsForge](https://github.com/InsForge/InsForge) | The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end. | TypeScript | 12.1k | `ai` `ai-agents` `coding` `deno` |
| [ankane/ahoy_email](https://github.com/ankane/ahoy_email) | ahoy_email：Rails 的第一方邮件分析 | Ruby | 1.2k | `analytics` `first-party-analytics` `rails` |

### AI 工具包 / RAG 应用 (22)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. | Go | 175.6k | `deepseek` `gemma` `gemma3` `glm` |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024) | Python | 73k | `agent` `ai` `deepseek` `fine-tuning` |
| [ghostty-org/ghostty](https://github.com/ghostty-org/ghostty) | 👻 Ghostty is a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration. | Zig | 57.6k |  |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 在 LLM 接收之前压缩工具输出、日志、文件与 RAG chunk，节省 60-95% token，同时保持答案质量。支持 Library、Proxy 与 MCP server 三种用法。 | Python | 57k | `agent` `ai` `anthropic` `claude-code` |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required. | Go | 47.4k | `agents` `ai` `api` `audio-generation` |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 将任意软件封装为 agent 原生 CLI 接口的统一工具套件，让 AI agent 可无缝发现、学习和调用任意工具。 | Python | 44.8k |  |
| [ray-project/ray](https://github.com/ray-project/ray) | Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads. | Python | 43.1k | `data-science` `deep-learning` `deployment` `distributed` |
| [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization. | Python | 37k | `gemini` `gemini-ai` `gemini-api` `gemini-flash` |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 上下文压缩工具，将 tool 输出、日志、RAG chunks 压缩 60-95% 后再传给 LLM，节省 token，兼容 Claude Code、Cursor、LangChain 等主流 agent 工具链。 | Python | 28.4k | `agent` `ai` `anthropic` `claude-code` |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) | 📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more. | TypeScript | 26.9k | `ai` `anthropic` `artificial-intelligence` `chatbot` |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration. | JavaScript | 26.1k | `ai-agent` `ai-agents` `ai-tools` `browser-automation` |
| [vercel/ai](https://github.com/vercel/ai) | Vercel AI Toolkit：构建 AI 应用与 agent 的免费开源 TypeScript SDK | TypeScript | 25.4k | `anthropic` `artificial-intelligence` `gemini` `generative-ai` |
| [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | The LLM Evaluation Framework | Python | 16.7k | `evaluation-framework` `evaluation-metrics` `llm-evaluation` `llm-evaluation-framework` |
| [vibrantlabsai/ragas](https://github.com/vibrantlabsai/ragas) | Supercharge Your LLM Application Evaluations 🚀 | Python | 14.7k | `evaluation` `llm` `llmops` |
| [NVIDIA-NeMo/Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) | NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails to LLM-based conversational systems. | Python | 6.6k | `agents` `generative-ai` `guardrails` `llm-safety` |
| [cactus-compute/cactus](https://github.com/cactus-compute/cactus) | Low-latency AI engine for mobile devices & wearables | C++ | 5.4k | `ai` `android` `arm` `edge` |
| [wxtsky/CodeIsland](https://github.com/wxtsky/CodeIsland) | 暂无描述 | Swift | 2k |  |
| [firecrawl/fireplexity](https://github.com/firecrawl/fireplexity) | 🔥 由 Firecrawl 驱动的开源 Perplexity 风格 AI 搜索引擎，含实时引用与流式响应 | TypeScript | 1.9k |  |
| [cyl19970726/poly-sdk](https://github.com/cyl19970726/poly-sdk) | 暂无描述 | TypeScript | 1.3k |  |
| [chixi4/Qwen3.5-9B-ToolHub](https://github.com/chixi4/Qwen3.5-9B-ToolHub) | Qwen3.5-9B ToolHub-v1.0.0 | Python | 274 |  |
| [NahimNasser/pu](https://github.com/NahimNasser/pu) | 暂无描述 | Shell | 222 |  |
| [rgbkrk/chatlab](https://github.com/rgbkrk/chatlab) | ⚡️🧪 Fast LLM Tool Calling Experimentation, big and smol | Jupyter Notebook | 163 | `chatbot` `chatgpt` `hacktoberfest` `interpreter` |

### 数据库 / 分析 / 搜索 (19)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [seaweedfs/seaweedfs](https://github.com/seaweedfs/seaweedfs) | SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling. | Go | 33.3k | `blob-storage` `cloud-drive` `distributed-file-system` `distributed-storage` |
| [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) | A scalable, distributed, collaborative, document-graph database, for the realtime web | Rust | 32.6k | `backend-as-a-service` `cloud-database` `database` `database-as-a-service` |
| [hasura/graphql-engine](https://github.com/hasura/graphql-engine) | 为 Postgres、MongoDB 等数据库自动生成实时 GraphQL / REST API，支持精细权限控制与 webhook。 | TypeScript | 32.1k | `access-control` `api` `automatic-api` `bigquery` |
| [facebook/rocksdb](https://github.com/facebook/rocksdb) | A library that provides an embeddable, persistent key-value store for fast storage. | C++ | 31.8k | `database` `storage-engine` |
| [dgraph-io/dgraph](https://github.com/dgraph-io/dgraph) | high-performance graph database for real-time use cases | Go | 21.7k | `database` `distributed` `go` `knowledge-graph` |
| [airbytehq/airbyte](https://github.com/airbytehq/airbyte) | 开源 ELT 数据集成平台，支持从 API、数据库到数仓的全链路数据移动，提供自托管与云托管版本。 | Python | 21.6k | `bigquery` `change-data-capture` `data` `data-analysis` |
| [eosphoros-ai/DB-GPT](https://github.com/eosphoros-ai/DB-GPT) | open-source agentic AI data assistant for the next generation of AI + Data products. | Python | 19.4k | `agents` `bgi` `database` `deepseek` |
| [opensearch-project/OpenSearch](https://github.com/opensearch-project/OpenSearch) | 开源分布式 RESTful 搜索引擎，Elasticsearch 的开源替代方案。 | Java | 13.3k | `analytics` `apache2` `foss` `java` |
| [trinodb/trino](https://github.com/trinodb/trino) | 面向大数据的分布式 SQL 查询引擎（原 PrestoSQL），支持 Hive、Iceberg、Delta Lake 等数据源联邦查询。 | Java | 13k | `analytics` `big-data` `data-science` `database` |
| [vespa-engine/vespa](https://github.com/vespa-engine/vespa) | AI + Data, online. https://vespa.ai | Java | 7k | `ai` `big-data` `java` `machine-learning` |
| [dataease/SQLBot](https://github.com/dataease/SQLBot) | 🔥 基于大模型和 RAG 的智能问数系统，对话式数据分析神器。Text-to-SQL Generation via LLMs using RAG. | JavaScript | 6.4k | `chatbi` `deepseek` `llm` `nl2sql` |
| [GoogleCloudPlatform/knowledge-catalog](https://github.com/GoogleCloudPlatform/knowledge-catalog) | Google Cloud 数据目录工具与示例合集，提供数据资产元数据管理与数据治理的最佳实践。 | HTML | 6.3k |  |
| [OpenLineage/OpenLineage](https://github.com/OpenLineage/OpenLineage) | 数据血缘元数据采集的开放标准，支持在 Spark、Airflow 等平台间统一追踪数据来源与流转。 | Java | 2.5k |  |
| [moj-analytical-services/splink](https://github.com/moj-analytical-services/splink) | 高性能概率实体对齐与去重库，支持 DuckDB、Spark 等多种 SQL 后端。 | Python | 2.2k | `data-matching` `data-science` `deduplicate-data` `deduplication` |
| [MarquezProject/marquez](https://github.com/MarquezProject/marquez) | 数据生态元数据的采集、聚合与可视化服务，支持数据治理和数据血缘追踪。 | Java | 2.2k | `data-dictionary` `data-discovery` `data-ecosystem-metadata` `data-governance` |
| [TuGraph-family/tugraph-db](https://github.com/TuGraph-family/tugraph-db) | TuGraph: A High Performance Graph Database. | C++ | 1.7k | `cpp` `cypher` `database` `fastest` |
| [Makisuo/maple](https://github.com/Makisuo/maple) | 基于 OpenTelemetry 的开源可观测性平台，提供链路追踪、指标与日志的统一管理 | TypeScript | 1.5k |  |
| [apache/geaflow](https://github.com/apache/geaflow) | Apache GeaFlow: A Streaming Graph Computing Engine. | Java | 781 | `geaflow` `graph` `streaming` |
| [Canner/wren-engine](https://github.com/Canner/wren-engine) ⚠️ | This repository has been merged into Canner/WrenAI under the core/ directory | Java | 662 | `agent` `agentic-ai` `ai` `business-intelligence` |


## 📝 知识库与个人生产力

### 笔记 / Wiki / 工作空间 (15)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [AppFlowy-IO/AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | AppFlowy：开源的 AI 协作工作空间，Notion 替代品 | Dart | 73.4k | `blog` `confluence-alternative` `content-management` `content-services` |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | AFFiNE：把规划、整理、创建结合在一起的下一代知识库（Notion 与 Miro 的替代品） | TypeScript | 70.1k | `app` `crdt` `editor` `electron` |
| [usememos/memos](https://github.com/usememos/memos) | Open-source, self-hosted note-taking tool built for quick capture. Markdown-native, lightweight, and fully yours. | Go | 61.4k | `docker` `foss` `go` `markdown` |
| [logseq/logseq](https://github.com/logseq/logseq) | Logseq：隐私优先的开源知识管理与协作平台 | Clojure | 43.7k | `clojure` `clojurescript` `git` `graph` |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI (gpt, claude, gemini, llama, qwen, mistral). Get started - free. | Python | 35.5k | `agent` `ai` `assistant` `chat` |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with more flexibility and features | TypeScript | 35k | `assistant` `learning` `note-taking` `notebook` |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills. | Rust | 29.4k | `agent-skills` `ai-agent` `automation` `cli` |
| [tobi/qmd](https://github.com/tobi/qmd) | mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local | TypeScript | 27.5k |  |
| [pickle-com/glass](https://github.com/pickle-com/glass) | Glass：Digital Mind Extension（数字心智延伸） | JavaScript | 7.5k | `electron` `local-first` `nextjs` `open-source` |
| [karpathy/reader3](https://github.com/karpathy/reader3) | Quick illustration of how one can easily read books together with LLMs. It's great and I highly recommend it. | Python | 3.8k |  |
| [ycccccccy/echotrace](https://github.com/ycccccccy/echotrace) | EchoTrace 是一个本地、安全的微信聊天记录导出、分析与年度报告生成工具 \| EchoTrace is a local, secure tool for exporting, analyzing, and generating annual reports of WeChat chat records | — | 3.7k | `annual-reports` `chat-history` `data-analysis` `data-visualization` |
| [event-catalog/eventcatalog](https://github.com/event-catalog/eventcatalog) | The architecture catalog for distributed systems. Document events, services, domains & flows with AI-powered discovery. | TypeScript | 2.8k | `ai` `architecture` `asyncapi` `ddd` |
| [zstmfhy/zlibrary-to-notebooklm](https://github.com/zstmfhy/zlibrary-to-notebooklm) | 一键将 Z-Library 书籍自动下载并上传到 Google NotebookLM | Python | 1.7k |  |
| [karlicoss/HPI](https://github.com/karlicoss/HPI) | Human Programming Interface 🧑👽🤖 | Python | 1.6k | `data-liberation` `extended-mind` `lifelogging` `personal-api` |
| [schpet/linear-cli](https://github.com/schpet/linear-cli) | linear without leaving the command line: list, start, and create PRs for linear issues. agent friendly. | TypeScript | 832 | `cli` `linear` `linearapp` |

### 个人 CRM (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | Twenty：面向 AI 设计的开源 Salesforce 替代品 | TypeScript | 52.2k | `crm` `crm-system` `customer` `good-first-issue` |
| [monicahq/monica](https://github.com/monicahq/monica) | Personal CRM：记录朋友、家人和商业关系的所有信息 | PHP | 24.8k | `crm` `family` `friends` `hacktoberfest` |
| [fbuchner/meerkat-crm](https://github.com/fbuchner/meerkat-crm) | 面向个人生活的 CRM | Go | 252 | `contact-management` `self-hosted` |

### 仪表盘 (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [lissy93/dashy](https://github.com/lissy93/dashy) | 可自托管的个人主页仪表盘，支持状态监控、小组件、主题与可视化配置界面。 | Vue | 25.7k | `awesome` `dashboard` `docker` `homelab` |
| [Lissy93/dashy](https://github.com/Lissy93/dashy) | 🚀 自托管的个人 dashboard，含状态检查、widgets、主题、UI 编辑器 | Vue | 25.1k | `awesome` `dashboard` `docker` `homelab` |
| [ActivityWatch/activitywatch](https://github.com/ActivityWatch/activitywatch) | The best free and open-source automated time tracker. Cross-platform, extensible, privacy-focused. | Python | 18.1k | `activitywatch` `afk` `analytics` `app` |
| [Thysrael/Horizon](https://github.com/Thysrael/Horizon) | AI 驱动的个人新闻雷达，每日生成英中双语简报。 | Python | 7.9k | `aggregator` `feishu-bot` `llm` `mcp` |

### 论坛 / 博客平台 (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | Ghost：现代出版、会员、订阅与 newsletter 的独立技术 | JavaScript | 54.3k | `blogging` `cms` `ghost` `javascript` |
| [discourse/discourse](https://github.com/discourse/discourse) | Discourse：免费、开源、简洁的社区讨论平台 | Ruby | 47.4k | `discourse` `ember` `forum` `javascript` |
| [lin-snow/Ech0](https://github.com/lin-snow/Ech0) | Ech0 – An open-source, self-hosted lightweight publishing platform for personal idea sharing. | Go | 2k | `ech0` `go` `golang` `markdown` |


## 💰 金融、职业与独立开发者

### 金融 / 交易 / 量化 (16)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents：多 agent LLM 金融交易框架 | Python | 91.3k | `agent` `finance` `llm` `multiagent` |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and AI agents. | Python | 70.1k | `ai` `crypto` `derivatives` `economics` |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | AI Hedge Fund Team：模拟对冲基金团队的 AI agent | Python | 60.9k |  |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets. | Python | 55k | `a-stock` `ai-agent` `aigc` `llm` |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos：金融市场语言的基础模型 | Python | 31.8k |  |
| [virattt/dexter](https://github.com/virattt/dexter) | dexter：做深度金融研究的自治 AI agent | TypeScript | 27.3k |  |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | ValueCell is a community-driven, multi-agent platform for financial applications. | Python | 10.9k | `agentic-ai` `agents` `ai` `assitant` |
| [AI4Finance-Foundation/FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) | FinRobot: An Open-Source AI Agent Platform for Financial Analysis using LLMs 🚀 🚀 🚀 | Jupyter Notebook | 7.5k | `aiagent` `chatgpt` `finance` `fingpt` |
| [muxuuu/serenity-skill](https://github.com/muxuuu/serenity-skill) | Serenity 供应链投资研究 skill — AI Agent 系统化分析科技行业供应链瓶颈，识别值得深入研究的股票与基金机会。 | Python | 3.3k | `agent-skills` `ai-agents` `claude-code` `codex` |
| [Polymarket/polymarket-cli](https://github.com/Polymarket/polymarket-cli) | 暂无描述 | Rust | 2.8k |  |
| [tradecatlabs/tradecat-public](https://github.com/tradecatlabs/tradecat-public) | 交易猫量化交易数据系统，支持加密货币实时行情采集与技术指标分析 | Python | 957 | `ai` `binance` `bitcoin` `ccxt` |
| [tukuaiai/tradecat-public](https://github.com/tukuaiai/tradecat-public) | 交易猫数据系统公开版，提供量化交易所需的市场数据与分析工具。 | Python | 952 | `ai` `binance` `bitcoin` `ccxt` |
| [tukuaiai/tradecat](https://github.com/tukuaiai/tradecat) | 交易猫数据系统（量化交易） | Python | 947 | `ai` `binance` `bitcoin` `ccxt` |
| [yorkeccak/Polyseer](https://github.com/yorkeccak/Polyseer) | Polymarket alpha at the speed of now. | TypeScript | 664 |  |
| [lucy-cxy/oss-investment-scorecard](https://github.com/lucy-cxy/oss-investment-scorecard) | A structured 5-dimension scoring framework for evaluating open-source AI projects from a VC investment perspective. Maintained by Lucy Chen, EIR at Zoo Capital (Singapore, $2B+ AUM). | — | 319 |  |
| [gengjiawen/buffett-chinese](https://github.com/gengjiawen/buffett-chinese) | 巴菲特价值投资的中文资料 | JavaScript | 262 |  |

### 职业 / 求职 (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [santifer/career-ops](https://github.com/santifer/career-ops) | 基于 Claude Code 的 AI 求职系统，含 14 个 skill、Go dashboard、PDF 生成、批处理 | JavaScript | 58.8k | `ai-agent` `anthropic` `automation` `beginner-friendly` |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 基于 Claude Code 的 AI 求职框架，可自动评估职位匹配度、定制简历并生成求职信。 | TypeScript | 6k |  |
| [vasu-devs/JustHireMe](https://github.com/vasu-devs/JustHireMe) | 本地优先的 AI 求职助手，支持职位抓取、岗位匹配度排名与定制化求职材料生成。 | Python | 2.1k | `agents` `ai` `hireme` `hiring` |
| [XiaomingX/jobleap-cn-ai-job-search](https://github.com/XiaomingX/jobleap-cn-ai-job-search) | 基于 AI 的智能求职平台 jobleap.cn，集成模拟面试、面试押题、简历模板、岗位匹配 | Python | 126 | `awesome` `jobsearch` |

### 独立开发 / 副业 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn! | TypeScript | 23.2k | `auto-publish` `douyin` `douyin-api` `electron-app` |
| [easychen/opc-methodology](https://github.com/easychen/opc-methodology) | 《一人企业方法论》第二版，也适合做其他副业（比如自媒体、电商、数字商品）的非技术人群。 | PHP | 16.2k |  |
| [XiaomingX/ai-money-maker-handbook](https://github.com/XiaomingX/ai-money-maker-handbook) | AI 副业赚钱大集合，教你如何利用 AI 做副业项目 | CSS | 2.8k | `awesome` `jobleap` |
| [XiaomingX/indie-hacker-tools-plus](https://github.com/XiaomingX/indie-hacker-tools-plus) | 为独立开发者准备的精选技术栈和工具仓库——经过验证的热门工具 | — | 1.7k | `agent` `ai` `awesome` `awesome-list` |
| [awesome-sideprojects/awesome-sideprojects](https://github.com/awesome-sideprojects/awesome-sideprojects) | 一份有趣（略混乱）的 awesome side projects 清单 | — | 50 |  |

### 营销 / 增长 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering. | JavaScript | 36.8k | `claude` `codex` `marketing` |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory. | Python | 20.9k | `agent-plugins` `agent-skills` `agentic-ai` `ai-coding-agent` |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports.  If you want learn how to sell this to real businesses, check out the skool community | Python | 8.9k |  |
| [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) | Comprehensive paid advertising audit & optimization skill for Claude Code. 250+ checks across Google, Meta, YouTube, LinkedIn, TikTok, Microsoft & Apple Ads with weighted scoring, parallel agents, industry templates, and AI creative generation. | Python | 6.8k | `ai` `ai-marketing` `claude-code` `claude-code-skill` |
| [EdoStra/Marketing-for-Founders](https://github.com/EdoStra/Marketing-for-Founders) | Practical marketing resources to get the first 10 / 100 / 1000 users for your SaaS / App / Startup | — | 6.5k | `awesome` `awesome-list` `collection` `educational` |
| [naxiaoduo/1000UserGuide](https://github.com/naxiaoduo/1000UserGuide) | 1000UserGuide：对独立开发者和创业者来说，找到前1000个早期用户太关键了。这里精心整理了300多个国内外渠道，适合独立开发者和创业者推广产品的渠道。 | HTML | 3.9k | `indie` `indiedev` `list` `marketing` |
| [ALwrity/ALwrity](https://github.com/ALwrity/ALwrity) | AI-first 数字营销全平台，集内容策略规划、多模态内容生成、Publishing、AI SEO 与社交账号管理于一体的 Marketing OS。 | Python | 1.1k | `ai-agent` `ai-content-generation` `ai-content-marketing` `ai-digital-marketing` |


## 🎓 教程与精选列表

### LLM 教程（中文） (11)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need：从 0 到 1 构建一个 nano claude code 风格的 agent harness | Python | 70k | `agent` `agent-development` `ai-agent` `claude` |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚《从零开始构建智能体》——从零开始的 Agent 原理与实践教程 | Python | 64.3k | `agent` `llm` `rag` `tutorial` |
| [datawhalechina/happy-llm](https://github.com/datawhalechina/happy-llm) | 📚 从零开始构建大模型 | Jupyter Notebook | 31.8k | `agent` `llm` `rag` |
| [datawhalechina/self-llm](https://github.com/datawhalechina/self-llm) | 《开源大模型食用指南》：基于 Linux 环境快速微调（全参/Lora）、部署国内外开源 LLM/MLLM 教程 | Jupyter Notebook | 31.2k | `chatglm` `chatglm3` `gemma-2b-it` `glm-4` |
| [datawhalechina/llm-cookbook](https://github.com/datawhalechina/llm-cookbook) | 面向开发者的 LLM 入门教程，吴恩达大模型系列课程中文版 | Jupyter Notebook | 24.4k | `cookbook` `llm` |
| [tukuaiai/vibe-coding-cn](https://github.com/tukuaiai/vibe-coding-cn) | 中文 Vibe Coding 从入门到精通教程，覆盖 prompt/skill/workflow/上下文管理与 Cursor/Claude Code/Codex/Gemini CLI 实战 | Python | 13.9k | `ai` `ai-agent` `ai-agents` `ai-coding` |
| [datawhalechina/llm-universe](https://github.com/datawhalechina/llm-universe) | 本项目是一个面向小白开发者的大模型应用开发教程，在线阅读地址：https://datawhalechina.github.io/llm-universe/ | Jupyter Notebook | 13.4k | `langchain` `rag` |
| [luhengshiwo/LLMForEverybody](https://github.com/luhengshiwo/LLMForEverybody) | 每个人都能看懂的大模型知识分享，LLMs 春/秋招大模型面试前必看 | Jupyter Notebook | 6.9k | `agent` `interview-practice` `interview-questions` `learnllm` |
| [datawhalechina/llms-from-scratch-cn](https://github.com/datawhalechina/llms-from-scratch-cn) | 仅需 Python 基础，从 0 构建大语言模型（GLM4/Llama3/RWKV6），深入理解大模型原理 | Jupyter Notebook | 4.2k | `glm` `llama` `llm` `llms-from-scratch` |
| [skindhu/Build-A-Large-Language-Model-CN](https://github.com/skindhu/Build-A-Large-Language-Model-CN) | 《Build a Large Language Model (From Scratch)》中文翻译版 | HTML | 3.8k |  |
| [datawhalechina/llm-deploy](https://github.com/datawhalechina/llm-deploy) | 大模型/LLM 推理与部署的理论与实践 | — | 407 | `knowledge-distillation` `llm` `llm-deploy` `lora` |

### LLM 教程（英文） (17)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 用 PyTorch 从零实现一个 ChatGPT 风格的 LLM，逐步深入 | Jupyter Notebook | 98.6k | `ai` `artificial-intelligence` `attention-mechanism` `deep-learning` |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | 学习 LLM 的课程，含 roadmap 与 Colab notebook | — | 80.7k | `course` `large-language-models` `llm` `machine-learning` |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy. | Python | 55.9k |  |
| [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic 出品的交互式 prompt engineering 教程 | Jupyter Notebook | 36.9k |  |
| [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | LLM、RAG 与真实世界 AI agent 应用的深度教程 | Jupyter Notebook | 36.4k | `agents` `ai` `llms` `machine-learning` |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Anthropic 官方金融服务行业 Claude API 应用示例与最佳实践合集 | Python | 33.1k |  |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | RAG（Retrieval-Augmented Generation）系统的高级技术合集，每个技术都有详细 notebook 教程 | Jupyter Notebook | 28.4k | `agentic-rag` `ai` `embeddings` `generative-ai` |
| [humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents) | 构建可投入生产的 LLM 驱动软件的 12 条原则，涵盖 AI Agent 工程最佳实践与设计模式。 | TypeScript | 24k | `12-factor` `12-factor-agents` `agents` `ai` |
| [anthropics/courses](https://github.com/anthropics/courses) | Anthropic 出品的教育课程 | Jupyter Notebook | 22.1k |  |
| [google-gemini/gemini-fullstack-langgraph-quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart) | 用 Gemini 2.5 与 LangGraph 构建全栈 Agent 的快速开始 | Jupyter Notebook | 18.2k | `gemini` `gemini-api` |
| [langchain-ai/rag-from-scratch](https://github.com/langchain-ai/rag-from-scratch) | 从零开始的 RAG 教程 | Jupyter Notebook | 8.8k |  |
| [decodingai-magazine/llm-twin-course](https://github.com/decodingai-magazine/llm-twin-course) | 🤖 免费学习如何用 LLMOps 最佳实践构建端到端生产级 LLM 与 RAG 系统 | Python | 4.4k | `aws` `bytewax` `comet-ml` `course` |
| [HuaizhengZhang/AI-Infra-from-Zero-to-Hero](https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero) | 系统化的 AI 基础设施学习路径，汇集 OSDI、MLSys 等顶会 ML 系统论文与工业实践案例。 | — | 4.2k | `ai-infra` `genai` `large-language-models` `llmsys` |
| [pageman/sutskever-30-implementations](https://github.com/pageman/sutskever-30-implementations) | Sutskever 30 篇论文的代码实现合集 | Jupyter Notebook | 3.3k |  |
| [bhancockio/langchain-crash-course](https://github.com/bhancockio/langchain-crash-course) | LangChain 速成课程 | Python | 958 |  |
| [ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing](https://github.com/ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing) | LLM-PowerHouse：精选教程、最佳实践与即用代码，覆盖自定义训练与推理 | Jupyter Notebook | 728 | `bert` `huggingface` `large-language-models` `llm-inference` |
| [sammcvicker/blueally-enablement-notebooks](https://github.com/sammcvicker/blueally-enablement-notebooks) | 暂无描述 | Jupyter Notebook | 2 |  |

### 上下文工程 / Vibe Coding (8)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Driven Development | Python | 118.3k | `ai` `copilot` `development` `engineering` |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Breakthrough Method for Agile Ai Driven Development | JavaScript | 50.1k |  |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | Vibe Coding 从入门到精通中文教程，涵盖 AI 结对编程工作流、Prompt 设计、Skill、Workflow 与 Codex 实战指南 | Python | 15.2k | `ai` `ai-agent` `ai-agents` `ai-coding` |
| [coleam00/context-engineering-intro](https://github.com/coleam00/context-engineering-intro) | Context engineering 入门：让 AI coding 助手真正工作的方法 | Python | 13.6k |  |
| [jasontang-ai/Context-Engineering](https://github.com/jasontang-ai/Context-Engineering) | 受 Karpathy 与 3Blue1Brown 启发的上下文工程手册，从第一性原理出发，涵盖上下文设计、编排与优化。 | Python | 9.1k |  |
| [davidkimai/Context-Engineering](https://github.com/davidkimai/Context-Engineering) | 受 Karpathy 与 3Blue1Brown 启发的 context engineering 第一性原理手册 | Python | 9.1k |  |
| [datawhalechina/vibe-vibe](https://github.com/datawhalechina/vibe-vibe) | AI for All: The First Systematic Vibe Coding Tutorial \| From Zero to Full-Stack, Bring Your Ideas to Life \| Live at: www.vibevibe.cn   ；全民AI学习第一课，首个系统化 Vibe Coding 开源教程 \| 零基础到全栈实战，让人人都能借助 AI 实现自己的想法与创意 \| 在线地址：www.vibevibe.cn | Dockerfile | 5.7k | `agent` `agentic-ai` `ai` `coding-assistant` |
| [alchaincyf/hermes-agent-orange-book](https://github.com/alchaincyf/hermes-agent-orange-book) | Hermes Agent 从入门到精通 · 橙皮书系列 · Nous Research 开源 AI Agent 框架实战指南 | — | 4.6k |  |

### 系统设计与面试 (9)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | 学习设计大规模系统，准备系统设计面试，含 Anki 闪卡 | Python | 356.3k | `design` `design-patterns` `design-system` `development` |
| [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a software engineer. | — | 355.2k | `algorithm` `algorithms` `coding-interview` `coding-interviews` |
| [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 学习大规模系统设计与系统设计面试准备 | — | 44.4k | `architecture` `distributed-systems` `engineering` `interview` |
| [DataExpert-io/data-engineer-handbook](https://github.com/DataExpert-io/data-engineer-handbook) | 数据工程学习路径与资源合集 | Jupyter Notebook | 42.1k | `apachespark` `awesome` `bigdata` `data` |
| [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | 用免费资源学习系统设计概念并准备面试 | Java | 39.4k | `awesome` `backend` `computer-science` `distributed-systems` |
| [google/eng-practices](https://github.com/google/eng-practices) ⚠️ | Google 工程实践文档，包含 Google 代码审查规范与工程最佳实践。 | — | 23.3k |  |
| [Jeevan-kumar-Raj/Grokking-System-Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design) | 系统设计：定义满足需求的系统架构、模块、接口与数据 | Shell | 6.5k |  |
| [dunwu/db-tutorial](https://github.com/dunwu/db-tutorial) | 📚 后端程序员应该掌握的主流数据库知识 | Java | 5.4k | `database` `db` `elasticsearch` `hbase` |
| [subhashchy/The-Accidental-CTO](https://github.com/subhashchy/The-Accidental-CTO) | How I Scaled from Zero to a Million Store on Dukaan,  Without a CS Degree.  .. A System Design Handbook by  Subhash Choudhary | TypeScript | 3.6k | `scaling` `system-design` |

### 动手实现 / 项目驱动学习 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | 通过从零重建你最喜欢的技术来精通编程 | Markdown | 522.9k | `awesome-list` `free` `programming` `tutorial-code` |
| [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning) | 项目驱动的学习教程精选清单 | Python | 272.3k | `beginner-project` `cpp` `golang` `javascript` |
| [lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions) | 一长串（进阶）JavaScript 问题与解释 | — | 65.3k |  |
| [MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning) | This is the homepage of a new book entitled "Mathematical Foundations of Reinforcement Learning." | MATLAB | 16.9k | `artificial-intelligence` `book` `courses` `reinforcement-learning` |
| [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | Gradio WebUI for creators and developers, featuring key TTS (Edge-TTS, kokoro) and zero-shot Voice Cloning (E2 & F5-TTS, CosyVoice), with Whisper audio processing, YouTube download, Demucs vocal isolation, and multilingual translation. | Python | 11.1k | `audiobook` `faster-whisper` `gradio` `karaoke` |

### Awesome 精选列表 (30)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | 😎 关于各类有趣主题的 awesome 清单总集 | — | 482k | `awesome` `awesome-list` `lists` `resources` |
| [vinta/awesome-python](https://github.com/vinta/awesome-python) | Python 框架、库、工具与资源的精选清单 | Python | 306.6k | `awesome` `collections` `python` `python-frameworks` |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Cursor / Devin / Lovable / v0 等 AI 工具的 system prompt、内部 tool 与 AI 模型合集 | — | 141.6k | `ai` `bolt` `cluely` `copilot` |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agent & RAG apps you can actually run — clone, customize, ship. | Python | 116.6k | `agents` `llms` `python` `rag` |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | A collection of DESIGN.md files inspired by popular brand design systems. Drop one into your project and let coding agents generate a matching UI. | — | 96.1k | `awesome-list` `design-md` `design-system` `design-tokens` |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP servers 合集 | — | 90.4k | `ai` `mcp` |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | OpenClaw skills 的精选合集，从官方 Skills Registry 筛选并分类的 5400+ skill | — | 51k | `agent-skills` `awesome` `awesome-list` `awesome-lists` |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 持续更新的各大 AI 工具（Claude、ChatGPT、Codex、Gemini、Grok 等）system prompt 泄露合集。 | JavaScript | 50.8k | `ai` `ai-agents` `anthropic` `awesome` |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Claude Code 的精选 skills、hooks、slash-commands、agent orchestrator、应用与插件 | Python | 48.7k | `agent-skills` `agentic-code` `agentic-coding` `ai-workflow-optimization` |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | 增强 Cursor AI 编辑器体验的配置文件合集 | JavaScript | 40.2k | `awesome` `awesome-list` `cursor` `cursor-ai-editor` |
| [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) | The 500 AI Agents Projects is a curated collection of AI agent use cases across various industries. It showcases practical applications and provides links to open-source projects for implementation, illustrating how AI agents are transforming sectors such as healthcare, finance, education, retail, and more. | Python | 33.8k | `ai-agents` `genai` |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | — | 27.4k | `agent-skills` `ai-agents` `antigravity-skills` `awesome` |
| [enescingoz/awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | 280+ free n8n automation templates — ready-to-use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive, Notion, OpenAI, and more. AI agents, RAG   chatbots, email automation, social media, DevOps, and document processing. The largest open-source n8n template collection. | — | 23.7k | `ai-agents` `ai-automation` `automation` `automation-templates` |
| [BradyFU/Awesome-Multimodal-Large-Language-Models](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models) | 多模态大语言模型最新进展的 awesome 清单 | — | 17.9k | `chain-of-thought` `in-context-learning` `instruction-following` `instruction-tuning` |
| [YouMind-OpenLab/awesome-nano-banana-pro-prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts) | 🍌 World's largest Nano Banana Pro prompt library — 10,000+ curated prompts with preview images, 16 languages. Google Gemini AI image generation. Free & open source. | TypeScript | 12.8k | `ai-image-generation` `ai-prompts` `awesome` `awesome-list` |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) | A curated list of Claude Skills. | — | 9.7k |  |
| [0xeb/TheBigPromptLibrary](https://github.com/0xeb/TheBigPromptLibrary) | prompt、system prompt 与 LLM instruction 的合集 | HTML | 5.2k |  |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | agentic AI 模式的 awesome 精选目录 | HTML | 4.8k |  |
| [lukasmasuch/best-of-python](https://github.com/lukasmasuch/best-of-python) | 🏆 排序后的 Python 开源库与工具清单（每周更新） | — | 4.5k | `awesome` `awesome-list` `best-of` `best-of-list` |
| [xianyu110/awesome-openclaw-tutorial](https://github.com/xianyu110/awesome-openclaw-tutorial) | 从零开始玩转 OpenClaw 的全面中文教程，含安装、配置、实战案例与避坑指南 | Shell | 4.5k | `openclaw` `openclaw-skills` |
| [dkozlov/awesome-knowledge-distillation](https://github.com/dkozlov/awesome-knowledge-distillation) | Awesome Knowledge Distillation | — | 3.9k | `co-training` `deep-learning` `distillation` `distillation-model` |
| [Meirtz/Awesome-Context-Engineering](https://github.com/Meirtz/Awesome-Context-Engineering) | 🔥 Comprehensive survey on Context Engineering: from prompt engineering to production-grade AI systems. hundreds of papers, frameworks, and  implementation guides for LLMs and AI agents. | — | 3.2k | `agent` `agentic-ai` `agi` `awesome-list` |
| [kuchin/awesome-ceo](https://github.com/kuchin/awesome-ceo) | A curated and opinionated list of resources for startup founders and leaders of high-growth companies | — | 2.5k | `awesome` `awesome-list` `ceo` `decision-making` |
| [PeterGriffinJin/Awesome-Language-Model-on-Graphs](https://github.com/PeterGriffinJin/Awesome-Language-Model-on-Graphs) | A curated list of papers and resources based on "Large Language Models on Graphs: A Comprehensive Survey" (TKDE) | — | 997 | `awesome-resources` `generative-ai` `graphs` `large-language-models` |
| [topoteretes/awesome-ai-memory](https://github.com/topoteretes/awesome-ai-memory) | A list of AI memory projects | Python | 806 | `ai` `ai-agents` `ai-engineering` `ai-memory` |
| [mliu98/awesome-human-distillation](https://github.com/mliu98/awesome-human-distillation) | A curated catalog of human distillliation agent skills | Python | 688 | `agent-skills` `awesome-list` `claude-code` `claude-code-skills` |
| [Curated-Awesome-Lists/awesome-llms-fine-tuning](https://github.com/Curated-Awesome-Lists/awesome-llms-fine-tuning) | LLM 微调的资源、教程、论文、工具与最佳实践合集 | — | 521 | `ai` `awesome-list` `deep-learning` `fine-tuning` |
| [Zheng-Chong/Awesome-Try-On-Models](https://github.com/Zheng-Chong/Awesome-Try-On-Models) | 虚拟试穿模型相关的论文、代码与资源整理 | — | 434 | `3d-generation` `diffusion-models` `image-generation` `sota-model` |
| [lliai/Awesome-Vision-Knowledge-Distillation](https://github.com/lliai/Awesome-Vision-Knowledge-Distillation) | Awesome Knowledge-Distillation for CV | — | 94 |  |
| [kg-construct/awesome-kgc-tools](https://github.com/kg-construct/awesome-kgc-tools) | Links and description of Knowledge Graphs Construction Tools | — | 85 |  |


## 🌈 杂项 / 生活娱乐

### 美食 / 健康 / 健身 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [Anduin2017/HowToCook](https://github.com/Anduin2017/HowToCook) | 程序员在家做饭方法指南 | — | 101.1k | `chinese` `cookbook` `cooking` `dishes` |
| [zijie0/HumanSystemOptimization](https://github.com/zijie0/HumanSystemOptimization) | 健康学习到 150 岁——人体系统调优不完全指南 | — | 21.8k |  |
| [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) | 涵盖 433 个健身动作的综合数据集，含动作名称、分类、目标肌群、器材说明及演示视频。 | HTML | 10.1k | `excercises` `fitness` `fitness-app` |
| [Snouzy/workout-cool](https://github.com/Snouzy/workout-cool) | 🏋 现代开源健身教练平台：制定计划、跟踪进度、查询动作库 | TypeScript | 8.1k | `coach` `exercise` `feature-sliced-design` `fitness` |
| [liu-ziting/what-to-eat](https://github.com/liu-ziting/what-to-eat) | 一饭封神：基于 AI 的智能菜谱生成平台，支持中华八大菜系与国际料理 | Vue | 3.5k | `ai` `gpt` `vibe-coding` |

### 情报 / 安全 (8)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production. | TypeScript | 45.5k | `penetration-testing` `pentesting` `security-audit` `security-automation` |
| [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️ 通过用户名在 3000+ 网站收集个人信息档案的 OSINT 工具 | Python | 35k | `cli` `cybersecurity` `identification` `information-gathering` |
| [lissy93/web-check](https://github.com/lissy93/web-check) | 一站式网站 OSINT 分析工具，涵盖 DNS、SSL、安全头等多维度网站信息检测。 | TypeScript | 34.1k | `osint` `privacy` `security` `security-tools` |
| [Lissy93/web-check](https://github.com/Lissy93/web-check) | 🕵️‍♂️ All-in-one OSINT tool for analysing any website | TypeScript | 33.1k | `osint` `privacy` `security` `security-tools` |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 针对语言模型的全自动安全过滤绕过工具，支持主流 LLM 的内置审查过滤器移除 | Python | 25.8k | `abliteration` `llm` `transformer` |
| [AZeC4/TelegramGroup](https://github.com/AZeC4/TelegramGroup) | 2026最新悄咪咪收集的10000+个Telegram群合集，附全网最有趣好用的机器人BOT🤖【dianbaodaohang.com】 | — | 21.8k | `telegram` `telegram-api` `telegram-bot` `telegram-bot-api` |
| [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators. | TypeScript | 7.2k | `investigation` `osint` `python` `recon` |
| [s0md3v/be-a-hacker](https://github.com/s0md3v/be-a-hacker) | 自学黑客的路线图 | — | 2.8k |  |

### Web3 / 区块链 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [AmazingAng/WTF-Solidity](https://github.com/AmazingAng/WTF-Solidity) | WTF Solidity 极简入门教程，供小白使用 | Solidity | 14k | `airdrop` `auction` `blockchain` `dapp` |
| [OneKeyHQ/app-monorepo](https://github.com/OneKeyHQ/app-monorepo) | Secure, open source and community driven crypto wallet runs on all platforms and trusted by millions. | TypeScript | 2.4k | `android` `bitcoin` `blockchain` `crypto` |

### 游戏 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [leereilly/games](https://github.com/leereilly/games) ⚠️ | Archived：GitHub 上托管的游戏、扩展、地图等清单（任意类型/平台/引擎） | — | 24.9k | `game` `game-development` `game-engine` `gamedev` |
| [BKcore/HexGL](https://github.com/BKcore/HexGL) | HexGL 的源码：未来风格的 HTML5 赛车游戏 | JavaScript | 1.7k |  |

### 教育 (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp 开源课程平台，提供数学、编程与计算机科学的免费系统性学习资源。 | TypeScript | 451.2k | `careers` `certification` `community` `curriculum` |
| [mswnlz/edu-knowlege](https://github.com/mswnlz/edu-knowlege) | 教育各种资料，从幼儿园到小学、中学，涵盖学而思，万维、猿辅导等多个机构，持续增加中 | JavaScript | 4.2k |  |
| [cubewhy/skid-homework](https://github.com/cubewhy/skid-homework) | 符合人体工程学的 AI 驱动作业助手 | TypeScript | 1.6k | `ai` `gemini` `homework` `homework-helper` |
| [wassimj/topologicpy](https://github.com/wassimj/topologicpy) | The python bindings for topologic | Jupyter Notebook | 248 |  |

### 个人 / 试验性项目 (12)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [LOG1997/log-lottery](https://github.com/LOG1997/log-lottery) | 🎈🎈🎈🎈年会抽奖程序，threejs+vue3 3D球体动态抽奖应用。 | TypeScript | 3.3k | `3d` `daisyui` `lottery` `lucky` |
| [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎，基于倪海夏《天纪》体系，含完整四化系统与格局知识库。 | TypeScript | 2.9k | `bazi` `chinese-astrology` `divination` `fortune-telling` |
| [DestinyLinker/MingLi-Bench](https://github.com/DestinyLinker/MingLi-Bench) | 🔮 中文传统命理（八字 / 紫微）LLM 评测基准 — Tianfu Agent 的训练参照。 | Python | 2.1k |  |
| [context-labs/aella-data-explorer](https://github.com/context-labs/aella-data-explorer) | LAION 研究论文数据集的可视化浏览器 | TypeScript | 913 |  |
| [FANzR-arch/Numerologist_skills](https://github.com/FANzR-arch/Numerologist_skills) | 🔮 给 LLM 做中国玄学的「紧箍咒」工程框架 — 减少赛博半仙的幻觉。 | HTML | 856 |  |
| [khalildh/garment-notation](https://github.com/khalildh/garment-notation) | 服装符号化项目（暂无明确描述） | JavaScript | 434 |  |
| [jayrodge/ai-agents](https://github.com/jayrodge/ai-agents) | AI agents 项目（暂无描述） | Python | 262 |  |
| [gkamradt/MultiTerminalCodeViz](https://github.com/gkamradt/MultiTerminalCodeViz) | 多终端代码可视化工具 | TypeScript | 249 |  |
| [draco-agent/tech-news-digest](https://github.com/draco-agent/tech-news-digest) | 科技新闻摘要 agent 项目 | Python | 69 |  |
| [ppuliu/night-shift](https://github.com/ppuliu/night-shift) | 暂无描述 | — | 21 |  |
| [JesseQin123/JewelFlow](https://github.com/JesseQin123/JewelFlow) | 你自己的项目（暂无描述） | TypeScript | 1 |  |
| [wtlee328/lead-gen](https://github.com/wtlee328/lead-gen) | Lead 生成项目（暂无描述） | Vue | 1 |  |


---

**图例**：⚠️ = 项目已被原作者 archive。Star 数为某时点快照。Topic 标签来自 GitHub。

**维护**：跑 `scripts/sync-stars.sh` 把新增 star 拉进 `inbox.md`；编辑 `data/manifest.json` 调整分类或重写描述，再跑 `python3 scripts/build-readme.py`。
