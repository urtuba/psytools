import { test } from "node:test";
import assert from "node:assert/strict";
import { Assessment, AssessmentResponse, PsytoolsError, loadInventory } from "../src/index.ts";

const gad7 = () => loadInventory("gad7");

test("answers one question at a time and tracks progress", () => {
  const response = gad7().createResponse();

  assert.equal(response.progress(), 0);
  assert.equal(response.isComplete(), false);

  response.answer("gad7-1", 2).answer("gad7-2", 1);
  assert.equal(response.progress(), 2 / 7);
  assert.deepEqual(response.answers, { "gad7-1": 2, "gad7-2": 1 });

  // Re-answering replaces the previous value.
  response.answer("gad7-1", 3);
  assert.equal(response.answers["gad7-1"], 3);

  response.clearAnswer("gad7-1");
  assert.equal(response.answers["gad7-1"], undefined);
});

test("status walks the state machine: empty -> in-progress -> complete -> submitted", () => {
  const response = gad7().createResponse();
  assert.equal(response.status, "empty");

  response.answer("gad7-1", 2);
  assert.equal(response.status, "in-progress");

  response.answerAll([0, 1, 2, 3, 0, 1, 2]);
  assert.equal(response.status, "complete");

  // Clearing an answer moves backwards.
  response.clearAnswer("gad7-7");
  assert.equal(response.status, "in-progress");
  response.clearAnswer("gad7-7"); // clearing an unanswered question is a no-op
  assert.equal(response.status, "in-progress");

  response.answer("gad7-7", 2).submit();
  assert.equal(response.status, "submitted");
});

test("answers all at once with a map or an ordered array", () => {
  const byMap = gad7().createResponse().answerAll({
    "gad7-1": 0, "gad7-2": 1, "gad7-3": 2, "gad7-4": 3,
    "gad7-5": 0, "gad7-6": 1, "gad7-7": 2,
  });
  assert.equal(byMap.isComplete(), true);

  const byArray = gad7().createResponse().answerAll([0, 1, 2, 3, 0, 1, 2]);
  assert.deepEqual(byArray.answers, byMap.answers);

  assert.throws(
    () => gad7().createResponse().answerAll([0, 1, 2, 3, 0, 1, 2, 3]),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );
});

test("rejects unknown questions and out-of-scale values", () => {
  const response = gad7().createResponse();

  assert.throws(
    () => response.answer("phq9-1", 1),
    (error: unknown) => error instanceof PsytoolsError && error.code === "unknown_question",
  );
  assert.throws(
    () => response.answer("gad7-1", 4),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );

  // A failed answerAll applies nothing.
  assert.throws(() => response.answerAll({ "gad7-1": 1, "gad7-2": 99 }), PsytoolsError);
  assert.equal(response.progress(), 0);
});

test("validate reports missing answers, submit enforces completeness", () => {
  const response = gad7().createResponse().answer("gad7-1", 1);

  const partial = response.validate({ partial: true });
  assert.equal(partial.valid, true);

  const full = response.validate();
  assert.equal(full.valid, false);
  assert.equal(full.issues.filter((issue) => issue.code === "missing_answer").length, 6);

  assert.throws(
    () => response.submit(),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_response",
  );

  // Explicitly allowed incomplete submission works.
  response.submit({ allowIncomplete: true });
  assert.equal(response.isSubmitted, true);
});

test("submitted responses are immutable", () => {
  const response = gad7().createResponse().answerAll([0, 1, 2, 3, 0, 1, 2]).submit();

  assert.ok(response.submittedAt instanceof Date);
  for (const attempt of [
    () => response.answer("gad7-1", 0),
    () => response.answerAll([0, 0, 0, 0, 0, 0, 0]),
    () => response.clearAnswer("gad7-1"),
    () => response.submit(),
  ]) {
    assert.throws(
      attempt,
      (error: unknown) => error instanceof PsytoolsError && error.code === "already_submitted",
    );
  }
});

test("optional questions do not block submission", () => {
  const definition = structuredClone(loadInventory("gad7").definition);
  definition.questions[6]!.optional = true;

  const response = new Assessment(definition).createResponse();
  response.answerAll([0, 1, 2, 3, 0, 1]);
  assert.equal(response.isComplete(), true);
  response.submit();
});

test("serializes and restores a response, validating on the way in", () => {
  const assessment = gad7();
  const original = assessment
    .createResponse({ respondentId: "client-42", meta: { session: 3 } })
    .answerAll([0, 1, 2, 3, 0, 1, 2])
    .submit();

  const restored = AssessmentResponse.parse(assessment, original.stringify());
  assert.equal(restored.status, "submitted");
  assert.deepEqual(restored.answers, original.answers);
  assert.equal(restored.respondentId, "client-42");
  assert.deepEqual(restored.meta, { session: 3 });
  assert.equal(restored.isSubmitted, true);
  assert.equal(restored.submittedAt?.toISOString(), original.submittedAt?.toISOString());
  assert.equal(restored.stringify(), original.stringify());
});

test("parse rejects responses for a different assessment or with bad data", () => {
  const assessment = gad7();
  assert.throws(
    () => AssessmentResponse.parse(assessment, { assessmentId: "phq9", answers: {}, startedAt: "2026-01-01T00:00:00.000Z" }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "assessment_mismatch",
  );
  assert.throws(
    () =>
      AssessmentResponse.parse(assessment, {
        assessmentId: "gad7",
        answers: { "gad7-1": 42 },
        startedAt: "2026-01-01T00:00:00.000Z",
      }),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_value",
  );
  assert.throws(
    () => AssessmentResponse.parse(assessment, "{nope"),
    (error: unknown) => error instanceof PsytoolsError && error.code === "invalid_json",
  );
});
