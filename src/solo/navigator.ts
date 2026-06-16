import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type ToolKind =
  | "skill"
  | "mcp"
  | "app"
  | "library"
  | "template"
  | "reference"
  | "plugin";
export type SetupDifficulty = "easy" | "medium" | "hard";
export type TimeToFirstValue = "5min" | "15min" | "30min" | "2h+";
export type UsageStatus = "candidate" | "verified" | "reference-only";

export interface UseCase {
  id: string;
  label: string;
  zh: string;
  keywords: string[];
}

export interface UsageCard {
  repo: string;
  kind: ToolKind;
  use_cases: string[];
  status: UsageStatus;
  setup_difficulty: SetupDifficulty;
  time_to_first_value: TimeToFirstValue;
  what_it_is: string;
  best_for: string[];
  not_for: string[];
  first_test: string;
  inputs: string[];
  outputs: string[];
  related_tools: string[];
  idea_prompts: string[];
  ideas?: {
    product?: string[];
    content?: string[];
    workflow?: string[];
  };
  minimum_demo?: string;
}

export interface StarRepo {
  full_name: string;
  description?: string | null;
  language?: string | null;
  topics?: string[];
  stargazers_count?: number;
  homepage?: string | null;
  archived?: boolean;
  pushed_at?: string | null;
  starred_at?: string | null;
}

export interface ManifestEntry {
  category: string;
  subcategory?: string | null;
  zh?: string;
}

export interface EvaluationCase {
  id: string;
  input: string;
  mode?: "find" | "ideas";
  filters?: BrowseFilters;
  expected_use_cases: string[];
  expected_terms: string[];
}

export interface Catalog {
  root: string;
  usageCards: UsageCard[];
  useCases: UseCase[];
  evaluationCases: EvaluationCase[];
  stars: StarRepo[];
  manifest: Record<string, ManifestEntry>;
  starsByRepo: Map<string, StarRepo>;
  manifestByRepo: Map<string, ManifestEntry>;
}

export interface ValidationResult {
  missingRepos: string[];
  unknownUseCases: string[];
  duplicateCards: string[];
}

export interface Recommendation {
  card: UsageCard;
  score: number;
  reason: string;
  first_test: string;
  matched_use_cases: string[];
}

export interface FindResult {
  query: string;
  inferredUseCases: string[];
  recommendations: Recommendation[];
}

export interface BrowseFilters {
  difficulty?: SetupDifficulty;
  kind?: ToolKind;
  status?: UsageStatus;
  time?: TimeToFirstValue;
  useCase?: string;
}

export interface IdeaResult {
  repo: string;
  product_ideas: string[];
  content_ideas: string[];
  workflow_ideas: string[];
  related_tools: string[];
  minimum_demo: string;
}

export interface EvaluatedCase {
  id: string;
  input: string;
  recommendations: Recommendation[];
  relevance: number;
  clarity: number;
  actionability: number;
  discovery_value: number;
  noise_control: number;
  totalScore: number;
}

export interface EvaluationReport {
  averageScore: number;
  cases: EvaluatedCase[];
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

const DIFFICULTY_SCORE: Record<SetupDifficulty, number> = {
  easy: 8,
  medium: 4,
  hard: -4,
};

const TIME_SCORE: Record<TimeToFirstValue, number> = {
  "5min": 8,
  "15min": 6,
  "30min": 3,
  "2h+": -4,
};

const TIME_ORDER: Record<TimeToFirstValue, number> = {
  "5min": 1,
  "15min": 2,
  "30min": 3,
  "2h+": 4,
};

const CATEGORY_USE_CASE_BONUS: Record<string, string[]> = {
  "browser-automation": ["browser-automation", "automation"],
  "crawler-publish": ["content", "growth", "browser-automation", "automation"],
  "ai-agents": ["agent-building", "automation"],
  "skills-mcp": ["agent-building", "automation"],
  "rag-kg-memory": ["knowledge-base", "research"],
  frontend: ["saas-building", "design"],
  "backend-infra": ["saas-building", "agent-building"],
  multimedia: ["design", "content"],
  "kb-productivity": ["knowledge-base", "personal-productivity"],
  "finance-career": ["finance", "growth"],
  tutorials: ["research"],
};

function readJson<T>(root: string, relativePath: string): T {
  const path = join(root, relativePath);
  if (!existsSync(path)) {
    throw new Error(`Missing required data file: ${relativePath}`);
  }
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

function normalizeRepo(input: string): string {
  return input
    .trim()
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/\.git$/i, "")
    .replace(/\/$/, "");
}

function normalizedText(value: unknown): string {
  if (Array.isArray(value)) return value.map(normalizedText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(normalizedText).join(" ");
  return String(value ?? "").toLowerCase();
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function repoSlug(repo: string): string {
  return repo.split("/").pop()?.toLowerCase() ?? repo.toLowerCase();
}

function isRecent(pushedAt?: string | null): boolean {
  if (!pushedAt) return false;
  const pushed = Date.parse(pushedAt);
  if (Number.isNaN(pushed)) return false;
  const days = (Date.now() - pushed) / (1000 * 60 * 60 * 24);
  return days <= 180;
}

export function loadCatalog(root = process.cwd()): Catalog {
  const usageCards = readJson<UsageCard[]>(root, "data/usage_cards.json");
  const useCases = readJson<UseCase[]>(root, "data/use_cases.json");
  const evaluationCases = readJson<EvaluationCase[]>(root, "data/evaluation_cases.json");
  const stars = readJson<StarRepo[]>(root, "data/stars.json");
  const manifest = readJson<Record<string, ManifestEntry>>(root, "data/manifest.json");

  return {
    root,
    usageCards,
    useCases,
    evaluationCases,
    stars,
    manifest,
    starsByRepo: new Map(stars.map((repo) => [repo.full_name.toLowerCase(), repo])),
    manifestByRepo: new Map(
      Object.entries(manifest).map(([repo, entry]) => [repo.toLowerCase(), entry]),
    ),
  };
}

export function validateCatalog(catalog: Catalog): ValidationResult {
  const knownUseCases = new Set(catalog.useCases.map((useCase) => useCase.id));
  const seen = new Set<string>();
  const missingRepos: string[] = [];
  const unknownUseCases: string[] = [];
  const duplicateCards: string[] = [];

  for (const card of catalog.usageCards) {
    const repoKey = card.repo.toLowerCase();
    if (seen.has(repoKey)) duplicateCards.push(card.repo);
    seen.add(repoKey);

    if (!catalog.starsByRepo.has(repoKey) && !catalog.manifestByRepo.has(repoKey)) {
      missingRepos.push(card.repo);
    }

    if (!VALID_KINDS.has(card.kind)) {
      unknownUseCases.push(`${card.repo}:invalid-kind:${card.kind}`);
    }

    for (const useCase of card.use_cases) {
      if (!knownUseCases.has(useCase)) {
        unknownUseCases.push(`${card.repo}:${useCase}`);
      }
    }
  }

  return {
    missingRepos: missingRepos.sort(),
    unknownUseCases: unknownUseCases.sort(),
    duplicateCards: duplicateCards.sort(),
  };
}

export function getCard(catalog: Catalog, repoInput: string): UsageCard {
  const repo = normalizeRepo(repoInput).toLowerCase();
  const card = catalog.usageCards.find((candidate) => candidate.repo.toLowerCase() === repo);
  if (!card) {
    throw new Error(`No usage card found for ${repoInput}`);
  }
  return card;
}

function inferUseCases(catalog: Catalog, query: string): string[] {
  const text = query.toLowerCase();
  const matches: string[] = [];

  for (const useCase of catalog.useCases) {
    const haystack = [useCase.id, useCase.label, useCase.zh, ...useCase.keywords]
      .join(" ")
      .toLowerCase();
    if (useCase.keywords.some((keyword) => text.includes(keyword.toLowerCase()))) {
      matches.push(useCase.id);
      continue;
    }
    if (text.includes(useCase.id) || text.includes(useCase.label.toLowerCase())) {
      matches.push(useCase.id);
      continue;
    }
    if (haystack.includes(text) && text.length > 1) {
      matches.push(useCase.id);
    }
  }

  if (text.includes("15") || text.includes("试") || text.includes("quick")) {
    matches.push("personal-productivity");
  }

  return unique(matches);
}

function cardSearchText(catalog: Catalog, card: UsageCard): string {
  const star = catalog.starsByRepo.get(card.repo.toLowerCase());
  const manifest = catalog.manifestByRepo.get(card.repo.toLowerCase());
  return normalizedText([
    card,
    star?.description,
    star?.topics,
    star?.language,
    manifest?.category,
    manifest?.subcategory,
    manifest?.zh,
  ]);
}

function keywordHits(query: string, searchText: string): number {
  const words = unique(
    query
      .toLowerCase()
      .split(/[\s,，。.!?？、/\\:：;；"'`()[\]{}<>|-]+/)
      .map((part) => part.trim())
      .filter((part) => part.length >= 2),
  );
  return words.filter((word) => searchText.includes(word)).length;
}

function scoreCard(
  catalog: Catalog,
  card: UsageCard,
  query: string,
  inferredUseCases: string[],
  filters: BrowseFilters = {},
): Recommendation {
  const star = catalog.starsByRepo.get(card.repo.toLowerCase());
  const manifest = catalog.manifestByRepo.get(card.repo.toLowerCase());
  const matchedUseCases = card.use_cases.filter((useCase) => inferredUseCases.includes(useCase));
  const searchText = cardSearchText(catalog, card);
  let score = 0;

  score += matchedUseCases.length * 40;
  score += keywordHits(query, searchText) * 8;
  score += DIFFICULTY_SCORE[card.setup_difficulty];
  score += TIME_SCORE[card.time_to_first_value];
  if (card.status === "verified") score += 6;
  if (card.status === "reference-only") score -= 6;
  if (star?.archived) score -= 30;
  if (isRecent(star?.pushed_at)) score += 3;
  score += Math.min(Math.log10((star?.stargazers_count ?? 0) + 1), 5);
  if (
    manifest?.category &&
    inferredUseCases.some((useCase) =>
      (CATEGORY_USE_CASE_BONUS[manifest.category] ?? []).includes(useCase),
    )
  ) {
    score += manifest.category === inferredUseCases[0] ? 18 : 10;
  }

  if (filters.time && TIME_ORDER[card.time_to_first_value] <= TIME_ORDER[filters.time]) score += 14;
  if (filters.difficulty && card.setup_difficulty === filters.difficulty) score += 10;
  if (filters.kind && card.kind === filters.kind) score += 10;
  if (filters.status && card.status === filters.status) score += 10;
  if (filters.useCase && card.use_cases.includes(filters.useCase)) score += 14;

  const categoryReason = manifest?.category ? `目录分类是 ${manifest.category}` : "已有 usage card";
  const useCaseReason =
    matchedUseCases.length > 0
      ? `命中场景 ${matchedUseCases.join(", ")}`
      : `适合 ${card.use_cases.slice(0, 2).join(", ")}`;
  const reason = `${useCaseReason}；${categoryReason}；${card.what_it_is}`;

  return {
    card,
    score,
    reason,
    first_test: card.first_test,
    matched_use_cases: matchedUseCases,
  };
}

export function findTools(
  catalog: Catalog,
  query: string,
  options: { limit?: number; filters?: BrowseFilters } = {},
): FindResult {
  const inferredUseCases = unique([
    ...inferUseCases(catalog, query),
    ...(options.filters?.useCase ? [options.filters.useCase] : []),
  ]);
  const limit = options.limit ?? 7;
  const filters = options.filters ?? {};

  const rankedRecommendations = catalog.usageCards
    .filter((card) => {
      if (filters.time && TIME_ORDER[card.time_to_first_value] > TIME_ORDER[filters.time]) return false;
      if (filters.difficulty && card.setup_difficulty !== filters.difficulty) return false;
      if (filters.kind && card.kind !== filters.kind) return false;
      if (filters.status && card.status !== filters.status) return false;
      if (filters.useCase && !card.use_cases.includes(filters.useCase)) return false;
      return true;
    })
    .map((card) => scoreCard(catalog, card, query, inferredUseCases, filters))
    .filter((recommendation) => recommendation.score > 0)
    .sort((a, b) => b.score - a.score);

  const seenSlugs = new Set<string>();
  const recommendations: Recommendation[] = [];
  for (const recommendation of rankedRecommendations) {
    const slug = repoSlug(recommendation.card.repo);
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    recommendations.push(recommendation);
    if (recommendations.length >= limit) break;
  }

  return { query, inferredUseCases, recommendations };
}

export function browseCards(catalog: Catalog, filters: BrowseFilters = {}): UsageCard[] {
  return catalog.usageCards
    .filter((card) => {
      if (filters.time && card.time_to_first_value !== filters.time) return false;
      if (filters.difficulty && card.setup_difficulty !== filters.difficulty) return false;
      if (filters.kind && card.kind !== filters.kind) return false;
      if (filters.status && card.status !== filters.status) return false;
      if (filters.useCase && !card.use_cases.includes(filters.useCase)) return false;
      return true;
    })
    .sort((a, b) => {
      const diff = TIME_ORDER[a.time_to_first_value] - TIME_ORDER[b.time_to_first_value];
      if (diff !== 0) return diff;
      return a.repo.localeCompare(b.repo);
    });
}

function deriveIdeas(card: UsageCard, type: "product" | "content" | "workflow", fallbackPrefix: string): string[] {
  const explicit = card.ideas?.[type] ?? [];
  const generated = card.idea_prompts.map((idea) => `${fallbackPrefix}${idea}`);
  return unique([...explicit, ...generated]);
}

export function generateIdeas(catalog: Catalog, repoInput: string): IdeaResult {
  const card = getCard(catalog, repoInput);
  const productIdeas = deriveIdeas(card, "product", "");
  const contentIdeas = deriveIdeas(card, "content", "内容选题：");
  const workflowIdeas = deriveIdeas(card, "workflow", "工作流：");

  while (productIdeas.length < 5) {
    productIdeas.push(`${card.best_for[0] ?? card.repo} 微型产品`);
  }
  while (contentIdeas.length < 5) {
    contentIdeas.push(`内容选题：如何用 ${card.repo} 做${card.best_for[0] ?? "一个小任务"}`);
  }
  while (workflowIdeas.length < 3) {
    workflowIdeas.push(`工作流：输入 ${card.inputs[0] ?? "目标"} -> 运行 ${card.repo} -> 输出 ${card.outputs[0] ?? "结果"}`);
  }

  return {
    repo: card.repo,
    product_ideas: productIdeas.slice(0, 5),
    content_ideas: contentIdeas.slice(0, 5),
    workflow_ideas: workflowIdeas.slice(0, 3),
    related_tools: card.related_tools,
    minimum_demo:
      card.minimum_demo ??
      `15 分钟：完成这个验证任务，确认是否值得继续投入：${card.first_test}`,
  };
}

function scoreCase(
  testCase: EvaluationCase,
  recommendations: Recommendation[],
  textForIdeas = "",
): EvaluatedCase {
  const allText = normalizedText([
    textForIdeas,
    recommendations.map((item) => [item.card.repo, item.reason, item.first_test, item.card.idea_prompts]),
  ]);
  const expectedUseCaseHits = testCase.expected_use_cases.filter((useCase) =>
    recommendations.some((item) => item.card.use_cases.includes(useCase)),
  ).length;
  const expectedTermHits = testCase.expected_terms.filter((term) =>
    allText.includes(term.toLowerCase()),
  ).length;

  const relevance = Math.min(5, Math.max(3, expectedUseCaseHits + Math.ceil(expectedTermHits / 2)));
  const clarity = recommendations.every((item) => item.reason.length > 20) ? 5 : 3;
  const actionability = recommendations.every((item) => item.first_test.includes("：")) ? 5 : 3;
  const discoveryValue = new Set(recommendations.flatMap((item) => item.card.use_cases)).size >= 2 ? 5 : 4;
  const noiseControl = recommendations.length >= 3 && recommendations.length <= 7 ? 5 : 2;
  const totalScore = relevance + clarity + actionability + discoveryValue + noiseControl;

  return {
    id: testCase.id,
    input: testCase.input,
    recommendations,
    relevance,
    clarity,
    actionability,
    discovery_value: discoveryValue,
    noise_control: noiseControl,
    totalScore,
  };
}

export function runEvaluationCases(catalog: Catalog): EvaluationReport {
  const cases = catalog.evaluationCases.map((testCase) => {
    if (testCase.mode === "ideas") {
      const ideas = generateIdeas(catalog, testCase.input);
      const query = [...ideas.product_ideas, ...ideas.content_ideas, ...ideas.workflow_ideas].join(" ");
      const recommendations = findTools(catalog, query, { limit: 5 }).recommendations;
      return scoreCase(testCase, recommendations, normalizedText(ideas));
    }

    const recommendations = findTools(catalog, testCase.input, {
      limit: 7,
      filters: testCase.filters,
    }).recommendations;
    return scoreCase(testCase, recommendations);
  });

  return {
    cases,
    averageScore:
      Math.round((cases.reduce((sum, item) => sum + item.totalScore, 0) / cases.length) * 10) / 10,
  };
}
