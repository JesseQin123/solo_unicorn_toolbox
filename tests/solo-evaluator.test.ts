import { describe, expect, test } from "bun:test";

import {
  evaluateCard,
  evaluateCatalogQuality,
  evaluateCoverage,
} from "../src/solo/evaluator";
import { getCard, loadCatalog, type UsageCard } from "../src/solo/navigator";

describe("usage card evaluator", () => {
  test("passes a strong existing usage card", () => {
    const catalog = loadCatalog();
    const card = getCard(catalog, "ALwrity/ALwrity");
    const result = evaluateCard(catalog, card);

    expect(result.score).toBeGreaterThanOrEqual(70);
    expect(result.gate).not.toBe("fail");
    expect(result.issues.some((issue) => issue.severity === "blocker")).toBe(false);
  });

  test("flags unknown repo, unknown use case, self-related tool, and generic first test", () => {
    const catalog = loadCatalog();
    const badCard: UsageCard = {
      repo: "missing-owner/missing-repo",
      kind: "app",
      use_cases: ["fake-use-case"],
      status: "candidate",
      setup_difficulty: "easy",
      time_to_first_value: "15min",
      what_it_is: "A powerful AI tool.",
      best_for: ["AI"],
      not_for: [],
      first_test: "Try it.",
      inputs: [],
      outputs: [],
      related_tools: ["missing-owner/missing-repo"],
      idea_prompts: ["AI tool"],
    };

    const result = evaluateCard(catalog, badCard);
    const ruleIds = result.issues.map((issue) => issue.rule_id);

    expect(result.gate).toBe("fail");
    expect(ruleIds).toContain("REPO_UNKNOWN");
    expect(ruleIds).toContain("USECASE_UNKNOWN");
    expect(ruleIds).toContain("SELF_RELATED_TOOL");
    expect(ruleIds).toContain("ACTION_GENERIC_FIRST_TEST");
    expect(ruleIds).toContain("IDEA_PROMPTS_WEAK");
  });

  test("blocks archived or unproven cards from verified status", () => {
    const catalog = loadCatalog();
    const card: UsageCard = {
      ...getCard(catalog, "ALwrity/ALwrity"),
      repo: "AntonOsika/gpt-engineer",
      status: "verified",
      minimum_demo: undefined,
    };

    const result = evaluateCard(catalog, card);
    const ruleIds = result.issues.map((issue) => issue.rule_id);

    expect(result.gate).toBe("fail");
    expect(ruleIds).toContain("STATUS_ARCHIVED_VERIFIED");
    expect(ruleIds).toContain("VERIFIED_MISSING_MINIMUM_DEMO");
  });

  test("reports coverage and catalog quality without recommendation regression", () => {
    const catalog = loadCatalog();
    const coverage = evaluateCoverage(catalog);
    const quality = evaluateCatalogQuality(catalog);

    expect(coverage.manifestTotal).toBeGreaterThan(500);
    expect(coverage.manifestCoverageRate).toBeGreaterThan(0);
    expect(coverage.manifestCoverageRate).toBeLessThanOrEqual(1);
    expect(quality.regression.averageScore).toBeGreaterThanOrEqual(23);
    expect(quality.regression.cases.every((item) => item.totalScore >= 22)).toBe(true);
  });
});
