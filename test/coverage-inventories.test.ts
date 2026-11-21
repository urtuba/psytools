import { test } from "node:test";
import assert from "node:assert/strict";
import { inventories, loadInventory, PsytoolsError } from "../src/index.ts";
import type { AssessmentDefinition, MultiScaleResult, ScaleResult } from "../src/index.ts";

/** The 2026-07 coverage wave: five instruments, five rights holders. */
const IDS = ["phq15", "pcl5", "eat26", "csi16", "ucla-ls3"] as const;

/**
 * Item and reverse-key counts, transcribed from each rights holder's own
 * form. A mis-keyed reverse item produces a plausible-looking but wrong
 * score that nothing else would catch, so the counts are pinned here —
 * see SOURCES.md for the source document per instrument.
 */
const SHAPE: Record<string, { items: number; reverse: number; min: number; max: number }> = {
  phq15: { items: 15, reverse: 0, min: 0, max: 30 },
  pcl5: { items: 20, reverse: 0, min: 0, max: 80 },
  eat26: { items: 26, reverse: 0, min: 0, max: 78 },
  csi16: { items: 16, reverse: 0, min: 0, max: 81 },
  "ucla-ls3": { items: 20, reverse: 9, min: 20, max: 80 },
};

const answerEvery = async (id: string, pick: (values: number[]) => number) => {
  const assessment = await loadInventory(id);
  const definition = assessment.definition;
  const response = assessment.createResponse();
  for (const question of definition.questions) {
    response.answer(question.id, pick((question.options ?? definition.options).map((o) => o.value)));
  }
  return assessment.evaluate(response.submit()) as ScaleResult;
};

test("the coverage-wave inventories carry the item counts and score ranges of their sources", async () => {
  for (const id of IDS) {
    const definition = inventories[id]!;
    const expected = SHAPE[id]!;
    assert.equal(definition.questions.length, expected.items, `${id}: item count`);
    assert.equal(
      definition.questions.filter((q) => q.reverseScored).length,
      expected.reverse,
      `${id}: reverse-keyed count`,
    );
    const lowest = await answerEvery(id, (values) => Math.min(...values));
    const highest = await answerEvery(id, (values) => Math.max(...values));
    assert.equal(lowest.min, expected.min, `${id}: minimum`);
    assert.equal(highest.max, expected.max, `${id}: maximum`);
  }
});

test("only the UCLA Loneliness Scale reverse-keys, and it keys the nine positive items", () => {
  const reversed = inventories["ucla-ls3"]!.questions.filter((q) => q.reverseScored).map((q) => q.id);
  assert.deepEqual(reversed, [1, 5, 6, 9, 10, 15, 16, 19, 20].map((n) => `ucla-ls3-${n}`));
  // Never on every item: 11 forward items score 1 and 9 reverse items score 4.
  const definition = inventories["ucla-ls3"]!;
  assert.equal(definition.options[0]!.value, 1, "the scale starts at 1, not 0");
});

test("UCLA reverse keys invert against the 1-4 scale", async () => {
  const never = await answerEvery("ucla-ls3", (values) => Math.min(...values));
  assert.equal(never.score, 11 * 1 + 9 * 4);
  const always = await answerEvery("ucla-ls3", (values) => Math.max(...values));
  assert.equal(always.score, 11 * 4 + 9 * 1);
});

test("EAT-26 keeps Garner's asymmetric key: three anchors score zero, item 26 runs the other way", async () => {
  const definition = inventories["eat26"]!;
  // Items 1-25: Always 3, Usually 2, Often 1, then three zeros.
  for (const question of definition.questions.slice(0, 25)) {
    assert.equal(question.options, undefined, `${question.id}: should use the shared scale`);
  }
  assert.deepEqual(definition.options.map((o) => o.value), [3, 2, 1, 0, 0, 0]);
  assert.deepEqual(definition.questions[25]!.options!.map((o) => o.value), [0, 0, 0, 1, 2, 3]);
  assert.equal(definition.questions[25]!.reverseScored, undefined, "item 26 is keyed, not reversed");

  const assessment = await loadInventory("eat26");
  // "Sometimes" (index 3) everywhere scores 0 on items 1-25 and 1 on item 26.
  const response = assessment.createResponse();
  for (const question of definition.questions) {
    response.answer(question.id, (question.options ?? definition.options)[3]!.value);
  }
  const result = assessment.evaluate(response.submit()) as ScaleResult;
  assert.equal(result.score, 1);
  assert.equal(result.band?.id, "below-cutoff");
});

test("EAT-26 bands split at Garner's referral cutoff of 20", async () => {
  const assessment = await loadInventory("eat26");
  const definition = assessment.definition;
  const scoreOf = (positives: number) => {
    const response = assessment.createResponse();
    definition.questions.forEach((question, i) => {
      const options = question.options ?? definition.options;
      // "Always" scores 3 on items 1-25 and 0 on item 26.
      response.answer(question.id, i < positives ? options[0]!.value : options[5]!.value);
    });
    return assessment.evaluate(response.submit()) as ScaleResult;
  };
  // Six "Always" answers on items 1-25 score 18; seven score 21. Item 26
  // answered "Never" adds 3, so the boundary is crossed one item earlier.
  assert.equal(scoreOf(6).score, 6 * 3 + 3);
  assert.equal(scoreOf(6).band?.id, "at-or-above-cutoff");
  assert.equal(scoreOf(5).score, 5 * 3 + 3);
  assert.equal(scoreOf(5).band?.id, "below-cutoff");
});

test("PHQ-15 lets a respondent skip the women-only item without refusing to score", async () => {
  const assessment = await loadInventory("phq15");
  const definition = assessment.definition;
  const optional = definition.questions.filter((q) => q.optional).map((q) => q.id);
  assert.deepEqual(optional, ["phq15-4"], "only the menstrual item is optional");

  const response = assessment.createResponse();
  for (const question of definition.questions) {
    if (question.id !== "phq15-4") response.answer(question.id, 1);
  }
  const result = assessment.evaluate(response.submit()) as ScaleResult;
  assert.equal(result.score, 14, "the unanswered item contributes 0, it is not prorated away");
  assert.equal(result.band?.id, "medium");
});

test("PHQ-15 shares two items with the PHQ-9 but not their answer scale", () => {
  const phq15 = inventories["phq15"]!;
  const phq9 = inventories["phq9"]!;
  assert.equal(phq15.questions[13]!.text["en"], "Feeling tired or having low energy");
  assert.equal(phq15.questions[14]!.text["en"], "Trouble sleeping");
  // The PHQ-9's own wording of the same two symptoms is longer, and its
  // scale runs 0-3 where the PHQ-15's runs 0-2 — answers do not transfer.
  assert.notEqual(phq15.questions[13]!.text["en"], phq9.questions[3]!.text["en"]);
  assert.equal(Math.max(...phq15.options.map((o) => o.value)), 2);
  assert.equal(Math.max(...phq9.options.map((o) => o.value)), 3);
});

test("CSI-16 scores upwards and refuses to score a partial response", async () => {
  const assessment = await loadInventory("csi16");
  const definition = assessment.definition;
  // Higher is more satisfied here, the opposite of every other inventory.
  const highest = await answerEvery("csi16", (values) => Math.max(...values));
  assert.equal(highest.band?.id, "satisfied");
  const lowest = await answerEvery("csi16", (values) => Math.min(...values));
  assert.equal(lowest.band?.id, "dissatisfied");
  // The 51.5 cutoff is calibrated to the full scale, so partials refuse.
  const response = assessment.createResponse();
  for (const question of definition.questions.slice(0, 15)) response.answer(question.id, 3);
  assert.throws(
    () => assessment.evaluate(response, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("CSI-16 semantic differentials run in the direction the authors print them", () => {
  const byId = new Map(inventories["csi16"]!.questions.map((q) => [q.id, q]));
  const first = (id: string) => byId.get(id)!.options![0]!.value;
  // The pole named first in the text scores 5 on four pairs and 0 on two.
  for (const id of ["csi16-11", "csi16-13", "csi16-14", "csi16-16"]) assert.equal(first(id), 5, id);
  for (const id of ["csi16-12", "csi16-15"]) assert.equal(first(id), 0, id);
});

test("PCL-5 and the UCLA scale ship no bands, because their sources publish none to ship", () => {
  for (const id of ["pcl5", "ucla-ls3"]) {
    const scoring = inventories[id]!.scoring!;
    assert.equal("bands" in scoring ? scoring.bands : undefined, undefined, `${id}: unexpected bands`);
    assert.match(String(inventories[id]!.meta!["scoringNote"]), /no (severity )?bands are defined/i);
  }
});

test("every coverage-wave inventory records its licence flag and where its text came from", () => {
  const expected: Record<string, string> = {
    phq15: "free",
    pcl5: "free",
    eat26: "free-with-conditions",
    csi16: "free-with-conditions",
    "ucla-ls3": "free-with-conditions",
  };
  for (const id of IDS) {
    const definition = inventories[id]!;
    const meta = definition.meta ?? {};
    assert.equal(meta["licenseFlag"], expected[id], `${id}: licenseFlag`);
    assert.ok(String(meta["license"]).length > 0, `${id}: license text`);
    assert.ok(String(meta["reference"]).length > 0, `${id}: citation`);
    assert.match(String(meta["translationProvenance"]), /AI translation/, `${id}: provenance`);
    assert.equal(definition.respondent, "self", `${id}: respondent`);
  }
});

test("EAT-26 is the second bundled inventory written for adolescents as well as adults", () => {
  const nonAdult = Object.entries(inventories)
    .filter(([, definition]) => !(definition.audience ?? []).every((band) => band === "adult"))
    .map(([id]) => id)
    .sort();
  assert.deepEqual(nonAdult, ["eat26", "rses"]);
  assert.deepEqual(inventories["eat26"]!.audience, ["adolescent", "adult"]);
});

test("the new category values name constructs and are each used by an inventory", () => {
  const used = new Set(Object.values(inventories).flatMap((d) => d.categories ?? []));
  for (const category of [
    "post-traumatic-stress",
    "somatic-symptoms",
    "disordered-eating",
    "loneliness",
    // Declared since 0.1 and populated for the first time by the CSI-16.
    "relationships",
  ]) {
    assert.ok(used.has(category), `${category}: declared but unused`);
  }
  assert.deepEqual(inventories["csi16"]!.categories, ["relationships"]);
});

test("all five ship complete tr, de, zh, and es packs", async () => {
  for (const id of IDS) {
    for (const locale of ["tr", "de", "zh", "es"]) {
      const assessment = await loadInventory(id, { locales: [locale] });
      const view = assessment.localize(locale);
      const where = `${id}/${locale}`;
      assert.ok(view.title.length > 0, `${where}: title`);
      assert.ok(view.instructions && view.instructions.length > 0, `${where}: instructions`);
      assert.equal(view.questions.length, SHAPE[id]!.items, `${where}: questions`);
      for (const question of view.questions) {
        // A pack that silently fell back to English would repeat the base text.
        assert.notEqual(
          question.text,
          inventories[id]!.questions.find((q) => q.id === question.id)!.text["en"],
          `${where}/${question.id}: untranslated`,
        );
        for (const option of question.options) {
          assert.ok(option.label.length > 0, `${where}/${question.id}: option ${option.value}`);
        }
      }
      const scoring = assessment.definition.scoring!;
      for (const band of ("bands" in scoring ? scoring.bands : undefined) ?? []) {
        assert.ok(band.label[locale], `${where}: band ${band.id}`);
      }
    }
  }
});

const optionLabels = (definition: AssessmentDefinition, questionId: string, locale: string) =>
  (definition.questions.find((q) => q.id === questionId)!.options ?? definition.options).map(
    (option) => option.label[locale],
  );

test("locale packs translate the per-question answer scales too", async () => {
  for (const locale of ["tr", "de", "zh", "es"]) {
    // EAT-26 item 26 and CSI-16 items 1-6 carry their own scales; a pack
    // that translated only the shared one would leave them in English.
    const eat26 = (await loadInventory("eat26", { locales: [locale] })).definition;
    for (const label of optionLabels(eat26, "eat26-26", locale)) {
      assert.ok(label && label.length > 0, `eat26/${locale}: item 26 options`);
    }
    const csi16 = (await loadInventory("csi16", { locales: [locale] })).definition;
    for (const questionId of ["csi16-1", "csi16-2", "csi16-3"]) {
      for (const label of optionLabels(csi16, questionId, locale)) {
        assert.ok(label && label.length > 0, `csi16/${locale}: ${questionId} options`);
      }
    }
    // The semantic differentials are numbered positions, so every locale
    // restates the same digits rather than inventing words for them.
    assert.deepEqual(optionLabels(csi16, "csi16-11", locale), ["5", "4", "3", "2", "1", "0"]);
    assert.deepEqual(optionLabels(csi16, "csi16-12", locale), ["0", "1", "2", "3", "4", "5"]);
  }
});

/**
 * The 2026-11 free-screeners wave: five instruments whose rights holders
 * grant reproduction without permission. Shapes are transcribed from each
 * rights holder's own form; see SOURCES.md for the source per instrument.
 */
const FREE_WAVE = ["pc-ptsd-5", "phq4", "phq8", "gds15", "tipi"] as const;

const FREE_WAVE_ITEMS: Record<string, { items: number; reverse: number }> = {
  "pc-ptsd-5": { items: 6, reverse: 0 },
  phq4: { items: 4, reverse: 0 },
  phq8: { items: 8, reverse: 0 },
  gds15: { items: 15, reverse: 5 },
  tipi: { items: 10, reverse: 5 },
};

const answerAllWith = async (id: string, pick: (values: number[], index: number) => number) => {
  const assessment = await loadInventory(id);
  const definition = assessment.definition;
  const response = assessment.createResponse();
  definition.questions.forEach((question, index) => {
    response.answer(question.id, pick((question.options ?? definition.options).map((o) => o.value), index));
  });
  return assessment.evaluate(response.submit());
};

test("the free-screeners wave carries the item and reverse-key counts of its sources", () => {
  for (const id of FREE_WAVE) {
    const definition = inventories[id]!;
    const expected = FREE_WAVE_ITEMS[id]!;
    assert.equal(definition.questions.length, expected.items, `${id}: item count`);
    assert.equal(
      definition.questions.filter((q) => q.reverseScored).length,
      expected.reverse,
      `${id}: reverse-keyed count`,
    );
  }
});

test("PC-PTSD-5 scores 0 when trauma exposure is denied and the symptom items are skipped", async () => {
  const assessment = await loadInventory("pc-ptsd-5");
  const response = assessment.createResponse();
  response.answer("pc-ptsd-5-trauma", 0);
  const result = assessment.evaluate(response.submit()) as ScaleResult;
  assert.equal(result.score, 0);
  assert.equal(result.min, 0);
  assert.equal(result.max, 5);
});

test("PC-PTSD-5 counts yes answers on the five symptom items only, and ships no bands", async () => {
  const definition = inventories["pc-ptsd-5"]!;
  assert.equal(definition.scoring?.kind, "count");
  if (definition.scoring?.kind !== "count") return;
  assert.deepEqual(
    definition.scoring.items.map((item) => item.questionId),
    [1, 2, 3, 4, 5].map((n) => `pc-ptsd-5-${n}`),
    "the exposure question is not scored",
  );
  assert.equal(definition.scoring.bands, undefined);
  assert.match(String(definition.meta!["scoringNote"]), /No bands are defined/);
  // Only the five gated symptom items are optional; the exposure question is required.
  assert.deepEqual(
    definition.questions.filter((q) => q.optional).map((q) => q.id),
    [1, 2, 3, 4, 5].map((n) => `pc-ptsd-5-${n}`),
  );
  for (const question of definition.questions.slice(1)) {
    assert.match(question.text["en"]!, /^In the past month, have you /, `${question.id}: lead-in`);
  }

  // Exposure yes, four of five symptoms yes: the score is 4.
  const result = (await answerAllWith("pc-ptsd-5", (_values, index) => (index === 5 ? 0 : 1))) as ScaleResult;
  assert.equal(result.score, 4);
  assert.equal(result.band, undefined);
});

test("PHQ-4 follows Pfizer's form order and scores anxiety, depression, and the total", async () => {
  const definition = inventories["phq4"]!;
  assert.deepEqual(
    definition.questions.map((q) => q.text["en"]),
    [
      "Feeling nervous, anxious or on edge",
      "Not being able to stop or control worrying",
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
    ],
  );
  const assessment = await loadInventory("phq4");
  // Anxiety 3 (screen positive), depression 2 (below the cutpoint).
  const result = assessment.evaluate(assessment.createResponse().answerAll([2, 1, 1, 1]).submit()) as MultiScaleResult;
  const byId = Object.fromEntries(result.scales.map((s) => [s.id, s]));
  assert.equal(byId["anxiety"]!.score, 3);
  assert.equal(byId["anxiety"]!.band?.id, "positive");
  assert.equal(byId["depression"]!.score, 2);
  assert.equal(byId["depression"]!.band?.id, "below-cutoff");
  assert.equal(byId["total"]!.score, 5);
  assert.equal(byId["total"]!.min, 0);
  assert.equal(byId["total"]!.max, 12);
  assert.equal(byId["total"]!.band, undefined, "total-score bands could not be verified, so none ship");
  assert.equal(byId["anxiety"]!.max, 6);

  const partial = assessment.createResponse();
  partial.answer("phq4-1", 3);
  assert.throws(
    () => assessment.evaluate(partial, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("PHQ-8 is the PHQ-9 without item 9, on the PHQ-9's scale and cutpoints", async () => {
  const phq8 = inventories["phq8"]!;
  const phq9 = inventories["phq9"]!;
  assert.deepEqual(
    phq8.questions.map((q) => q.text["en"]),
    phq9.questions.slice(0, 8).map((q) => q.text["en"]),
  );
  assert.deepEqual(phq8.options, phq9.options);
  assert.equal(phq8.scoring?.kind === "sum" ? phq8.scoring.flags : "not-sum", undefined, "no self-harm flag");

  const nine = (await answerAllWith("phq8", (_values, index) => (index < 3 ? 3 : 0))) as ScaleResult;
  assert.equal(nine.score, 9);
  assert.equal(nine.band?.id, "mild");
  const ten = (await answerAllWith("phq8", (_values, index) => (index < 3 ? 3 : index === 3 ? 1 : 0))) as ScaleResult;
  assert.equal(ten.score, 10);
  assert.equal(ten.band?.id, "moderate");
  const top = (await answerAllWith("phq8", (values) => Math.max(...values))) as ScaleResult;
  assert.equal(top.score, 24);
  assert.equal(top.max, 24);
  assert.equal(top.band?.id, "severe");
});

test("GDS-15 keys 'no' as depressive on items 1, 5, 7, 11 and 13", async () => {
  const reversed = inventories["gds15"]!.questions.filter((q) => q.reverseScored).map((q) => q.id);
  assert.deepEqual(reversed, [1, 5, 7, 11, 13].map((n) => `gds15-${n}`));

  // "Yes" everywhere: ten depressive answers.
  const allYes = (await answerAllWith("gds15", () => 1)) as ScaleResult;
  assert.equal(allYes.score, 10);
  assert.equal(allYes.band?.id, "suggestive");
  // Every answer in the depressive direction.
  const allDepressive = (await answerAllWith("gds15", (_values, index) =>
    [0, 4, 6, 10, 12].includes(index) ? 0 : 1,
  )) as ScaleResult;
  assert.equal(allDepressive.score, 15);
  assert.equal(allDepressive.band?.id, "likely");
  // "No" everywhere: five depressive answers, just below the follow-up threshold.
  const allNo = (await answerAllWith("gds15", () => 0)) as ScaleResult;
  assert.equal(allNo.score, 5);
  assert.equal(allNo.band?.id, "below-cutoff");
});

test("GDS-15 prorates like its authors and refuses more than five missing items", async () => {
  const assessment = await loadInventory("gds15");
  const ten = assessment.createResponse();
  // "Yes" on items 2-11: seven depressive answers (5, 7 and 11 are keyed "no").
  for (let i = 2; i <= 11; i += 1) ten.answer(`gds15-${i}`, 1);
  const result = assessment.evaluate(ten, { allowIncomplete: true }) as ScaleResult;
  assert.equal(result.score, Math.round((7 * 15) / 10)); // 10.5 -> 11
  const nine = assessment.createResponse();
  for (let i = 1; i <= 9; i += 1) nine.answer(`gds15-${i}`, 1);
  assert.throws(
    () => assessment.evaluate(nine, { allowIncomplete: true }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
  );
});

test("TIPI scores five 2-item scales, each with one reverse-keyed item", async () => {
  const definition = inventories["tipi"]!;
  assert.deepEqual(
    definition.questions.filter((q) => q.reverseScored).map((q) => q.id),
    [2, 4, 6, 8, 10].map((n) => `tipi-${n}`),
  );
  if (definition.scoring?.kind !== "subscales") return assert.fail("tipi should use subscales");
  const reverse = new Set(definition.questions.filter((q) => q.reverseScored).map((q) => q.id));
  for (const subscale of definition.scoring.subscales) {
    assert.equal(subscale.questionIds.length, 2, subscale.id);
    assert.equal(subscale.questionIds.filter((id) => reverse.has(id)).length, 1, `${subscale.id}: one reverse item`);
    assert.equal(subscale.bands, undefined, `${subscale.id}: no bands`);
  }
  assert.deepEqual(definition.options.map((o) => o.value), [1, 2, 3, 4, 5, 6, 7]);

  // Gosling's worked example: item 1 = 5, item 6 = 2 -> (5 + 6) / 2 = 5.5, a sum of 11.
  const result = (await answerAllWith("tipi", (_values, index) =>
    index === 0 ? 5 : index === 5 ? 2 : 4,
  )) as MultiScaleResult;
  const extraversion = result.scales.find((s) => s.id === "extraversion")!;
  assert.equal(extraversion.score, 11);
  assert.equal(extraversion.min, 2);
  assert.equal(extraversion.max, 14);
});

test("every free-screeners-wave inventory is flagged free and records its source and translator", () => {
  for (const id of FREE_WAVE) {
    const definition = inventories[id]!;
    const meta = definition.meta ?? {};
    assert.equal(meta["licenseFlag"], "free", `${id}: licenseFlag`);
    assert.ok(String(meta["license"]).length > 0, `${id}: license text`);
    assert.ok(String(meta["reference"]).length > 0, `${id}: citation`);
    assert.match(String(meta["translationProvenance"]), /AI translation \(Anthropic Claude, claude-opus-5-5\)/, `${id}: provenance`);
    assert.equal(definition.respondent, "self", `${id}: respondent`);
    assert.deepEqual(definition.audience, ["adult"], `${id}: audience`);
  }
});

test("the free-screeners wave ships complete tr, de, zh, and es packs", async () => {
  for (const id of FREE_WAVE) {
    for (const locale of ["tr", "de", "zh", "es"]) {
      const assessment = await loadInventory(id, { locales: [locale] });
      const view = assessment.localize(locale);
      const where = `${id}/${locale}`;
      assert.ok(view.title.length > 0, `${where}: title`);
      assert.ok(view.instructions && view.instructions.length > 0, `${where}: instructions`);
      assert.equal(view.questions.length, FREE_WAVE_ITEMS[id]!.items, `${where}: questions`);
      for (const question of view.questions) {
        assert.notEqual(
          question.text,
          inventories[id]!.questions.find((q) => q.id === question.id)!.text["en"],
          `${where}/${question.id}: untranslated`,
        );
        for (const option of question.options) {
          // Spanish "No" is legitimately identical to English, so only presence is checked.
          assert.ok(option.label.length > 0, `${where}/${question.id}: option ${option.value}`);
        }
      }
      const scoring = assessment.definition.scoring!;
      if (scoring.kind === "subscales") {
        for (const subscale of scoring.subscales) {
          assert.ok(subscale.label[locale], `${where}: subscale ${subscale.id}`);
          for (const band of subscale.bands ?? []) assert.ok(band.label[locale], `${where}: band ${subscale.id}/${band.id}`);
        }
      } else {
        for (const band of scoring.bands ?? []) assert.ok(band.label[locale], `${where}: band ${band.id}`);
      }
    }
  }
});
