import { test } from "node:test";
import assert from "node:assert/strict";
import { loadInventory, PsytoolsError } from "../src/index.ts";
import type { ScaleResult } from "../src/index.ts";

test("SWLS sums 5-35 and matches Diener's score groupings", async () => {
  const swls = await loadInventory("swls");

  const neutral = swls.evaluate(swls.createResponse().answerAll([4, 4, 4, 4, 4]).submit()) as ScaleResult;
  assert.equal(neutral.score, 20);
  assert.equal(neutral.band?.id, "neutral");
  assert.equal(neutral.min, 5);
  assert.equal(neutral.max, 35);

  const high = swls.evaluate(swls.createResponse().answerAll([7, 7, 7, 6, 4]).submit()) as ScaleResult;
  assert.equal(high.score, 31);
  assert.equal(high.band?.id, "extremely-satisfied");

  // require-complete refuses partial answers.
  const partial = swls.createResponse();
  partial.answer("swls-1", 7);
  assert.throws(
    () => swls.evaluate(partial, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("Flourishing Scale sums 8-56 with no bands", async () => {
  const flourishing = await loadInventory("flourishing");
  const result = flourishing.evaluate(
    flourishing.createResponse().answerAll([7, 7, 7, 7, 7, 7, 7, 7]).submit(),
  ) as ScaleResult;
  assert.equal(result.score, 56);
  assert.equal(result.min, 8);
  assert.equal(result.max, 56);
  assert.equal(result.band, undefined);
});

test("K10 scores 10-50 on 1-5 coding with Australian severity bands", async () => {
  const k10 = await loadInventory("k10");

  const low = k10.evaluate(k10.createResponse().answerAll(Array(10).fill(1)).submit()) as ScaleResult;
  assert.equal(low.score, 10);
  assert.equal(low.band?.id, "low");

  const boundary = k10.evaluate(
    k10.createResponse().answerAll([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]).submit(),
  ) as ScaleResult;
  assert.equal(boundary.score, 20);
  assert.equal(boundary.band?.id, "mild");

  const severe = k10.evaluate(k10.createResponse().answerAll(Array(10).fill(3)).submit()) as ScaleResult;
  assert.equal(severe.score, 30);
  assert.equal(severe.band?.id, "severe");
  assert.equal(severe.max, 50);
});

test("K6 scores 0-24 on 0-4 coding with the >=13 serious-distress cutoff", async () => {
  const k6 = await loadInventory("k6");

  const twelve = k6.evaluate(k6.createResponse().answerAll([2, 2, 2, 2, 2, 2]).submit()) as ScaleResult;
  assert.equal(twelve.score, 12);
  assert.equal(twelve.band?.id, "moderate");

  const thirteen = k6.evaluate(k6.createResponse().answerAll([3, 2, 2, 2, 2, 2]).submit()) as ScaleResult;
  assert.equal(thirteen.score, 13);
  assert.equal(thirteen.band?.id, "serious");

  const zero = k6.evaluate(k6.createResponse().answerAll(Array(6).fill(0)).submit()) as ScaleResult;
  assert.equal(zero.score, 0);
  assert.equal(zero.band?.id, "low");
  assert.equal(zero.max, 24);
});

test("RSES reverse-scores the five negatively worded items", async () => {
  const rses = await loadInventory("rses");

  // "Strongly agree" everywhere: positive items contribute 3, the five
  // negative (reverse) items contribute 0.
  const allAgree = rses.evaluate(rses.createResponse().answerAll(Array(10).fill(3)).submit()) as ScaleResult;
  assert.equal(allAgree.score, 15);
  assert.equal(allAgree.band?.id, "normal");

  // Ideal profile: strongly agree with positive, strongly disagree with negative.
  const ideal = rses.evaluate(
    rses.createResponse().answerAll([3, 0, 3, 3, 0, 0, 3, 0, 0, 3]).submit(),
  ) as ScaleResult;
  assert.equal(ideal.score, 30);
  assert.equal(ideal.band?.id, "high");

  const lowProfile = rses.evaluate(
    rses.createResponse().answerAll([0, 3, 0, 0, 3, 3, 0, 3, 3, 0]).submit(),
  ) as ScaleResult;
  assert.equal(lowProfile.score, 0);
  assert.equal(lowProfile.band?.id, "low");
});

test("AI locale packs for the free batch load and cover every question", async () => {
  for (const id of ["swls", "flourishing", "k10", "k6", "rses"]) {
    for (const locale of ["tr", "de", "zh", "es"]) {
      const assessment = await loadInventory(id, { locales: [locale] });
      const view = assessment.localize(locale);
      assert.ok(view.title.length > 0, `${id}/${locale}: title`);
      for (const question of view.questions) {
        assert.ok(question.text.length > 0, `${id}/${locale}/${question.id}: text`);
        // Localized option labels must differ from raw values only when
        // the pack provides them — every option needs a non-empty label.
        for (const option of question.options) {
          assert.ok(option.label.length > 0, `${id}/${locale}/${question.id}: option ${option.value}`);
        }
      }
    }
  }
});
