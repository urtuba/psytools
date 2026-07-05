import { test } from "node:test";
import assert from "node:assert/strict";
import {
  Assessment,
  PsytoolsError,
  evaluate,
  loadInventory,
  type Evaluator,
} from "../src/index.ts";

test("PHQ-9: sums, bands, and the item-9 suicidality flag", () => {
  const assessment = loadInventory("phq9");

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
  const assessment = loadInventory("gad7");
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
  const assessment = loadInventory("dass21");
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

  const viaClass = assessment.evaluate({ q1: 1, q2: 1 }, categorize);
  assert.equal(viaClass.kind, "categorical");
  if (viaClass.kind !== "categorical") return;
  assert.equal(viaClass.category, "high");

  const standalone = evaluate(definition, { q1: 0, q2: 1 }, categorize);
  if (standalone.kind !== "categorical") return assert.fail();
  assert.equal(standalone.category, "low");
});

test("evaluate refuses incomplete responses unless explicitly allowed", () => {
  const assessment = loadInventory("phq9");
  const response = assessment.createResponse().answer("phq9-1", 2).answer("phq9-2", 2);

  assert.throws(
    () => assessment.evaluate(response),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );

  const result = assessment.evaluate(response, undefined, { allowIncomplete: true });
  if (result.kind !== "scale") return assert.fail();
  assert.equal(result.score, 4);
  assert.equal(result.max, 27);

  // Raw answer maps are the low-level escape hatch and stay ungated.
  const raw = assessment.evaluate({ "phq9-1": 2, "phq9-2": 2 });
  if (raw.kind !== "scale") return assert.fail();
  assert.equal(raw.score, 4);
});
