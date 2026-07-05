import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { inventories } from "../src/index.ts";

// Full JSON Schema validation would need a validator dependency; consumers
// run that in their own stacks. Here we keep the shipped schema honest:
// it must parse, and its required/allowed keys must match what the bundled
// inventories (and the TypeScript types they satisfy) actually use.
const schema = JSON.parse(
  readFileSync(new URL("../schema/assessment-definition.schema.json", import.meta.url), "utf8"),
);

test("assessment definition schema is valid JSON with the expected shape", () => {
  assert.equal(schema.title, "AssessmentDefinition");
  assert.deepEqual(schema.required, ["id", "title", "defaultLocale", "options", "questions"]);
  for (const def of ["localizedText", "option", "question", "scoreBand", "scoreFlag", "sumScoring", "subscale", "subscaleScoring"]) {
    assert.ok(schema.$defs[def], `missing $defs.${def}`);
  }
});

test("bundled inventories only use properties the schema allows", () => {
  const allowedTop = new Set(Object.keys(schema.properties));
  const allowedQuestion = new Set(Object.keys(schema.$defs.question.properties));

  for (const [id, definition] of Object.entries(inventories)) {
    for (const key of Object.keys(definition)) {
      assert.ok(allowedTop.has(key), `${id}: top-level "${key}" not in schema`);
    }
    for (const question of definition.questions) {
      for (const key of Object.keys(question)) {
        assert.ok(allowedQuestion.has(key), `${id}/${question.id}: "${key}" not in schema`);
      }
    }
  }
});
