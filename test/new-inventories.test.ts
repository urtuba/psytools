import { test } from "node:test";
import assert from "node:assert/strict";
import { loadInventory, PsytoolsError } from "../src/index.ts";
import type { MultiScaleResult, ScaleResult } from "../src/index.ts";

test("CES-D reverse-scores the positively worded items 4, 8, 12, 16", async () => {
  const cesd = await loadInventory("cesd");

  // All zeros: the four reverse-scored items each contribute 3.
  const zeros = cesd.createResponse().answerAll(Array(20).fill(0)).submit();
  const low = cesd.evaluate(zeros) as ScaleResult;
  assert.equal(low.score, 12);
  assert.equal(low.min, 0);
  assert.equal(low.max, 60);

  // All threes: the reverse-scored items each contribute 0.
  const threes = cesd.createResponse().answerAll(Array(20).fill(3)).submit();
  assert.equal((cesd.evaluate(threes) as ScaleResult).score, 48);
});

test("CES-D bands split at the published cutoff of 16", async () => {
  const cesd = await loadInventory("cesd");

  // 15 points: five forward items at 3 -> below the cutoff.
  const answers: number[] = Array(20).fill(0);
  answers[0] = 3; answers[1] = 3; answers[2] = 3; answers[4] = 3; answers[5] = 3;
  answers[3] = 3; answers[7] = 3; answers[11] = 3; answers[15] = 3; // reverse items contribute 0
  const below = cesd.evaluate(cesd.createResponse().answerAll(answers).submit()) as ScaleResult;
  assert.equal(below.score, 15);
  assert.equal(below.band?.id, "below-cutoff");

  answers[6] = 1; // one more point crosses the threshold
  const elevated = cesd.evaluate(cesd.createResponse().answerAll(answers).submit()) as ScaleResult;
  assert.equal(elevated.score, 16);
  assert.equal(elevated.band?.id, "elevated");
});

test("ECR-R scores anxiety and avoidance subscales with reverse keys", async () => {
  const ecrR = await loadInventory("ecr-r");

  // All 1 ("strongly disagree"): anxiety has 2 reverse items (7 each),
  // avoidance has 12.
  const ones = ecrR.createResponse().answerAll(Array(36).fill(1)).submit();
  const result = ecrR.evaluate(ones) as MultiScaleResult;
  const anxiety = result.scales.find((s) => s.id === "anxiety")!;
  const avoidance = result.scales.find((s) => s.id === "avoidance")!;
  assert.equal(anxiety.score, 16 * 1 + 2 * 7); // 30
  assert.equal(avoidance.score, 6 * 1 + 12 * 7); // 90
  assert.equal(anxiety.min, 18);
  assert.equal(anxiety.max, 126);

  // All 4 (midpoint) is invariant under reversal: both subscales sum to 72.
  const mids = ecrR.createResponse().answerAll(Array(36).fill(4)).submit();
  const midResult = ecrR.evaluate(mids) as MultiScaleResult;
  for (const scale of midResult.scales) assert.equal(scale.score, 72);
});

test("ECR-R Turkish pack carries the validated YİYE-II wording", async () => {
  const ecrR = await loadInventory("ecr-r", { locales: ["tr"] });
  const view = ecrR.localize("tr");
  assert.equal(view.questions[0]!.text, "Birlikte olduğum kişinin sevgisini kaybetmekten korkarım.");
  // Fraley item 19 = Turkish source item 2 (the source interleaves items).
  assert.equal(
    view.questions[18]!.text,
    "Gerçekte ne hissettiğimi birlikte olduğum kişiye göstermemeyi tercih ederim.",
  );
  assert.equal(view.questions[0]!.options[0]!.label, "1 — Hiç katılmıyorum");
});

test("ERQ scores reappraisal and suppression sums and requires completeness", async () => {
  const erq = await loadInventory("erq");

  const response = erq.createResponse().answerAll([7, 1, 7, 1, 7, 1, 7, 7, 1, 7]).submit();
  const result = erq.evaluate(response) as MultiScaleResult;
  const reappraisal = result.scales.find((s) => s.id === "reappraisal")!;
  const suppression = result.scales.find((s) => s.id === "suppression")!;
  assert.equal(reappraisal.score, 42);
  assert.equal(reappraisal.max, 42);
  assert.equal(suppression.score, 4);
  assert.equal(suppression.min, 4);

  // require-complete: a missing item refuses to score.
  const partial = erq.createResponse();
  partial.answer("erq-1", 4);
  assert.throws(
    () => erq.evaluate(partial, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("HSPS sums all 27 items with no reversals and prorates missing answers", async () => {
  const hsps = await loadInventory("hsps");

  const fours = hsps.createResponse().answerAll(Array(27).fill(4)).submit();
  const result = hsps.evaluate(fours) as ScaleResult;
  assert.equal(result.score, 108);
  assert.equal(result.min, 27);
  assert.equal(result.max, 189);

  // 21 of 27 answered at 7 prorates back to the full item count.
  const partial = hsps.createResponse();
  for (let i = 1; i <= 21; i += 1) partial.answer(`hsps-${i}`, 7);
  const prorated = hsps.evaluate(partial, { allowIncomplete: true }) as ScaleResult;
  assert.equal(prorated.score, Math.round((21 * 7 * 27) / 21)); // 189

  // Below the minAnswered threshold scoring refuses.
  const sparse = hsps.createResponse();
  for (let i = 1; i <= 20; i += 1) sparse.answer(`hsps-${i}`, 7);
  assert.throws(
    () => hsps.evaluate(sparse, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("validated Turkish packs cover every question; HSPS Turkish loads", async () => {
  const hsps = await loadInventory("hsps", { locales: ["tr"] });
  const view = hsps.localize("tr");
  assert.equal(view.questions.length, 27);
  assert.equal(view.title, "Duyusal İşleme Hassasiyeti Ölçeği");
  for (const question of view.questions) {
    assert.ok(question.text.length > 0, question.id);
  }
});
