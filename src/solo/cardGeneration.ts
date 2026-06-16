import { writeFileSync } from "node:fs";

import {
  type Catalog,
  type ManifestEntry,
  type SetupDifficulty,
  type StarRepo,
  type TimeToFirstValue,
  type ToolKind,
  type UsageCard,
  type UsageStatus,
} from "./navigator";
import { evaluateCard, type EvaluationIssue } from "./evaluator";

export interface RepoKeyMismatch {
  cardRepo: string;
  suggestedRepo: string;
  reason: string;
}

export interface CardCoverageAudit {
  manifestTotal: number;
  starTotal: number;
  cardTotal: number;
  manifestMissing: string[];
  starMissing: string[];
  duplicateCards: string[];
  repoKeyMismatches: RepoKeyMismatch[];
}

export interface DraftEvidence {
  description?: string;
  topics?: string[];
  language?: string | null;
  stars?: number;
  archived?: boolean;
  manifest?: ManifestEntry;
}

export interface DraftUsageCard {
  card: UsageCard;
  confidence: number;
  evidence: DraftEvidence;
  flags: string[];
  decision: "accept" | "needs-review" | "skip";
}

export interface DraftOptions {
  limit?: number;
  category?: string;
  repos?: string[];
}

export interface DraftValidationResult {
  accepted: DraftUsageCard[];
  needsReview: DraftUsageCard[];
  rejected: DraftUsageCard[];
  issues: EvaluationIssue[];
}

const CATEGORY_USE_CASES: Record<string, string[]> = {
  "ai-agents": ["agent-building"],
  "skills-mcp": ["agent-building"],
  "browser-automation": ["browser-automation", "automation"],
  "rag-kg-memory": ["knowledge-base", "research"],
  multimedia: ["design", "content"],
  "crawler-publish": ["browser-automation", "content", "automation"],
  frontend: ["saas-building", "design"],
  "backend-infra": ["saas-building"],
  "kb-productivity": ["personal-productivity", "knowledge-base"],
  "finance-career": ["finance"],
  tutorials: ["research"],
  misc: ["personal-productivity"],
};

const SUBCATEGORY_USE_CASES: Record<string, string[]> = {
  publish: ["content", "growth", "automation"],
  crawler: ["browser-automation", "research", "automation"],
  image: ["design", "content"],
  video: ["design", "content"],
  audio: ["content"],
  "documents-slides": ["content", "design"],
  "llm-gateway": ["saas-building", "agent-building"],
  "auth-billing": ["saas-building", "finance"],
  "databases-analytics": ["saas-building", "knowledge-base"],
  "self-host": ["saas-building", "personal-productivity"],
  "ai-toolkit": ["saas-building", "agent-building"],
  "claude-code": ["agent-building", "saas-building"],
  "openclaw-hermes": ["agent-building", "personal-productivity"],
  "multi-orchestration": ["agent-building", "automation"],
  "agent-platforms": ["agent-building"],
  crm: ["personal-productivity"],
  dashboard: ["personal-productivity"],
  note: ["knowledge-base", "personal-productivity"],
  finance: ["finance"],
  career: ["personal-productivity"],
  "marketing-growth": ["growth", "content"],
  "awesome-lists": ["research"],
  "context-vibe": ["agent-building", "saas-building"],
};

function normalizeText(value: unknown): string {
  if (Array.isArray(value)) return value.map(normalizeText).join(" ");
  return String(value ?? "").toLowerCase();
}

function repoName(repo: string): string {
  return repo.split("/")[1] ?? repo;
}

function uniqueRepoKeys(repos: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const repo of repos) {
    const key = repo.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(repo);
  }
  return result;
}

function sameRepoName(a: string, b: string): boolean {
  return repoName(a).toLowerCase() === repoName(b).toLowerCase();
}

function findStar(catalog: Catalog, repo: string): StarRepo | undefined {
  return catalog.starsByRepo.get(repo.toLowerCase());
}

function findManifest(catalog: Catalog, repo: string): ManifestEntry | undefined {
  return catalog.manifestByRepo.get(repo.toLowerCase());
}

function repoText(repo: string, star?: StarRepo, manifest?: ManifestEntry): string {
  return normalizeText([
    repo,
    star?.description,
    star?.topics,
    star?.language,
    manifest?.category,
    manifest?.subcategory,
    manifest?.zh,
  ]);
}

function hasMeaningfulDescription(value?: string | null): value is string {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  if (normalized.length < 14) return false;
  return ![
    "暂无描述",
    "暂无明确描述",
    "no description",
    "todo",
    "tbd",
  ].some((placeholder) => normalized.includes(placeholder));
}

function buildDescription(
  repo: string,
  star: StarRepo | undefined,
  manifest: ManifestEntry | undefined,
  kind: ToolKind,
  useCases: string[],
): string {
  if (hasMeaningfulDescription(star?.description)) return star.description;
  if (hasMeaningfulDescription(manifest?.zh)) return manifest.zh;

  const primary = useCaseLabel(useCases[0] ?? "personal-productivity");
  const category = manifest?.category ? `${manifest.category} 目录下的` : "";
  const language = star?.language ? `，主要语言是 ${star.language}` : "";
  return `${repoName(repo)} 是 ${category}${kind} 型候选工具，主要用于${primary}${language}；当前元数据较少，建议先用最小验证任务判断是否值得继续投入。`;
}

export function auditCardCoverage(catalog: Catalog): CardCoverageAudit {
  const cardRepos = catalog.usageCards.map((card) => card.repo);
  const cardRepoSet = new Set(cardRepos.map((repo) => repo.toLowerCase()));
  const manifestRepos = uniqueRepoKeys(Object.keys(catalog.manifest));
  const starRepos = uniqueRepoKeys(catalog.stars.map((repo) => repo.full_name));
  const seen = new Set<string>();
  const duplicateCards: string[] = [];
  const repoKeyMismatches: RepoKeyMismatch[] = [];

  for (const repo of cardRepos) {
    const key = repo.toLowerCase();
    if (seen.has(key)) duplicateCards.push(repo);
    seen.add(key);

    if (!catalog.manifestByRepo.has(key) && !catalog.starsByRepo.has(key)) {
      const suggested = manifestRepos.find((manifestRepo) => sameRepoName(manifestRepo, repo));
      if (suggested) {
        repoKeyMismatches.push({
          cardRepo: repo,
          suggestedRepo: suggested,
          reason: "same repo name appears under a different owner in manifest",
        });
      }
    }
  }

  return {
    manifestTotal: manifestRepos.length,
    starTotal: starRepos.length,
    cardTotal: catalog.usageCards.length,
    manifestMissing: manifestRepos
      .filter((repo) => !cardRepoSet.has(repo.toLowerCase()))
      .sort((a, b) => a.localeCompare(b)),
    starMissing: starRepos
      .filter((repo) => !cardRepoSet.has(repo.toLowerCase()))
      .sort((a, b) => a.localeCompare(b)),
    duplicateCards,
    repoKeyMismatches,
  };
}

function inferKind(repo: string, star?: StarRepo, manifest?: ManifestEntry): ToolKind {
  const text = repoText(repo, star, manifest);
  if (/\bmcp\b|model context protocol/.test(text)) return "mcp";
  if (/plugin/.test(text)) return "plugin";
  if (/skill|claude-skill|openclaw skill/.test(text)) return "skill";
  if (/starter|template|boilerplate|theme/.test(text)) return "template";
  if (/awesome|book|course|tutorial|handbook|guide|list|paper|benchmark|dataset/.test(text)) {
    return "reference";
  }
  if (/sdk|framework|library|toolkit|engine|api/.test(text)) return "library";
  if (/app|studio|dashboard|platform|workspace|desktop|webui|gui|cms|crm/.test(text)) return "app";
  if (manifest?.category === "tutorials") return "reference";
  if (manifest?.category === "frontend") return "template";
  return "app";
}

function inferUseCases(catalog: Catalog, repo: string, star?: StarRepo, manifest?: ManifestEntry): string[] {
  const text = repoText(repo, star, manifest);
  const scores = new Map<string, number>();
  for (const useCase of catalog.useCases) {
    let score = 0;
    for (const keyword of useCase.keywords) {
      if (text.includes(keyword.toLowerCase())) score += 2;
    }
    if (text.includes(useCase.id) || text.includes(useCase.label.toLowerCase())) score += 3;
    if (score > 0) scores.set(useCase.id, score);
  }
  for (const useCase of CATEGORY_USE_CASES[manifest?.category ?? ""] ?? []) {
    scores.set(useCase, (scores.get(useCase) ?? 0) + 4);
  }
  for (const useCase of SUBCATEGORY_USE_CASES[manifest?.subcategory ?? ""] ?? []) {
    scores.set(useCase, (scores.get(useCase) ?? 0) + 5);
  }

  const chosen = [...scores.entries()]
    .filter(([, score]) => score >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([useCase]) => useCase);

  return chosen.length > 0 ? chosen : ["personal-productivity"];
}

function inferStatus(kind: ToolKind, star?: StarRepo, manifest?: ManifestEntry): UsageStatus {
  if (star?.archived || kind === "reference" || manifest?.category === "tutorials") return "reference-only";
  return "candidate";
}

function inferDifficulty(kind: ToolKind, star?: StarRepo, manifest?: ManifestEntry): SetupDifficulty {
  const text = repoText("", star, manifest);
  if (/gpu|kubernetes|cluster|distributed|self-host|database|graph database|training/.test(text)) return "hard";
  if (kind === "reference" || kind === "skill" || kind === "template") return "easy";
  if (kind === "mcp" || kind === "library" || kind === "plugin") return "medium";
  return "medium";
}

function inferTime(kind: ToolKind, difficulty: SetupDifficulty): TimeToFirstValue {
  if (difficulty === "hard") return "2h+";
  if (kind === "reference" || kind === "template") return "5min";
  if (kind === "skill") return "15min";
  return difficulty === "easy" ? "15min" : "30min";
}

function useCaseLabel(useCase: string): string {
  const labels: Record<string, string> = {
    content: "内容生产",
    research: "研究",
    "agent-building": "agent 构建",
    "browser-automation": "浏览器自动化",
    "saas-building": "SaaS 构建",
    design: "设计",
    growth: "增长",
    "knowledge-base": "知识库",
    finance: "金融",
    "personal-productivity": "个人效率",
    automation: "自动化",
  };
  return labels[useCase] ?? useCase;
}

function defaultInputs(useCases: string[]): string[] {
  if (useCases.includes("content")) return ["topic", "audience", "channel"];
  if (useCases.includes("browser-automation")) return ["url", "task"];
  if (useCases.includes("knowledge-base")) return ["documents", "questions"];
  if (useCases.includes("saas-building")) return ["product_idea", "constraints"];
  if (useCases.includes("finance")) return ["market", "metric"];
  return ["goal", "context"];
}

function defaultOutputs(useCases: string[]): string[] {
  if (useCases.includes("content")) return ["content_plan", "draft", "next_actions"];
  if (useCases.includes("browser-automation")) return ["automation_plan", "sample_result"];
  if (useCases.includes("knowledge-base")) return ["retrieval_plan", "answer_examples"];
  if (useCases.includes("saas-building")) return ["stack_recommendation", "validation_plan"];
  if (useCases.includes("finance")) return ["analysis_notes", "signal_checklist"];
  return ["fit_notes", "first_test_result"];
}

function buildFirstTest(repo: string, kind: ToolKind, useCases: string[], time: TimeToFirstValue): string {
  const primary = useCaseLabel(useCases[0] ?? "tool");
  if (kind === "reference") {
    return `${time} 测试：阅读 ${repo} 的核心说明，提取 3 条可用于${primary}的行动建议。`;
  }
  return `${time} 测试：围绕一个具体${primary}目标，定义输入、运行最小试用，并记录一个可观察输出。`;
}

function relatedTools(catalog: Catalog, repo: string, useCases: string[]): string[] {
  return catalog.usageCards
    .filter((card) => card.repo.toLowerCase() !== repo.toLowerCase())
    .filter((card) => card.use_cases.some((useCase) => useCases.includes(useCase)))
    .slice(0, 3)
    .map((card) => card.repo);
}

function confidenceFor(star: StarRepo | undefined, manifest: ManifestEntry | undefined, flags: string[]): number {
  let confidence = 0.45;
  if (hasMeaningfulDescription(star?.description)) confidence += 0.15;
  if ((star?.topics ?? []).length > 0) confidence += 0.1;
  if (hasMeaningfulDescription(manifest?.zh)) confidence += 0.15;
  if (manifest?.category) confidence += 0.1;
  if ((star?.stargazers_count ?? 0) >= 100) confidence += 0.05;
  if ((star?.stargazers_count ?? 0) >= 1000) confidence += 0.05;
  if (star?.archived) confidence -= 0.15;
  confidence -= flags.length * 0.08;
  return Math.max(0, Math.min(1, Math.round(confidence * 100) / 100));
}

function priorityFor(repo: string, star?: StarRepo, manifest?: ManifestEntry): number {
  const categoryPriority = [
    "ai-agents",
    "skills-mcp",
    "rag-kg-memory",
    "browser-automation",
    "crawler-publish",
    "backend-infra",
    "frontend",
    "multimedia",
    "kb-productivity",
    "finance-career",
    "misc",
    "tutorials",
  ];
  const categoryScore = 100 - Math.max(0, categoryPriority.indexOf(manifest?.category ?? "")) * 4;
  const stars = Math.log10((star?.stargazers_count ?? 0) + 1) * 8;
  const archivedPenalty = star?.archived ? -30 : 0;
  return categoryScore + stars + archivedPenalty + repo.length / 1000;
}

export function draftCard(catalog: Catalog, repo: string): DraftUsageCard {
  const star = findStar(catalog, repo);
  const manifest = findManifest(catalog, repo);
  const text = repoText(repo, star, manifest);
  const flags: string[] = [];
  if (!hasMeaningfulDescription(star?.description) && !hasMeaningfulDescription(manifest?.zh)) {
    flags.push("LOW_EVIDENCE");
  }
  if (star?.archived) flags.push("ARCHIVED");
  if (/awesome|tutorial|book|course|benchmark|dataset/.test(text)) flags.push("REFERENCE_LIKE");

  const kind = inferKind(repo, star, manifest);
  const useCases = inferUseCases(catalog, repo, star, manifest);
  const status = inferStatus(kind, star, manifest);
  const setupDifficulty = inferDifficulty(kind, star, manifest);
  const timeToFirstValue = inferTime(kind, setupDifficulty);
  const description = buildDescription(repo, star, manifest, kind, useCases);
  const primary = useCaseLabel(useCases[0]);
  const confidence = confidenceFor(star, manifest, flags);
  const decision =
    status === "reference-only"
      ? confidence >= 0.5
        ? "accept"
        : "needs-review"
      : confidence >= 0.55
        ? "accept"
        : "needs-review";

  return {
    card: {
      repo,
      kind,
      use_cases: useCases,
      status,
      setup_difficulty: setupDifficulty,
      time_to_first_value: timeToFirstValue,
      what_it_is: description,
      best_for: useCases.map(useCaseLabel).slice(0, 3),
      not_for:
        status === "reference-only"
          ? ["需要直接安装运行的生产 workflow"]
          : ["不适合没有明确目标时盲目安装"],
      first_test: buildFirstTest(repo, kind, useCases, timeToFirstValue),
      inputs: defaultInputs(useCases),
      outputs: defaultOutputs(useCases),
      related_tools: relatedTools(catalog, repo, useCases),
      idea_prompts: [
        `用 ${repoName(repo)} 做一个${primary}助手`,
        `把 ${repoName(repo)} 纳入一人公司${primary}流程`,
        `围绕 ${repoName(repo)} 设计一个 15 分钟验证 demo`,
      ],
      minimum_demo:
        status === "reference-only"
          ? undefined
          : `15 分钟：完成 first_test，并记录输入、输出和是否值得继续投入。`,
    },
    confidence,
    evidence: {
      description: star?.description ?? undefined,
      topics: star?.topics,
      language: star?.language,
      stars: star?.stargazers_count,
      archived: star?.archived,
      manifest,
    },
    flags,
    decision,
  };
}

export function draftMissingCards(catalog: Catalog, options: DraftOptions = {}): DraftUsageCard[] {
  const audit = auditCardCoverage(catalog);
  const requested = options.repos
    ? options.repos
    : audit.manifestMissing.filter((repo) => {
        if (!options.category) return true;
        return findManifest(catalog, repo)?.category === options.category;
      });

  return requested
    .sort((a, b) =>
      priorityFor(b, findStar(catalog, b), findManifest(catalog, b)) -
      priorityFor(a, findStar(catalog, a), findManifest(catalog, a)),
    )
    .slice(0, options.limit ?? requested.length)
    .map((repo) => draftCard(catalog, repo));
}

export function validateDrafts(catalog: Catalog, drafts: DraftUsageCard[]): DraftValidationResult {
  const accepted: DraftUsageCard[] = [];
  const needsReview: DraftUsageCard[] = [];
  const rejected: DraftUsageCard[] = [];
  const issues: EvaluationIssue[] = [];
  const seen = new Set<string>();

  for (const draft of drafts) {
    const repoKey = draft.card.repo.toLowerCase();
    let hasDuplicate = false;
    if (seen.has(repoKey)) {
      const duplicateIssue: EvaluationIssue = {
        severity: "blocker",
        rule_id: "DRAFT_DUPLICATE_REPO",
        repo: draft.card.repo,
        field: "repo",
        observed: draft.card.repo,
        expected: "Each draft repo appears once",
        suggested_fix: "Remove duplicate draft or merge the better card.",
      };
      issues.push(duplicateIssue);
      hasDuplicate = true;
    } else {
      seen.add(repoKey);
    }

    const evaluation = evaluateCard(catalog, draft.card);
    issues.push(...evaluation.issues);
    if (hasDuplicate || evaluation.gate === "fail" || draft.decision === "skip") {
      rejected.push(draft);
    } else if (evaluation.gate === "needs-review" || draft.decision === "needs-review") {
      needsReview.push(draft);
    } else {
      accepted.push(draft);
    }
  }

  return { accepted, needsReview, rejected, issues };
}

export function promotedCards(
  catalog: Catalog,
  drafts: DraftUsageCard[],
  options: { acceptedOnly?: boolean } = {},
): UsageCard[] {
  const validation = validateDrafts(catalog, drafts);
  const promotable = options.acceptedOnly
    ? validation.accepted
    : [...validation.accepted, ...validation.needsReview];
  const existing = new Map(catalog.usageCards.map((card) => [card.repo.toLowerCase(), card]));
  for (const draft of promotable) {
    if (!existing.has(draft.card.repo.toLowerCase())) {
      existing.set(draft.card.repo.toLowerCase(), draft.card);
    }
  }
  return [...existing.values()].sort((a, b) => a.repo.localeCompare(b.repo));
}

export function writeDrafts(path: string, drafts: DraftUsageCard[]): void {
  writeFileSync(path, `${JSON.stringify(drafts, null, 2)}\n`);
}
