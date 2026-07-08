import { test } from "node:test";
import assert from "node:assert/strict";
import {
  Assessment,
  PsytoolsError,
  availableLocales,
  inventories,
  loadInventory,
  phq9,
  validateDefinition,
} from "../src/index.ts";

test("validateDefinition rejects malformed definitions", () => {
  assert.equal(validateDefinition(null).valid, false);
  assert.equal(validateDefinition("nope").valid, false);
  assert.equal(validateDefinition({}).valid, false);

  const noQuestions = validateDefinition({
    id: "x",
    title: { en: "X" },
    defaultLocale: "en",
    options: [{ value: 0, label: { en: "No" } }],
    questions: [],
  });
  assert.equal(noQuestions.valid, false);

  const duplicate = validateDefinition({
    id: "x",
    title: { en: "X" },
    defaultLocale: "en",
    options: [{ value: 0, label: { en: "No" } }],
    questions: [
      { id: "q1", text: { en: "One" } },
      { id: "q1", text: { en: "Two" } },
    ],
  });
  assert.equal(duplicate.valid, false);
  assert.ok(duplicate.issues.some((issue) => issue.code === "duplicate_question"));
});

test("validateDefinition rejects scoring that references unknown questions", () => {
  const result = validateDefinition({
    id: "x",
    title: { en: "X" },
    defaultLocale: "en",
    options: [{ value: 0, label: { en: "No" } }],
    questions: [{ id: "q1", text: { en: "One" } }],
    scoring: {
      kind: "subscales",
      subscales: [{ id: "s", label: { en: "S" }, questionIds: ["missing"] }],
    },
  });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.code === "unknown_question"));
});

test("Assessment constructor throws on invalid definitions", () => {
  assert.throws(
    () => new Assessment({} as never),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_definition",
  );
});

test("base inventories are English-only; locale packs load on request", async () => {
  for (const id of Object.keys(inventories)) {
    // Data minimization by default: the eagerly-imported base carries en only.
    assert.deepEqual(new Assessment(inventories[id]!).locales, ["en"], id);
    assert.deepEqual(availableLocales(id), ["de", "en", "es", "tr", "zh"], id);

    // Requesting locales lazily merges the packs into a complete definition.
    const full = await loadInventory(id, { locales: availableLocales(id) });
    assert.deepEqual(full.locales, ["de", "en", "es", "tr", "zh"], id);

    const single = await loadInventory(id, { locales: ["tr"] });
    assert.deepEqual(single.locales, ["en", "tr"], id);
  }
});

test("every predefined inventory declares license and translation provenance", () => {
  for (const id of Object.keys(inventories)) {
    const meta = inventories[id]!.meta ?? {};
    assert.ok(
      meta["licenseFlag"] === "free" || meta["licenseFlag"] === "free-with-conditions",
      `${id}: meta.licenseFlag must be a known flag`,
    );
    assert.equal(typeof meta["reference"], "string", `${id}: meta.reference missing`);
    assert.match(
      String(meta["translationProvenance"]),
      /claude-fable-5/,
      `${id}: meta.translationProvenance must disclose the AI translator`,
    );
  }
});

test("loadInventory rejects unknown ids and unknown locales", async () => {
  await assert.rejects(
    () => loadInventory("mmpi"),
    (error: unknown) => error instanceof PsytoolsError && error.code === "unknown_inventory",
  );
  await assert.rejects(
    () => loadInventory("phq9", { locales: ["fr"] }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "unknown_locale",
  );
});

test("loadInventory overrides are applied after built-in locale packs and win", async () => {
  const assessment = await loadInventory("phq9", {
    locales: ["tr"],
    overrides: {
      id: "phq9",
      locale: "tr",
      questions: { "phq9-1": { text: "Yerel geçersiz kılma metni" } },
    },
  });

  const view = assessment.localize("tr");
  // The overridden question uses the local text, not the bundled tr pack's.
  assert.equal(view.questions[0]?.text, "Yerel geçersiz kılma metni");
  // Untouched questions still carry the bundled tr translation, not English.
  assert.notEqual(view.questions[1]?.text, phq9.questions[1]?.text["en"]);
});

test("loadInventory accepts multiple overrides, later-applied wins", async () => {
  const assessment = await loadInventory("phq9", {
    overrides: [
      { id: "phq9", locale: "en", questions: { "phq9-1": { text: "First override" } } },
      { id: "phq9", locale: "en", questions: { "phq9-1": { text: "Second override" } } },
    ],
  });
  assert.equal(assessment.localize("en").questions[0]?.text, "Second override");
});

test("loadInventory overrides work with no built-in locales requested", async () => {
  const assessment = await loadInventory("gad7", {
    overrides: { id: "gad7", locale: "en", questions: { "gad7-1": { text: "Reworded item" } } },
  });
  assert.equal(assessment.localize("en").questions[0]?.text, "Reworded item");
  assert.deepEqual(assessment.locales, ["en"]);
});

test("loadInventory overrides still enforce option-count mismatch and unknown-question checks", async () => {
  await assert.rejects(
    () =>
      loadInventory("phq9", {
        overrides: { id: "phq9", locale: "tr", options: ["only one label"], questions: {} },
      }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_argument",
  );
  await assert.rejects(
    () =>
      loadInventory("phq9", {
        overrides: { id: "phq9", locale: "tr", questions: { "not-a-real-question": { text: "x" } } },
      }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_argument",
  );
});

test("localize produces a flat render-ready view", async () => {
  const assessment = await loadInventory("phq9", { locales: ["tr"] });
  const view = assessment.localize("tr");

  assert.equal(view.locale, "tr");
  assert.equal(view.title, "Hasta Sağlığı Anketi (PHQ-9)");
  assert.equal(view.questions.length, 9);
  assert.equal(view.questions[0]?.index, 1);
  assert.equal(view.questions[0]?.options.length, 4);
  assert.equal(view.questions[0]?.options[0]?.label, "Hiç");
  assert.ok(view.instructions?.includes("Son 2 hafta"));
});

test("localize falls back: regional tag -> base language -> default locale", async () => {
  const assessment = await loadInventory("phq9", { locales: ["de"] });
  assert.equal(assessment.localize("de-AT").title, assessment.localize("de").title);
  assert.notEqual(assessment.localize("de").title, assessment.localize("en").title);
  assert.equal(assessment.localize("fr").title, assessment.localize("en").title);
});

test("stringify/parse round-trips a definition including scoring", () => {
  const assessment = new Assessment(phq9);
  const restored = Assessment.parse(assessment.stringify());
  assert.deepEqual(restored.definition, phq9);

  const result = restored.evaluate(
    Object.fromEntries(restored.questions.map((q) => [q.id, 3])),
  );
  assert.equal(result.kind, "scale");
});

test("Assessment.parse rejects invalid JSON", () => {
  assert.throws(
    () => Assessment.parse("{nope"),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_json",
  );
});

test("optionsFor returns question-specific options over the default scale", () => {
  const assessment = new Assessment({
    id: "custom",
    title: { en: "Custom" },
    defaultLocale: "en",
    options: [
      { value: 0, label: { en: "No" } },
      { value: 1, label: { en: "Yes" } },
    ],
    questions: [
      { id: "q1", text: { en: "Default scale" } },
      {
        id: "q2",
        text: { en: "Own scale" },
        options: [
          { value: 0, label: { en: "Never" } },
          { value: 5, label: { en: "Always" } },
        ],
      },
    ],
  });

  assert.deepEqual(assessment.optionsFor("q1").map((option) => option.value), [0, 1]);
  assert.deepEqual(assessment.optionsFor("q2").map((option) => option.value), [0, 5]);
  assert.throws(() => assessment.optionsFor("q3"), PsytoolsError);
});
