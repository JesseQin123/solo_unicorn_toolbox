#!/usr/bin/env bun
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import {
  auditCardCoverage,
  draftMissingCards,
  promotedCards,
  validateDrafts,
  writeDrafts,
  type DraftUsageCard,
} from "./cardGeneration";
import {
  evaluateCard,
  evaluateCatalogQuality,
  evaluateCoverage,
} from "./evaluator";
import {
  browseCards,
  findTools,
  generateIdeas,
  getCard,
  loadCatalog,
  runEvaluationCases,
  type BrowseFilters,
} from "./navigator";

function printHelp(): void {
  console.log(`Solo Toolbox Navigator

Usage:
  solo card <repo>
  solo find "<idea>"
  solo ideas <repo>
  solo browse [--time 15min] [--difficulty easy] [--kind skill] [--use-case content] [--status verified]
  solo eval
  solo eval --quality
  solo eval --coverage
  solo eval --card <repo> [--json]
  solo cards coverage
  solo cards missing [--limit 50]
  solo cards draft [--limit 50] [--category skills-mcp] [--out data/usage_card_drafts.json]
  solo cards validate [--draft data/usage_card_drafts.json]
  solo cards promote [--draft data/usage_card_drafts.json] [--accepted-only]
`);
}

function parseFilters(args: string[]): BrowseFilters {
  const filters: BrowseFilters = {};
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];
    if (arg === "--time" && next) {
      filters.time = next as BrowseFilters["time"];
      index += 1;
    } else if (arg === "--difficulty" && next) {
      filters.difficulty = next as BrowseFilters["difficulty"];
      index += 1;
    } else if (arg === "--kind" && next) {
      filters.kind = next as BrowseFilters["kind"];
      index += 1;
    } else if (arg === "--use-case" && next) {
      filters.useCase = next;
      index += 1;
    } else if (arg === "--status" && next) {
      filters.status = next as BrowseFilters["status"];
      index += 1;
    }
  }
  return filters;
}

function optionValue(args: string[], name: string, fallback?: string): string | undefined {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

function hasFlag(args: string[], name: string): boolean {
  return args.includes(name);
}

function loadDrafts(root: string, path = "data/usage_card_drafts.json"): DraftUsageCard[] {
  const fullPath = join(root, path);
  if (!existsSync(fullPath)) {
    throw new Error(`Draft file not found: ${path}`);
  }
  return JSON.parse(readFileSync(fullPath, "utf8")) as DraftUsageCard[];
}

function printCard(repo: string): void {
  const catalog = loadCatalog();
  const card = getCard(catalog, repo);
  console.log(`# ${card.repo}`);
  console.log(`类型：${card.kind} · 难度：${card.setup_difficulty} · 首次价值：${card.time_to_first_value} · 状态：${card.status}`);
  console.log(`\n它是什么：${card.what_it_is}`);
  console.log(`\n适合：${card.best_for.join("、")}`);
  console.log(`不适合：${card.not_for.join("、")}`);
  console.log(`\n最快验证：${card.first_test}`);
  console.log(`输入：${card.inputs.join("、")}`);
  console.log(`输出：${card.outputs.join("、")}`);
  console.log(`相关工具：${card.related_tools.join("、")}`);
  console.log(`\n可启发 idea：`);
  for (const idea of card.idea_prompts) console.log(`- ${idea}`);
}

function printFind(query: string, filters: BrowseFilters = {}): void {
  const catalog = loadCatalog();
  const result = findTools(catalog, query, { filters });
  console.log(`# 推荐工具组合`);
  console.log(`目标：${result.query}`);
  if (result.inferredUseCases.length > 0) {
    console.log(`识别场景：${result.inferredUseCases.join(", ")}`);
  }
  console.log("");
  result.recommendations.forEach((recommendation, index) => {
    const card = recommendation.card;
    console.log(`${index + 1}. ${card.repo} (${card.kind}, ${card.setup_difficulty}, ${card.time_to_first_value})`);
    console.log(`   为什么：${recommendation.reason}`);
    console.log(`   先试：${recommendation.first_test}`);
  });
}

function printIdeas(repo: string): void {
  const catalog = loadCatalog();
  const ideas = generateIdeas(catalog, repo);
  console.log(`# ${ideas.repo} 可以怎么用`);
  console.log(`\n产品 idea：`);
  for (const idea of ideas.product_ideas) console.log(`- ${idea}`);
  console.log(`\n内容 idea：`);
  for (const idea of ideas.content_ideas) console.log(`- ${idea}`);
  console.log(`\n自动化 workflow idea：`);
  for (const idea of ideas.workflow_ideas) console.log(`- ${idea}`);
  console.log(`\n相关工具：${ideas.related_tools.join("、")}`);
  console.log(`最小验证：${ideas.minimum_demo}`);
}

function printBrowse(args: string[]): void {
  const catalog = loadCatalog();
  const filters = parseFilters(args);
  const cards = browseCards(catalog, filters);
  console.log(`# Browse results (${cards.length})`);
  for (const card of cards.slice(0, 30)) {
    console.log(`- ${card.repo} · ${card.kind} · ${card.setup_difficulty} · ${card.time_to_first_value} · ${card.status}`);
    console.log(`  ${card.what_it_is}`);
    console.log(`  先试：${card.first_test}`);
  }
}

function printEval(): void {
  const catalog = loadCatalog();
  const report = runEvaluationCases(catalog);
  console.log(`# Evaluation Report`);
  console.log(`Average score: ${report.averageScore}/25\n`);
  for (const item of report.cases) {
    console.log(`- ${item.id}: ${item.totalScore}/25 (${item.recommendations.length} recommendations)`);
    console.log(`  ${item.recommendations.map((recommendation) => recommendation.card.repo).join(", ")}`);
  }
}

function printEvalCommand(args: string[]): void {
  const catalog = loadCatalog();
  if (hasFlag(args, "--coverage")) {
    const coverage = evaluateCoverage(catalog);
    console.log(`# Coverage`);
    console.log(`manifest: ${coverage.manifestTotal}`);
    console.log(`stars: ${coverage.starTotal}`);
    console.log(`cards: ${coverage.cardTotal}`);
    console.log(`manifest covered: ${coverage.manifestCovered}`);
    console.log(`manifest missing: ${coverage.manifestMissing.length}`);
    console.log(`manifest coverage rate: ${(coverage.manifestCoverageRate * 100).toFixed(1)}%`);
    console.log(`\nby status: ${JSON.stringify(coverage.byStatus)}`);
    console.log(`by kind: ${JSON.stringify(coverage.byKind)}`);
    console.log(`by use case: ${JSON.stringify(coverage.byUseCase)}`);
    return;
  }

  if (hasFlag(args, "--quality")) {
    const quality = evaluateCatalogQuality(catalog);
    console.log(`# Catalog Quality`);
    console.log(`gate: ${quality.gate}`);
    console.log(`blockers: ${quality.blockerCount}`);
    console.log(`human attention: ${quality.humanAttentionCount}`);
    console.log(`recommendation eval: ${quality.regression.averageScore}/25`);
    console.log(`coverage: ${(quality.coverage.manifestCoverageRate * 100).toFixed(1)}%`);
    if (quality.validation.missingRepos.length > 0) {
      console.log(`unknown card repos: ${quality.validation.missingRepos.join(", ")}`);
    }
    if (quality.validation.duplicateCards.length > 0) {
      console.log(`duplicate cards: ${quality.validation.duplicateCards.join(", ")}`);
    }
    if (quality.validation.unknownUseCases.length > 0) {
      console.log(`unknown use cases: ${quality.validation.unknownUseCases.join(", ")}`);
    }
    if (quality.gate === "fail") process.exitCode = 1;
    return;
  }

  const cardRepo = optionValue(args, "--card");
  if (cardRepo) {
    const result = evaluateCard(catalog, getCard(catalog, cardRepo));
    if (hasFlag(args, "--json")) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(`# Card Quality: ${result.repo}`);
      console.log(`gate: ${result.gate}`);
      console.log(`score: ${result.score}/100`);
      console.log(`recommended status: ${result.recommended_status}`);
      for (const issue of result.issues) {
        console.log(`- [${issue.severity}] ${issue.rule_id} ${issue.field}: ${issue.suggested_fix}`);
      }
    }
    if (result.gate === "fail") process.exitCode = 1;
    return;
  }

  printEval();
}

function printCardsCommand(args: string[]): void {
  const [subcommand = "coverage", ...rest] = args;
  const catalog = loadCatalog();
  const audit = auditCardCoverage(catalog);

  if (subcommand === "coverage") {
    console.log(`# Usage Card Coverage`);
    console.log(`manifest repos: ${audit.manifestTotal}`);
    console.log(`star repos: ${audit.starTotal}`);
    console.log(`usage cards: ${audit.cardTotal}`);
    console.log(`missing manifest cards: ${audit.manifestMissing.length}`);
    console.log(`missing star cards: ${audit.starMissing.length}`);
    console.log(`duplicate cards: ${audit.duplicateCards.length}`);
    console.log(`repo key mismatches: ${audit.repoKeyMismatches.length}`);
    for (const mismatch of audit.repoKeyMismatches.slice(0, 10)) {
      console.log(`- ${mismatch.cardRepo} -> maybe ${mismatch.suggestedRepo} (${mismatch.reason})`);
    }
    return;
  }

  if (subcommand === "missing") {
    const limit = Number(optionValue(rest, "--limit", "50"));
    console.log(`# Missing usage cards (${audit.manifestMissing.length})`);
    for (const repo of audit.manifestMissing.slice(0, Number.isFinite(limit) ? limit : 50)) {
      console.log(`- ${repo}`);
    }
    return;
  }

  if (subcommand === "draft") {
    const limit = Number(optionValue(rest, "--limit", "50"));
    const category = optionValue(rest, "--category");
    const out = optionValue(rest, "--out", "data/usage_card_drafts.json")!;
    const drafts = draftMissingCards(catalog, {
      limit: Number.isFinite(limit) ? limit : 50,
      category,
    });
    writeDrafts(join(catalog.root, out), drafts);
    const validation = validateDrafts(catalog, drafts);
    console.log(`# Drafted ${drafts.length} usage cards`);
    console.log(`out: ${out}`);
    console.log(`accepted: ${validation.accepted.length}`);
    console.log(`needs review: ${validation.needsReview.length}`);
    console.log(`rejected: ${validation.rejected.length}`);
    return;
  }

  if (subcommand === "validate") {
    const draftPath = optionValue(rest, "--draft", "data/usage_card_drafts.json")!;
    const drafts = loadDrafts(catalog.root, draftPath);
    const validation = validateDrafts(catalog, drafts);
    console.log(`# Draft Validation`);
    console.log(`drafts: ${drafts.length}`);
    console.log(`accepted: ${validation.accepted.length}`);
    console.log(`needs review: ${validation.needsReview.length}`);
    console.log(`rejected: ${validation.rejected.length}`);
    for (const issue of validation.issues.slice(0, 30)) {
      console.log(`- [${issue.severity}] ${issue.repo} ${issue.rule_id}: ${issue.suggested_fix}`);
    }
    if (validation.rejected.length > 0) process.exitCode = 1;
    return;
  }

  if (subcommand === "promote") {
    const draftPath = optionValue(rest, "--draft", "data/usage_card_drafts.json")!;
    const acceptedOnly = hasFlag(rest, "--accepted-only");
    const drafts = loadDrafts(catalog.root, draftPath);
    const nextCards = promotedCards(catalog, drafts, { acceptedOnly });
    writeFileSync(join(catalog.root, "data/usage_cards.json"), `${JSON.stringify(nextCards, null, 2)}\n`);
    console.log(`# Promoted usage cards`);
    console.log(`before: ${catalog.usageCards.length}`);
    console.log(`after: ${nextCards.length}`);
    console.log(`mode: ${acceptedOnly ? "accepted-only" : "accepted + needs-review"}`);
    return;
  }

  throw new Error(`Unknown cards subcommand: ${subcommand}`);
}

function main(): void {
  const [, , command, ...args] = process.argv;
  try {
    if (!command || command === "help" || command === "--help" || command === "-h") {
      printHelp();
    } else if (command === "card") {
      if (!args[0]) throw new Error("Usage: solo card <repo>");
      printCard(args[0]);
    } else if (command === "find") {
      if (!args[0]) throw new Error('Usage: solo find "<idea>"');
      printFind(args.join(" "));
    } else if (command === "ideas") {
      if (!args[0]) throw new Error("Usage: solo ideas <repo>");
      printIdeas(args[0]);
    } else if (command === "browse") {
      printBrowse(args);
    } else if (command === "eval") {
      printEvalCommand(args);
    } else if (command === "cards") {
      printCardsCommand(args);
    } else {
      throw new Error(`Unknown command: ${command}`);
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
