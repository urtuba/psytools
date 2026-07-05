import { test } from "node:test";
import assert from "node:assert/strict";
import { Assessment, loadInventory, pickLocales } from "../src/index.ts";

test("pickLocales strips a definition down to the requested locales", () => {
  const full = loadInventory("dass21").definition;
  const slim = new Assessment(pickLocales(full, ["tr"]));

  // defaultLocale (en) is always kept as the fallback.
  assert.deepEqual(slim.locales, ["en", "tr"]);
  // The original definition is untouched.
  assert.deepEqual(new Assessment(full).locales, ["de", "en", "es", "tr", "zh"]);

  // Every corner is stripped: options, questions, subscale labels, bands.
  const view = slim.localize("tr");
  assert.equal(view.questions.length, 21);
  const scoring = slim.definition.scoring;
  if (scoring?.kind !== "subscales") return assert.fail();
  assert.deepEqual(Object.keys(scoring.subscales[0]!.label).sort(), ["en", "tr"]);
  assert.deepEqual(Object.keys(scoring.subscales[0]!.bands![0]!.label).sort(), ["en", "tr"]);

  // Scoring still works and band labels only carry the kept locales.
  const result = slim.evaluate(Object.fromEntries(full.questions.map((q) => [q.id, 1])));
  if (result.kind !== "multiscale") return assert.fail();
  assert.deepEqual(Object.keys(result.scales[0]!.band!.label).sort(), ["en", "tr"]);

  // The payload is meaningfully smaller (5 locales -> 2).
  assert.ok(
    JSON.stringify(slim.definition).length < JSON.stringify(full).length * 0.6,
    "picked definition should be much smaller",
  );
});

test("pickLocales covers sum flags and per-question options", () => {
  const phq9 = pickLocales(loadInventory("phq9").definition, ["de"]);
  if (phq9.scoring?.kind !== "sum") return assert.fail();
  assert.deepEqual(Object.keys(phq9.scoring.flags![0]!.label).sort(), ["de", "en"]);

  const audit = pickLocales(loadInventory("audit").definition, ["zh"]);
  const q1 = audit.questions.find((q) => q.id === "audit-1");
  assert.deepEqual(Object.keys(q1!.options![0]!.label).sort(), ["en", "zh"]);
});
