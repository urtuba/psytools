import { test } from "node:test";
import assert from "node:assert/strict";
import {
  Assessment,
  PsytoolsError,
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

test("predefined inventories are valid and localized", () => {
  for (const id of Object.keys(inventories)) {
    const assessment = loadInventory(id);
    assert.deepEqual(assessment.locales, ["de", "en", "tr"]);
  }
});

test("every predefined inventory declares license and translation provenance", () => {
  for (const id of Object.keys(inventories)) {
    const meta = loadInventory(id).definition.meta ?? {};
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

test("loadInventory throws on unknown ids", () => {
  assert.throws(
    () => loadInventory("mmpi"),
    (error: unknown) => error instanceof PsytoolsError && error.code === "unknown_inventory",
  );
});

test("localize produces a flat render-ready view", () => {
  const assessment = new Assessment(phq9);
  const view = assessment.localize("tr");

  assert.equal(view.locale, "tr");
  assert.equal(view.title, "Hasta Sağlığı Anketi (PHQ-9)");
  assert.equal(view.questions.length, 9);
  assert.equal(view.questions[0]?.index, 1);
  assert.equal(view.questions[0]?.options.length, 4);
  assert.equal(view.questions[0]?.options[0]?.label, "Hiç");
  assert.ok(view.instructions?.includes("Son 2 hafta"));
});

test("localize falls back: regional tag -> base language -> default locale", () => {
  const assessment = new Assessment(phq9);
  assert.equal(assessment.localize("de-AT").title, assessment.localize("de").title);
  assert.equal(assessment.localize("fr").title, assessment.localize("en").title);
});

test("stringify/parse round-trips a definition including scoring", () => {
  const assessment = new Assessment(phq9);
  const restored = Assessment.parse(assessment.stringify());
  assert.deepEqual(restored.definition, phq9);

  const result = restored.evaluate({ "phq9-1": 3, "phq9-2": 3 });
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
