# Twitter 书签清洗 · 2026-05-08

> 一次性扫描 X / Twitter 书签 → 抽出工具相关帖子 → 收 GitHub 仓库 → 进 [`inbox.md`](./inbox.md) 走既有 pipeline。
>
> 本文档记录扫描概览、未走 GitHub 流程的工具，以及没法抽链接的相关帖子（未来人工补足用）。

## 概览

| | 数 |
|---|---:|
| 扫描的书签总数 | 93 |
| 工具相关帖子 | 24 |
| 抽到的唯一 GitHub 仓库 | **44** |
| 已加入 [`inbox.md`](./inbox.md) | 44 |
| 与 [`data/stars.json`](./data/stars.json) 重叠 | 0（全部是新发现） |

来源 raw data：
- [`data/twitter_finds.json`](./data/twitter_finds.json) — 44 个仓库 + tweet 元数据 + GitHub metadata
- [`data/resolved.json`](./data/resolved.json) — 24 个工具帖子 + t.co 解析结果 + 抓取到的 thread 回复
- [`data/bookmarks.json`](./data/bookmarks.json) — 93 条原始书签

## 提到但无 GitHub 仓库的工具/产品

以下书签提到了具体工具，但解析后只指向商业网站、文章或图片（无公开 GitHub 仓库）。可考虑单独立一个 "Commercial Tools" 列表，或直接忽略。

| 工具 | 说明 | 来源推文 |
|---|---|---|
| Moxt | AI Native 组织协作工具（@op7418 推荐） | [@op7418](https://x.com/op7418/status/2049458103675191550) |
| Claude Managed Agents | Anthropic 官方托管 Agent 平台（public beta） | [@claudeai](https://x.com/claudeai/status/2041927687460024721) |
| [Craft.do](https://www.craft.do/) | 笔记/Daily Note 工具，用作 GTD | [@cellier_](https://x.com/cellier_/status/1741692958712439204) |
| [skills.sh](https://skills.sh/) | Agent Skills 平台（在 @Clawnch_Bot 推文回复中被推荐） | [@Clawnch_Bot](https://x.com/Clawnch_Bot/status/2049151454041002153) |
| [mnemosyne.site](https://mnemosyne.site/) | 图记忆方案的产品页（同名 GitHub 已收录于 inbox） | [@AYi_AInotes](https://x.com/AYi_AInotes/status/2048278717793722747) |
| [indiemakerlist.com](https://indiemakerlist.com/) | 独立开发者项目清单 | [@FinanceYF5](https://x.com/FinanceYF5/status/1923298372896592110) |

## 已读但未抽出可点击工具链接的相关帖子

值得人工再看一眼，可能是事件评论、清单图片、或主题宣传贴。

| 作者 | 推文 | 备注 |
|---|---|---|
| @zodchiii | <https://x.com/zodchiii/status/2049874687069426008> | Claude Code 的 .env / settings.json 安全配置吐槽（无具体工具，只提到 settings.json） |
| @\_vmlops | <https://x.com/_vmlops/status/2049896625481662660> | Agentic AI Engineer 2026 路线图（PDF 在 Google Drive，非工具仓库） |
| @li9292 | <https://x.com/li9292/status/2049720203542667532> | Agent 工程师的学习清单（清单文本，无具体仓库） |
| @mr_r0b0t | <https://x.com/mr_r0b0t/status/2049821753195585740> | Hermes architecture-diagram skill 截图（仅图片，无仓库链接） |
| @AYi\_AInotes | <https://x.com/AYi_AInotes/status/2049861121251660095> | Anthropic 屏蔽 OpenClaw 字符串的吐槽（事件分析帖） |
| @Clawnch\_Bot | <https://x.com/Clawnch_Bot/status/2049151454041002153> | Hermes 金融 plugin 预告（GitHub 仓库被封后的转向） |
| @Saccc\_c | <https://x.com/Saccc_c/status/2038555397234020404> | 「2026 GitHub 赚钱项目榜单」图片宣传（链到图，未给出榜单地址） |
| @mubeitech | <https://x.com/mubeitech/status/2035699759797670073> | 「50 个顶级 Claude skill」声称图片（无任何外链） |
| @dotey | <https://x.com/dotey/status/1743791697304109452> | 纽约客 2019 戒习惯文章 + minihabits.com 推荐（非工具） |
| @0xluffy\_eth | <https://x.com/0xluffy_eth/status/1733305500748726438> | 「8 个 AI 网站」截图（无外链） |

## 复现脚本

中间过程脚本保留在 `.gstack/`（未提交，本地工作区）：

```
.gstack/analyze.py        # 93 → 24 工具相关筛选
.gstack/resolve.py        # t.co 解析 + thread 抓取
.gstack/enrich.py         # gh api 拉 metadata
.gstack/append_inbox.py   # 写入 inbox.md
.gstack/build_md.py       # 生成本文档
```

数据采集靠 `opencli twitter bookmarks --limit 500 -f json`（驱动用户真实 Chrome）。

## 后续建议分类（提示）

44 个仓库大致分布如下，可作为合入 [`data/manifest.json`](./data/manifest.json) 的参考：

- **🎭 Claude Code Skills（人格蒸馏类）** — 24 个：jinchenma\_ai 同事/导师/名人 skill 全家桶（女娲、张雪峰、ex-skill、yourself-skill 等），加上 NFTCPS 的 awesome-human-distillation
- **🐍 Hermes Agent 生态** — 11 个：scarf、hermes-dashboard、Medusa、oh-my-agent-skills、Ankh.md、Hermes-Agent-Wizard、crazyrouter-hermes、drawthings-grpc-hermes-plugin、hermes-dashboard-sovereign-ops、hermes-agent-superpowers-chatgpt（404）、mnemosyne（亦可归 memory）
- **🧠 Agent 记忆** — 1 个：hippo-memory
- **📊 RAG / 知识抽取** — 1 个：Hyper-Extract
- **🎨 创作工具** — 2 个：open-slide、open-design
- **🏆 Benchmark** — 1 个：MingLi-Bench（命理 LLM 评测集）
- **📚 教程 / 教学 Skill** — 1 个：yao-open-skills
