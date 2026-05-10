# Solo Unicorn Toolbox 🛠️

> A bilingual, weekly-synced catalog of **487 curated GitHub repos** — AI agents, coding harnesses, RAG, multimedia, tutorials, and more — aggregated from GitHub stars, Twitter bookmarks, and 小红书.

> 中文版本：[README.zh-CN.md](./README.zh-CN.md) · Maintenance guide: [CLAUDE.md](./CLAUDE.md)

### Why this exists

I keep finding the same kinds of tools across different platforms (GitHub, X/Twitter, 小红书) and losing track of them in scattered bookmarks. This repo is the single index I actually come back to.

### What's inside

- **487 repositories** across 12 categories — see the table of contents below
- Stars from two GitHub accounts: `JesseQin123` (personal) + `jesseqin-kamiwaza` (work)
- Twitter bookmark sweeps — GitHub URLs hand-picked from threads I save on X
- Weekly auto-sync via [`.github/workflows/sync-stars.yml`](.github/workflows/sync-stars.yml)

### How to read each row

`Repo · Description · Language · ⭐ stars · Topic tags`. Entries within each (sub)category are sorted by stars descending. ⚠️ marks repos archived by their authors.

### How to add an entry

Paste a GitHub URL into [`inbox.md`](./inbox.md) → run `scripts/enrich-inbox.sh` → assign a category in [`data/manifest.json`](./data/manifest.json) → run `python3 scripts/build-readme.py`. The full workflow is in [`CLAUDE.md`](./CLAUDE.md).

---

## Table of Contents

- [🤖 AI Agents & Coding Harnesses (84)](#-ai-agents--coding-harnesses)
- [🛠 AI Agent Skills & MCP (57)](#-ai-agent-skills--mcp)
- [🌐 Browser & Web Automation (12)](#-browser--web-automation)
- [🧠 RAG / Knowledge Graph / Memory (42)](#-rag--knowledge-graph--memory)
- [🎨 Multimedia AI (50)](#-multimedia-ai)
- [📊 Crawler & Content Publishing (29)](#-crawler--content-publishing)
- [💻 Frontend Templates & UI (23)](#-frontend-templates--ui)
- [🏗 Backend & Infrastructure (40)](#-backend--infrastructure)
- [📝 Knowledge Base & Personal Productivity (23)](#-knowledge-base--personal-productivity)
- [💰 Finance, Career & Indie Hacker (26)](#-finance-career--indie-hacker)
- [🎓 Tutorials & Awesome Lists (73)](#-tutorials--awesome-lists)
- [🌈 Misc / Lifestyle (28)](#-misc--lifestyle)

---

## 🤖 AI Agents & Coding Harnesses

### Claude Code Ecosystem (15)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. | JavaScript | 175.9k | `ai-agents` `anthropic` `claude` `claude-code` |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA | TypeScript | 91.6k |  |
| [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) | A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES. | JavaScript | 61k | `claude-code` `context-engineering` `meta-prompting` `spec-driven-development` |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies | Rust | 44.7k | `agentic-coding` `ai-coding` `anthropic` `claude-code` |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Code | Python | 27k | `anthropic` `anthropic-claude` `claude` `claude-code` |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop | Shell | 16.2k | `agent` `ai` `claude` `claude-code` |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness | Rust | 5.1k | `ai` `claude` `cli` `coding-agent` |
| [breaking-brake/cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio) | CC Workflow Studio | TypeScript | 5k | `agent-skills` `claude-code` `mcp-tools` `slash-commands` |
| [matt1398/claude-devtools](https://github.com/matt1398/claude-devtools) | The missing DevTools for Claude Code — inspect session logs, tool calls, token usage, subagents, and context window in a visual UI. Free, open source. | TypeScript | 3.3k | `ai` `ai-agent` `ai-debugging` `ai-tools` |
| [ZeframLou/call-me](https://github.com/ZeframLou/call-me) | Minimal plugin that lets Claude Code call you on the phone. | TypeScript | 2.6k |  |
| [1rgs/nanocode](https://github.com/1rgs/nanocode) | Minimal Claude Code alternative. Single Python file, zero dependencies, ~250 lines. | Python | 2.4k |  |
| [mikekelly/claude-sneakpeek](https://github.com/mikekelly/claude-sneakpeek) | Get a parallel build of Claude code that unlocks feature-flagged capabilities like swarm mode. | TypeScript | 1.1k |  |
| [op7418/Claude-to-IM](https://github.com/op7418/Claude-to-IM) | Host-agnostic bridge connecting Claude Code SDK to IM platforms (Telegram, Discord, Feishu) | TypeScript | 443 | `claude` `claude-code` `discord-bot` `feishu` |
| [ChanMeng666/echook](https://github.com/ChanMeng666/echook) | 🔊 echook — AI-operated audio notifications for Claude Code, Cursor IDE & Codex CLI — 26 hooks, voice + chime themes, TTS, webhooks, rate-limit alerts, status line. Tell your AI agent to install — natural language forever after. | Python | 58 | `ai-operated` `audio-notifications` `automation` `bash` |
| [contextgraph/claude-code-plugin](https://github.com/contextgraph/claude-code-plugin) | ContextGraph plugin for Claude Code - AI-forward persistent task management | — | 1 |  |

### Codex (1)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | Use Codex from Claude Code to review code or delegate tasks. | JavaScript | 17.9k |  |

### OpenClaw / Hermes / Paperclip (20)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 | TypeScript | 369.9k | `ai` `assistant` `crustacean` `molty` |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you | Python | 139.1k | `ai` `ai-agent` `ai-agents` `anthropic` |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | Open-source orchestration for zero-human companies | TypeScript | 63.6k |  |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | "🐈 nanobot: The Ultra-Lightweight Personal AI Agent" | Python | 42k | `ai` `ai-agent` `ai-agents` `anthropic` |
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | Garry's Opinionated OpenClaw/Hermes Agent Brain | TypeScript | 13.8k |  |
| [nearai/ironclaw](https://github.com/nearai/ironclaw) | IronClaw is an Agent OS focused on privacy, security and extensibility | Rust | 12.2k | `codeact` `openclaw` `rlm` `rust` |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI: The best way to use Hermes Agent from the web or from your phone! | Python | 6.2k | `agent` `ai-agents` `hermes` `hermes-agent` |
| [memovai/mimiclaw](https://github.com/memovai/mimiclaw) | MimiClaw: Run OpenClaw on a $5 chip. No OS(Linux). No Node.js. No Mac mini. No Raspberry Pi. No VPS. Hardware agents OS. | C | 5.4k | `ai` `assistant` `clawdbot` `edge-ai-agents` |
| [outsourc-e/hermes-workspace](https://github.com/outsourc-e/hermes-workspace) | Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector. | JavaScript | 3.6k | `agent-ui` `ai-workspace` `hackathon` `hermes-agent` |
| [miaoxworld/OpenClawInstaller](https://github.com/miaoxworld/OpenClawInstaller) | ClawdBot 一键部署工具 | Shell | 3.4k | `clawdbot` `moltbot` `openclaw` |
| [SumeLabs/clawra](https://github.com/SumeLabs/clawra) | Clawra - Openclaw as your companion | TypeScript | 2.3k |  |
| [NousResearch/hermes-paperclip-adapter](https://github.com/NousResearch/hermes-paperclip-adapter) | Paperclip adapter for Hermes Agent — run Hermes as a managed employee in a Paperclip company | TypeScript | 1.1k |  |
| [awizemann/scarf](https://github.com/awizemann/scarf) | Native macOS and iOS App for the Hermes AI agent — multi-window, multi-server (local + remote over SSH). Chat, dashboard, sessions, memory, cron, MCP, and more. | Swift | 432 | `ai-agent` `gui` `hermes` `macos` |
| [AnthonyDavidAdams/zero-employee-company-book](https://github.com/AnthonyDavidAdams/zero-employee-company-book) | Headcount Zero: How to Build an AI-Run Company with Paperclip | — | 363 |  |
| [Yesterday-AI/paperclip-plugin-company-wizard](https://github.com/Yesterday-AI/paperclip-plugin-company-wizard) | Bootstrap AI agent companies from modular templates. | TypeScript | 123 | `ai-agents` `bootstrap` `cli` `company-as-code` |
| [Kori-x/hermes-dashboard](https://github.com/Kori-x/hermes-dashboard) | Dashboard for monitoring and managing Hermes agent sessions, tool usage, and activity in real-time | TypeScript | 47 | `agent-framework` `ai-agents` `dashboard` `devtools` |
| [GUNAASHRINM/Hermes-Agent-Wizard](https://github.com/GUNAASHRINM/Hermes-Agent-Wizard) | 🚀 Hermes Agent GUI Launcher 2026 – Windows & macOS 1-Click Setup Tool 🖱️ | — | 11 | `ai-agent` `beginner-friendly` `chinese-ui` `desktop-app` |
| [xujfcn/crazyrouter-hermes](https://github.com/xujfcn/crazyrouter-hermes) | Use Hermes Agent (NousResearch) with Crazyrouter — 600+ AI models, 30-50% cheaper than OpenRouter | Shell | 5 | `ai-agent` `crazyrouter` `crazyrouter-integration` `hermes-agent` |
| [wysie/drawthings-grpc-hermes-plugin](https://github.com/wysie/drawthings-grpc-hermes-plugin) | Hermes Agent plugin for local Draw Things image generation via gRPC | Python | 4 | `apple-silicon` `draw-things` `grpc` `hermes-agent` |
| [AlexanderWhitestone/hermes-dashboard-sovereign-ops](https://github.com/AlexanderWhitestone/hermes-dashboard-sovereign-ops) | Sovereign Ops dashboard plugin + theme for Hermes Agent | JavaScript | 3 | `dashboard` `hackathon` `hermes-agent` `local-first` |

### Multi-Agent Orchestration (15)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. | Python | 66.1k | `agent` `agentic` `agentic-framework` `agentic-workflow` |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | Build AI Agents, Visually | TypeScript | 52.7k | `agentic-ai` `agentic-workflow` `agents` `artificial-intelligence` |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features    enterprise-grade architecture, self-learning swarm intelligence, RAG integration, and native Claude Code / Codex Integration | TypeScript | 46.8k | `agentic-ai` `agentic-framework` `agentic-rag` `agentic-workflow` |
| [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | Conductor is an event driven agentic workflow engine providing durable and highly resilient execution engine for applications and AI Agents | Java | 31.8k | `distributed-systems` `durable-execution` `grpc` `java` |
| [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills. | TypeScript | 26.2k |  |
| [openai/symphony](https://github.com/openai/symphony) | Symphony turns project work into isolated, autonomous implementation runs, allowing teams to manage work instead of supervising coding agents. | Elixir | 22.6k |  |
| [camel-ai/owl](https://github.com/camel-ai/owl) | 🦉 OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation | Python | 19.8k | `agent` `artificial-intelligence` `multi-agent-systems` `task-automation` |
| [gastownhall/gastown](https://github.com/gastownhall/gastown) | Gas Town - multi-agent workspace manager | Go | 15k |  |
| [superset-sh/superset](https://github.com/superset-sh/superset) | Code Editor for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine | TypeScript | 10.5k | `agentic-ai` `ai-agents` `claude-code` `cli` |
| [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) | Agentic orchestrator for parallel coding agents — plans tasks, spawns agents, and autonomously handles CI    fixes, merge conflicts, and code reviews. | TypeScript | 6.9k | `agent-fleet` `agent-swarm` `claude-code` `codex-cli` |
| [camel-ai/oasis](https://github.com/camel-ai/oasis) | 🏝️ OASIS: Open Agent Social Interaction Simulations with One Million Agents. | Python | 4.5k | `agent-based-framework` `agent-based-simulation` `ai-societies` `deep-learning` |
| [gensyn-ai/rl-swarm](https://github.com/gensyn-ai/rl-swarm) | A fully open source framework for creating RL training swarms over the internet. | Python | 1.7k |  |
| [KroMiose/nekro-agent](https://github.com/KroMiose/nekro-agent) | NekroAgent 是一个面向多人互动场景的跨平台 Agent 框架，集 Claude Code 沙盒执行、工作区编排、长期记忆、结构化 MCP 管理与可视化控制台于一体，兼具高扩展性、多模态交互、实时状态推送和自动化运行能力。项目支持 QQ、Discord、Telegram、Minecraft、BilibiliLive、WeChat、Email、SSE(SDK) 等多种平台接入，应用于构建高智能聊天机器人，可扩展为具备代码执行、工具调用、插件协作和复杂任务处理能力的通用 Agent 系统 | Python | 837 | `agent` `ai` `chatbot` `claudecode` |
| [coleam00/Linear-Coding-Agent-Harness](https://github.com/coleam00/Linear-Coding-Agent-Harness) | Linear Autonomous Coding Agent Harness | Python | 216 |  |
| [Abruptive/Ankh.md](https://github.com/Abruptive/Ankh.md) | A mysterious multi-agent swarm framework summoned by TAW Agent from 1971 to help you craft a better future towards 2133 & beyond. Ankh.md is a Hermes Agent (Nous Research) launch exclusive. | Shell | 51 | `abruptive` `agent` `agent-so` `agents` |

### Agent Platforms & UI (21)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | An open-source AI agent that brings the power of Gemini directly into your terminal. | TypeScript | 103.5k | `ai` `ai-agents` `cli` `gemini` |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. | Shell | 95.1k |  |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | The ultimate space for work and life — to find, build, and collaborate with agent teammates that grow with you. We are taking agent harness to the next level — enabling multi-agent collaboration, effortless agent team design, and introducing agents as the unit of work interaction. | TypeScript | 76.5k | `agent` `agent-collaboration` `agent-harness` `ai` |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 🙌 OpenHands: AI-Driven Development | Python | 72.9k | `agent` `artificial-intelligence` `chatgpt` `claude-ai` |
| [cline/cline](https://github.com/cline/cline) | Autonomous coding agent right in your IDE, capable of creating/editing files, executing commands, using the browser, and more with your permission every step of the way. | TypeScript | 61.5k |  |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration. | JavaScript | 59.7k | `ai-agents` `custom-ai-agents` `deepseek` `kimi` |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs | TypeScript | 45.3k | `agency-agents` `ai-agent` `claude-code` `codex` |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | DSPy: The framework for programming—not prompting—language models | Python | 34.3k |  |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨ | Python | 31.6k | `agent` `ai` `chatbot` `chatgpt` |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | The Frontend Stack for Agents & Generative UI. React + Angular.  Makers of the AG-UI Protocol | TypeScript | 31.1k | `agent` `agent-native` `agentic-ai` `agents` |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action. | TypeScript | 28.1k | `agentic-ai` `agents` `ai` `ai-agents` |
| [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | Integrate cutting-edge LLM technology quickly and easily into your apps | C# | 27.9k | `ai` `artificial-intelligence` `llm` `openai` |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, Gemini CLI and 20+ more CLI \| Customize your assistants \| Star if you like it! | TypeScript | 24.1k | `acp` `agent-team` `ai` `ai-agent` |
| [kortix-ai/suna](https://github.com/kortix-ai/suna) | The Autonomous Company Operating System | TypeScript | 19.7k | `ai` `ai-agents` `llm` |
| [google/adk-python](https://github.com/google/adk-python) | An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control. | Python | 19.5k | `agent` `agentic` `agentic-ai` `agents` |
| [emcie-co/parlant](https://github.com/emcie-co/parlant) | Build reliable customer-facing AI agents with Parlant: an interaction control harness optimized for controlled, consistent, and predictable LLM interactions. | Python | 18.1k | `ai-agents` `ai-alignment` `customer-service` `customer-success` |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents. | Python | 17.1k | `agent` `agentic-ai` `llm` `mlops` |
| [enricoros/big-AGI](https://github.com/enricoros/big-AGI) | AI suite powered by state-of-the-art models and providing advanced AI/AGI functions. Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more. Deploy on-prem or in the cloud. | TypeScript | 7k | `agi` `ai-agents` `ai-suite` `ai-workspace` |
| [anthropics/claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) | — | Python | 6.8k |  |
| [dtyq/magic](https://github.com/dtyq/magic) | Magicrew. The first open-source all-in-one AI productivity platform (Generalist AI Agent + Workflow Engine + IM + Online collaborative office system) | TypeScript | 4.8k | `agent` `agi` `ai` `gpt` |
| [collaborator-ai/collab-public](https://github.com/collaborator-ai/collab-public) | Collaborator is a place to create with agents. | TypeScript | 2.5k | `agents` `ai` `claude-code` `codex-cli` |

### Generic / Research Agents (12)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | AI agents running research on single-GPU nanochat training automatically | Python | 79.8k |  |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物 | Python | 59.7k | `agent-memory` `financial-forecasting` `future-prediction` `knowledge-graph` |
| [AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer) ⚠️ | CLI platform to experiment with codegen. Precursor to: https://lovable.dev | Python | 55.2k | `ai` `autonomous-agent` `code-generation` `codebase-generation` |
| [666ghj/BettaFish](https://github.com/666ghj/BettaFish) | 微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。 | Python | 40.8k | `agent-framework` `data-analysis` `deep-research` `deep-search` |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | An Open Phone Agent Model & Framework. Unlocking the AI Phone for Everyone | Python | 25.2k | `agent` `phone-use-agent` |
| [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) | — | Python | 11.7k |  |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption | Python | 9.8k | `ai-agent` `automation` `autonomous-agent` `browser-automation` |
| [huggingface/ml-intern](https://github.com/huggingface/ml-intern) | 🤗 ml-intern: an open-source ML engineer that reads papers, trains models, and ships ML models | Python | 9k |  |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is a deep research agent optimized for complex research and prediction tasks. Our latest models, MiroThinker-1.7, achieves 74.0 and 75.3 on the BrowseComp and BrowseComp Zh, respectively. | Python | 8.2k | `agent` `agent-framework` `browsecomp` `deep-research` |
| [Action-State-Labs/android-action-kernel](https://github.com/Action-State-Labs/android-action-kernel) | — | Python | 1.7k |  |
| [SalesforceAIResearch/enterprise-deep-research](https://github.com/SalesforceAIResearch/enterprise-deep-research) | Salesforce Enterprise Deep Research | Python | 1.2k | `deep-research-agent` `e2b` `fastapi` `langchain` |
| [contextgraph/agent](https://github.com/contextgraph/agent) | Autonomous agent for contextgraph action execution | TypeScript | 2 |  |


## 🛠 AI Agent Skills & MCP

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development methodology that works. | Shell | 183.2k |  |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | An AI SKILL that provide design intelligence for building professional UI/UX multiple platforms | Python | 75.6k | `ai-skills` `antigravity` `claude` `claude-code` |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claude directory. | Shell | 66.5k |  |
| [upstash/context7](https://github.com/upstash/context7) | Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors | TypeScript | 54.8k | `llm` `mcp` `mcp-server` `vibe-coding` |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents | TypeScript | 38.5k | `browser` `chrome` `chrome-devtools` `debugging` |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and trust. | Python | 24.7k | `agent` `chatbot` `large-language-models` `llm` |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Claude Code skill implementing Manus-style persistent markdown planning — the workflow pattern behind the $2B acquisition. | Python | 20.7k | `adal` `agent-skills` `antigravity` `claude` |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, science, engineering, analysis, finance and writing. | Python | 20.4k | `agent-skills` `ai-scientist` `bioinformatics` `chemoinformatics` |
| [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks. | Python | 18.1k |  |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfaces with natural language. | TypeScript | 17.7k | `agent` `ai` `ai-agents` `browser-automation` |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶 | Python | 17.5k |  |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork | Python | 12k |  |
| [huggingface/skills](https://github.com/huggingface/skills) | Give your agents the power of the Hugging Face ecosystem | Python | 10.4k |  |
| [numman-ali/openskills](https://github.com/numman-ali/openskills) | Universal skills loader for AI coding agents - npm i -g openskills | TypeScript | 10.1k |  |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 数字生命卡兹克开源的 AI Skills 合集 | Python | 9.7k |  |
| [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | 张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.skill生成。 | — | 7k |  |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | 把前任蒸馏成 AI Skill，用ta的方式跟你说话。 | Python | 5.1k |  |
| [notdog1998/yourself-skill](https://github.com/notdog1998/yourself-skill) | 与其蒸馏别人，不如蒸馏自己。欢迎加入数字永生！Inspired by colleague-skill（同事skill）。 | Python | 2.6k |  |
| [blader/Claudeception](https://github.com/blader/Claudeception) | A Claude Code skill for autonomous skill extraction and continuous learning. Have Claude Code get smarter as it works. | Shell | 2.3k |  |
| [leilei926524-tech/anti-distill](https://github.com/leilei926524-tech/anti-distill) | 反蒸馏 Skill：清洗你被迫写的 Skill 文件，看起来完整，核心知识留给自己。Anti-distillation for employee Skills. | — | 2.1k |  |
| [YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill](https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill) | AI skill for OpenClaw & Claude Code — recommend from 10000+ Nano Banana Pro (Gemini) image prompts. Smart search by use case, content remix, sample images. | TypeScript | 1.5k | `ai-agent` `ai-image` `claude-code-skill` `clawhub` |
| [CloudAI-X/claude-workflow-v2](https://github.com/CloudAI-X/claude-workflow-v2) | Universal Claude Code workflow plugin with agents, skills, hooks, and commands | Python | 1.4k | `agent-skills` `ai` `ai-agents` `claude-code` |
| [jinchenma94/bazi-skill](https://github.com/jinchenma94/bazi-skill) | 四柱八字命理分析 | — | 1.4k |  |
| [better-auth/better-icons](https://github.com/better-auth/better-icons) | Skill and MCP server for searching and retrieving icons | TypeScript | 992 |  |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude. | Python | 936 |  |
| [alchaincyf/steve-jobs-skill](https://github.com/alchaincyf/steve-jobs-skill) | 乔布斯.skill — Steve Jobs的认知操作系统。6个心智模型 + 8条决策启发式 + 完整表达DNA。由女娲.skill生成。 | — | 819 |  |
| [ythx-101/x-tweet-fetcher](https://github.com/ythx-101/x-tweet-fetcher) | 🦞 Fetch tweets and replies from X/Twitter without login or API keys. OpenClaw skill. | Python | 809 |  |
| [alchaincyf/x-mentor-skill](https://github.com/alchaincyf/x-mentor-skill) | X导师.skill — 女娲的第一个「非人类」作品。蒸馏6位顶级X创作者方法论 + 开源算法数据，提炼完整的选题-写作-增长操作手册。Made with 女娲.skill | — | 777 |  |
| [wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill) | Claude Code skill for publishing Markdown articles to X (Twitter) Articles | Python | 752 |  |
| [yaojingang/yao-open-skills](https://github.com/yaojingang/yao-open-skills) | OpenYao 公开 Skill 合集：把决策、商业分析、学习教程、研究取证和文档生成流程沉淀成可复用的 AI 资产。 | HTML | 705 |  |
| [huangkiki/dailypaper-skills](https://github.com/huangkiki/dailypaper-skills) | 用Claude Code skills打造我的论文流水线 | Python | 691 |  |
| [awslabs/graphrag-toolkit](https://github.com/awslabs/graphrag-toolkit) | Python toolkit for building graph-enhanced GenAI applications | Python | 393 | `amazon-neptune` `amazon-opensearch-serverless` `graph-database` `graphrag` |
| [kkoppenhaver/cc-nano-banana](https://github.com/kkoppenhaver/cc-nano-banana) | A Claude Code skill to generate images with Nano Banana | — | 295 |  |
| [alchaincyf/elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | 马斯克.skill — Elon Musk的认知操作系统。由女娲.skill生成。 | — | 292 |  |
| [1sadjlk/bounty-hunter-skill](https://github.com/1sadjlk/bounty-hunter-skill) | — | Python | 280 |  |
| [xr843/Master-skill](https://github.com/xr843/Master-skill) | Buddhist Master-skill powered by FoJin — 三大传统（汉传/藏传/南传）祖师大德 AI 教学角色生成器，CBETA / BDRC / SuttaCentral 引证 | Python | 265 | `agent-skills` `ai-persona` `bdrc` `buddhism` |
| [keli-wen/agentic-harness-patterns-skill](https://github.com/keli-wen/agentic-harness-patterns-skill) | Agent skill for harness engineering — memory, permissions, context engineering, multi-agent coordination. Distilled from Claude Code, with Codex CLI and Gemini CLI on the roadmap. EN/ZH. Install via npx skills add. | — | 260 | `agent` `claude-code` `codex` `contexts` |
| [alchaincyf/trump-skill](https://github.com/alchaincyf/trump-skill) | 特朗普的思维操作系统。不是模仿秀，是可运行的谈判与权力分析框架。Made with 女娲.skill | — | 217 |  |
| [alchaincyf/munger-skill](https://github.com/alchaincyf/munger-skill) | 芒格.skill — 查理·芒格的认知操作系统。由女娲.skill生成。 | — | 213 |  |
| [Ming-H/yinyuan-skills](https://github.com/Ming-H/yinyuan-skills) | yinyuan-skills | — | 205 |  |
| [vogtsw/boss-skills](https://github.com/vogtsw/boss-skills) | 老板.skills. 把老板炼入token，把生产力的解放留给自己。Alchemize your boss into a token, and keep the liberation of productivity for yourself. | Python | 199 |  |
| [alchaincyf/naval-skill](https://github.com/alchaincyf/naval-skill) | 纳瓦尔.skill — Naval Ravikant的认知操作系统。由女娲.skill生成。 | — | 146 |  |
| [alchaincyf/feynman-skill](https://github.com/alchaincyf/feynman-skill) | 费曼.skill — 理查德·费曼的认知操作系统。由女娲.skill生成。 | — | 142 |  |
| [alchaincyf/karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | Andrej Karpathy的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill | — | 127 |  |
| [alchaincyf/zhang-yiming-skill](https://github.com/alchaincyf/zhang-yiming-skill) | 张一鸣的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill | — | 99 |  |
| [wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill) | Agent skill for managing Linear issues, projects, and teams. MCP tools, SDK automation, GraphQL API patterns. | TypeScript | 94 | `claude-code` `claude-code-skills` `claude-skill` `claude-skills` |
| [alchaincyf/taleb-skill](https://github.com/alchaincyf/taleb-skill) | 塔勒布.skill — Nassim Taleb的认知操作系统。由女娲.skill生成。 | — | 76 |  |
| [YIKUAIBANZI/forge-skill](https://github.com/YIKUAIBANZI/forge-skill) | 人格蒸馏引擎 · 蒸馏自己看清自己，蒸馏亲友留住余温与回声 · Claude Code Skill | Python | 72 | `ai-agent` `claude-code` `claude-skill` `digital-twin` |
| [YourongZhou/chat_with_me](https://github.com/YourongZhou/chat_with_me) | — | Python | 57 |  |
| [alchaincyf/paul-graham-skill](https://github.com/alchaincyf/paul-graham-skill) | Paul Graham的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill | — | 53 |  |
| [chendongqi/OPB-Skills](https://github.com/chendongqi/OPB-Skills) | 一套覆盖一个公司完整业务的SKILL，适用ClaudeCode，Codex，OpenCode等工具 | Python | 50 |  |
| [alchaincyf/mrbeast-skill](https://github.com/alchaincyf/mrbeast-skill) | MrBeast的内容创造操作系统。不是语录合集，是可运行的内容方法论。Made with 女娲.skill | Python | 42 |  |
| [alchaincyf/ilya-sutskever-skill](https://github.com/alchaincyf/ilya-sutskever-skill) | Ilya Sutskever的认知操作系统。不是语录合集，是可运行的思维框架。Made with 女娲.skill | — | 32 |  |
| [ythx-101/x-profile-analyzer](https://github.com/ythx-101/x-profile-analyzer) | 🦞 X/Twitter user profile analyzer — no API key, no login required | Python | 30 |  |
| [jtshow/Medusa](https://github.com/jtshow/Medusa) | Medusa Skill Framework for AI Agents. | Rust | 22 |  |
| [xiaohei-info/oh-my-agent-skills](https://github.com/xiaohei-info/oh-my-agent-skills) | Open-source bundle of agent methodologies and Hermes-compatible skills. | Python | 14 | `ai-agents` `chatops` `hermes` `knowledge-management` |
| [fastapi-practices/mcp](https://github.com/fastapi-practices/mcp) ⚠️ | FastAPI Best Architecture mcp 插件 | Python | 1 | `ai` `fba` `fba-plugin` `mcp` |


## 🌐 Browser & Web Automation

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 Make websites accessible for AI agents. Automate tasks online with ease. | Python | 93k | `ai-agents` `ai-tools` `browser-automation` `browser-use` |
| [microsoft/playwright](https://github.com/microsoft/playwright) | Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. | TypeScript | 88.3k | `automation` `chrome` `chromium` `e2e-testing` |
| [browserbase/stagehand](https://github.com/browserbase/stagehand) | The SDK For Browser Agents | TypeScript | 22.6k | `agents` `ai` `llms` `playwright` |
| [trycua/cua](https://github.com/trycua/cua) | Open-source infrastructure for Computer-Use Agents. Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can control full desktops (macOS, Linux, Windows). | HTML | 15.8k | `agent` `ai-agent` `apple` `computer-use` |
| [mobile-dev-inc/Maestro](https://github.com/mobile-dev-inc/Maestro) | Painless E2E Automation for Mobile and Web | Kotlin | 14k | `android` `blackbox-testing` `ios` `ui-automation` |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | Browser Harness \| Self-healing harness that enables LLMs to complete any task. | Python | 11.7k |  |
| [pinchtab/pinchtab](https://github.com/pinchtab/pinchtab) | High-performance browser automation bridge and multi-instance orchestrator with advanced stealth injection and real-time dashboard. | Go | 9k | `browser-automation` `cdp` `golang` `headless-chrome` |
| [SawyerHood/dev-browser](https://github.com/SawyerHood/dev-browser) | A Claude Skill to give your agent the ability to use a web browser | TypeScript | 6.1k | `claude-code` `playwright` `skills` |
| [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices) | TypeScript | 4.8k | `agent` `android` `emulator` `ios` |
| [magnitudedev/browser-agent](https://github.com/magnitudedev/browser-agent) | Open-source, vision-first browser agent | TypeScript | 4k | `ai` `automation` `browser` `framework` |
| [ghostwright/ghost-os](https://github.com/ghostwright/ghost-os) | Full computer-use for AI agents. Self-learning workflows. Native macOS. No screenshots required. | Swift | 1.4k | `accessibility` `ai-agents` `automation` `claude-code` |
| [hyperbrowserai/HyperAgent](https://github.com/hyperbrowserai/HyperAgent) | AI Browser Automation | TypeScript | 1.3k | `agent` `ai` `automation` `chrome` |


## 🧠 RAG / Knowledge Graph / Memory

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions. | TypeScript | 73.7k | `ai` `ai-agents` `ai-memory` `anthropic` |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Universal memory layer for AI Agents | Python | 55.1k | `agents` `ai` `ai-agents` `application` |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine -       GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration | TypeScript | 37k |  |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" | Python | 34.9k | `genai` `gpt` `gpt-4` `graphrag` |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | A modular graph-based Retrieval-Augmented Generation (RAG) system | Python | 32.8k | `gpt` `gpt-4` `gpt4` `graphrag` |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG | Python | 30.1k | `agentic-ai` `agents` `ai` `ai-agents` |
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced features that works with every LLM | Python | 29.2k | `ai` `ai-chat` `chatgpt` `chatui` |
| [getzep/graphiti](https://github.com/getzep/graphiti) | Build Real-Time Knowledge Graphs for AI Agents | Python | 25.8k | `agents` `graph` `llms` `rag` |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving. | Python | 23.7k | `agent` `agentic-rag` `ai-agents` `clawbot` |
| [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | "RAG-Anything: All-in-One RAG Framework" | Python | 20k | `multi-modal-rag` `retrieval-augmented-generation` |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Memory control plane for AI Agents in 6 lines of code | Python | 17.1k | `ai` `ai-agents` `ai-memory` `cognitive-architecture` |
| [memvid/memvid](https://github.com/memvid/memvid) | Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory. | Rust | 15.4k | `ai` `context` `embedded` `faiss` |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | Memori is agent-native memory infrastructure. A LLM-agnostic layer that turns agent execution and conversation into structured, persistent state for production systems. | Python | 14.2k | `agent` `agent-memory` `ai` `ai-memory` |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like OpenClaw. | Python | 13.6k | `agent-memory` `agentic-workflow` `claude` `claude-skills` |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | [MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device. | Python | 11k | `ai` `faiss` `gpt-oss` `langchain` |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codebase the context for any coding agent. | TypeScript | 10.9k | `agent` `agentic-rag` `ai-coding` `claude-code` |
| [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | Incremental engine for long horizon agents 🌟 Star if you like it! | Python | 9.2k | `agentic-data-framework` `ai` `ai-agents` `change-data-capture` |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | KAG is a logical form-guided reasoning and retrieval framework based on OpenSPG engine and LLMs.  It is used to build logical reasoning and factual Q&A solutions for professional domain knowledge bases. It can effectively overcome the shortcomings of the traditional RAG vector similarity calculation model. | Python | 8.7k | `knowledge-graph` `large-language-model` `logical-reasoning` `multi-hop-question-answering` |
| [zjunlp/DeepKE](https://github.com/zjunlp/DeepKE) | [EMNLP 2022] An Open Toolkit for Knowledge Graph Extraction and Construction | Python | 4.4k | `attribute-extraction` `chinese` `deep-learning` `deepke` |
| [CodeGraphContext/CodeGraphContext](https://github.com/CodeGraphContext/CodeGraphContext) | An MCP server plus a CLI tool that indexes local code into a graph database to provide context to AI assistants. | Python | 3.2k | `hacktoberfest2025` `social-winter-of-code` |
| [DEEP-PolyU/Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG) | Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation. | — | 2.4k | `graphrag` `graphrag-paper` `graphrag-survey` `knowledge-graph` |
| [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | The agent runtime platform powered by context graphs. | Python | 2.1k | `agent` `agent-memory` `agent-runtime` `ai-infra` |
| [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) | EdegQuake 🌋 High-performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent knowledge graphs for superior retrieval and generation | Rust | 2k | `graphrag` `knowledge-graph` `lightrag` `rag` |
| [GitHamza0206/simba](https://github.com/GitHamza0206/simba) | OpenSource Production ready Customer service with built in Evals and monitoring | TypeScript | 1.4k | `customer-service` `evals` `knowledge-base` `llm` |
| [whyhow-ai/knowledge-graph-studio](https://github.com/whyhow-ai/knowledge-graph-studio) | WhyHow Knowledge Graph Studio | Python | 918 |  |
| [yifanfeng97/Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) | Transform unstructured text into structured knowledge with LLMs. Graphs, hypergraphs, and spatio-temporal extractions — with one command. | Python | 853 | `ai` `ai-agents` `cli` `hypergraph` |
| [kweaver-ai/kweaver-core](https://github.com/kweaver-ai/kweaver-core) | KWeaver Core is a harness-first foundation for enterprise decision agents. It turns fragmented data, knowledge, tools, and policies into governed context, safe execution, and verifiable feedback loops. With semantic modeling, real-time access, runtime control, and TraceAI, it helps AI systems reason, adapt, and act reliable in complex enterprises. | Go | 682 | `agents` `bkn` `bussiness-knowledge-network` `decision-intelligence` |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | Biologically-inspired memory for AI agents. Decay, retrieval strengthening, consolidation. Zero dependencies. | TypeScript | 626 |  |
| [ChristopherLyon/graphrag-workbench](https://github.com/ChristopherLyon/graphrag-workbench) | Interactive 3D visualization of knowledge graphs generated by Microsoft GraphRAG. Explore entities, relationships, and communities with immersive visual analytics. | TypeScript | 605 | `graphrag` `microsoft` `nextjs` `visualization` |
| [TuGraph-family/chat2graph](https://github.com/TuGraph-family/chat2graph) | Chat2Graph: Graph Native Agentic System. | Python | 418 | `agentic-ai` `agentic-rag` `ai-agents` `bionics` |
| [noworneverev/graphrag-visualizer](https://github.com/noworneverev/graphrag-visualizer) | A web-based tool for visualizing and exploring artifacts from Microsoft's GraphRAG. | TypeScript | 417 | `gpt` `gpt-4` `gpt4` `graph-visualization` |
| [GraphRAG-Bench/GraphRAG-Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark) | The official repo of GraphRAG-Bench for evaluating GraphRAG models. "When to use Graphs in RAG: A Comprehensive Analysis for Graph Retrieval-Augmented Generation".  (ICLR'26) | Python | 416 | `analysis` `benchmark` `dataset` `graphrag` |
| [CyberMagician/Project_Golem](https://github.com/CyberMagician/Project_Golem) | A 3D interface for visualizing RAG (Retrieval-Augmented Generation) memory structures in real-time. | HTML | 272 |  |
| [morph-kgc/morph-kgc](https://github.com/morph-kgc/morph-kgc) | Powerful RDF Knowledge Graph Generation with RML Mappings | Python | 270 | `data-engineering` `data-integration` `database` `etl` |
| [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | A survey of Graph-based Agent Memory \| A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based agent memory. | — | 266 | `agent` `agent-memory` `agent-memory-survey` `graph-based-agent-memory` |
| [AxDSan/mnemosyne](https://github.com/AxDSan/mnemosyne) | The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents | Python | 197 | `agents` `ai` `hermes` `hermes-agent` |
| [kweaver-ai/kweaver-dip](https://github.com/kweaver-ai/kweaver-dip) | KWeaver DIP is an enterprise-level digital employee platform, built on KWeaver Core. It provides an AI-native environment for developing and managing digital employees on business knowledge networks—for enterprise intelligence that is understandable, executable, and governable. | TypeScript | 167 | `agent-skills` `agents` `ai` `business-knowledge-network` |
| [NanGePlus/KagTest](https://github.com/NanGePlus/KagTest) | KAG开源框架介绍及使用KAG实现知识增强生成应用(产品模式测试、开发者模式测试)，KAG是OpenSPG发布v0.5版本中推出的知识增强生成（KAG）的专业领域知识服务框架，旨在充分利用知识图谱和向量检索的优势，增强大型语言模型和知识图谱，以解决 RAG 挑战 | Python | 155 |  |
| [markburgess/SSTorytime](https://github.com/markburgess/SSTorytime) | Semantic Spacetime Story graph database library over postgresql (SSTorytime) | Go | 144 |  |
| [OpenSPG/OneKE](https://github.com/OpenSPG/OneKE) | OneKE is a knowledge extraction framework based on a large model, with preliminary generalized knowledge extraction capabilities in both Chinese and English and in multiple fields and tasks. | HTML | 55 |  |
| [UtrechtUniversity/ricgraph](https://github.com/UtrechtUniversity/ricgraph) | Ricgraph - Research in context graph | Python | 30 | `data-enrichment` `data-harvesting` `data-linking` `enrichment` |
| [shawnsang/auto-openspg-schema](https://github.com/shawnsang/auto-openspg-schema) | 一个基于 Streamlit 的自动化工具，用于从工程设计文档中提取实体信息并生成符合 OpenSPG 标准的知识图谱 Schema。 | Python | 4 |  |


## 🎨 Multimedia AI

### Image Generation & Design (18)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | Virtual whiteboard for sketching hand-drawn like diagrams | TypeScript | 122.8k | `canvas` `collaboration` `diagrams` `drawing` |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. | Python | 112k | `ai` `comfy` `comfyui` `python` |
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue) | TypeScript | 72.5k |  |
| [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers) | Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more | — | 65.5k |  |
| [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and code collaboration | Clojure | 47.4k | `clojure` `clojurescript` `design` `prototyping` |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | very good whiteboard infinite canvas SDK | TypeScript | 46.9k | `canvas` `collaboration` `design` `diagram` |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 🎨 Local-first, open-source alternative to Anthropic's Claude Design. ⚡ 19 Skills · ✨ 71 brand-grade Design Systems 🖼 Generate web · desktop · mobile prototypes · slides · images · videos · HyperFrames 📦 Sandboxed preview · HTML/PDF/PPTX/MP4 export 🤖 Runs on Claude Code / Codex / Cursor / Gemini / OpenCode / Qwen / Copilot / Hermes / Kimi CLI. | TypeScript | 33.9k | `agent-skills` `ai-agents` `ai-design` `byok` |
| [danielgatis/rembg](https://github.com/danielgatis/rembg) | Rembg is a tool to remove images background | Python | 22.9k | `background-removal` `image-processing` `python` |
| [wandb/openui](https://github.com/wandb/openui) | OpenUI let's you describe UI using your imagination, then see it rendered live. | TypeScript | 22.3k | `ai` `generative-ai` `html-css-javascript` `tailwindcss` |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system. | TypeScript | 12.2k |  |
| [11cafe/jaaz](https://github.com/11cafe/jaaz) | The world's first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritizes privacy and is usable locally. | TypeScript | 6.2k | `agent` `ai` `aiagent` `aiimage` |
| [antvis/Infographic](https://github.com/antvis/Infographic) | 🦋 An Infographic Generation and Rendering Framework, bring words to life with AI! | TypeScript | 5k | `ai` `antv` `infographic` `llm` |
| [MeiGen-AI/PosterCraft](https://github.com/MeiGen-AI/PosterCraft) | [ICLR2026] Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework | Python | 929 |  |
| [LingyiChen-AI/DeepDiagram](https://github.com/LingyiChen-AI/DeepDiagram) | An open-source AI visualization tool that transforms natural language into Mind Maps, Mermaid diagrams, and Echarts. Turn your ideas into structured visuals instantly. | TypeScript | 904 |  |
| [markfulton/NanoBananaEditor](https://github.com/markfulton/NanoBananaEditor) | The most advanced Nano Banana image generator and editor application. Your central hub for AI image generation and revisions. Intuitive UI features reference images, editing with image masks, version history, and more. Powered by Gemini 2.5 Flash images API. | TypeScript | 675 | `aiimages` `bolt` `imageediting` `imageeditor` |
| [chatfire-AI/huobao-canvas](https://github.com/chatfire-AI/huobao-canvas) | 火宝无限画布；支持文生图，图生图，图生视频，多模型切换。兼容 openai标准格式 | Vue | 512 |  |
| [amrrs/fal-nanobanana-studio](https://github.com/amrrs/fal-nanobanana-studio) | Nanobanana fal AI powered Photoshop-esque Studio | TypeScript | 340 |  |
| [CopilotKit/scene-creator-copilot](https://github.com/CopilotKit/scene-creator-copilot) | — | Python | 157 | `ag-ui` `copilotkit` `gemini` `langgraph` |

### Video Generation & Editing (20)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM. | Python | 56.9k | `ai` `automation` `chatgpt` `moviepy` |
| [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative | TypeScript | 48.8k | `editor` `oss` `videoeditor` |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥      Make videos programmatically with React | TypeScript | 46.3k | `javascript` `react` `video` |
| [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | Cross-platform, customizable ML solutions for live and streaming media. | C++ | 35.1k | `android` `audio-processing` `c-plus-plus` `calculator` |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | Visualize Your Ideas With Code | TypeScript | 18.5k | `animation` `presentation` `visualization` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents. | TypeScript | 16.2k | `ai` `animation` `ffmpeg` `framework` |
| [Wan-Video/Wan2.2](https://github.com/Wan-Video/Wan2.2) | Wan: Open and Advanced Large-Scale Video Generative Models | Python | 15.6k | `aigc` `video-generation` |
| [AIDC-AI/Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 🚀 AI 全自动短视频引擎 \| AI Fully Automated Short Video Engine | Python | 13.7k | `aigc` `comfyui` `image-generation` `tts` |
| [chatfire-AI/huobao-drama](https://github.com/chatfire-AI/huobao-drama) | 🎬 火宝短剧 - 基于AI的一站式短剧生成平台 《一句话生成完整短剧，从剧本到成片全自动化》  Huobao Drama - An AI-Powered End-to-End Short Drama Generator "One Sentence to Complete Drama: Fully Automated from Script to Final Video" | TypeScript | 11.6k |  |
| [elebumm/RedditVideoMakerBot](https://github.com/elebumm/RedditVideoMakerBot) | Create Reddit Videos with just✨ one command ✨ | Python | 11.6k |  |
| [freemocap/freemocap](https://github.com/freemocap/freemocap) | Free Motion Capture for Everyone 💀✨ | Python | 8.3k |  |
| [HBAI-Ltd/Toonflow-app](https://github.com/HBAI-Ltd/Toonflow-app) | Toonflow 是开源一站式 AI 短剧创作工具，将小说、剧本快速转化为动画短剧。集成 AI 编剧、智能分镜、角色与视频生成，跨平台桌面端轻量部署，助力创作者低成本批量产出视觉内容。Toonflow is an open-source AI tool that turns stories and scripts into animated short dramas. Features AI scriptwriting, storyboarding, character and video generation. A cross-platform desktop app for efficient content creation. | HTML | 7.7k | `ai` `ai-content-creation` `ai-tool` `ai-video-generation` |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model. | Python | 6.5k | `generative-ai` `ltx` `ltx-2` |
| [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | A feed-forward 3D foundation model for reconstructing scenes from streaming data | Python | 6k |  |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip : AI-powered video clipping and highlight generation · 一款智能高光提取与剪辑的二创工具 | Python | 5.1k | `ai` `ai-agents` `ai-tools` `ai-video` |
| [YILS-LIN/short-video-factory](https://github.com/YILS-LIN/short-video-factory) | 一键生成产品营销与泛内容短视频，AI批量自动剪辑，高颜值跨平台桌面端工具 One click generation of product marketing and general content short videos, AI batch automatic cliping, beautiful cross platform desktop tool | TypeScript | 3.9k | `ai` `automatic` `automation` `clipping` |
| [MemeCalculate/moyin-creator](https://github.com/MemeCalculate/moyin-creator) | AI 影视生产级工具 \| 支持 Seedance 2.0 \| 剧本到成片全流程批量化 \| AI-powered film production tool with Seedance 2.0 support | TypeScript | 3.5k |  |
| [sherlockchou86/VideoPipe](https://github.com/sherlockchou86/VideoPipe) | A cross-platform video structuring (video analysis) framework. If you find it helpful, please give it a star: )  跨平台的视频结构化（视频分析）框架，觉得有帮助的请给个星星 : ) | C++ | 2.8k | `ai` `behaviour-analysis` `cv` `deep-learning` |
| [timoncool/videosos](https://github.com/timoncool/videosos) | AI video production in the browser — text-to-video, image-to-video, lip sync, 100+ models. Google Veo 3.1, FLUX, Gemini, Imagen 4. Free, open-source, private. | TypeScript | 1.2k | `ai-video` `browser-based` `fal-ai` `flux` |
| [0xsline/short-drama](https://github.com/0xsline/short-drama) | 专业的短剧剧本创作skill,从选题立项到分集撰写、质量自检、合规审核、海外出海，覆盖短剧剧本生产全流程。 | — | 472 |  |

### Audio / Voice / Music (4)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) | Instant voice cloning by MIT and MyShell. Audio foundation model. | Python | 36.5k | `text-to-speech` `tts` `voice-clone` `zero-shot-tts` |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, create. | TypeScript | 24.8k | `ai` `cuda` `mlx` `qwen3-tts` |
| [audacity/audacity](https://github.com/audacity/audacity) | Audio Editor | C++ | 16.9k | `audio` `cross-platform` `editor` `gplv2` |
| [mixxxdj/mixxx](https://github.com/mixxxdj/mixxx) | Mixxx is Free DJ software that gives you everything you need to perform live mixes. | C++ | 6.7k | `audio` `dj` `hid` `linux` |

### Documents / Slides / Office (8)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office documents to Markdown. | Python | 121.9k | `autogen` `autogen-extension` `langchain` `markdown` |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | Transforms complex documents like PDFs and Office docs into LLM-ready markdown/JSON for your Agentic workflows. | Python | 62.4k | `ai4science` `document-analysis` `docx` `extract-data` |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Create beautiful slides on the web using Claude's frontend skills | Shell | 16.8k | `ai-slides` `anthropic` `claude` `claude-code` |
| [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) | Convert documents to structured data effortlessly. Unstructured is open-source ETL solution for transforming complex documents into clean, structured formats for language models.  Visit our website to learn more about our enterprise grade Platform product for production grade workflows, partitioning, enrichments, chunking and embedding. | HTML | 14.7k | `data-pipelines` `deep-learning` `document-image-analysis` `document-image-processing` |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 一个基于nano banana pro🍌的原生AI PPT生成应用，迈向真正的＂Vibe PPT＂; 支持上传任意模板图片；上传任意素材&智能解析；一句话/大纲/页面描述自动生成PPT；口头修改指定区域、一键导出可编辑ppt - An AI-native slides generator based on nano banana pro🍌 | Python | 14.4k | `ai-ppt-maker` `ai-slide-builder` `ai-slides` `document-recognition` |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-Source AI Presentation Generator and API (Gamma, Beautiful AI, Decktopus Alternative) | JavaScript | 4.9k | `ai-agent` `ai-presentation` `api` `gamma` |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | A slide framework built for agents. | TypeScript | 2.6k | `agent` `react` `slides` |
| [GordenSun/BananaPPT](https://github.com/GordenSun/BananaPPT) | — | HTML | 54 |  |


## 📊 Crawler & Content Publishing

### Crawler / Data Extraction (18)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm | Scala | 73.1k |  |
| [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | ⭐AI-driven public opinion & trend monitor with multi-platform aggregation, RSS, and smart alerts.🎯 告别信息过载，你的 AI 舆情监控助手与热点筛选工具！聚合多平台热点 +  RSS 订阅，支持关键词精准筛选。AI 智能筛选新闻 + AI 翻译 +  AI 分析简报直推手机，也支持接入 MCP 架构，赋能 AI 自然语言对话分析、情感洞察与趋势预测等。支持 Docker ，数据本地/云端自持。集成微信/飞书/钉钉/Telegram/邮件/ntfy/bark/slack 等渠道智能推送。 | Python | 57k | `ai` `bark` `data-analysis` `docker` |
| [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 \| 评论爬虫、抖音视频 \| 评论爬虫、快手视频 \| 评论爬虫、B 站视频 ｜ 评论爬虫、微博帖子 ｜ 评论爬虫、百度贴吧帖子 ｜ 百度贴吧评论回复爬虫  \| 知乎问答文章｜评论爬虫 | Python | 49k |  |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees. | Python | 19k | `agent-infrastructure` `ai-agent` `ai-search` `automation` |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | MCP for xiaohongshu.com | Go | 13.4k | `mcp` `mcp-server` `xiaohongshu-mcp` |
| [wechat-article/wechat-article-exporter](https://github.com/wechat-article/wechat-article-exporter) | 一款在线的 微信公众号文章批量下载 工具，支持导出阅读量与评论数据，无需搭建任何环境，可通过 在线网站 使用，支持 docker 私有化部署和 Cloudflare 部署。  支持下载各种文件格式，其中 HTML 格式可100%还原文章排版与样式。 | TypeScript | 9k | `download` `wechat` `wechat-article` `wechat-download` |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | Python & Command-line tool to gather text and metadata on the Web: Crawling, scraping, extraction, output as CSV, JSON, HTML, MD, TXT, XML | Python | 5.9k | `article-extractor` `corpus-builder` `corpus-tools` `crawler` |
| [joeyism/linkedin_scraper](https://github.com/joeyism/linkedin_scraper) | A library that scrapes Linkedin for user data | Python | 4k | `chrome` `company` `driver` `firefox` |
| [ericciarla/trendFinder](https://github.com/ericciarla/trendFinder) | Stay on top of trending topics on social media and the web with AI | TypeScript | 4k |  |
| [joyce677/TrendRadar](https://github.com/joyce677/TrendRadar) | 一键监控今日头条、百度热搜、微博、抖音、知乎、B站等35个平台，智能关键词筛选，自动生成热点分析报告。支持企业微信、飞书、钉钉、Telegram推送，30秒网页部署，1分钟手机通知，无需编程基础。还有文字和图片版api可调用 | HTML | 1.7k |  |
| [firecrawl/open-scouts](https://github.com/firecrawl/open-scouts) | 🔥 AI-powered web monitoring platform. Create automated scouts that search the web and send email alerts when they find what you're looking for. | TypeScript | 1.3k | `ai-agents` `alerts` `automation` `email-notifications` |
| [6551Team/opennews-mcp](https://github.com/6551Team/opennews-mcp) | News Aggregation · AI Ratings · Trading Signals · Real-time Updates | Python | 1.2k |  |
| [liyedanpdx/reddit-ai-trends](https://github.com/liyedanpdx/reddit-ai-trends) | Stay ahead of AI trends with automated Reddit insights! 🚀 This tool scans AI-related Reddit communities in English & Chinese, using Reddit Official API, DeepSeek R1 by OpenRouter to analyze posts, summarize key discussions, and track trends. Daily rankings hot topics—catch emerging trends before they go mainstream! (Updated every 6 AM CDT) | Python | 832 | `ai` `deepseek-r1` `ranking` `reports` |
| [6551Team/opentwitter-mcp](https://github.com/6551Team/opentwitter-mcp) | Twitter/X Data · User Profiles · Tweet Search · Follower Events · KOL Tracking | Python | 810 |  |
| [runningZ1/union-search-skill](https://github.com/runningZ1/union-search-skill) | 统一搜索工具集 - 跨平台内容搜索解决方案，支持 B 站/抖音/小红书/GitHub/Twitter 等 20+ 平台 | Python | 507 |  |
| [liyupi/yupi-hot-monitor](https://github.com/liyupi/yupi-hot-monitor) | 2026 年编程导航 AI 编程实战新项目，基于 Node.js + Express + React + OpenRouter 的 AI 热点监控工具，支持多信息源聚合抓取（Twitter / Bing / HackerNews / B 站等 7+ 平台）、AI 查询扩展、AI 真假识别与相关性分析、WebSocket 实时推送、邮件通知、多维度筛选排序，并将热点监控能力封装为 Agent Skills 技能包。覆盖 Prisma + SQLite 数据库、Socket.io 实时通信、Axios + Cheerio 网页爬虫、OpenRouter 大模型接入、Aceternity UI 炫酷前端、node-cron 定时任务、VSCode Copilot Vibe Coding + MCP | TypeScript | 425 | `agent-skills` `ai` `backend` `frontend` |
| [otter1101/blogger-distiller](https://github.com/otter1101/blogger-distiller) | 【小红书2万人看过的——博主蒸馏器】你研究了 N 个爆款博主，还是说不清任何一个的操作系统。输入小红书博主名，直接蒸馏 TA 的认知和内容打法，装进你的 AI。Distill any blogger's mind into your AI. | Python | 169 |  |
| [flack0x/trendspyg](https://github.com/flack0x/trendspyg) | Free, open-source Python library for Google Trends data - pytrends alternative with 188K+ configuration options. | Python | 27 |  |

### Content Publishing & Social Media (11)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 The ultimate agentic social media scheduling tool 🤖 | TypeScript | 30.1k | `nextjs` `open-source` `open-source-social-media-scheduling-tool` `oss` |
| [dreammis/social-auto-upload](https://github.com/dreammis/social-auto-upload) | 自动化上传视频到社交媒体：抖音、小红书、视频号、tiktok、youtube、bilibili | Python | 10.8k | `bilibili` `douyin` `tiktok` `xiaohongshu` |
| [inovector/mixpost](https://github.com/inovector/mixpost) | 📅 Schedule, 📢 publish, and ⚡ manage your social media content on your server. No subscriptions, no limits. (Buffer alternative) | Vue | 3.2k | `automated-post` `buffer` `buffer-alternative` `content-calendar` |
| [liyown/ai-trend-publish](https://github.com/liyown/ai-trend-publish) | TrendPublish: 全自动 AI 内容生成与发布系统 \| 微信公众号自动化 \| 多源数据抓取 (Twitter/X、网站) \| DeepseekAI、千问、讯飞模型 \| 智能内容分析排序 \| 定时发布 \| 多模板支持 \| Node.js \| TypeScript \| AI 技术趋势跟踪工具 | TypeScript | 2.9k | `ai` `weixin` |
| [miantiao-me/hacker-podcast](https://github.com/miantiao-me/hacker-podcast) | 一个基于 AI 的 Hacker News 中文播客项目，每天自动抓取 Hacker News 热门文章，通过 AI 生成中文总结并转换为播客内容。 | TypeScript | 2.5k | `ai` `ai-agent` `ai-workflow` `cloudflare` |
| [geekjourneyx/md2wechat-skill](https://github.com/geekjourneyx/md2wechat-skill) | 用 Markdown 写公众号文章，一键转换为精美排版并自动上传到微信草稿箱。支持 AI 多主题样式和批量发布，让公众号写作像发朋友圈一样简单。 | Go | 2.1k | `agent-cli` `agent-skills` `claude-code` `claude-skills` |
| [caol64/wenyan-mcp](https://github.com/caol64/wenyan-mcp) | 文颜 MCP Server 可以让 AI 自动将 Markdown 文章排版后发布至微信公众号。 | JavaScript | 1.2k | `mcp-server` `wechat` `wenyan` |
| [AJaySi/ALwrity](https://github.com/AJaySi/ALwrity) | ALwrity - AI Digital Marketing Platform. (WIP) | Python | 1k | `ai-content-generation` `ai-content-marketing` `ai-digital-marketing` `ai-seo-tools` |
| [spider-ios/autox-release](https://github.com/spider-ios/autox-release) | 网页自动化工具，油管等视频下载，一键搬家，视频多平台发布，一键发布到tiktok、小红书、快手、抖音、油管、B站等等平台 | — | 975 |  |
| [gitcoffee-os/postbot](https://github.com/gitcoffee-os/postbot) | PostBot 内容同步助手 一款开源的多平台内容同步分发生产力工具。 支持将文章、笔记、动态、图片、视频、音频等内容，一键同步发布至主流媒体平台。覆盖微信/微博/今日头条/小红书/知乎/百家号/企鹅号/视频号/抖音/快手/哔哩哔哩（B站）等国内主流媒体平台，可轻松扩展兼容 X（Twitter）、Facebook、Instagram、TikTok、YouTube、LinkedIn 等国际媒体平台。 | TypeScript | 952 | `article` `audio` `automation` `blog` |
| [humanwhocodes/crosspost](https://github.com/humanwhocodes/crosspost) | A JavaScript utility for posting across multiple social networks at once | JavaScript | 537 |  |


## 💻 Frontend Templates & UI

### Component Libraries (7)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code. | TypeScript | 113.8k | `base-ui` `components` `laravel` `nextjs` |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | JavaScript animation engine | JavaScript | 67.9k | `animation` `anime` `canvas` `css` |
| [chenglou/pretext](https://github.com/chenglou/pretext) | Fast, accurate & comprehensive text measurement & layout | TypeScript | 46.5k |  |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | An open source collection of animated, interactive & fully customizable React components for building memorable websites. | JavaScript | 39k | `3d` `animations` `component-library` `components` |
| [AnmolSaini16/mapcn](https://github.com/AnmolSaini16/mapcn) | Beautiful map components. 100% Free, Zero config, one command setup. | TypeScript | 8.9k |  |
| [ln-dev7/square-ui](https://github.com/ln-dev7/square-ui) | Collection of beautifully crafted open-source layouts UI built with shadcn/ui. | TypeScript | 5.2k | `layout` `shadcn-ui` `template` |
| [elevenlabs/ui](https://github.com/elevenlabs/ui) | ElevenLabs UI is a component library and custom registry built on top of shadcn/ui to help you build multimodal agents faster. | TypeScript | 2.2k | `agents` `ai` `audio` `components` |

### Next.js Starters (7)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [firecrawl/open-lovable](https://github.com/firecrawl/open-lovable) | 🔥 Clone and recreate any website as a modern React app in seconds | TypeScript | 26.2k |  |
| [vercel/chatbot](https://github.com/vercel/chatbot) | A full-featured, hackable Next.js AI chatbot built by Vercel | TypeScript | 20.3k | `ai` `chatgpt` `nextjs` `react` |
| [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui. | TypeScript | 15.8k | `nextjs` `postgres` `shadcn-ui` `stripe` |
| [vercel/nextjs-subscription-payments](https://github.com/vercel/nextjs-subscription-payments) ⚠️ | Clone, deploy, and fully customize a SaaS subscription application with Next.js. | TypeScript | 7.7k | `nextjs-starter` `stripe-checkout` `stripe-customer-portal` `supabase` |
| [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) | Deploy your own Notion-powered website in minutes with Next.js and Vercel. | TypeScript | 7k | `blog` `nextjs` `notion` `portfolio` |
| [NaveenDA/shadcn-nextjs-dashboard](https://github.com/NaveenDA/shadcn-nextjs-dashboard) | Admin Dashboard UI built with Shadcn and NextJS. | TypeScript | 96 | `admin-panel` `dashboard` `dashboard-ui` `good-first-issue` |
| [practicalway/next-shadcn-sanity-blog](https://github.com/practicalway/next-shadcn-sanity-blog) | Starter Next.js 14 blogging platform, elegantly designed with ShadcnUI for a seamless and modern user interface, and powered by Sanity.io as its robust headless CMS. | TypeScript | 8 | `aceternity-ui` `blog` `blog-template` `framer-motion` |

### Astro Themes (7)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind) | ⭕️ AstroWind: A free template using Astro 5 and Tailwind CSS. Astro starter theme. | Astro | 5.6k | `astro` `astro-blog` `astro-starter` `astro-template` |
| [satnaing/astro-paper](https://github.com/satnaing/astro-paper) | A minimal, accessible and SEO-friendly Astro blog theme | Astro | 4.6k | `a11y` `accessibility` `astro` `astro-theme` |
| [incluud/accessible-astro-starter](https://github.com/incluud/accessible-astro-starter) | An Accessible, WCAG compliant Starter Theme for Astro 6+ including several accessibility features such as, better focus-outline, landmarks, semantics, interactive components and skip-link navigation. Ships with Tailwind 4, Prettier and ESLint support. | Astro | 1.1k | `a11y` `accessibility` `astro` `blog` |
| [cworld1/astro-theme-pure](https://github.com/cworld1/astro-theme-pure) | ⭐ A simple, fast and powerful blog & document theme built by Astro | Astro | 924 | `astro` `astrojs` `blog` `blog-theme` |
| [Mrahmani71/astro-news](https://github.com/Mrahmani71/astro-news) | A news website built with Astro | Astro | 137 |  |
| [one-ie/one](https://github.com/one-ie/one) | Make Your Ideas Real. Build Apps, Websites and AI Agents with Plain English with Astro, React, Shadcn and Cloudflare | TypeScript | 120 | `ai` `astro` `astro-6` `astrojs` |
| [tim-hub/techtim-astro-bento-portfolio](https://github.com/tim-hub/techtim-astro-bento-portfolio) | An Astro template for personal portfolio, including blog, projects, and more. | TypeScript | 56 | `astro` `react` `shadcn` `tailwindcss` |

### Desktop / Cross-Platform (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | Build smaller, faster, and more secure desktop and mobile applications with a web frontend. | Rust | 106.4k | `desktop-app` `high-performance` `mobile-app` `native-app` |
| [expo/expo](https://github.com/expo/expo) | An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web. | TypeScript | 49.3k | `android` `app-framework` `expo` `framework` |


## 🏗 Backend & Infrastructure

### Python & FastAPI (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [faif/python-patterns](https://github.com/faif/python-patterns) | A collection of design patterns/idioms in Python | Python | 42.7k | `design-patterns` `idioms` `python` |
| [zhanymkanov/fastapi-best-practices](https://github.com/zhanymkanov/fastapi-best-practices) | FastAPI Best Practices and Conventions we used at our startup | — | 17.2k | `best-practices` `fastapi` |
| [mjhea0/awesome-fastapi](https://github.com/mjhea0/awesome-fastapi) | A curated list of awesome things related to FastAPI | — | 11.3k | `awesome` `awesome-list` `fastapi` `starlette` |

### LLM Gateway / SDK (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI. | JavaScript | 33.2k | `api` `api-gateway` `azure-openai-api` `chatgpt` |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | Wrap Gemini CLI, Antigravity, ChatGPT Codex, Claude Code as an OpenAI/Gemini/Claude/Codex compatible API service, allowing you to enjoy the free Gemini 3.1 Pro, GPT 5.5, Claude model through API | Go | 31.4k | `antigravity` `claude-code` `cluade` `codex` |
| [BlockRunAI/ClawRouter](https://github.com/BlockRunAI/ClawRouter) | The agent-native LLM router for OpenClaw. 41+ models, <1ms routing, USDC payments on Base & Solana via x402. | TypeScript | 6.5k | `ai` `ai-agents` `anthropic` `cost-optimization` |

### Auth / Billing / Email (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [getlago/lago](https://github.com/getlago/lago) | Open Source Metering and Usage Based Billing API ⭐️ Consumption tracking, Subscription management, Pricing iterations, Payment orchestration & Revenue analytics | Go | 9.6k | `analytics` `billing` `clickhouse` `events` |
| [authzed/spicedb](https://github.com/authzed/spicedb) | Open Source, Google Zanzibar-inspired database for scalably storing and querying fine-grained authorization data | Go | 6.7k | `abac` `acl` `authorization` `ciam` |

### Self-Host / PaaS (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [coollabsio/coolify](https://github.com/coollabsio/coolify) | An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, databases, full-stack applications and 280+ one-click services on your own servers. | PHP | 54.7k | `coolify` `databases` `deployment` `docker` |
| [InsForge/InsForge](https://github.com/InsForge/InsForge) | The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end. | TypeScript | 9.1k | `ai` `ai-agents` `coding` `deno` |
| [ankane/ahoy_email](https://github.com/ankane/ahoy_email) | First-party email analytics for Rails | Ruby | 1.2k | `analytics` `first-party-analytics` `rails` |

### AI Toolkits / RAG Apps (19)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. | Go | 171k | `deepseek` `gemma` `gemma3` `glm` |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024) | Python | 71k | `agent` `ai` `deepseek` `fine-tuning` |
| [ghostty-org/ghostty](https://github.com/ghostty-org/ghostty) | 👻 Ghostty is a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration. | Zig | 54k |  |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required. | Go | 46.1k | `agents` `ai` `api` `audio-generation` |
| [ray-project/ray](https://github.com/ray-project/ray) | Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads. | Python | 42.5k | `data-science` `deep-learning` `deployment` `distributed` |
| [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization. | Python | 36.4k | `gemini` `gemini-ai` `gemini-api` `gemini-flash` |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) | 📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more. | TypeScript | 24.5k | `ai` `anthropic` `artificial-intelligence` `chatbot` |
| [vercel/ai](https://github.com/vercel/ai) | The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents | TypeScript | 24.1k | `anthropic` `artificial-intelligence` `gemini` `generative-ai` |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration. | JavaScript | 19.3k | `ai-agent` `ai-agents` `ai-tools` `cli` |
| [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | The LLM Evaluation Framework | Python | 15.2k | `evaluation-framework` `evaluation-metrics` `llm-evaluation` `llm-evaluation-framework` |
| [vibrantlabsai/ragas](https://github.com/vibrantlabsai/ragas) | Supercharge Your LLM Application Evaluations 🚀 | Python | 13.8k | `evaluation` `llm` `llmops` |
| [NVIDIA-NeMo/Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) | NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails to LLM-based conversational systems. | Python | 6.1k | `agents` `generative-ai` `guardrails` `llm-safety` |
| [cactus-compute/cactus](https://github.com/cactus-compute/cactus) | Low-latency AI engine for mobile devices & wearables | C | 4.7k | `ai` `android` `arm` `edge` |
| [firecrawl/fireplexity](https://github.com/firecrawl/fireplexity) | 🔥 Open Source Perplexity like AI search engine with real-time citations, streaming responses, and live data powered by Firecrawl | TypeScript | 1.9k |  |
| [wxtsky/CodeIsland](https://github.com/wxtsky/CodeIsland) | — | Swift | 1.4k |  |
| [cyl19970726/poly-sdk](https://github.com/cyl19970726/poly-sdk) | — | TypeScript | 1.3k |  |
| [chixi4/Qwen3.5-9B-ToolHub](https://github.com/chixi4/Qwen3.5-9B-ToolHub) | Qwen3.5-9B ToolHub-v1.0.0 | Python | 273 |  |
| [NahimNasser/pu](https://github.com/NahimNasser/pu) | — | Shell | 196 |  |
| [rgbkrk/chatlab](https://github.com/rgbkrk/chatlab) | ⚡️🧪 Fast LLM Tool Calling Experimentation, big and smol | Jupyter Notebook | 163 | `chatbot` `chatgpt` `hacktoberfest` `interpreter` |

### Databases / Analytics / Search (10)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [seaweedfs/seaweedfs](https://github.com/seaweedfs/seaweedfs) | SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling. | Go | 32.2k | `blob-storage` `cloud-drive` `distributed-file-system` `distributed-storage` |
| [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) | A scalable, distributed, collaborative, document-graph database, for the realtime web | Rust | 32.1k | `backend-as-a-service` `cloud-database` `database` `database-as-a-service` |
| [facebook/rocksdb](https://github.com/facebook/rocksdb) | A library that provides an embeddable, persistent key-value store for fast storage. | C++ | 31.7k | `database` `storage-engine` |
| [dgraph-io/dgraph](https://github.com/dgraph-io/dgraph) | high-performance graph database for real-time use cases | Go | 21.7k | `database` `distributed` `go` `knowledge-graph` |
| [eosphoros-ai/DB-GPT](https://github.com/eosphoros-ai/DB-GPT) | open-source agentic AI data assistant for the next generation of AI + Data products. | Python | 18.7k | `agents` `bgi` `database` `deepseek` |
| [vespa-engine/vespa](https://github.com/vespa-engine/vespa) | AI + Data, online. https://vespa.ai | Java | 6.9k | `ai` `big-data` `java` `machine-learning` |
| [dataease/SQLBot](https://github.com/dataease/SQLBot) | 🔥 基于大模型和 RAG 的智能问数系统，对话式数据分析神器。Text-to-SQL Generation via LLMs using RAG. | JavaScript | 6.1k | `chatbi` `deepseek` `llm` `nl2sql` |
| [TuGraph-family/tugraph-db](https://github.com/TuGraph-family/tugraph-db) | TuGraph: A High Performance Graph Database. | C++ | 1.7k | `cpp` `cypher` `database` `fastest` |
| [apache/geaflow](https://github.com/apache/geaflow) | Apache GeaFlow: A Streaming Graph Computing Engine. | Java | 776 | `geaflow` `graph` `streaming` |
| [Canner/wren-engine](https://github.com/Canner/wren-engine) ⚠️ | This repository has been merged into Canner/WrenAI under the core/ directory | Java | 661 | `agent` `agentic-ai` `ai` `business-intelligence` |


## 📝 Knowledge Base & Personal Productivity

### Notes / Wiki / Workspace (15)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [AppFlowy-IO/AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | Bring projects, wikis, and teams together with AI. AppFlowy is the AI collaborative workspace where you achieve more without losing control of your data. The leading open source Notion alternative. | Dart | 70.3k | `blog` `confluence-alternative` `content-management` `content-services` |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. | TypeScript | 68.1k | `app` `crdt` `editor` `electron` |
| [usememos/memos](https://github.com/usememos/memos) | Open-source, self-hosted note-taking tool built for quick capture. Markdown-native, lightweight, and fully yours. | Go | 59.4k | `docker` `foss` `go` `markdown` |
| [logseq/logseq](https://github.com/logseq/logseq) | A privacy-first, open-source platform for knowledge management and collaboration. Download link:  http://github.com/logseq/logseq/releases. roadmap: https://logseq.io/p/NX4mc_ggEV | Clojure | 42.7k | `clojure` `clojurescript` `git` `graph` |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI (gpt, claude, gemini, llama, qwen, mistral). Get started - free. | Python | 34.4k | `agent` `ai` `assistant` `chat` |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills. | Rust | 25.9k | `agent-skills` `ai-agent` `automation` `cli` |
| [tobi/qmd](https://github.com/tobi/qmd) | mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local | TypeScript | 24.4k |  |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with more flexibility and features | TypeScript | 23.1k | `assistant` `learning` `note-taking` `notebook` |
| [pickle-com/glass](https://github.com/pickle-com/glass) | Digital Mind Extension | JavaScript | 7.5k | `electron` `local-first` `nextjs` `open-source` |
| [karpathy/reader3](https://github.com/karpathy/reader3) | Quick illustration of how one can easily read books together with LLMs. It's great and I highly recommend it. | Python | 3.6k |  |
| [ycccccccy/echotrace](https://github.com/ycccccccy/echotrace) | EchoTrace 是一个本地、安全的微信聊天记录导出、分析与年度报告生成工具 \| EchoTrace is a local, secure tool for exporting, analyzing, and generating annual reports of WeChat chat records | — | 3.6k | `annual-reports` `chat-history` `data-analysis` `data-visualization` |
| [event-catalog/eventcatalog](https://github.com/event-catalog/eventcatalog) | The architecture catalog for distributed systems. Document events, services, domains & flows with AI-powered discovery. | TypeScript | 2.7k | `ai` `architecture` `asyncapi` `ddd` |
| [karlicoss/HPI](https://github.com/karlicoss/HPI) | Human Programming Interface 🧑👽🤖 | Python | 1.6k | `data-liberation` `extended-mind` `lifelogging` `personal-api` |
| [zstmfhy/zlibrary-to-notebooklm](https://github.com/zstmfhy/zlibrary-to-notebooklm) | 一键将 Z-Library 书籍自动下载并上传到 Google NotebookLM | Python | 1.6k |  |
| [schpet/linear-cli](https://github.com/schpet/linear-cli) | linear without leaving the command line: list, start, and create PRs for linear issues. agent friendly. | TypeScript | 684 | `cli` `linear` `linearapp` |

### Personal CRM (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for AI. | TypeScript | 45.6k | `crm` `crm-system` `customer` `good-first-issue` |
| [monicahq/monica](https://github.com/monicahq/monica) | Personal CRM. Remember everything about your friends, family and business relationships. | PHP | 24.6k | `crm` `family` `friends` `hacktoberfest` |
| [fbuchner/meerkat-crm](https://github.com/fbuchner/meerkat-crm) | CRM for the personal life | Go | 234 | `contact-management` `self-hosted` |

### Dashboard (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [Lissy93/dashy](https://github.com/Lissy93/dashy) | 🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more! | Vue | 25k | `awesome` `dashboard` `docker` `homelab` |
| [ActivityWatch/activitywatch](https://github.com/ActivityWatch/activitywatch) | The best free and open-source automated time tracker. Cross-platform, extensible, privacy-focused. | Python | 17.5k | `activitywatch` `afk` `analytics` `app` |

### Forum / Blog Platform (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | Independent technology for modern publishing, memberships, subscriptions and newsletters. | JavaScript | 52.8k | `blogging` `cms` `ghost` `javascript` |
| [discourse/discourse](https://github.com/discourse/discourse) | A platform for community discussion. Free, open, simple. | Ruby | 47k | `discourse` `ember` `forum` `javascript` |
| [lin-snow/Ech0](https://github.com/lin-snow/Ech0) | Ech0 – An open-source, self-hosted lightweight publishing platform for personal idea sharing. | Go | 2k | `ech0` `go` `golang` `markdown` |


## 💰 Finance, Career & Indie Hacker

### Finance / Trading / Quant (13)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading Framework | Python | 71.8k | `agent` `finance` `llm` `multiagent` |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and AI agents. | Python | 67.2k | `ai` `crypto` `derivatives` `economics` |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team | Python | 58.4k |  |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets. | Python | 34.7k | `agent` `ai` `aigc` `gemini` |
| [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research | TypeScript | 24.9k |  |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Financial Markets | Python | 23.7k |  |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | ValueCell is a community-driven, multi-agent platform for financial applications. | Python | 10.6k | `agentic-ai` `agents` `ai` `assitant` |
| [AI4Finance-Foundation/FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) | FinRobot: An Open-Source AI Agent Platform for Financial Analysis using LLMs 🚀 🚀 🚀 | Jupyter Notebook | 6.9k | `aiagent` `chatgpt` `finance` `fingpt` |
| [Polymarket/polymarket-cli](https://github.com/Polymarket/polymarket-cli) | — | Rust | 2.6k |  |
| [tukuaiai/tradecat](https://github.com/tukuaiai/tradecat) | 交易猫数据系统 | Python | 936 | `ai` `binance` `bitcoin` `ccxt` |
| [yorkeccak/Polyseer](https://github.com/yorkeccak/Polyseer) | Polymarket alpha at the speed of now. | TypeScript | 647 |  |
| [lucy-cxy/oss-investment-scorecard](https://github.com/lucy-cxy/oss-investment-scorecard) | A structured 5-dimension scoring framework for evaluating open-source AI projects from a VC investment perspective. Maintained by Lucy Chen, EIR at Zoo Capital (Singapore, $2B+ AUM). | — | 292 |  |
| [gengjiawen/buffett-chinese](https://github.com/gengjiawen/buffett-chinese) | 巴菲特 价值投资 | JavaScript | 240 |  |

### Career / Job Search (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [santifer/career-ops](https://github.com/santifer/career-ops) | AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing. | JavaScript | 43.6k | `ai-agent` `anthropic` `automation` `career` |
| [XiaomingX/jobleap-cn-ai-job-search](https://github.com/XiaomingX/jobleap-cn-ai-job-search) | 招聘和找工作相关信息通告.jobleap.cn 是一个基于人工智能（AI）技术的智能求职平台，专门为技术人员和应届毕业生量身定制，提供全方位的职业发展和求职辅助服务。它集成了模拟面试、面试押题、智能简历模板、职位匹配分析等功能，帮助用户科学规划职业路径，精准定位岗位，从而大幅提升面试通过率和求职效率。 | Python | 115 | `awesome` `jobsearch` |

### Indie Hacker / Side Projects (5)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [easychen/opc-methodology](https://github.com/easychen/opc-methodology) | 《一人企业方法论》第二版，也适合做其他副业（比如自媒体、电商、数字商品）的非技术人群。 | PHP | 15.4k |  |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn! | TypeScript | 9.3k | `auto-publish` `douyin` `douyin-api` `electron-app` |
| [XiaomingX/ai-money-maker-handbook](https://github.com/XiaomingX/ai-money-maker-handbook) | ai副业赚钱大集合，教你如何利用ai做一些副业项目，赚取更多额外收益。The Ultimate Guide to Making Money with AI Side Hustles: Learn how to leverage AI for some cool side gigs and rake in some extra cash. Check out the English version for more insights. | CSS | 2.4k | `awesome` `jobleap` |
| [XiaomingX/indie-hacker-tools-plus](https://github.com/XiaomingX/indie-hacker-tools-plus) | 为独立开发者准备的精选技术栈和工具仓库来了！这里有你最需要的工具，帮你提升开发效率、节约成本，最重要的是——这些工具都是市场上热门的，经过验证的。🚀A curated collection of tech stacks and tools tailored for independent developers is here! these are proven, popular tools widely used in the industry. 🚀 | — | 1.7k | `agent` `ai` `awesome` `awesome-list` |
| [awesome-sideprojects/awesome-sideprojects](https://github.com/awesome-sideprojects/awesome-sideprojects) | A fun and slightly chaotic list of Awesome Sideprojects \| Get Traffic from ChatGPT 👇 | — | 48 |  |

### Marketing / Growth (6)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering. | JavaScript | 27.4k | `claude` `codex` `marketing` |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory. | Python | 14.2k | `agent-plugins` `agent-skills` `agentic-ai` `ai-coding-agent` |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports.  If you want learn how to sell this to real businesses, check out the skool community | Python | 7.1k |  |
| [EdoStra/Marketing-for-Founders](https://github.com/EdoStra/Marketing-for-Founders) | Practical marketing resources to get the first 10 / 100 / 1000 users for your SaaS / App / Startup | — | 6.2k | `awesome` `awesome-list` `collection` `educational` |
| [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) | Comprehensive paid advertising audit & optimization skill for Claude Code. 250+ checks across Google, Meta, YouTube, LinkedIn, TikTok, Microsoft & Apple Ads with weighted scoring, parallel agents, industry templates, and AI creative generation. | Python | 4.5k | `ai` `ai-marketing` `claude-code` `claude-code-skill` |
| [naxiaoduo/1000UserGuide](https://github.com/naxiaoduo/1000UserGuide) | 1000UserGuide：对独立开发者和创业者来说，找到前1000个早期用户太关键了。这里精心整理了300多个国内外渠道，适合独立开发者和创业者推广产品的渠道。 | HTML | 3.8k | `indie` `indiedev` `list` `marketing` |


## 🎓 Tutorials & Awesome Lists

### LLM Tutorials (Chinese) (11)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need -  A nano claude code–like 「agent harness」, built from 0 to 1 | TypeScript | 59.1k | `agent` `agent-development` `ai-agent` `claude` |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程 | Python | 44.5k | `agent` `llm` `rag` `tutorial` |
| [datawhalechina/self-llm](https://github.com/datawhalechina/self-llm) | 《开源大模型食用指南》针对中国宝宝量身打造的基于Linux环境快速微调（全参数/Lora）、部署国内外开源大模型（LLM）/多模态大模型（MLLM）教程 | Jupyter Notebook | 30.3k | `chatglm` `chatglm3` `gemma-2b-it` `glm-4` |
| [datawhalechina/happy-llm](https://github.com/datawhalechina/happy-llm) | 📚 从零开始构建大模型 | Jupyter Notebook | 30k | `agent` `llm` `rag` |
| [datawhalechina/llm-cookbook](https://github.com/datawhalechina/llm-cookbook) | 面向开发者的 LLM 入门教程，吴恩达大模型系列课程中文版 | Jupyter Notebook | 24k | `cookbook` `llm` |
| [datawhalechina/llm-universe](https://github.com/datawhalechina/llm-universe) | 本项目是一个面向小白开发者的大模型应用开发教程，在线阅读地址：https://datawhalechina.github.io/llm-universe/ | Jupyter Notebook | 12.9k | `langchain` `rag` |
| [tukuaiai/vibe-coding-cn](https://github.com/tukuaiai/vibe-coding-cn) | 中文 Vibe Coding 从入门到精通教程｜AI 结对编程工作流｜Prompt、Skill、Workflow、上下文管理、Cursor、Claude Code、Codex、Gemini CLI 实战指南 | Python | 12.4k | `ai` `ai-agent` `ai-agents` `ai-coding` |
| [luhengshiwo/LLMForEverybody](https://github.com/luhengshiwo/LLMForEverybody) | 每个人都能看懂的大模型知识分享，LLMs春/秋招大模型面试前必看，让你和面试官侃侃而谈 | Jupyter Notebook | 6.5k | `agent` `interview-practice` `interview-questions` `learnllm` |
| [datawhalechina/llms-from-scratch-cn](https://github.com/datawhalechina/llms-from-scratch-cn) | 仅需Python基础，从0构建大语言模型；从0逐步构建GLM4\Llama3\RWKV6， 深入理解大模型原理 | Jupyter Notebook | 4.1k | `glm` `llama` `llm` `llms-from-scratch` |
| [skindhu/Build-A-Large-Language-Model-CN](https://github.com/skindhu/Build-A-Large-Language-Model-CN) | 《Build a Large Language Model (From Scratch)》是一本深入探讨大语言模型原理与实现的电子书，适合希望深入了解 GPT 等大模型架构、训练过程及应用开发的学习者。为了让更多中文读者能够接触到这本极具价值的教材，我决定将其翻译成中文，并通过 GitHub 进行开源共享。 | HTML | 3.6k |  |
| [datawhalechina/llm-deploy](https://github.com/datawhalechina/llm-deploy) | 大模型/LLM推理和部署理论与实践 | — | 394 | `knowledge-distillation` `llm` `llm-deploy` `lora` |

### LLM Tutorials (English) (14)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Implement a ChatGPT-like LLM in PyTorch from scratch, step by step | Jupyter Notebook | 92.2k | `ai` `artificial-intelligence` `chatbot` `chatgpt` |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | Course to get into Large Language Models (LLMs) with roadmaps and Colab notebooks. | — | 79.1k | `course` `large-language-models` `llm` `machine-learning` |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy. | Python | 53.1k |  |
| [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic's Interactive Prompt Engineering Tutorial | Jupyter Notebook | 35.5k |  |
| [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | In-depth tutorials on LLMs, RAGs and real-world AI agent applications. | Jupyter Notebook | 34.8k | `agents` `ai` `llms` `machine-learning` |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | This repository showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. Each technique has a detailed notebook tutorial. | Jupyter Notebook | 27.2k | `ai` `embeddings` `langchain` `llama-index` |
| [anthropics/courses](https://github.com/anthropics/courses) | Anthropic's educational courses | Jupyter Notebook | 21.1k |  |
| [google-gemini/gemini-fullstack-langgraph-quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart) | Get started with building Fullstack Agents using Gemini 2.5 and LangGraph | Jupyter Notebook | 18.2k | `gemini` `gemini-api` |
| [langchain-ai/rag-from-scratch](https://github.com/langchain-ai/rag-from-scratch) | — | Jupyter Notebook | 8.2k |  |
| [decodingai-magazine/llm-twin-course](https://github.com/decodingai-magazine/llm-twin-course) | 🤖 𝗟𝗲𝗮𝗿𝗻 for 𝗳𝗿𝗲𝗲 how to 𝗯𝘂𝗶𝗹𝗱 an end-to-end 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻-𝗿𝗲𝗮𝗱𝘆 𝗟𝗟𝗠 & 𝗥𝗔𝗚 𝘀𝘆𝘀𝘁𝗲𝗺 using 𝗟𝗟𝗠𝗢𝗽𝘀 best practices: ~ 𝘴𝘰𝘶𝘳𝘤𝘦 𝘤𝘰𝘥𝘦 + 12 𝘩𝘢𝘯𝘥𝘴-𝘰𝘯 𝘭𝘦𝘴𝘴𝘰𝘯𝘴 | Python | 4.3k | `aws` `bytewax` `comet-ml` `course` |
| [pageman/sutskever-30-implementations](https://github.com/pageman/sutskever-30-implementations) | Sutskever 30 implementations inspired by https://papercode.vercel.app/ \| For Agents, use https://github.com/pageman/Sutskever-Agent \| Polyglot / Multi-Backed version at https://github.com/pageman/sutskever-30-beyond-numpy | Jupyter Notebook | 3.3k |  |
| [bhancockio/langchain-crash-course](https://github.com/bhancockio/langchain-crash-course) | — | Python | 959 |  |
| [ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing](https://github.com/ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing) | LLM-PowerHouse: Unleash LLMs' potential through curated tutorials, best practices, and ready-to-use code for custom training and inferencing. | Jupyter Notebook | 729 | `bert` `huggingface` `large-language-models` `llm-inference` |
| [sammcvicker/blueally-enablement-notebooks](https://github.com/sammcvicker/blueally-enablement-notebooks) | — | Jupyter Notebook | 2 |  |

### Context Engineering / Vibe Coding (6)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Driven Development | Python | 93.5k | `ai` `copilot` `development` `engineering` |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Breakthrough Method for Agile Ai Driven Development | JavaScript | 46.7k |  |
| [coleam00/context-engineering-intro](https://github.com/coleam00/context-engineering-intro) | Context engineering is the new vibe coding - it's the way to actually make AI coding assistants work. Claude Code is the best for this so that's what this repo is centered around, but you can apply this strategy with any AI coding assistant! | Python | 13.3k |  |
| [davidkimai/Context-Engineering](https://github.com/davidkimai/Context-Engineering) | "Context engineering is the delicate art and science of filling the context window with just the right information for the next step." — Andrej Karpathy. A frontier, first-principles handbook inspired by Karpathy and 3Blue1Brown for moving beyond prompt engineering to the wider discipline of context design, orchestration, and optimization. | Python | 8.9k |  |
| [datawhalechina/vibe-vibe](https://github.com/datawhalechina/vibe-vibe) | AI for All: The First Systematic Vibe Coding Tutorial \| From Zero to Full-Stack, Bring Your Ideas to Life \| Live at: www.vibevibe.cn   ；全民AI学习第一课，首个系统化 Vibe Coding 开源教程 \| 零基础到全栈实战，让人人都能借助 AI 实现自己的想法与创意 \| 在线地址：www.vibevibe.cn | Dockerfile | 4.9k | `agent` `agentic-ai` `ai` `coding-assistant` |
| [alchaincyf/hermes-agent-orange-book](https://github.com/alchaincyf/hermes-agent-orange-book) | Hermes Agent 从入门到精通 · 橙皮书系列 · Nous Research 开源 AI Agent 框架实战指南 | — | 3.6k |  |

### System Design & Interview (8)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards. | Python | 347.5k | `design` `design-patterns` `design-system` `development` |
| [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a software engineer. | — | 346.4k | `algorithm` `algorithms` `coding-interview` `coding-interviews` |
| [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | Learn how to design systems at scale and prepare for system design interviews | — | 43.2k | `architecture` `distributed-systems` `engineering` `interview` |
| [DataExpert-io/data-engineer-handbook](https://github.com/DataExpert-io/data-engineer-handbook) | This is a repo with links to everything you'd ever want to learn about data engineering | Jupyter Notebook | 41.2k | `apachespark` `awesome` `bigdata` `data` |
| [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | Learn System Design concepts and prepare for interviews using free resources. | Java | 37k | `awesome` `backend` `computer-science` `distributed-systems` |
| [Jeevan-kumar-Raj/Grokking-System-Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design) | Systems design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. Systems design could be seen as the application of systems theory to product development. | Shell | 6.5k |  |
| [dunwu/db-tutorial](https://github.com/dunwu/db-tutorial) | 📚 后端程序员应该掌握的主流数据库知识 | Java | 5.3k | `database` `db` `elasticsearch` `hbase` |
| [subhashchy/The-Accidental-CTO](https://github.com/subhashchy/The-Accidental-CTO) | How I Scaled from Zero to a Million Store on Dukaan,  Without a CS Degree.  .. A System Design Handbook by  Subhash Choudhary | TypeScript | 3.5k | `scaling` `system-design` |

### Build-Your-Own-X / Project-Based (5)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite technologies from scratch. | Markdown | 499.9k | `awesome-list` `free` `programming` `tutorial-code` |
| [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning) | Curated list of project-based tutorials | — | 265.1k | `beginner-project` `cpp` `golang` `javascript` |
| [lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions) | A long list of (advanced) JavaScript questions, and their explanations :sparkles: | — | 65.3k |  |
| [MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning) | This is the homepage of a new book entitled "Mathematical Foundations of Reinforcement Learning." | MATLAB | 15.9k | `artificial-intelligence` `book` `courses` `reinforcement-learning` |
| [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | Gradio WebUI for creators and developers, featuring key TTS (Edge-TTS, kokoro) and zero-shot Voice Cloning (E2 & F5-TTS, CosyVoice), with Whisper audio processing, YouTube download, Demucs vocal isolation, and multilingual translation. | Python | 9.3k | `audiobook` `faster-whisper` `gradio` `karaoke` |

### Awesome Lists (29)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | 😎 Awesome lists about all kinds of interesting topics | — | 464.1k | `awesome` `awesome-list` `lists` `resources` |
| [vinta/awesome-python](https://github.com/vinta/awesome-python) | An opinionated list of Python frameworks, libraries, tools, and resources | Python | 296.6k | `awesome` `collections` `python` `python-frameworks` |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy, Comet, Cursor, Devin AI, Junie, Kiro, Leap.new, Lovable, Manus, NotionAI, Orchids.app, Perplexity, Poke, Qoder, Replit, Same.dev, Trae, Traycer AI, VSCode Agent, Warp.dev, Windsurf, Xcode, Z.ai Code, Dia & v0. (And other Open Sourced) System Prompts, Internal Tools & AI Models | — | 136.9k | `ai` `bolt` `cluely` `copilot` |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agent & RAG apps you can actually run — clone, customize, ship. | Python | 109.3k | `agents` `llms` `python` `rag` |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | A collection of MCP servers. | — | 86.5k | `ai` `mcp` |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | A collection of DESIGN.md files inspired by popular brand design systems. Drop one into your project and let coding agents generate a matching UI. | — | 73.5k | `awesome-list` `design-md` `design-system` `design-tokens` |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | The awesome collection of OpenClaw skills. 5,400+ skills filtered and categorized from the official OpenClaw Skills Registry.🦞 | — | 48.2k | `agent-skills` `awesome` `awesome-list` `awesome-lists` |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic | Python | 43k | `agent-skills` `agentic-code` `agentic-coding` `ai-workflow-optimization` |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | 📄  Configuration files that enhance Cursor AI editor experience with custom rules and behaviors | MDX | 39.4k | `awesome` `awesome-list` `cursor` `cursor-ai-editor` |
| [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) | The 500 AI Agents Projects is a curated collection of AI agent use cases across various industries. It showcases practical applications and provides links to open-source projects for implementation, illustrating how AI agents are transforming sectors such as healthcare, finance, education, retail, and more. | — | 30.1k | `ai-agents` `genai` |
| [enescingoz/awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | 280+ free n8n automation templates — ready-to-use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive, Notion, OpenAI, and more. AI agents, RAG   chatbots, email automation, social media, DevOps, and document processing. The largest open-source n8n template collection. | — | 22k | `ai-agents` `ai-automation` `automation` `automation-templates` |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | — | 20.8k | `agent-skills` `ai-agents` `antigravity-skills` `awesome` |
| [BradyFU/Awesome-Multimodal-Large-Language-Models](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models) | :sparkles::sparkles:Latest Advances on Multimodal Large Language Models | — | 17.8k | `chain-of-thought` `in-context-learning` `instruction-following` `instruction-tuning` |
| [YouMind-OpenLab/awesome-nano-banana-pro-prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts) | 🍌 World's largest Nano Banana Pro prompt library — 10,000+ curated prompts with preview images, 16 languages. Google Gemini AI image generation. Free & open source. | TypeScript | 11.9k | `ai-image-generation` `ai-prompts` `awesome` `awesome-list` |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) | A curated list of Claude Skills. | — | 9k |  |
| [0xeb/TheBigPromptLibrary](https://github.com/0xeb/TheBigPromptLibrary) | A collection of prompts, system prompts and LLM instructions | HTML | 5k |  |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | A curated catalogue of awesome agentic AI patterns | HTML | 4.5k |  |
| [lukasmasuch/best-of-python](https://github.com/lukasmasuch/best-of-python) | 🏆 A ranked list of awesome Python open-source libraries and tools. Updated weekly. | — | 4.5k | `awesome` `awesome-list` `best-of` `best-of-list` |
| [xianyu110/awesome-openclaw-tutorial](https://github.com/xianyu110/awesome-openclaw-tutorial) | 从零开始玩转OpenClaw：最全面的中文教程，涵盖安装、配置、实战案例和避坑指南（github版） | Shell | 4.4k | `openclaw` `openclaw-skills` |
| [dkozlov/awesome-knowledge-distillation](https://github.com/dkozlov/awesome-knowledge-distillation) | Awesome Knowledge Distillation | — | 3.9k | `co-training` `deep-learning` `distillation` `distillation-model` |
| [Meirtz/Awesome-Context-Engineering](https://github.com/Meirtz/Awesome-Context-Engineering) | 🔥 Comprehensive survey on Context Engineering: from prompt engineering to production-grade AI systems. hundreds of papers, frameworks, and  implementation guides for LLMs and AI agents. | — | 3.1k | `agent` `agentic-ai` `agi` `awesome-list` |
| [kuchin/awesome-ceo](https://github.com/kuchin/awesome-ceo) | A curated and opinionated list of resources for startup founders and leaders of high-growth companies | — | 2.3k | `awesome` `awesome-list` `ceo` `decision-making` |
| [PeterGriffinJin/Awesome-Language-Model-on-Graphs](https://github.com/PeterGriffinJin/Awesome-Language-Model-on-Graphs) | A curated list of papers and resources based on "Large Language Models on Graphs: A Comprehensive Survey" (TKDE) | — | 989 | `awesome-resources` `generative-ai` `graphs` `large-language-models` |
| [topoteretes/awesome-ai-memory](https://github.com/topoteretes/awesome-ai-memory) | A list of AI memory projects | Python | 758 | `ai` `ai-agents` `ai-engineering` `ai-memory` |
| [mliu98/awesome-human-distillation](https://github.com/mliu98/awesome-human-distillation) | A curated catalog of human distillliation agent skills | Python | 570 | `agent-skills` `awesome-list` `claude-code` `claude-code-skills` |
| [Curated-Awesome-Lists/awesome-llms-fine-tuning](https://github.com/Curated-Awesome-Lists/awesome-llms-fine-tuning) | Explore a comprehensive collection of resources, tutorials, papers, tools, and best practices for fine-tuning Large Language Models (LLMs). Perfect for ML practitioners and researchers! | — | 516 | `ai` `awesome-list` `deep-learning` `fine-tuning` |
| [Zheng-Chong/Awesome-Try-On-Models](https://github.com/Zheng-Chong/Awesome-Try-On-Models) | A repository for organizing papers, codes and other resources related to Virtual Try-on Models | — | 416 | `3d-generation` `diffusion-models` `image-generation` `sota-model` |
| [lliai/Awesome-Vision-Knowledge-Distillation](https://github.com/lliai/Awesome-Vision-Knowledge-Distillation) | Awesome Knowledge-Distillation for CV | — | 94 |  |
| [kg-construct/awesome-kgc-tools](https://github.com/kg-construct/awesome-kgc-tools) | Links and description of Knowledge Graphs Construction Tools | — | 82 |  |


## 🌈 Misc / Lifestyle

### Cooking / Health / Fitness (4)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [Anduin2017/HowToCook](https://github.com/Anduin2017/HowToCook) | 程序员在家做饭方法指南。Programmer's guide about how to cook at home (Simplified Chinese only). | JavaScript | 99.8k | `chinese` `cookbook` `cooking` `dishes` |
| [zijie0/HumanSystemOptimization](https://github.com/zijie0/HumanSystemOptimization) | 健康学习到150岁 - 人体系统调优不完全指南 | — | 21.7k |  |
| [Snouzy/workout-cool](https://github.com/Snouzy/workout-cool) | 🏋 Modern open-source fitness coaching platform. Create workout plans, track progress, and access a comprehensive exercise database. | TypeScript | 7.6k | `coach` `exercise` `feature-sliced-design` `fitness` |
| [liu-ziting/what-to-eat](https://github.com/liu-ziting/what-to-eat) | 一饭封神：一个基于 AI 的智能菜谱生成平台，支持中华八大菜系 + 国际料理，提供营养分析、酒水推荐、菜谱效果图生成等全方位烹饪指导。 | Vue | 3.4k | `ai` `gpt` `vibe-coding` |

### OSINT / Security (6)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production. | TypeScript | 41.5k | `penetration-testing` `pentesting` `security-audit` `security-automation` |
| [Lissy93/web-check](https://github.com/Lissy93/web-check) | 🕵️‍♂️ All-in-one OSINT tool for analysing any website | TypeScript | 33k | `osint` `privacy` `security` `security-tools` |
| [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username from 3000+ sites | Python | 26.6k | `blueteam` `cli` `cybersecurity` `identification` |
| [AZeC4/TelegramGroup](https://github.com/AZeC4/TelegramGroup) | 2026最新悄咪咪收集的10000+个Telegram群合集，附全网最有趣好用的机器人BOT🤖【dianbaodaohang.com】 | — | 21.3k | `telegram` `telegram-api` `telegram-bot` `telegram-bot-api` |
| [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators. | TypeScript | 3.4k | `investigation` `osint` `python` `recon` |
| [s0md3v/be-a-hacker](https://github.com/s0md3v/be-a-hacker) | roadmap for a self-taught hacker | — | 2.7k |  |

### Web3 / Blockchain (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [AmazingAng/WTF-Solidity](https://github.com/AmazingAng/WTF-Solidity) | WTF Solidity 极简入门教程，供小白们使用。Now supports English! 官网: https://wtf.academy | Solidity | 14k | `airdrop` `auction` `blockchain` `dapp` |
| [OneKeyHQ/app-monorepo](https://github.com/OneKeyHQ/app-monorepo) | Secure, open source and community driven crypto wallet runs on all platforms and trusted by millions. | TypeScript | 2.4k | `android` `bitcoin` `blockchain` `crypto` |

### Games (2)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [leereilly/games](https://github.com/leereilly/games) ⚠️ | Archived — A list of games, add-ons, maps, etc. hosted on GitHub. Any genre. Any platform. Any engine. | — | 24.7k | `game` `game-development` `game-engine` `gamedev` |
| [BKcore/HexGL](https://github.com/BKcore/HexGL) | Source code of HexGL, a futuristic HTML5 racing game | JavaScript | 1.7k |  |

### Education (3)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [mswnlz/edu-knowlege](https://github.com/mswnlz/edu-knowlege) | 教育各种资料，从幼儿园到小学、中学，涵盖学而思，万维、猿辅导等多个机构，持续增加中 | JavaScript | 3.9k |  |
| [cubewhy/skid-homework](https://github.com/cubewhy/skid-homework) | Ergonomically designed, AI-powered homework solver. \| 符合人体工程学设计、人工智能驱动的作业助手 \| 平庸者的苦工到此为止，这是来自外星的效率补丁 (by Gemini) | TypeScript | 1.5k | `ai` `gemini` `homework` `homework-helper` |
| [wassimj/topologicpy](https://github.com/wassimj/topologicpy) | The python bindings for topologic | Jupyter Notebook | 218 |  |

### Personal / Sandbox Projects (11)

| Repo | Description | Lang | ⭐ | Topics |
|---|---|---|---|---|
| [LOG1997/log-lottery](https://github.com/LOG1997/log-lottery) | 🎈🎈🎈🎈年会抽奖程序，threejs+vue3 3D球体动态抽奖应用。 | TypeScript | 3.3k | `3d` `daisyui` `lottery` `lucky` |
| [DestinyLinker/MingLi-Bench](https://github.com/DestinyLinker/MingLi-Bench) | A benchmark for evaluating LLMs on Chinese traditional fortune telling — Bazi (八字) and Ziwei Doushu (紫微斗数). | Python | 903 |  |
| [context-labs/aella-data-explorer](https://github.com/context-labs/aella-data-explorer) | LAION research paper dataset visual explorer 🔬 🧑‍🔬 👩‍🔬 | TypeScript | 900 |  |
| [FANzR-arch/Numerologist_skills](https://github.com/FANzR-arch/Numerologist_skills) | 🔮 An engineering framework to stop LLM hallucinations in Chinese astrology. / 给“赛博半仙”戴上紧箍咒：减少幻觉、固定排盘步骤的奇门遁甲与紫微斗数 AI skills。 | HTML | 691 |  |
| [khalildh/garment-notation](https://github.com/khalildh/garment-notation) | — | JavaScript | 432 |  |
| [jayrodge/ai-agents](https://github.com/jayrodge/ai-agents) | — | Python | 261 |  |
| [gkamradt/MultiTerminalCodeViz](https://github.com/gkamradt/MultiTerminalCodeViz) | — | TypeScript | 251 |  |
| [draco-agent/tech-news-digest](https://github.com/draco-agent/tech-news-digest) | — | Python | 68 |  |
| [ppuliu/night-shift](https://github.com/ppuliu/night-shift) | — | — | 17 |  |
| [JesseQin123/JewelFlow](https://github.com/JesseQin123/JewelFlow) | — | TypeScript | 1 |  |
| [wtlee328/lead-gen](https://github.com/wtlee328/lead-gen) | — | Vue | 1 |  |


---

**Legend**: ⚠️ = repo is archived. Stars are point-in-time. Topic tags are from GitHub.

**Maintenance**: Run `scripts/sync-stars.sh` to pull new stars into `inbox.md`. Edit `data/manifest.json` to (re)classify or rewrite descriptions, then run `python3 scripts/build-readme.py`.
