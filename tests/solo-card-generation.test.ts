import { describe, expect, test } from "bun:test";

import {
  auditCardCoverage,
  draftMissingCards,
  validateDrafts,
} from "../src/solo/cardGeneration";
import { loadCatalog } from "../src/solo/navigator";

describe("usage card generation pipeline", () => {
  test("audits manifest coverage and reports missing cards", () => {
    const catalog = loadCatalog();
    const audit = auditCardCoverage(catalog);

    expect(audit.manifestTotal).toBeGreaterThan(500);
    expect(audit.cardTotal).toBeGreaterThan(50);
    expect(audit.manifestMissing.length).toBeLessThanOrEqual(audit.manifestTotal);
    expect(audit.duplicateCards).toHaveLength(0);
    for (const mismatch of audit.repoKeyMismatches) {
      expect(mismatch.cardRepo).toBeTruthy();
      expect(mismatch.suggestedRepo).toBeTruthy();
      expect(mismatch.reason).toBeTruthy();
    }
  });

  test("drafts missing cards without claiming verified status", () => {
    const catalog = loadCatalog();
    const sampleRepos = Object.keys(catalog.manifest).slice(0, 12);
    const drafts = draftMissingCards(catalog, { repos: sampleRepos });

    expect(drafts).toHaveLength(12);
    for (const draft of drafts) {
      expect(draft.card.repo).toBeTruthy();
      expect(draft.card.status).not.toBe("verified");
      expect(draft.card.first_test).toContain("：");
      expect(draft.card.idea_prompts.length).toBeGreaterThanOrEqual(3);
      expect(draft.confidence).toBeGreaterThanOrEqual(0);
      expect(draft.confidence).toBeLessThanOrEqual(1);
      expect(draft.evidence).toBeTruthy();
    }
  });

  test("validates drafts and blocks unknown use cases or duplicate repos", () => {
    const catalog = loadCatalog();
    const [sampleRepo] = Object.keys(catalog.manifest);
    const [draft] = draftMissingCards(catalog, { repos: [sampleRepo] });
    const invalidDrafts = [
      draft,
      {
        ...draft,
        card: {
          ...draft.card,
          repo: draft.card.repo,
          use_cases: ["not-a-real-use-case"],
        },
      },
    ];

    const result = validateDrafts(catalog, invalidDrafts);

    expect(result.accepted.length).toBeGreaterThanOrEqual(0);
    expect(result.issues.some((issue) => issue.rule_id === "DRAFT_DUPLICATE_REPO")).toBe(true);
    expect(result.issues.some((issue) => issue.rule_id === "USECASE_UNKNOWN")).toBe(true);
  });
});
