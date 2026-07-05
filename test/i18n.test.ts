import { test } from "node:test";
import assert from "node:assert/strict";
import {
  Assessment,
  applyLocale,
  inventories,
  loadInventory,
  localePacks,
  pickLocales,
  PsytoolsError,
} from "../src/index.ts";

test("applyLocale merges a lazily-loaded pack into a complete definition", async () => {
  const base = inventories["gad7"]!;
  const pack = (await localePacks["gad7"]!["zh"]!()).default;

  const merged = applyLocale(base, pack);
  assert.deepEqual(new Assessment(merged).locales, ["en", "zh"]);
  // The base stays English-only (no mutation).
  assert.deepEqual(new Assessment(base).locales, ["en"]);

  const view = new Assessment(merged).localize("zh");
  assert.equal(view.questions.length, 7);
  assert.notEqual(view.title, new Assessment(merged).localize("en").title);
});

test("applyLocale rejects packs for a different assessment", async () => {
  const pack = (await localePacks["gad7"]!["tr"]!()).default;
  assert.throws(
    () => applyLocale(inventories["phq9"]!, pack),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_argument",
  );
});

test("pickLocales strips a definition down to the requested locales", async () => {
  const full = (await loadInventory("dass21", { locales: ["tr", "de", "zh", "es"] })).definition;
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

test("pickLocales covers sum flags and per-question options", async () => {
  const phq9 = pickLocales(
    (await loadInventory("phq9", { locales: ["de", "zh"] })).definition,
    ["de"],
  );
  if (phq9.scoring?.kind !== "sum") return assert.fail();
  assert.deepEqual(Object.keys(phq9.scoring.flags![0]!.label).sort(), ["de", "en"]);

  const audit = pickLocales(
    (await loadInventory("audit", { locales: ["zh"] })).definition,
    ["zh"],
  );
  const q1 = audit.questions.find((q) => q.id === "audit-1");
  assert.deepEqual(Object.keys(q1!.options![0]!.label).sort(), ["en", "zh"]);
});

test("every locale pack fully covers its base inventory", async () => {
  for (const [id, base] of Object.entries(inventories)) {
    for (const [locale, load] of Object.entries(localePacks[id] ?? {})) {
      const pack = (await load()).default;
      const where = `${id}/${locale}`;
      assert.equal(pack.id, id, where);
      assert.equal(pack.locale, locale, where);
      assert.equal(pack.options.length, base.options.length, `${where}: options`);
      for (const q of base.questions) {
        const entry = pack.questions[q.id];
        assert.ok(entry?.text, `${where}: missing question ${q.id}`);
        if (q.options) assert.equal(entry.options?.length, q.options.length, `${where}: ${q.id} options`);
      }
      const s = base.scoring;
      if (s?.kind === "subscales") {
        for (const sub of s.subscales) {
          assert.ok(pack.subscales?.[sub.id]?.label, `${where}: missing subscale ${sub.id}`);
          for (const b of sub.bands ?? []) {
            assert.ok(pack.subscales?.[sub.id]?.bands?.[b.id], `${where}: missing band ${sub.id}/${b.id}`);
          }
        }
      } else if (s) {
        for (const b of s.bands ?? []) assert.ok(pack.bands?.[b.id], `${where}: missing band ${b.id}`);
      }
      for (const f of (s?.kind ? s.flags ?? [] : [])) {
        assert.ok(pack.flags?.[f.id], `${where}: missing flag ${f.id}`);
      }
    }
  }
});

test("locale packs and merged definitions round-trip through JSON", async () => {
  const merged = (await loadInventory("who5", { locales: ["es"] })).definition;
  const restored = Assessment.parse(JSON.stringify(merged));
  assert.deepEqual(restored.definition, merged);
  assert.equal(restored.localize("es").questions.length, 5);
});
