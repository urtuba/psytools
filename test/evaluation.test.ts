import { test } from "node:test";
import assert from "node:assert/strict";
import {
  Assessment,
  PsytoolsError,
  evaluate,
  inventories,
  type Evaluator,
} from "../src/index.ts";

test("PHQ-9: sums, bands, and the item-9 suicidality flag", () => {
  const assessment = new Assessment(inventories["phq9"]!);

  const mild = assessment.createResponse().answerAll(Array(9).fill(1)).submit();
  const result = assessment.evaluate(mild);
  assert.equal(result.kind, "scale");
  if (result.kind !== "scale") return;
  assert.equal(result.score, 9);
  assert.equal(result.min, 0);
  assert.equal(result.max, 27);
  assert.equal(result.band?.id, "mild");
  assert.equal(result.flags.length, 1);
  assert.equal(result.flags[0]?.id, "suicidality");
  assert.equal(result.flags[0]?.questionId, "phq9-9");

  const severeNoFlag = assessment.evaluate({
    ...Object.fromEntries(Array.from({ length: 8 }, (_, i) => [`phq9-${i + 1}`, 3])),
    "phq9-9": 0,
  });
  if (severeNoFlag.kind !== "scale") return assert.fail();
  assert.equal(severeNoFlag.score, 24);
  assert.equal(severeNoFlag.band?.id, "severe");
  assert.equal(severeNoFlag.flags.length, 0);
});

test("GAD-7: severity bands match published cutoffs", () => {
  const assessment = new Assessment(inventories["gad7"]!);
  const expectations: Array<[number, string]> = [
    [0, "minimal"], [4, "minimal"], [5, "mild"], [9, "mild"],
    [10, "moderate"], [14, "moderate"], [15, "severe"], [21, "severe"],
  ];

  for (const [target, bandId] of expectations) {
    // Distribute the target score over items (values 0-3 each).
    const answers: Record<string, number> = {};
    let remaining = target;
    for (let i = 1; i <= 7; i++) {
      const value = Math.min(3, remaining);
      answers[`gad7-${i}`] = value;
      remaining -= value;
    }
    const result = assessment.evaluate(answers);
    if (result.kind !== "scale") return assert.fail();
    assert.equal(result.score, target);
    assert.equal(result.band?.id, bandId, `score ${target} should be "${bandId}"`);
  }
});

test("DASS-21: subscale sums are doubled and banded independently", () => {
  const assessment = new Assessment(inventories["dass21"]!);
  const response = assessment.createResponse().answerAll(Array(21).fill(1)).submit();

  const result = assessment.evaluate(response);
  assert.equal(result.kind, "multiscale");
  if (result.kind !== "multiscale") return;
  assert.equal(result.scales.length, 3);

  const byId = Object.fromEntries(result.scales.map((scale) => [scale.id, scale]));
  // 7 items x 1 point x multiplier 2 = 14 per subscale.
  assert.equal(byId["depression"]?.score, 14);
  assert.equal(byId["anxiety"]?.score, 14);
  assert.equal(byId["stress"]?.score, 14);
  assert.equal(byId["depression"]?.max, 42);

  // Same score, different cutoffs per subscale.
  assert.equal(byId["depression"]?.band?.id, "moderate");
  assert.equal(byId["anxiety"]?.band?.id, "moderate");
  assert.equal(byId["stress"]?.band?.id, "normal");
});

test("sum scoring applies an optional multiplier to score and range", () => {
  const assessment = new Assessment({
    id: "mult",
    title: { en: "Multiplied" },
    defaultLocale: "en",
    options: [
      { value: 0, label: { en: "0" } },
      { value: 5, label: { en: "5" } },
    ],
    questions: [
      { id: "q1", text: { en: "One" } },
      { id: "q2", text: { en: "Two" } },
    ],
    scoring: { kind: "sum", multiplier: 4 },
  });

  const result = assessment.evaluate({ q1: 5, q2: 0 });
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 20);
  assert.equal(result.min, 0);
  assert.equal(result.max, 40);
});

test("WHO-5: raw sum is reported as a 0-100 percentage with well-being bands", () => {
  const assessment = new Assessment(inventories["who5"]!);

  const good = assessment.evaluate({ "who5-1": 3, "who5-2": 3, "who5-3": 3, "who5-4": 3, "who5-5": 3 });
  if (good.kind !== "scale") return assert.fail();
  assert.equal(good.score, 60); // raw 15 x 4
  assert.equal(good.max, 100);
  assert.equal(good.band?.id, "good");

  const low = assessment.evaluate({ "who5-1": 1, "who5-2": 1, "who5-3": 1, "who5-4": 1, "who5-5": 1 });
  if (low.kind !== "scale") return assert.fail();
  assert.equal(low.score, 20);
  assert.equal(low.band?.id, "low");

  const reduced = assessment.evaluate({ "who5-1": 2, "who5-2": 2, "who5-3": 2, "who5-4": 2, "who5-5": 2 });
  if (reduced.kind !== "scale") return assert.fail();
  assert.equal(reduced.score, 40);
  assert.equal(reduced.band?.id, "reduced");
});

test("reverse-scored questions are inverted against their scale", () => {
  const assessment = new Assessment({
    id: "rev",
    title: { en: "Reverse" },
    defaultLocale: "en",
    options: [
      { value: 0, label: { en: "0" } },
      { value: 1, label: { en: "1" } },
      { value: 2, label: { en: "2" } },
      { value: 3, label: { en: "3" } },
    ],
    questions: [
      { id: "q1", text: { en: "Straight" } },
      { id: "q2", text: { en: "Reversed" }, reverseScored: true },
    ],
    scoring: { kind: "sum" },
  });

  const result = assessment.evaluate({ q1: 3, q2: 3 });
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 3); // 3 + (3 - 3)
});

test("ASRS-6: items 1-3 screen positive from Sometimes, 4-6 from Often; 4+ is positive", () => {
  const assessment = new Assessment(inventories["asrs6"]!);

  // Items 1-3 at Sometimes (2) count; item 4 at Sometimes does not.
  const negative = assessment.evaluate({
    "asrs6-1": 2, "asrs6-2": 2, "asrs6-3": 2, "asrs6-4": 2, "asrs6-5": 0, "asrs6-6": 0,
  });
  if (negative.kind !== "scale") return assert.fail();
  assert.equal(negative.score, 3);
  assert.equal(negative.max, 6);
  assert.equal(negative.band?.id, "negative");

  // Item 4 at Often (3) tips the count to 4 -> positive screen.
  const positive = assessment.evaluate({
    "asrs6-1": 2, "asrs6-2": 2, "asrs6-3": 2, "asrs6-4": 3, "asrs6-5": 0, "asrs6-6": 0,
  });
  if (positive.kind !== "scale") return assert.fail();
  assert.equal(positive.score, 4);
  assert.equal(positive.band?.id, "positive");
});

test("Mini-IPIP: five trait subscales with reverse-keyed items on a 1-5 scale", () => {
  const assessment = new Assessment(inventories["mini-ipip"]!);

  // Answer "Very accurate" (5) to everything: positively keyed items score
  // 5, reverse-keyed items score 6 - 5 = 1.
  const result = assessment.evaluate(
    Object.fromEntries(assessment.questions.map((q) => [q.id, 5])),
  );
  assert.equal(result.kind, "multiscale");
  if (result.kind !== "multiscale") return;
  assert.equal(result.scales.length, 5);

  const byId = Object.fromEntries(result.scales.map((scale) => [scale.id, scale]));
  for (const trait of ["extraversion", "agreeableness", "conscientiousness", "neuroticism"]) {
    // 2 positive + 2 reverse items: 5 + 5 + 1 + 1.
    assert.equal(byId[trait]?.score, 12, trait);
    assert.equal(byId[trait]?.min, 4, trait);
    assert.equal(byId[trait]?.max, 20, trait);
    assert.equal(byId[trait]?.band, undefined, `${trait}: no clinical bands`);
  }
  // Openness has 1 positive + 3 reverse items: 5 + 1 + 1 + 1.
  assert.equal(byId["openness"]?.score, 8);

  // The 1-5 scale has no 0: out-of-scale answers are rejected.
  assert.throws(
    () => assessment.evaluate({ "mini-ipip-1": 0 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );
});

test("AUDIT: per-question option scales are enforced and summed into WHO zones", () => {
  const assessment = new Assessment(inventories["audit"]!);

  // Items 9-10 score 0/2/4 only — 1 is valid for item 3 but not item 9.
  const response = assessment.createResponse();
  response.answer("audit-3", 1);
  assert.throws(
    () => response.answer("audit-9", 1),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );
  response.answer("audit-9", 2);

  // Zone boundaries: max score 40, zones per the WHO manual.
  const maxed = assessment.evaluate(
    Object.fromEntries(assessment.questions.map((q) => [q.id, 4])),
  );
  if (maxed.kind !== "scale") return assert.fail();
  assert.equal(maxed.score, 40);
  assert.equal(maxed.max, 40);
  assert.equal(maxed.band?.id, "zone-4");

  const hazardous = assessment.evaluate({
    "audit-1": 3, "audit-2": 1, "audit-3": 2, "audit-4": 0, "audit-5": 0,
    "audit-6": 0, "audit-7": 1, "audit-8": 1, "audit-9": 0, "audit-10": 0,
  });
  if (hazardous.kind !== "scale") return assert.fail();
  assert.equal(hazardous.score, 8);
  assert.equal(hazardous.band?.id, "zone-2");
});

test("AQ-10: agree and disagree items both score in the trait direction", () => {
  const assessment = new Assessment(inventories["aq10"]!);
  const agreeItems = ["aq10-1", "aq10-7", "aq10-8", "aq10-10"];
  const disagreeItems = ["aq10-2", "aq10-3", "aq10-4", "aq10-5", "aq10-6", "aq10-9"];

  // Full trait direction: agree (3) on agree-scored, disagree (0) on the rest.
  const maxTrait = assessment.evaluate({
    ...Object.fromEntries(agreeItems.map((id) => [id, 3])),
    ...Object.fromEntries(disagreeItems.map((id) => [id, 0])),
  });
  if (maxTrait.kind !== "scale") return assert.fail();
  assert.equal(maxTrait.score, 10);
  assert.equal(maxTrait.band?.id, "above-threshold");

  // "Definitely agree" everywhere only scores the 4 agree-keyed items.
  const allAgree = assessment.evaluate(
    Object.fromEntries([...agreeItems, ...disagreeItems].map((id) => [id, 3])),
  );
  if (allAgree.kind !== "scale") return assert.fail();
  assert.equal(allAgree.score, 4);
  assert.equal(allAgree.band?.id, "below-threshold");

  // "Slightly" answers count the same as "definitely" (binary scoring).
  const slightTrait = assessment.evaluate({
    ...Object.fromEntries(agreeItems.map((id) => [id, 2])),
    ...Object.fromEntries(disagreeItems.map((id) => [id, 1])),
  });
  if (slightTrait.kind !== "scale") return assert.fail();
  assert.equal(slightTrait.score, 10);
});

test("count scoring tallies items crossing per-item thresholds, honoring reverse", () => {
  const assessment = new Assessment({
    id: "cnt",
    title: { en: "Count" },
    defaultLocale: "en",
    options: [
      { value: 0, label: { en: "0" } },
      { value: 1, label: { en: "1" } },
      { value: 2, label: { en: "2" } },
      { value: 3, label: { en: "3" } },
    ],
    questions: [
      { id: "q1", text: { en: "Low threshold" } },
      { id: "q2", text: { en: "High threshold" } },
      { id: "q3", text: { en: "Reversed" }, reverseScored: true },
    ],
    scoring: {
      kind: "count",
      items: [
        { questionId: "q1", minValue: 2 },
        { questionId: "q2", minValue: 3 },
        { questionId: "q3", minValue: 2 },
      ],
      bands: [
        { id: "negative", min: 0, max: 1, label: { en: "Negative" } },
        { id: "positive", min: 2, max: 3, label: { en: "Positive" } },
      ],
    },
  });

  // q1: 2 >= 2 counts; q2: 2 < 3 does not; q3: 0 reversed to 3 >= 2 counts.
  const result = assessment.evaluate({ q1: 2, q2: 2, q3: 0 });
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 2);
  assert.equal(result.min, 0);
  assert.equal(result.max, 3);
  assert.equal(result.band?.id, "positive");
});

test("evaluate throws without scoring, custom evaluators take over", () => {
  const definition = {
    id: "unscored",
    title: { en: "Unscored" },
    defaultLocale: "en",
    options: [
      { value: 0, label: { en: "No" } },
      { value: 1, label: { en: "Yes" } },
    ],
    questions: [
      { id: "q1", text: { en: "One" } },
      { id: "q2", text: { en: "Two" } },
    ],
  };
  const assessment = new Assessment(definition);

  assert.throws(
    () => assessment.evaluate({ q1: 1 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "no_scoring",
  );

  const categorize: Evaluator = (_definition, answers) => ({
    kind: "categorical",
    category: (answers["q1"] ?? 0) + (answers["q2"] ?? 0) >= 2 ? "high" : "low",
    label: { en: "Example category" },
  });

  const viaClass = assessment.evaluate({ q1: 1, q2: 1 }, { evaluator: categorize });
  assert.equal(viaClass.kind, "categorical");
  if (viaClass.kind !== "categorical") return;
  assert.equal(viaClass.category, "high");

  const standalone = evaluate(definition, { q1: 0, q2: 1 }, { evaluator: categorize });
  if (standalone.kind !== "categorical") return assert.fail();
  assert.equal(standalone.category, "low");
});

test("missing-data policy: prorate scales partial sums, minAnswered guards", () => {
  const definition = structuredClone(new Assessment(inventories["phq9"]!).definition);
  if (definition.scoring?.kind !== "sum") return assert.fail();
  definition.scoring.missing = { strategy: "prorate", minAnswered: 7 };
  const assessment = new Assessment(definition);

  // 7 of 9 answered, raw sum 7 -> prorated round(7 * 9/7) = 9 -> mild.
  const answers = Object.fromEntries(Array.from({ length: 7 }, (_, i) => [`phq9-${i + 1}`, 1]));
  const result = assessment.evaluate(answers);
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 9);
  assert.equal(result.band?.id, "mild");
  assert.equal(result.max, 27); // range stays full-scale

  // Below minAnswered -> refuses to score.
  assert.throws(
    () => assessment.evaluate({ "phq9-1": 1 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );

  // Complete answers are untouched by prorating.
  const complete = assessment.evaluate(Object.fromEntries(definition.questions.map((q) => [q.id, 1])));
  if (complete.kind !== "scale") return assert.fail();
  assert.equal(complete.score, 9);
});

test("missing-data policy: require-complete closes the raw-map loophole", () => {
  const definition = structuredClone(new Assessment(inventories["gad7"]!).definition);
  if (definition.scoring?.kind !== "sum") return assert.fail();
  definition.scoring.missing = { strategy: "require-complete" };
  const assessment = new Assessment(definition);

  // Raw maps skip the response-status gate but not the scoring policy.
  assert.throws(
    () => assessment.evaluate({ "gad7-1": 1 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );

  const full = assessment.evaluate(Object.fromEntries(definition.questions.map((q) => [q.id, 1])));
  if (full.kind !== "scale") return assert.fail();
  assert.equal(full.score, 7);
});

test("missing-data policy: applies per subscale and to count scoring", () => {
  const dass = structuredClone(new Assessment(inventories["dass21"]!).definition);
  if (dass.scoring?.kind !== "subscales") return assert.fail();
  dass.scoring.missing = { strategy: "prorate", minAnswered: 4 };
  const assessment = new Assessment(dass);

  // Depression subscale: 5 of 7 answered with 2s (raw 10 -> round(10*7/5) = 14);
  // anxiety and stress subscales fully answered with 0s stay 0.
  const answers: Record<string, number> = Object.fromEntries(
    dass.questions.map((q) => [q.id, 0]),
  );
  const depressionIds = ["dass21-3", "dass21-5", "dass21-10", "dass21-13", "dass21-16"];
  for (const id of depressionIds) answers[id] = 2;
  delete answers["dass21-17"];
  delete answers["dass21-21"];

  const result = assessment.evaluate(answers);
  if (result.kind !== "multiscale") return assert.fail();
  const depression = result.scales.find((s) => s.id === "depression");
  assert.equal(depression?.score, 28); // prorated raw 14 x multiplier 2
  assert.equal(depression?.band?.id, "extremely-severe");

  // Count scoring with require-complete.
  const asrs = structuredClone(new Assessment(inventories["asrs6"]!).definition);
  if (asrs.scoring?.kind !== "count") return assert.fail();
  asrs.scoring.missing = { strategy: "require-complete" };
  assert.throws(
    () => new Assessment(asrs).evaluate({ "asrs6-1": 2 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("evaluate refuses incomplete responses unless explicitly allowed", () => {
  const assessment = new Assessment(inventories["phq9"]!);
  const response = assessment.createResponse().answer("phq9-1", 2).answer("phq9-2", 2);

  assert.throws(
    () => assessment.evaluate(response),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );

  const result = assessment.evaluate(response, { allowIncomplete: true });
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 4);
  assert.equal(result.max, 27);

  // Raw answer maps skip the completeness check only.
  const raw = assessment.evaluate({ "phq9-1": 2, "phq9-2": 2 });
  if (raw.kind !== "scale") return assert.fail();
  assert.equal(raw.score, 4);
});

test("evaluate rejects out-of-scale values and unknown questions in raw maps", () => {
  const assessment = new Assessment(inventories["phq9"]!);

  assert.throws(
    () => assessment.evaluate({ "phq9-1": 20 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );
  assert.throws(
    () => evaluate(assessment.definition, { "gad7-1": 1 }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "unknown_question",
  );
  // Custom evaluators also only ever see validated answers.
  assert.throws(
    () => assessment.evaluate({ "phq9-1": -1 }, { evaluator: () => ({ kind: "custom", data: null }) }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );

  // Passing a bare function (the pre-v1 signature) is rejected loudly.
  assert.throws(
    () => assessment.evaluate({ "phq9-1": 1 }, (() => ({ kind: "custom", data: null })) as never),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_argument",
  );
});
