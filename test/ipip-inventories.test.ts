import { test } from "node:test";
import assert from "node:assert/strict";
import { inventories, loadInventory, PsytoolsError } from "../src/index.ts";
import type { AssessmentDefinition, MultiScaleResult } from "../src/index.ts";

const IPIP_IDS = ["mini-ipip6", "bis-bas", "ipip-neo-60", "ipip-via-r"] as const;

/**
 * Reverse-keyed item counts, transcribed from the IPIP scoring keys
 * ("– keyed" on ipip.ori.org). A mis-keyed reverse item produces a
 * plausible-looking but wrong score that nothing else would catch, so the
 * counts are pinned here on purpose — see SOURCES.md for the key pages.
 */
const REVERSE_ITEMS: Record<string, { items: number; reverse: number }> = {
  "mini-ipip6": { items: 24, reverse: 15 },
  "bis-bas": { items: 36, reverse: 10 },
  "ipip-neo-60": { items: 60, reverse: 23 },
  "ipip-via-r": { items: 96, reverse: 48 },
};

const subscalesOf = (definition: AssessmentDefinition) => {
  const scoring = definition.scoring;
  if (scoring?.kind !== "subscales") throw new Error(`${definition.id}: not subscale-scored`);
  return scoring.subscales;
};

test("the IPIP inventories carry the item and reverse-key counts of their scoring keys", () => {
  for (const id of IPIP_IDS) {
    const definition = inventories[id]!;
    const expected = REVERSE_ITEMS[id]!;
    assert.equal(definition.questions.length, expected.items, `${id}: item count`);
    assert.equal(
      definition.questions.filter((q) => q.reverseScored).length,
      expected.reverse,
      `${id}: reverse-keyed count`,
    );
    // Every item belongs to exactly one subscale, and no subscale points at
    // an item that does not exist.
    const ids = new Set(definition.questions.map((q) => q.id));
    const used = subscalesOf(definition).flatMap((s) => s.questionIds);
    assert.equal(used.length, expected.items, `${id}: items used by subscales`);
    assert.equal(new Set(used).size, expected.items, `${id}: an item is scored twice`);
    for (const questionId of used) assert.ok(ids.has(questionId), `${id}: unknown ${questionId}`);
    // Trait scales: descriptive scores only, no severity bands anywhere.
    for (const subscale of subscalesOf(definition)) {
      assert.equal(subscale.bands, undefined, `${id}/${subscale.id}: unexpected bands`);
    }
  }
});

test("subscale shapes match the published structures", () => {
  const shape = (id: string) =>
    subscalesOf(inventories[id]!).map((s) => [s.id, s.questionIds.length] as const);

  assert.deepEqual(shape("mini-ipip6"), [
    ["extraversion", 4], ["agreeableness", 4], ["conscientiousness", 4],
    ["neuroticism", 4], ["openness", 4], ["honesty-humility", 4],
  ]);
  assert.deepEqual(shape("bis-bas"), [
    ["bis-anxiety", 10], ["bas-fun-seeking", 10], ["bas-drive", 10],
    ["bas-reward-responsiveness", 6],
  ]);
  assert.deepEqual(shape("ipip-neo-60"), [
    ["neuroticism", 12], ["extraversion", 12], ["openness", 12],
    ["agreeableness", 12], ["conscientiousness", 12],
  ]);
  const viaR = shape("ipip-via-r");
  assert.equal(viaR.length, 24);
  assert.ok(viaR.every(([, n]) => n === 4), "every VIA-R strength has 4 items");
});

test("every IPIP-VIA-R strength is balanced 2 positive / 2 reverse", () => {
  // The balance is the instrument's design: acquiescence cancels within a
  // scale only while both halves are present.
  const definition = inventories["ipip-via-r"]!;
  const reverse = new Map(definition.questions.map((q) => [q.id, Boolean(q.reverseScored)]));
  for (const subscale of subscalesOf(definition)) {
    const reversed = subscale.questionIds.filter((id) => reverse.get(id)).length;
    assert.equal(reversed, 2, `${subscale.id}: ${reversed} reverse-keyed items, expected 2`);
  }
});

test("Mini-IPIP6 items 1-20 are the Mini-IPIP, item for item", () => {
  const miniIpip = inventories["mini-ipip"]!;
  const miniIpip6 = inventories["mini-ipip6"]!;
  for (let i = 1; i <= 20; i += 1) {
    const a = miniIpip.questions[i - 1]!;
    const b = miniIpip6.questions[i - 1]!;
    assert.equal(b.id, `mini-ipip6-${i}`);
    assert.equal(b.text["en"], a.text["en"], `item ${i} text`);
    assert.equal(Boolean(b.reverseScored), Boolean(a.reverseScored), `item ${i} key`);
  }
  // The four honesty-humility items are all reverse-keyed.
  const honestyHumility = subscalesOf(miniIpip6).find((s) => s.id === "honesty-humility")!;
  assert.deepEqual(honestyHumility.questionIds, [
    "mini-ipip6-21", "mini-ipip6-22", "mini-ipip6-23", "mini-ipip6-24",
  ]);
});

test("reverse keys invert against the 1-5 accuracy scale", async () => {
  // Answering "very inaccurate" everywhere: forward items contribute 1 and
  // reverse items 5, so a subscale's score is f + 5r.
  for (const id of IPIP_IDS) {
    const assessment = await loadInventory(id);
    const definition = assessment.definition;
    const reverse = new Map(definition.questions.map((q) => [q.id, Boolean(q.reverseScored)]));
    const response = assessment
      .createResponse()
      .answerAll(Array(definition.questions.length).fill(1))
      .submit();
    const result = assessment.evaluate(response) as MultiScaleResult;

    for (const subscale of subscalesOf(definition)) {
      const reversed = subscale.questionIds.filter((q) => reverse.get(q)).length;
      const forward = subscale.questionIds.length - reversed;
      const scale = result.scales.find((s) => s.id === subscale.id)!;
      assert.equal(scale.score, forward * 1 + reversed * 5, `${id}/${subscale.id}`);
      assert.equal(scale.min, subscale.questionIds.length);
      assert.equal(scale.max, subscale.questionIds.length * 5);
      assert.equal(scale.band, undefined, `${id}/${subscale.id}: unexpected band`);
    }
  }
});

test("the scale midpoint is invariant under reversal", async () => {
  // 3 reverses to 3 (6 - 3), so answering the midpoint everywhere scores
  // 3 x items per subscale whatever the keys are — a check that reversal is
  // applied to the answer and not to the subscale total.
  for (const id of IPIP_IDS) {
    const assessment = await loadInventory(id);
    const count = assessment.definition.questions.length;
    const response = assessment.createResponse().answerAll(Array(count).fill(3)).submit();
    const result = assessment.evaluate(response) as MultiScaleResult;
    for (const subscale of subscalesOf(assessment.definition)) {
      const scale = result.scales.find((s) => s.id === subscale.id)!;
      assert.equal(scale.score, subscale.questionIds.length * 3, `${id}/${subscale.id}`);
    }
  }
});

test("IPIP subscales prorate partial answers and refuse below the threshold", async () => {
  // minAnswered is one number for every subscale, so bis-bas is pinned to
  // what its 6-item subscale allows (5) and ipip-neo-60 to 75% of 12 (9).
  const cases: Array<[string, number]> = [
    ["mini-ipip6", 3], ["bis-bas", 5], ["ipip-neo-60", 9], ["ipip-via-r", 3],
  ];
  for (const [id, minAnswered] of cases) {
    const assessment = await loadInventory(id);
    const subscales = subscalesOf(assessment.definition);

    const answerFirst = (n: number) => {
      const response = assessment.createResponse();
      for (const subscale of subscales) {
        for (const questionId of subscale.questionIds.slice(0, n)) response.answer(questionId, 3);
      }
      return response;
    };

    const prorated = assessment.evaluate(answerFirst(minAnswered), {
      allowIncomplete: true,
    }) as MultiScaleResult;
    for (const subscale of subscales) {
      const scale = prorated.scales.find((s) => s.id === subscale.id)!;
      assert.equal(scale.score, subscale.questionIds.length * 3, `${id}/${subscale.id}: prorated`);
    }

    assert.throws(
      () => assessment.evaluate(answerFirst(minAnswered - 1), { allowIncomplete: true }),
      (error: unknown) => error instanceof PsytoolsError && error.code === "incomplete_response",
      `${id}: should refuse below minAnswered`,
    );
  }
});

test("the IPIP inventories are flagged free and cite the key page they came from", () => {
  for (const id of IPIP_IDS) {
    const meta = inventories[id]!.meta ?? {};
    assert.equal(meta["licenseFlag"], "free", `${id}: licenseFlag`);
    assert.match(String(meta["license"]), /public domain/, `${id}: license text`);
    assert.match(String(meta["translationProvenance"]), /ipip\.ori\.org/, `${id}: key page`);
    assert.equal(inventories[id]!.respondent, "self");
    assert.deepEqual(inventories[id]!.audience, ["adult"]);
  }
  assert.deepEqual(inventories["bis-bas"]!.categories, ["personality", "motivation"]);
  assert.deepEqual(inventories["ipip-via-r"]!.categories, ["character-strengths", "personality"]);
});

test("IPIP-NEO-60 never presents itself as a version of another publisher's test", () => {
  const definition = inventories["ipip-neo-60"]!;
  const ourProse = [
    definition.title["en"],
    definition.description!["en"],
    String(definition.meta!["note"]),
    String(definition.meta!["scoringNote"]),
  ].join(" ");
  // The Maples-Keller citation in meta.reference carries the authors' own
  // article title and is deliberately not rewritten; everything psytools
  // writes itself stays clear of the mark.
  assert.doesNotMatch(ourProse, /NEO[ -]?PI/i);
  assert.match(String(definition.description!["en"]), /similar to/);
});

test("all four IPIP inventories ship complete tr, de, zh, and es packs", async () => {
  for (const id of IPIP_IDS) {
    for (const locale of ["tr", "de", "zh", "es"]) {
      const assessment = await loadInventory(id, { locales: [locale] });
      const view = assessment.localize(locale);
      const where = `${id}/${locale}`;
      assert.ok(view.title.length > 0, `${where}: title`);
      assert.ok(view.instructions && view.instructions.length > 0, `${where}: instructions`);
      assert.equal(view.questions.length, REVERSE_ITEMS[id]!.items, `${where}: questions`);
      for (const question of view.questions) {
        assert.ok(question.text.length > 0, `${where}/${question.id}: text`);
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
      for (const subscale of subscalesOf(assessment.definition)) {
        assert.ok(subscale.label[locale], `${where}: subscale ${subscale.id}`);
      }
    }
  }
});

test("Mini-IPIP6 reuses the Mini-IPIP wording in every locale", async () => {
  // Same English item, same translation: the two inventories must not drift.
  for (const locale of ["tr", "de", "zh", "es"]) {
    const miniIpip = (await loadInventory("mini-ipip", { locales: [locale] })).localize(locale);
    const miniIpip6 = (await loadInventory("mini-ipip6", { locales: [locale] })).localize(locale);
    for (let i = 0; i < 20; i += 1) {
      assert.equal(miniIpip6.questions[i]!.text, miniIpip.questions[i]!.text, `${locale}: item ${i + 1}`);
    }
  }
});
