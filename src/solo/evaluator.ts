import {
  runEvaluationCases,
  validateCatalog,
  type Catalog,
  type EvaluationReport,
  type SetupDifficulty,
  type TimeToFirstValue,
  type ToolKind,
  type UsageCard,
  type UsageStatus,
} from "./navigator";

export type IssueSeverity = "blocker" | "human" | "warning";
export type EvaluationGate = "pass" | "needs-review" | "fail";

export interface EvaluationIssue {
  severity: IssueSeverity;
  rule_id: string;
  repo: string;
  field: string;
  observed: string;
  expected: string;
  suggested_fix: string;
}

export interface CardEvaluation {
  repo: string;
  score: number;
  gate: EvaluationGate;
  recommended_status: UsageStatus | "needs-review";
  issues: EvaluationIssue[];
  human_attention: EvaluationIssue[];
  subscores: {
    structural: number;
    grounding: number;
    useCaseFit: number;
    actionability: number;
    ideaUsefulness: number;
    hygiene: number;
  };
}

export interface CoverageEvaluation {
  manifestTotal: number;
  starTotal: number;
  cardTotal: number;
  manifestCovered: number;
  manifestMissing: string[];
  manifestCoverageRate: number;
  byUseCase: Record<string, number>;
  byKind: Record<ToolKind, number>;
  byStatus: Record<UsageStatus, number>;
  byDifficulty: Record<SetupDifficulty, number>;
  byTime: Record<TimeToFirstValue, number>;
}

export interface CatalogQualityEvaluation {
  coverage: CoverageEvaluation;
  validation: ReturnType<typeof validateCatalog>;
  cardEvaluations: CardEvaluation[];
  blockerCount: number;
  humanAttentionCount: number;
  regression: EvaluationReport;
  gate: EvaluationGate;
}

const VALID_KINDS = new Set<ToolKind>([
  "skill",
  "mcp",
  "app",
  "library",
  "template",
  "reference",
  "plugin",
]);

const VALID_DIFFICULTIES = new Set<SetupDifficulty>(["easy", "medium", "hard"]);
const VALID_TIMES = new Set<TimeToFirstValue>(["5min", "15min", "30min", "2h+"]);
const VALID_STATUSES = new Set<UsageStatus>(["candidate", "verified", "reference-only"]);

function addIssue(
  issues: EvaluationIssue[],
  issue: Omit<EvaluationIssue, "observed" | "expected" | "suggested_fix"> & {
    observed?: string;
    expected?: string;
    suggested_fix?: string;
  },
): void {
  issues.push({
    observed: issue.observed ?? "",
    expected: issue.expected ?? "",
    suggested_fix: issue.suggested_fix ?? "",
    ...issue,
  });
}

function countBy<T extends string>(items: T[]): Record<T, number> {
  const counts = {} as Record<T, number>;
  for (const item of items) counts[item] = (counts[item] ?? 0) + 1;
  return counts;
}

function knownRepo(catalog: Catalog, repo: string): boolean {
  const key = repo.toLowerCase();
  return catalog.starsByRepo.has(key) || catalog.manifestByRepo.has(key);
}

function isGenericText(text: string): boolean {
  const normalized = text.trim().toLowerCase();
  if (normalized.length < 14) return true;
  return [
    "try it",
    "test it",
    "use it",
    "powerful ai tool",
    "ai tool",
    "暂无描述",
  ].some((phrase) => normalized === phrase || normalized.includes(`${phrase}.`));
}

function hasConcreteFirstTest(text: string): boolean {
  return (
    text.includes("：") &&
    (text.includes("测试") || text.toLowerCase().includes("test")) &&
    text.length >= 20
  );
}

function subscore(max: number, penalty: number): number {
  return Math.max(0, max - penalty);
}

export function assignRecommendedStatus(
  card: UsageCard,
  score: number,
  blockerCount: number,
): UsageStatus | "needs-review" {
  if (blockerCount > 0 || score < 60) return "needs-review";
  if (card.status === "reference-only" || score < 70) return "reference-only";
  if (score >= 85 && card.minimum_demo && card.status === "verified") return "verified";
  return "candidate";
}

export function evaluateCard(catalog: Catalog, card: UsageCard): CardEvaluation {
  const issues: EvaluationIssue[] = [];
  const knownUseCases = new Set(catalog.useCases.map((useCase) => useCase.id));
  const star = catalog.starsByRepo.get(card.repo.toLowerCase());

  if (!/^[^/\s]+\/[^/\s]+$/.test(card.repo)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "REPO_FORMAT_INVALID",
      repo: card.repo,
      field: "repo",
      observed: card.repo,
      expected: "owner/repo",
      suggested_fix: "Use the normalized GitHub owner/repo key.",
    });
  }

  if (!knownRepo(catalog, card.repo)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "REPO_UNKNOWN",
      repo: card.repo,
      field: "repo",
      observed: card.repo,
      expected: "Repo exists in data/stars.json or data/manifest.json",
      suggested_fix: "Add the repo metadata first or fix the repo key.",
    });
  }

  if (!VALID_KINDS.has(card.kind)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "KIND_UNKNOWN",
      repo: card.repo,
      field: "kind",
      observed: card.kind,
      expected: [...VALID_KINDS].join(", "),
      suggested_fix: "Use a supported tool kind.",
    });
  }

  if (!VALID_DIFFICULTIES.has(card.setup_difficulty)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "DIFFICULTY_UNKNOWN",
      repo: card.repo,
      field: "setup_difficulty",
      observed: card.setup_difficulty,
      expected: [...VALID_DIFFICULTIES].join(", "),
      suggested_fix: "Use a supported setup difficulty.",
    });
  }

  if (!VALID_TIMES.has(card.time_to_first_value)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "TIME_UNKNOWN",
      repo: card.repo,
      field: "time_to_first_value",
      observed: card.time_to_first_value,
      expected: [...VALID_TIMES].join(", "),
      suggested_fix: "Use a supported time bucket.",
    });
  }

  if (!VALID_STATUSES.has(card.status)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "STATUS_UNKNOWN",
      repo: card.repo,
      field: "status",
      observed: card.status,
      expected: [...VALID_STATUSES].join(", "),
      suggested_fix: "Use a supported usage status.",
    });
  }

  if (card.use_cases.length === 0 || card.use_cases.length > 4) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "USECASE_COUNT_INVALID",
      repo: card.repo,
      field: "use_cases",
      observed: String(card.use_cases.length),
      expected: "1-4 use cases",
      suggested_fix: "Keep only the strongest use cases.",
    });
  }

  for (const useCase of card.use_cases) {
    if (!knownUseCases.has(useCase)) {
      addIssue(issues, {
        severity: "blocker",
        rule_id: "USECASE_UNKNOWN",
        repo: card.repo,
        field: "use_cases",
        observed: useCase,
        expected: "Use case id exists in data/use_cases.json",
        suggested_fix: "Replace with a known use case.",
      });
    }
  }

  for (const field of ["what_it_is", "first_test"] as const) {
    if (isGenericText(card[field])) {
      addIssue(issues, {
        severity: field === "first_test" ? "blocker" : "human",
        rule_id: field === "first_test" ? "ACTION_GENERIC_FIRST_TEST" : "WHAT_IT_IS_GENERIC",
        repo: card.repo,
        field,
        observed: card[field],
        expected: "Specific, evidence-grounded text",
        suggested_fix: "Rewrite with the concrete task and expected output.",
      });
    }
  }

  if (!hasConcreteFirstTest(card.first_test)) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "ACTION_GENERIC_FIRST_TEST",
      repo: card.repo,
      field: "first_test",
      observed: card.first_test,
      expected: "A timeboxed test with a concrete input and observable output",
      suggested_fix: "Use the format '15 分钟测试：输入 X，输出 Y。'",
    });
  }

  if (card.not_for.length === 0) {
    addIssue(issues, {
      severity: "human",
      rule_id: "NOT_FOR_MISSING",
      repo: card.repo,
      field: "not_for",
      observed: "[]",
      expected: "At least one not-for case",
      suggested_fix: "Add a clear boundary so users do not overuse the tool.",
    });
  }

  if (card.idea_prompts.length < 3 || card.idea_prompts.some((idea) => idea.length < 6)) {
    addIssue(issues, {
      severity: "human",
      rule_id: "IDEA_PROMPTS_WEAK",
      repo: card.repo,
      field: "idea_prompts",
      observed: `${card.idea_prompts.length} prompts`,
      expected: "At least 3 specific prompts",
      suggested_fix: "Add product/content/workflow ideas specific to this repo.",
    });
  }

  for (const relatedTool of card.related_tools) {
    if (relatedTool.toLowerCase() === card.repo.toLowerCase()) {
      addIssue(issues, {
        severity: "blocker",
        rule_id: "SELF_RELATED_TOOL",
        repo: card.repo,
        field: "related_tools",
        observed: relatedTool,
        expected: "Related tools exclude the card repo",
        suggested_fix: "Remove the self-reference.",
      });
    } else if (!knownRepo(catalog, relatedTool)) {
      addIssue(issues, {
        severity: "warning",
        rule_id: "RELATED_TOOL_UNKNOWN",
        repo: card.repo,
        field: "related_tools",
        observed: relatedTool,
        expected: "Related tool exists in stars or manifest",
        suggested_fix: "Use a known repo or remove the relation.",
      });
    }
  }

  if (card.status === "verified" && !card.minimum_demo) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "VERIFIED_MISSING_MINIMUM_DEMO",
      repo: card.repo,
      field: "minimum_demo",
      observed: "",
      expected: "Verified cards include a reproducible minimum demo",
      suggested_fix: "Add minimum_demo or downgrade to candidate.",
    });
  }

  if (card.status === "verified" && star?.archived) {
    addIssue(issues, {
      severity: "blocker",
      rule_id: "STATUS_ARCHIVED_VERIFIED",
      repo: card.repo,
      field: "status",
      observed: "verified archived repo",
      expected: "Archived repos cannot be verified by default",
      suggested_fix: "Downgrade to reference-only or candidate with warning.",
    });
  }

  const structuralPenalty = issues.filter((issue) =>
    ["REPO_FORMAT_INVALID", "KIND_UNKNOWN", "DIFFICULTY_UNKNOWN", "TIME_UNKNOWN", "STATUS_UNKNOWN"].includes(
      issue.rule_id,
    ),
  ).length * 8;
  const groundingPenalty = issues.filter((issue) =>
    ["REPO_UNKNOWN", "WHAT_IT_IS_GENERIC"].includes(issue.rule_id),
  ).length * 10;
  const useCasePenalty = issues.filter((issue) =>
    ["USECASE_UNKNOWN", "USECASE_COUNT_INVALID"].includes(issue.rule_id),
  ).length * 10;
  const actionPenalty = issues.filter((issue) => issue.rule_id === "ACTION_GENERIC_FIRST_TEST").length * 8;
  const ideaPenalty = issues.filter((issue) =>
    ["IDEA_PROMPTS_WEAK", "NOT_FOR_MISSING"].includes(issue.rule_id),
  ).length * 5;
  const hygienePenalty = issues.filter((issue) =>
    ["SELF_RELATED_TOOL", "RELATED_TOOL_UNKNOWN", "VERIFIED_MISSING_MINIMUM_DEMO", "STATUS_ARCHIVED_VERIFIED"].includes(
      issue.rule_id,
    ),
  ).length * 5;

  const subscores = {
    structural: subscore(20, structuralPenalty),
    grounding: subscore(20, groundingPenalty),
    useCaseFit: subscore(20, useCasePenalty),
    actionability: subscore(15, actionPenalty),
    ideaUsefulness: subscore(15, ideaPenalty),
    hygiene: subscore(10, hygienePenalty),
  };
  const score = Object.values(subscores).reduce((sum, value) => sum + value, 0);
  const blockerCount = issues.filter((issue) => issue.severity === "blocker").length;
  const humanAttention = issues.filter((issue) => issue.severity !== "warning");
  const gate: EvaluationGate = blockerCount > 0 ? "fail" : humanAttention.length > 0 ? "needs-review" : "pass";

  return {
    repo: card.repo,
    score,
    gate,
    recommended_status: assignRecommendedStatus(card, score, blockerCount),
    issues,
    human_attention: humanAttention,
    subscores,
  };
}

export function evaluateCoverage(catalog: Catalog): CoverageEvaluation {
  const cardRepos = new Set(catalog.usageCards.map((card) => card.repo.toLowerCase()));
  const manifestRepos = Object.keys(catalog.manifest);
  const manifestMissing = manifestRepos
    .filter((repo) => !cardRepos.has(repo.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
  const manifestCovered = manifestRepos.length - manifestMissing.length;

  return {
    manifestTotal: manifestRepos.length,
    starTotal: catalog.stars.length,
    cardTotal: catalog.usageCards.length,
    manifestCovered,
    manifestMissing,
    manifestCoverageRate: manifestRepos.length === 0 ? 1 : manifestCovered / manifestRepos.length,
    byUseCase: countBy(catalog.usageCards.flatMap((card) => card.use_cases)),
    byKind: countBy(catalog.usageCards.map((card) => card.kind)),
    byStatus: countBy(catalog.usageCards.map((card) => card.status)),
    byDifficulty: countBy(catalog.usageCards.map((card) => card.setup_difficulty)),
    byTime: countBy(catalog.usageCards.map((card) => card.time_to_first_value)),
  };
}

export function evaluateCatalogQuality(catalog: Catalog): CatalogQualityEvaluation {
  const validation = validateCatalog(catalog);
  const coverage = evaluateCoverage(catalog);
  const cardEvaluations = catalog.usageCards.map((card) => evaluateCard(catalog, card));
  const blockerCount =
    validation.missingRepos.length +
    validation.duplicateCards.length +
    validation.unknownUseCases.length +
    cardEvaluations.reduce(
      (sum, item) => sum + item.issues.filter((issue) => issue.severity === "blocker").length,
      0,
    );
  const humanAttentionCount = cardEvaluations.reduce(
    (sum, item) => sum + item.human_attention.length,
    0,
  );
  const regression = runEvaluationCases(catalog);
  const regressionFail =
    regression.averageScore < 23 || regression.cases.some((item) => item.totalScore < 22);
  const gate: EvaluationGate =
    blockerCount > 0 || regressionFail ? "fail" : humanAttentionCount > 0 ? "needs-review" : "pass";

  return {
    coverage,
    validation,
    cardEvaluations,
    blockerCount,
    humanAttentionCount,
    regression,
    gate,
  };
}
