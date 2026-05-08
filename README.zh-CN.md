# Solo Unicorn Toolbox 🛠️

> 个人 GitHub 工具/教程/资源聚合库，收集自 GitHub Stars、Twitter Bookmarks、小红书收藏等。

> English version: [README.md](./README.md)

**共 211 个项目** · 由 `scripts/build-readme.py` 自动生成。要添加新条目，把 GitHub URL 粘到 [`inbox.md`](./inbox.md)。

---

## 目录

- [🤖 AI 智能体与编码助手生态 (38)](#-ai-智能体与编码助手生态)
- [🛠 智能体 Skills 与 MCP (13)](#-智能体-skills-与-mcp)
- [🌐 浏览器与网页自动化 (6)](#-浏览器与网页自动化)
- [🧠 RAG / 知识图谱 / 记忆 (7)](#-rag--知识图谱--记忆)
- [🎨 多媒体 AI (21)](#-多媒体-ai)
- [📊 爬虫与内容发布 (12)](#-爬虫与内容发布)
- [💻 前端模板与 UI (19)](#-前端模板与-ui)
- [🏗 后端与基础设施 (11)](#-后端与基础设施)
- [📝 知识库与个人生产力 (10)](#-知识库与个人生产力)
- [💰 金融、职业与独立开发者 (11)](#-金融职业与独立开发者)
- [🎓 教程与精选列表 (46)](#-教程与精选列表)
- [🌈 杂项 / 生活娱乐 (17)](#-杂项--生活娱乐)

---

## 🤖 AI 智能体与编码助手生态

### Claude Code 生态 (6)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | agent harness 性能优化系统：skills、本能、记忆、安全、research-first 开发，覆盖 Claude Code/Codex/Opencode/Cursor 等 | JavaScript | 175.8k | `ai-agents` `anthropic` `claude` `claude-code` |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Garry Tan 的 Claude Code 配置：23 个工具，扮演 CEO、Designer、Eng Manager、Release Manager、Doc Engineer、QA | TypeScript | 91.6k |  |
| [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) | Claude Code 的 meta-prompting、context engineering 与 spec-driven development 系统 | JavaScript | 61k | `claude-code` `context-engineering` `meta-prompting` `spec-driven-development` |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill：给 AI 注入审美，避免生成粗糙、千篇一律的内容 | Shell | 16.2k | `agent` `ai` `claude` `claude-code` |
| [matt1398/claude-devtools](https://github.com/matt1398/claude-devtools) | Claude Code 的 DevTools：可视化检查 session 日志、tool calls、token 用量、subagents 与 context window | TypeScript | 3.3k | `ai` `ai-agent` `ai-debugging` `ai-tools` |
| [mikekelly/claude-sneakpeek](https://github.com/mikekelly/claude-sneakpeek) | 解锁 feature-flagged 能力（如 swarm mode）的 Claude Code 平行版 | TypeScript | 1.1k |  |

### Codex (1)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 在 Claude Code 里使用 Codex 来 review 代码或派发任务 | JavaScript | 17.9k |  |

### OpenClaw / Hermes / Paperclip (8)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | OpenClaw：你自己的个人 AI 助手，跨任意 OS 与平台 🦞 | TypeScript | 369.9k | `ai` `assistant` `crustacean` `molty` |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | Paperclip：零员工公司的开源编排框架 | TypeScript | 63.6k |  |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI：从网页或手机使用 Hermes Agent 的最佳方式 | Python | 6.2k | `agent` `ai-agents` `hermes` `hermes-agent` |
| [outsourc-e/hermes-workspace](https://github.com/outsourc-e/hermes-workspace) | Hermes Agent 的原生 web workspace：chat、终端、记忆、skills、inspector | JavaScript | 3.6k | `agent-ui` `ai-workspace` `hackathon` `hermes-agent` |
| [miaoxworld/OpenClawInstaller](https://github.com/miaoxworld/OpenClawInstaller) | ClawdBot 一键部署工具 | Shell | 3.4k | `clawdbot` `moltbot` `openclaw` |
| [NousResearch/hermes-paperclip-adapter](https://github.com/NousResearch/hermes-paperclip-adapter) | Paperclip 的 Hermes adapter：把 Hermes 当作 managed employee 跑在 Paperclip company 里 | TypeScript | 1.1k |  |
| [AnthonyDavidAdams/zero-employee-company-book](https://github.com/AnthonyDavidAdams/zero-employee-company-book) | Headcount Zero：用 Paperclip 构建 AI 驱动公司的方法论书籍 | — | 363 |  |
| [Yesterday-AI/paperclip-plugin-company-wizard](https://github.com/Yesterday-AI/paperclip-plugin-company-wizard) | 从模块化模板 bootstrap AI agent 公司 | TypeScript | 123 | `ai-agents` `bootstrap` `cli` `company-as-code` |

### 多智能体编排 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 字节出品的开源 long-horizon SuperAgent harness，做研究/写代码/创作，沙盒、记忆、工具、skill、subagent 一应俱全 | Python | 66.1k | `agent` `agentic` `agentic-framework` `agentic-workflow` |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | Flowise：可视化构建 AI Agent | TypeScript | 52.7k | `agentic-ai` `agentic-workflow` `agents` `artificial-intelligence` |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 主流的 Claude agent 编排平台：智能多 agent swarm、自治工作流、对话式 AI 系统 | TypeScript | 46.8k | `agentic-ai` `agentic-framework` `agentic-rag` `agentic-workflow` |
| [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | Conductor：事件驱动的 agentic 工作流引擎，为应用与 AI Agent 提供持久、高韧性的执行 | Java | 31.8k | `distributed-systems` `durable-execution` `grpc` `java` |
| [multica-ai/multica](https://github.com/multica-ai/multica) | 开源的 managed agents 平台，把 coding agent 变成可分配任务、可追踪进度的真队友 | TypeScript | 26.2k |  |
| [gensyn-ai/rl-swarm](https://github.com/gensyn-ai/rl-swarm) | 完全开源的框架，用于在互联网上创建 RL 训练 swarm | Python | 1.7k |  |
| [KroMiose/nekro-agent](https://github.com/KroMiose/nekro-agent) | NekroAgent：多人互动场景的跨平台 Agent 框架，集 Claude Code 沙盒、记忆、MCP 管理与可视化控制台于一体，支持 QQ/Discord/Telegram/B 站直播等 | Python | 837 | `agent` `ai` `chatbot` `claudecode` |

### 智能体平台与 UI (10)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 开源的 AI agent，把 Gemini 的能力直接带到终端 | TypeScript | 103.4k | `ai` `ai-agents` `cli` `gemini` |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | LobeHub：协同 agent 团队的工作与生活空间，多 agent 协作、agent 团队设计、agent 作为工作交互单元 | TypeScript | 76.4k | `agent` `agent-collaboration` `agent-harness` `ai` |
| [cline/cline](https://github.com/cline/cline) | Cline：IDE 内的自治 coding agent，可创建/编辑文件、执行命令、使用浏览器 | TypeScript | 61.5k |  |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AnythingLLM：一体化的 AI 生产力加速器，本地优先，免恼人配置 | JavaScript | 59.7k | `ai-agents` `custom-ai-agents` `deepseek` `kimi` |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | Cherry Studio：智能聊天、自治 agent、300+ 助手的 AI 生产力工作室，统一接入前沿 LLM | TypeScript | 45.3k | `agency-agents` `ai-agent` `claude-code` `codex` |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | Composio：1000+ 工具包、tool search、上下文管理、鉴权和沙盒工作台，帮助构建把意图变成行动的 AI agent | TypeScript | 28.1k | `agentic-ai` `agents` `ai` `ai-agents` |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 免费、本地、开源的 24/7 Cowork 应用，支持 OpenClaw/Hermes/Claude Code/Codex/OpenCode/Gemini CLI 等 20+ CLI | TypeScript | 24.1k | `acp` `agent-team` `ai` `ai-agent` |
| [kortix-ai/suna](https://github.com/kortix-ai/suna) | Suna：自治公司操作系统 | TypeScript | 19.7k | `ai` `ai-agents` `llm` |
| [enricoros/big-AGI](https://github.com/enricoros/big-AGI) | big-AGI：由前沿模型驱动的 AI suite，含 personas、Beam 多模型聊天、文生图、语音、流式响应、PDF 导入等 | TypeScript | 7k | `agi` `ai-agents` `ai-suite` `ai-workspace` |
| [collaborator-ai/collab-public](https://github.com/collaborator-ai/collab-public) | Collaborator：一个和 agent 共同创造的空间 | TypeScript | 2.5k | `agents` `ai` `claude-code` `codex-cli` |

### 通用 / 研究型智能体 (6)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Karpathy 出品：在单 GPU 上自动跑 nanochat 训练研究的 AI agent | Python | 79.8k |  |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | 简洁通用的群体智能引擎，预测万物（agent-memory、社会预测、群体智能） | Python | 59.7k | `agent-memory` `financial-forecasting` `future-prediction` `knowledge-graph` |
| [AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer) ⚠️ | gpt-engineer：实验 codegen 的 CLI 平台（Lovable.dev 的前身） | Python | 55.2k | `ai` `autonomous-agent` `code-generation` `codebase-generation` |
| [666ghj/BettaFish](https://github.com/666ghj/BettaFish) | 微舆：人人可用的多 Agent 舆情分析助手，从 0 实现，不依赖任何框架 | Python | 40.8k | `agent-framework` `data-analysis` `deep-research` `deep-search` |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 自演化 agent：从 3.3K 行种子代码生长出 skill 树，达成全系统控制，token 消耗减少 6 倍 | Python | 9.8k | `ai-agent` `automation` `autonomous-agent` `browser-automation` |
| [SalesforceAIResearch/enterprise-deep-research](https://github.com/SalesforceAIResearch/enterprise-deep-research) | Salesforce 的企业级 Deep Research agent | Python | 1.2k | `deep-research-agent` `e2b` `fastapi` `langchain` |


## 🛠 智能体 Skills 与 MCP

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | AI SKILL：为多平台 UI/UX 提供专业设计智能 | Python | 75.5k | `ai-skills` `antigravity` `claude` `claude-code` |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 给 coding agent 用的 Chrome DevTools MCP server | TypeScript | 38.5k | `browser` `chrome` `chrome-devtools` `debugging` |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Claude Code skill：实现 Manus 风格的持久化 markdown 规划工作流 | Python | 20.7k | `adal` `agent-skills` `antigravity` `claude` |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 即用型 Agent Skills：覆盖科研、科学、工程、分析、金融与写作 | Python | 20.4k | `agent-skills` `ai-scientist` `bioinformatics` `chemoinformatics` |
| [numman-ali/openskills](https://github.com/numman-ali/openskills) | OpenSkills：AI coding agent 的通用 skill 加载器 | TypeScript | 10.1k |  |
| [blader/Claudeception](https://github.com/blader/Claudeception) | Claude Code skill：自治 skill 提取与持续学习，让 Claude Code 越用越聪明 | Shell | 2.3k |  |
| [YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill](https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill) | OpenClaw / Claude Code 的 skill：从 10000+ Nano Banana Pro（Gemini）图像 prompt 中智能推荐 | TypeScript | 1.5k | `ai-agent` `ai-image` `claude-code-skill` `clawhub` |
| [ythx-101/x-tweet-fetcher](https://github.com/ythx-101/x-tweet-fetcher) | 🦞 OpenClaw skill：无需登录或 API key，抓取 X/Twitter 的推文与回复 | Python | 809 |  |
| [wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill) | Claude Code skill：把 Markdown 文章发布到 X (Twitter) Articles | Python | 752 |  |
| [kkoppenhaver/cc-nano-banana](https://github.com/kkoppenhaver/cc-nano-banana) | 用 Nano Banana 生成图像的 Claude Code skill | — | 295 |  |
| [chendongqi/OPB-Skills](https://github.com/chendongqi/OPB-Skills) | 覆盖完整业务的 SKILL 集合，适用 Claude Code / Codex / OpenCode 等 | Python | 50 |  |
| [ythx-101/x-profile-analyzer](https://github.com/ythx-101/x-profile-analyzer) | 🦞 X/Twitter 用户主页分析工具，无需 API key 或登录 | Python | 30 |  |
| [fastapi-practices/mcp](https://github.com/fastapi-practices/mcp) ⚠️ | FastAPI 最佳架构 MCP 插件 | Python | 1 | `ai` `fba` `fba-plugin` `mcp` |


## 🌐 浏览器与网页自动化

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 让 AI agent 操作网页的自动化框架，让网站对 agent 友好 | Python | 93k | `ai-agents` `ai-tools` `browser-automation` `browser-use` |
| [microsoft/playwright](https://github.com/microsoft/playwright) | 微软出品的跨浏览器（Chromium/Firefox/WebKit）E2E 测试与自动化框架，单一 API | TypeScript | 88.3k | `automation` `chrome` `chromium` `e2e-testing` |
| [browserbase/stagehand](https://github.com/browserbase/stagehand) | Stagehand：浏览器 agent 的 SDK | TypeScript | 22.6k | `agents` `ai` `llms` `playwright` |
| [mobile-dev-inc/Maestro](https://github.com/mobile-dev-inc/Maestro) | 移动端与 Web 的无痛 E2E 自动化测试框架 | Kotlin | 14k | `android` `blackbox-testing` `ios` `ui-automation` |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | Browser Harness：自愈式 harness，让 LLM 完成任意浏览器任务 | Python | 11.7k |  |
| [magnitudedev/browser-agent](https://github.com/magnitudedev/browser-agent) | 开源的视觉优先 browser agent | TypeScript | 4k | `ai` `automation` `browser` `framework` |


## 🧠 RAG / 知识图谱 / 记忆

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [getzep/graphiti](https://github.com/getzep/graphiti) | Graphiti：为 AI Agent 构建实时知识图谱 | Python | 25.8k | `agents` `graph` `llms` `rag` |
| [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | CocoIndex：long horizon agent 的增量数据引擎（context engineering、RAG、agentic data framework） | Python | 9.2k | `agentic-data-framework` `ai` `ai-agents` `change-data-capture` |
| [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) | EdgeQuake 🌋 高性能 GraphRAG，Rust 编写，灵感来自 LightRAG，把文档转化为智能知识图谱 | Rust | 2k | `graphrag` `knowledge-graph` `lightrag` `rag` |
| [GitHamza0206/simba](https://github.com/GitHamza0206/simba) | Simba：开源的生产级客服 RAG，自带 evals 与监控 | TypeScript | 1.4k | `customer-service` `evals` `knowledge-base` `llm` |
| [kweaver-ai/kweaver-core](https://github.com/kweaver-ai/kweaver-core) | KWeaver Core：企业决策智能体的 harness-first 基础框架，把碎片化的数据/知识/工具/政策转化为受治理的上下文与可追溯执行 | Go | 682 | `agents` `bkn` `bussiness-knowledge-network` `decision-intelligence` |
| [GraphRAG-Bench/GraphRAG-Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark) | GraphRAG-Bench：评估 GraphRAG 模型的官方 benchmark（ICLR'26） | Python | 416 | `analysis` `benchmark` `dataset` `graphrag` |
| [kweaver-ai/kweaver-dip](https://github.com/kweaver-ai/kweaver-dip) | KWeaver DIP：企业级数字员工平台，基于 KWeaver Core 构建，提供 AI 原生的业务知识网络开发与治理环境 | TypeScript | 167 | `agent-skills` `agents` `ai` `business-knowledge-network` |


## 🎨 多媒体 AI

### 图像生成与设计 (12)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | 拖一张截图，转成干净的 HTML/Tailwind/React/Vue 代码 | TypeScript | 72.5k |  |
| [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers) | 给开发者用的设计资源清单：图片素材、模板、CSS 框架、UI 库、工具等 | — | 65.5k |  |
| [penpot/penpot](https://github.com/penpot/penpot) | Penpot：面向设计与代码协作的开源设计工具 | Clojure | 47.4k | `clojure` `clojurescript` `design` `prototyping` |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | tldraw：非常好用的无限画布白板 SDK | TypeScript | 46.9k | `canvas` `collaboration` `design` `diagram` |
| [danielgatis/rembg](https://github.com/danielgatis/rembg) | 图片背景移除工具 | Python | 22.9k | `background-removal` `image-processing` `python` |
| [wandb/openui](https://github.com/wandb/openui) | OpenUI：用想象力描述 UI，实时渲染出来 | TypeScript | 22.3k | `ai` `generative-ai` `html-css-javascript` `tailwindcss` |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 基于 Nano Banana Pro 的 AI 原生 PPT 生成器，支持上传模板、智能解析素材、口头修改、一键导出可编辑 pptx | Python | 14.4k | `ai-ppt-maker` `ai-slide-builder` `ai-slides` `document-recognition` |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | DESIGN.md 规范：用结构化文档让 coding agents 持续理解一个设计系统的视觉身份 | TypeScript | 12.2k |  |
| [MeiGen-AI/PosterCraft](https://github.com/MeiGen-AI/PosterCraft) | [ICLR 2026] 在统一框架下重新思考高质量美学海报生成 | Python | 929 |  |
| [markfulton/NanoBananaEditor](https://github.com/markfulton/NanoBananaEditor) | 最先进的 Nano Banana 图像生成与编辑应用，集成 reference image、image mask、版本历史等 | TypeScript | 675 | `aiimages` `bolt` `imageediting` `imageeditor` |
| [chatfire-AI/huobao-canvas](https://github.com/chatfire-AI/huobao-canvas) | 火宝无限画布：文生图、图生图、图生视频、多模型切换，兼容 OpenAI 标准格式 | Vue | 512 |  |
| [amrrs/fal-nanobanana-studio](https://github.com/amrrs/fal-nanobanana-studio) | 基于 fal AI 与 Nanobanana 的 Photoshop 风格图像工作室 | TypeScript | 340 |  |

### 视频生成与剪辑 (6)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型，一键生成高清短视频 | Python | 56.9k | `ai` `automation` `chatgpt` `moviepy` |
| [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | OpenCut：开源的 CapCut 替代品 | TypeScript | 48.8k | `editor` `oss` `videoeditor` |
| [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | MediaPipe：跨平台、可定制的实时与流媒体 ML 解决方案 | C++ | 35.1k | `android` `audio-processing` `c-plus-plus` `calculator` |
| [chatfire-AI/huobao-drama](https://github.com/chatfire-AI/huobao-drama) | 🎬 火宝短剧：基于 AI 的一站式短剧生成平台，一句话生成完整短剧，从剧本到成片全自动化 | TypeScript | 11.6k |  |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip：AI 驱动的视频高光提取与剪辑二创工具 | Python | 5.1k | `ai` `ai-agents` `ai-tools` `ai-video` |
| [timoncool/videosos](https://github.com/timoncool/videosos) | 浏览器内的 AI 视频生产：text-to-video、image-to-video、lip sync，100+ 模型（Veo 3.1/FLUX/Gemini/Imagen 4） | TypeScript | 1.2k | `ai-video` `browser-based` `fal-ai` `flux` |

### 音频 / 语音 / 音乐 (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) | OpenVoice：MIT 与 MyShell 出品的即时声音克隆 audio 基础模型 | Python | 36.5k | `text-to-speech` `tts` `voice-clone` `zero-shot-tts` |
| [audacity/audacity](https://github.com/audacity/audacity) | Audacity 音频编辑器 | C++ | 16.9k | `audio` `cross-platform` `editor` `gplv2` |
| [mixxxdj/mixxx](https://github.com/mixxxdj/mixxx) | Mixxx：开源 DJ 软件，提供现场混音所需的全部能力 | C++ | 6.7k | `audio` `dj` `hid` `linux` |


## 📊 爬虫与内容发布

### 爬虫与数据采集 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书/抖音/快手/B 站/微博/百度贴吧/知乎 等平台的笔记、视频与评论爬虫 | Python | 49k |  |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | trafilatura：Python 与命令行工具，抓取并提取 web 上的文本与元数据，支持 CSV/JSON/HTML/MD/XML 输出 | Python | 5.9k | `article-extractor` `corpus-builder` `corpus-tools` `crawler` |
| [joeyism/linkedin_scraper](https://github.com/joeyism/linkedin_scraper) | 抓取 LinkedIn 用户数据的库 | Python | 4k | `chrome` `company` `driver` `firefox` |
| [liyedanpdx/reddit-ai-trends](https://github.com/liyedanpdx/reddit-ai-trends) | 抓取 Reddit AI 社区，用 DeepSeek R1 总结趋势，每日排名热点话题 | Python | 832 | `ai` `deepseek-r1` `ranking` `reports` |
| [otter1101/blogger-distiller](https://github.com/otter1101/blogger-distiller) | 【小红书 2 万人看过的——博主蒸馏器】输入小红书博主名，蒸馏 TA 的认知和内容打法装进你的 AI | Python | 169 |  |

### 内容发布与自媒体 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 终极 agentic 社媒排期工具 | TypeScript | 30.1k | `nextjs` `open-source` `open-source-social-media-scheduling-tool` `oss` |
| [inovector/mixpost](https://github.com/inovector/mixpost) | 📅 自托管的社媒内容排期、发布与管理工具（Buffer 替代品） | Vue | 3.2k | `automated-post` `buffer` `buffer-alternative` `content-calendar` |
| [liyown/ai-trend-publish](https://github.com/liyown/ai-trend-publish) | TrendPublish：全自动 AI 内容生成与发布系统，支持微信公众号自动化、多源数据抓取、多模型支持 | TypeScript | 2.9k | `ai` `weixin` |
| [miantiao-me/hacker-podcast](https://github.com/miantiao-me/hacker-podcast) | 基于 AI 的 Hacker News 中文播客，每日抓取热门文章并生成中文播客 | TypeScript | 2.5k | `ai` `ai-agent` `ai-workflow` `cloudflare` |
| [AJaySi/ALwrity](https://github.com/AJaySi/ALwrity) | ALwrity：AI 数字营销平台（开发中） | Python | 1k | `ai-content-generation` `ai-content-marketing` `ai-digital-marketing` `ai-seo-tools` |
| [spider-ios/autox-release](https://github.com/spider-ios/autox-release) | 网页自动化工具：YouTube 等视频下载、一键搬家、视频多平台发布（TikTok/小红书/抖音/B 站等） | — | 975 |  |
| [gitcoffee-os/postbot](https://github.com/gitcoffee-os/postbot) | PostBot 内容同步助手：一键将文章/笔记/动态/图片/视频/音频同步发布到微信/微博/小红书/知乎/抖音/B 站等主流平台 | TypeScript | 952 | `article` `audio` `automation` `blog` |


## 💻 前端模板与 UI

### 组件库 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | shadcn/ui：精心设计的可访问组件与代码分发平台 | TypeScript | 113.8k | `base-ui` `components` `laravel` `nextjs` |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | anime.js：JavaScript 动画引擎 | JavaScript | 67.9k | `animation` `anime` `canvas` `css` |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 开源的、动画化、可交互、可定制的 React 组件集合 | JavaScript | 39k | `3d` `animations` `component-library` `components` |
| [ln-dev7/square-ui](https://github.com/ln-dev7/square-ui) | Square UI：用 shadcn/ui 精心打造的开源布局集合 | TypeScript | 5.2k | `layout` `shadcn-ui` `template` |
| [elevenlabs/ui](https://github.com/elevenlabs/ui) | ElevenLabs UI：基于 shadcn/ui 的多模态 agent 组件库 | TypeScript | 2.2k | `agents` `ai` `audio` `components` |

### Next.js 模板 (6)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [vercel/chatbot](https://github.com/vercel/chatbot) | 全功能、可 hack 的 Next.js AI 聊天机器人模板 | TypeScript | 20.3k | `ai` `chatgpt` `nextjs` `react` |
| [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 基于 Next.js / Postgres / Stripe / shadcn/ui 的 SaaS 起步模板 | TypeScript | 15.8k | `nextjs` `postgres` `shadcn-ui` `stripe` |
| [vercel/nextjs-subscription-payments](https://github.com/vercel/nextjs-subscription-payments) ⚠️ | 一键克隆并部署的 Next.js SaaS 订阅付费应用模板 | TypeScript | 7.7k | `nextjs-starter` `stripe-checkout` `stripe-customer-portal` `supabase` |
| [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) | 用 Next.js 与 Vercel 几分钟内部署你自己的 Notion 网站 | TypeScript | 7k | `blog` `nextjs` `notion` `portfolio` |
| [NaveenDA/shadcn-nextjs-dashboard](https://github.com/NaveenDA/shadcn-nextjs-dashboard) | 用 shadcn 与 Next.js 构建的 Admin Dashboard UI | TypeScript | 96 | `admin-panel` `dashboard` `dashboard-ui` `good-first-issue` |
| [practicalway/next-shadcn-sanity-blog](https://github.com/practicalway/next-shadcn-sanity-blog) | Next.js 14 博客平台模板，shadcn/ui + Sanity.io 作为 headless CMS | TypeScript | 8 | `aceternity-ui` `blog` `blog-template` `framer-motion` |

### Astro 主题 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind) | ⭕️ AstroWind：免费的 Astro 5 + Tailwind CSS 模板 | Astro | 5.6k | `astro` `astro-blog` `astro-starter` `astro-template` |
| [satnaing/astro-paper](https://github.com/satnaing/astro-paper) | 极简、可访问、SEO 友好的 Astro 博客主题 | Astro | 4.6k | `a11y` `accessibility` `astro` `astro-theme` |
| [incluud/accessible-astro-starter](https://github.com/incluud/accessible-astro-starter) | 符合 WCAG 的 Astro 6+ 起步模板，含多种无障碍特性 | Astro | 1.1k | `a11y` `accessibility` `astro` `blog` |
| [cworld1/astro-theme-pure](https://github.com/cworld1/astro-theme-pure) | ⭐ 简洁、快速、强大的 Astro 博客与文档主题 | Astro | 924 | `astro` `astrojs` `blog` `blog-theme` |
| [Mrahmani71/astro-news](https://github.com/Mrahmani71/astro-news) | 用 Astro 构建的新闻网站 | Astro | 137 |  |
| [one-ie/one](https://github.com/one-ie/one) | 用 Astro/React/shadcn/Cloudflare 一句话构建应用、网站与 AI Agent | TypeScript | 120 | `ai` `astro` `astro-6` `astrojs` |
| [tim-hub/techtim-astro-bento-portfolio](https://github.com/tim-hub/techtim-astro-bento-portfolio) | 个人作品集 Astro 模板（含博客、项目等） | TypeScript | 56 | `astro` `react` `shadcn` `tailwindcss` |

### 桌面端 / 跨平台 (1)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | Tauri：用 web 前端构建更小、更快、更安全的桌面与移动应用 | Rust | 106.4k | `desktop-app` `high-performance` `mobile-app` `native-app` |


## 🏗 后端与基础设施

### Python 与 FastAPI (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [faif/python-patterns](https://github.com/faif/python-patterns) | Python 设计模式与 idiom 合集 | Python | 42.7k | `design-patterns` `idioms` `python` |
| [zhanymkanov/fastapi-best-practices](https://github.com/zhanymkanov/fastapi-best-practices) | FastAPI 最佳实践与约定（来自一家 startup） | — | 17.2k | `best-practices` `fastapi` |
| [mjhea0/awesome-fastapi](https://github.com/mjhea0/awesome-fastapi) | FastAPI 相关 awesome 清单 | — | 11.3k | `awesome` `awesome-list` `fastapi` `starlette` |

### LLM 网关 / SDK (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | LLM API 管理与分发系统，支持 OpenAI/Anthropic Claude/Gemini/DeepSeek/通义千问等，统一 API 适配 | JavaScript | 33.2k | `api` `api-gateway` `azure-openai-api` `chatgpt` |
| [BlockRunAI/ClawRouter](https://github.com/BlockRunAI/ClawRouter) | OpenClaw 的 agent 原生 LLM 路由器，支持 41+ 模型、亚毫秒路由、Base/Solana 上的 USDC 支付（x402） | TypeScript | 6.5k | `ai` `ai-agents` `anthropic` `cost-optimization` |

### 鉴权 / 计费 / 邮件 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [getlago/lago](https://github.com/getlago/lago) | Lago：开源的计量与基于使用量的计费 API（消费追踪、订阅管理、定价迭代、支付编排、收入分析） | Go | 9.6k | `analytics` `billing` `clickhouse` `events` |
| [authzed/spicedb](https://github.com/authzed/spicedb) | SpiceDB：开源、Google Zanzibar 风格的细粒度授权数据库 | Go | 6.7k | `abac` `acl` `authorization` `ciam` |

### 自托管 / PaaS (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [coollabsio/coolify](https://github.com/coollabsio/coolify) | Coolify：开源、可自托管的 Vercel/Heroku/Netlify 替代品，部署静态站点、数据库与全栈应用 | PHP | 54.7k | `coolify` `databases` `deployment` `docker` |
| [ankane/ahoy_email](https://github.com/ankane/ahoy_email) | ahoy_email：Rails 的第一方邮件分析 | Ruby | 1.2k | `analytics` `first-party-analytics` `rails` |

### AI 工具包 / RAG 应用 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [vercel/ai](https://github.com/vercel/ai) | Vercel AI Toolkit：构建 AI 应用与 agent 的免费开源 TypeScript SDK | TypeScript | 24.1k | `anthropic` `artificial-intelligence` `gemini` `generative-ai` |
| [firecrawl/fireplexity](https://github.com/firecrawl/fireplexity) | 🔥 由 Firecrawl 驱动的开源 Perplexity 风格 AI 搜索引擎，含实时引用与流式响应 | TypeScript | 1.9k |  |


## 📝 知识库与个人生产力

### 笔记 / Wiki / 工作空间 (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [AppFlowy-IO/AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | AppFlowy：开源的 AI 协作工作空间，Notion 替代品 | Dart | 70.3k | `blog` `confluence-alternative` `content-management` `content-services` |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | AFFiNE：把规划、整理、创建结合在一起的下一代知识库（Notion 与 Miro 的替代品） | TypeScript | 68.1k | `app` `crdt` `editor` `electron` |
| [logseq/logseq](https://github.com/logseq/logseq) | Logseq：隐私优先的开源知识管理与协作平台 | Clojure | 42.7k | `clojure` `clojurescript` `git` `graph` |
| [pickle-com/glass](https://github.com/pickle-com/glass) | Glass：Digital Mind Extension（数字心智延伸） | JavaScript | 7.5k | `electron` `local-first` `nextjs` `open-source` |

### 个人 CRM (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | Twenty：面向 AI 设计的开源 Salesforce 替代品 | TypeScript | 45.6k | `crm` `crm-system` `customer` `good-first-issue` |
| [monicahq/monica](https://github.com/monicahq/monica) | Personal CRM：记录朋友、家人和商业关系的所有信息 | PHP | 24.6k | `crm` `family` `friends` `hacktoberfest` |
| [fbuchner/meerkat-crm](https://github.com/fbuchner/meerkat-crm) | 面向个人生活的 CRM | Go | 234 | `contact-management` `self-hosted` |

### 仪表盘 (1)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [Lissy93/dashy](https://github.com/Lissy93/dashy) | 🚀 自托管的个人 dashboard，含状态检查、widgets、主题、UI 编辑器 | Vue | 25k | `awesome` `dashboard` `docker` `homelab` |

### 论坛 / 博客平台 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | Ghost：现代出版、会员、订阅与 newsletter 的独立技术 | JavaScript | 52.8k | `blogging` `cms` `ghost` `javascript` |
| [discourse/discourse](https://github.com/discourse/discourse) | Discourse：免费、开源、简洁的社区讨论平台 | Ruby | 47k | `discourse` `ember` `forum` `javascript` |


## 💰 金融、职业与独立开发者

### 金融 / 交易 / 量化 (6)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents：多 agent LLM 金融交易框架 | Python | 71.7k | `agent` `finance` `llm` `multiagent` |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | AI Hedge Fund Team：模拟对冲基金团队的 AI agent | Python | 58.4k |  |
| [virattt/dexter](https://github.com/virattt/dexter) | dexter：做深度金融研究的自治 AI agent | TypeScript | 24.9k |  |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos：金融市场语言的基础模型 | Python | 23.7k |  |
| [tukuaiai/tradecat](https://github.com/tukuaiai/tradecat) | 交易猫数据系统（量化交易） | Python | 936 | `ai` `binance` `bitcoin` `ccxt` |
| [gengjiawen/buffett-chinese](https://github.com/gengjiawen/buffett-chinese) | 巴菲特价值投资的中文资料 | JavaScript | 240 |  |

### 职业 / 求职 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [santifer/career-ops](https://github.com/santifer/career-ops) | 基于 Claude Code 的 AI 求职系统，含 14 个 skill、Go dashboard、PDF 生成、批处理 | JavaScript | 43.6k | `ai-agent` `anthropic` `automation` `career` |
| [XiaomingX/jobleap-cn-ai-job-search](https://github.com/XiaomingX/jobleap-cn-ai-job-search) | 基于 AI 的智能求职平台 jobleap.cn，集成模拟面试、面试押题、简历模板、岗位匹配 | Python | 115 | `awesome` `jobsearch` |

### 独立开发 / 副业 (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [XiaomingX/ai-money-maker-handbook](https://github.com/XiaomingX/ai-money-maker-handbook) | AI 副业赚钱大集合，教你如何利用 AI 做副业项目 | CSS | 2.4k | `awesome` `jobleap` |
| [XiaomingX/indie-hacker-tools-plus](https://github.com/XiaomingX/indie-hacker-tools-plus) | 为独立开发者准备的精选技术栈和工具仓库——经过验证的热门工具 | — | 1.7k | `agent` `ai` `awesome` `awesome-list` |
| [awesome-sideprojects/awesome-sideprojects](https://github.com/awesome-sideprojects/awesome-sideprojects) | 一份有趣（略混乱）的 awesome side projects 清单 | — | 48 |  |


## 🎓 教程与精选列表

### LLM 教程（中文） (10)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need：从 0 到 1 构建一个 nano claude code 风格的 agent harness | TypeScript | 59.1k | `agent` `agent-development` `ai-agent` `claude` |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚《从零开始构建智能体》——从零开始的 Agent 原理与实践教程 | Python | 44.5k | `agent` `llm` `rag` `tutorial` |
| [datawhalechina/self-llm](https://github.com/datawhalechina/self-llm) | 《开源大模型食用指南》：基于 Linux 环境快速微调（全参/Lora）、部署国内外开源 LLM/MLLM 教程 | Jupyter Notebook | 30.3k | `chatglm` `chatglm3` `gemma-2b-it` `glm-4` |
| [datawhalechina/happy-llm](https://github.com/datawhalechina/happy-llm) | 📚 从零开始构建大模型 | Jupyter Notebook | 30k | `agent` `llm` `rag` |
| [datawhalechina/llm-cookbook](https://github.com/datawhalechina/llm-cookbook) | 面向开发者的 LLM 入门教程，吴恩达大模型系列课程中文版 | Jupyter Notebook | 24k | `cookbook` `llm` |
| [tukuaiai/vibe-coding-cn](https://github.com/tukuaiai/vibe-coding-cn) | 中文 Vibe Coding 从入门到精通教程，覆盖 prompt/skill/workflow/上下文管理与 Cursor/Claude Code/Codex/Gemini CLI 实战 | Python | 12.4k | `ai` `ai-agent` `ai-agents` `ai-coding` |
| [luhengshiwo/LLMForEverybody](https://github.com/luhengshiwo/LLMForEverybody) | 每个人都能看懂的大模型知识分享，LLMs 春/秋招大模型面试前必看 | Jupyter Notebook | 6.5k | `agent` `interview-practice` `interview-questions` `learnllm` |
| [datawhalechina/llms-from-scratch-cn](https://github.com/datawhalechina/llms-from-scratch-cn) | 仅需 Python 基础，从 0 构建大语言模型（GLM4/Llama3/RWKV6），深入理解大模型原理 | Jupyter Notebook | 4.1k | `glm` `llama` `llm` `llms-from-scratch` |
| [skindhu/Build-A-Large-Language-Model-CN](https://github.com/skindhu/Build-A-Large-Language-Model-CN) | 《Build a Large Language Model (From Scratch)》中文翻译版 | HTML | 3.6k |  |
| [datawhalechina/llm-deploy](https://github.com/datawhalechina/llm-deploy) | 大模型/LLM 推理与部署的理论与实践 | — | 394 | `knowledge-distillation` `llm` `llm-deploy` `lora` |

### LLM 教程（英文） (12)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 用 PyTorch 从零实现一个 ChatGPT 风格的 LLM，逐步深入 | Jupyter Notebook | 92.2k | `ai` `artificial-intelligence` `chatbot` `chatgpt` |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | 学习 LLM 的课程，含 roadmap 与 Colab notebook | — | 79.1k | `course` `large-language-models` `llm` `machine-learning` |
| [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic 出品的交互式 prompt engineering 教程 | Jupyter Notebook | 35.5k |  |
| [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | LLM、RAG 与真实世界 AI agent 应用的深度教程 | Jupyter Notebook | 34.8k | `agents` `ai` `llms` `machine-learning` |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | RAG（Retrieval-Augmented Generation）系统的高级技术合集，每个技术都有详细 notebook 教程 | Jupyter Notebook | 27.2k | `ai` `embeddings` `langchain` `llama-index` |
| [anthropics/courses](https://github.com/anthropics/courses) | Anthropic 出品的教育课程 | Jupyter Notebook | 21.1k |  |
| [google-gemini/gemini-fullstack-langgraph-quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart) | 用 Gemini 2.5 与 LangGraph 构建全栈 Agent 的快速开始 | Jupyter Notebook | 18.2k | `gemini` `gemini-api` |
| [langchain-ai/rag-from-scratch](https://github.com/langchain-ai/rag-from-scratch) | 从零开始的 RAG 教程 | Jupyter Notebook | 8.2k |  |
| [decodingai-magazine/llm-twin-course](https://github.com/decodingai-magazine/llm-twin-course) | 🤖 免费学习如何用 LLMOps 最佳实践构建端到端生产级 LLM 与 RAG 系统 | Python | 4.3k | `aws` `bytewax` `comet-ml` `course` |
| [pageman/sutskever-30-implementations](https://github.com/pageman/sutskever-30-implementations) | Sutskever 30 篇论文的代码实现合集 | Jupyter Notebook | 3.3k |  |
| [bhancockio/langchain-crash-course](https://github.com/bhancockio/langchain-crash-course) | LangChain 速成课程 | Python | 959 |  |
| [ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing](https://github.com/ghimiresunil/LLM-PowerHouse-A-Curated-Guide-for-Large-Language-Models-with-Custom-Training-and-Inferencing) | LLM-PowerHouse：精选教程、最佳实践与即用代码，覆盖自定义训练与推理 | Jupyter Notebook | 729 | `bert` `huggingface` `large-language-models` `llm-inference` |

### 上下文工程 / Vibe Coding (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [coleam00/context-engineering-intro](https://github.com/coleam00/context-engineering-intro) | Context engineering 入门：让 AI coding 助手真正工作的方法 | Python | 13.3k |  |
| [davidkimai/Context-Engineering](https://github.com/davidkimai/Context-Engineering) | 受 Karpathy 与 3Blue1Brown 启发的 context engineering 第一性原理手册 | Python | 8.9k |  |

### 系统设计与面试 (5)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | 学习设计大规模系统，准备系统设计面试，含 Anki 闪卡 | Python | 347.5k | `design` `design-patterns` `design-system` `development` |
| [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 学习大规模系统设计与系统设计面试准备 | — | 43.2k | `architecture` `distributed-systems` `engineering` `interview` |
| [DataExpert-io/data-engineer-handbook](https://github.com/DataExpert-io/data-engineer-handbook) | 数据工程学习路径与资源合集 | Jupyter Notebook | 41.2k | `apachespark` `awesome` `bigdata` `data` |
| [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | 用免费资源学习系统设计概念并准备面试 | Java | 37k | `awesome` `backend` `computer-science` `distributed-systems` |
| [Jeevan-kumar-Raj/Grokking-System-Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design) | 系统设计：定义满足需求的系统架构、模块、接口与数据 | Shell | 6.5k |  |

### 动手实现 / 项目驱动学习 (3)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | 通过从零重建你最喜欢的技术来精通编程 | Markdown | 499.9k | `awesome-list` `free` `programming` `tutorial-code` |
| [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning) | 项目驱动的学习教程精选清单 | — | 265.1k | `beginner-project` `cpp` `golang` `javascript` |
| [lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions) | 一长串（进阶）JavaScript 问题与解释 | — | 65.3k |  |

### Awesome 精选列表 (14)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | 😎 关于各类有趣主题的 awesome 清单总集 | — | 464.1k | `awesome` `awesome-list` `lists` `resources` |
| [vinta/awesome-python](https://github.com/vinta/awesome-python) | Python 框架、库、工具与资源的精选清单 | Python | 296.6k | `awesome` `collections` `python` `python-frameworks` |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Cursor / Devin / Lovable / v0 等 AI 工具的 system prompt、内部 tool 与 AI 模型合集 | — | 136.9k | `ai` `bolt` `cluely` `copilot` |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP servers 合集 | — | 86.5k | `ai` `mcp` |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | OpenClaw skills 的精选合集，从官方 Skills Registry 筛选并分类的 5400+ skill | — | 48.2k | `agent-skills` `awesome` `awesome-list` `awesome-lists` |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Claude Code 的精选 skills、hooks、slash-commands、agent orchestrator、应用与插件 | Python | 43k | `agent-skills` `agentic-code` `agentic-coding` `ai-workflow-optimization` |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | 增强 Cursor AI 编辑器体验的配置文件合集 | MDX | 39.4k | `awesome` `awesome-list` `cursor` `cursor-ai-editor` |
| [BradyFU/Awesome-Multimodal-Large-Language-Models](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models) | 多模态大语言模型最新进展的 awesome 清单 | — | 17.8k | `chain-of-thought` `in-context-learning` `instruction-following` `instruction-tuning` |
| [0xeb/TheBigPromptLibrary](https://github.com/0xeb/TheBigPromptLibrary) | prompt、system prompt 与 LLM instruction 的合集 | HTML | 5k |  |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | agentic AI 模式的 awesome 精选目录 | HTML | 4.5k |  |
| [lukasmasuch/best-of-python](https://github.com/lukasmasuch/best-of-python) | 🏆 排序后的 Python 开源库与工具清单（每周更新） | — | 4.5k | `awesome` `awesome-list` `best-of` `best-of-list` |
| [xianyu110/awesome-openclaw-tutorial](https://github.com/xianyu110/awesome-openclaw-tutorial) | 从零开始玩转 OpenClaw 的全面中文教程，含安装、配置、实战案例与避坑指南 | Shell | 4.4k | `openclaw` `openclaw-skills` |
| [Curated-Awesome-Lists/awesome-llms-fine-tuning](https://github.com/Curated-Awesome-Lists/awesome-llms-fine-tuning) | LLM 微调的资源、教程、论文、工具与最佳实践合集 | — | 516 | `ai` `awesome-list` `deep-learning` `fine-tuning` |
| [Zheng-Chong/Awesome-Try-On-Models](https://github.com/Zheng-Chong/Awesome-Try-On-Models) | 虚拟试穿模型相关的论文、代码与资源整理 | — | 416 | `3d-generation` `diffusion-models` `image-generation` `sota-model` |


## 🌈 杂项 / 生活娱乐

### 美食 / 健康 / 健身 (4)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [Anduin2017/HowToCook](https://github.com/Anduin2017/HowToCook) | 程序员在家做饭方法指南 | JavaScript | 99.8k | `chinese` `cookbook` `cooking` `dishes` |
| [zijie0/HumanSystemOptimization](https://github.com/zijie0/HumanSystemOptimization) | 健康学习到 150 岁——人体系统调优不完全指南 | — | 21.7k |  |
| [Snouzy/workout-cool](https://github.com/Snouzy/workout-cool) | 🏋 现代开源健身教练平台：制定计划、跟踪进度、查询动作库 | TypeScript | 7.6k | `coach` `exercise` `feature-sliced-design` `fitness` |
| [liu-ziting/what-to-eat](https://github.com/liu-ziting/what-to-eat) | 一饭封神：基于 AI 的智能菜谱生成平台，支持中华八大菜系与国际料理 | Vue | 3.4k | `ai` `gpt` `vibe-coding` |

### 情报 / 安全 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️ 通过用户名在 3000+ 网站收集个人信息档案的 OSINT 工具 | Python | 26.6k | `blueteam` `cli` `cybersecurity` `identification` |
| [s0md3v/be-a-hacker](https://github.com/s0md3v/be-a-hacker) | 自学黑客的路线图 | — | 2.7k |  |

### Web3 / 区块链 (1)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [AmazingAng/WTF-Solidity](https://github.com/AmazingAng/WTF-Solidity) | WTF Solidity 极简入门教程，供小白使用 | Solidity | 14k | `airdrop` `auction` `blockchain` `dapp` |

### 游戏 (2)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [leereilly/games](https://github.com/leereilly/games) ⚠️ | Archived：GitHub 上托管的游戏、扩展、地图等清单（任意类型/平台/引擎） | — | 24.7k | `game` `game-development` `game-engine` `gamedev` |
| [BKcore/HexGL](https://github.com/BKcore/HexGL) | HexGL 的源码：未来风格的 HTML5 赛车游戏 | JavaScript | 1.7k |  |

### 教育 (1)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [cubewhy/skid-homework](https://github.com/cubewhy/skid-homework) | 符合人体工程学的 AI 驱动作业助手 | TypeScript | 1.5k | `ai` `gemini` `homework` `homework-helper` |

### 个人 / 试验性项目 (7)

| 仓库 | 描述 | 语言 | ⭐ | 标签 |
|---|---|---|---|---|
| [context-labs/aella-data-explorer](https://github.com/context-labs/aella-data-explorer) | LAION 研究论文数据集的可视化浏览器 | TypeScript | 900 |  |
| [khalildh/garment-notation](https://github.com/khalildh/garment-notation) | 服装符号化项目（暂无明确描述） | JavaScript | 432 |  |
| [jayrodge/ai-agents](https://github.com/jayrodge/ai-agents) | AI agents 项目（暂无描述） | Python | 261 |  |
| [gkamradt/MultiTerminalCodeViz](https://github.com/gkamradt/MultiTerminalCodeViz) | 多终端代码可视化工具 | TypeScript | 251 |  |
| [draco-agent/tech-news-digest](https://github.com/draco-agent/tech-news-digest) | 科技新闻摘要 agent 项目 | Python | 68 |  |
| [JesseQin123/JewelFlow](https://github.com/JesseQin123/JewelFlow) | 你自己的项目（暂无描述） | TypeScript | 1 |  |
| [wtlee328/lead-gen](https://github.com/wtlee328/lead-gen) | Lead 生成项目（暂无描述） | Vue | 1 |  |


---

**图例**：⚠️ = 项目已被原作者 archive。Star 数为某时点快照。Topic 标签来自 GitHub。

**维护**：跑 `scripts/sync-stars.sh` 把新增 star 拉进 `inbox.md`；编辑 `data/manifest.json` 调整分类或重写描述，再跑 `python3 scripts/build-readme.py`。
