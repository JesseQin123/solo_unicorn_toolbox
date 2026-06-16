import { describe, expect, test } from "bun:test";

import {
  browseCards,
  findTools,
  generateIdeas,
  getCard,
  loadCatalog,
  runEvaluationCases,
  validateCatalog,
} from "../src/solo/navigator";

describe("Solo Toolbox Navigator catalog", () => {
  test("loads usage cards, use cases, and evaluation cases", () => {
    const catalog = loadCatalog();
    const validation = validateCatalog(catalog);

    expect(catalog.usageCards.length).toBeGreaterThanOrEqual(50);
    expect(catalog.useCases.length).toBeGreaterThanOrEqual(10);
    expect(catalog.evaluationCases).toHaveLength(8);
    expect(validation.missingRepos).toEqual([]);
    expect(validation.unknownUseCases).toEqual([]);
    expect(validation.duplicateCards).toEqual([]);
  });

  test("shows a usage card with a first test and idea prompts", () => {
    const catalog = loadCatalog();
    const card = getCard(catalog, "ALwrity/ALwrity");

    expect(card.repo).toBe("ALwrity/ALwrity");
    expect(card.kind).toBe("app");
    expect(card.use_cases).toContain("content");
    expect(card.use_cases).toContain("growth");
    expect(card.first_test).toContain("内容");
    expect(card.related_tools).toContain("orange2ai/renwei-writing");
    expect(card.idea_prompts.length).toBeGreaterThanOrEqual(3);
  });
});

describe("Solo Toolbox Navigator recommendations", () => {
  test("finds a compact tool stack for a content-growth idea", () => {
    const catalog = loadCatalog();
    const result = findTools(catalog, "我想做一个 AI 内容增长系统");
    const repos = result.recommendations.map((item) => item.card.repo);
    const repoSlugs = repos.map((repo) => repo.split("/").pop()?.toLowerCase());

    expect(result.query).toBe("我想做一个 AI 内容增长系统");
    expect(result.recommendations.length).toBeGreaterThanOrEqual(3);
    expect(result.recommendations.length).toBeLessThanOrEqual(7);
    expect(new Set(repoSlugs).size).toBe(repoSlugs.length);
    expect(repoSlugs).toContain("alwrity");
    expect(repos).toContain("orange2ai/renwei-writing");
    for (const recommendation of result.recommendations) {
      expect(recommendation.reason.length).toBeGreaterThan(10);
      expect(recommendation.first_test.length).toBeGreaterThan(10);
      expect(recommendation.score).toBeGreaterThan(0);
    }
  });

  test("generates product, content, and workflow ideas for a tool", () => {
    const catalog = loadCatalog();
    const ideas = generateIdeas(catalog, "ALwrity/ALwrity");

    expect(ideas.repo).toBe("ALwrity/ALwrity");
    expect(ideas.product_ideas.length).toBeGreaterThanOrEqual(5);
    expect(ideas.content_ideas.length).toBeGreaterThanOrEqual(5);
    expect(ideas.workflow_ideas.length).toBeGreaterThanOrEqual(3);
    expect(ideas.minimum_demo).toContain("15");
    expect(ideas.related_tools).toContain("orange2ai/renwei-writing");
  });

  test("browses by real usage cost and use case", () => {
    const catalog = loadCatalog();
    const results = browseCards(catalog, {
      difficulty: "easy",
      kind: "skill",
      status: "verified",
      time: "15min",
      useCase: "content",
    });

    expect(results.length).toBeGreaterThan(0);
    for (const card of results) {
      expect(card.setup_difficulty).toBe("easy");
      expect(card.kind).toBe("skill");
      expect(card.status).toBe("verified");
      expect(card.time_to_first_value).toBe("15min");
      expect(card.use_cases).toContain("content");
    }
  });

  test("evaluation cases produce actionable, low-noise recommendations", () => {
    const catalog = loadCatalog();
    const report = runEvaluationCases(catalog);

    expect(report.cases).toHaveLength(8);
    expect(report.averageScore).toBeGreaterThanOrEqual(20);
    for (const evaluatedCase of report.cases) {
      expect(evaluatedCase.recommendations.length).toBeGreaterThanOrEqual(3);
      expect(evaluatedCase.recommendations.length).toBeLessThanOrEqual(7);
      expect(evaluatedCase.totalScore).toBeGreaterThanOrEqual(20);
      for (const recommendation of evaluatedCase.recommendations) {
        expect(recommendation.card.repo).toBeTruthy();
        expect(recommendation.first_test).toContain("：");
      }
    }
  });
});
