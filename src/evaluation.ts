import type {
  AnswerMap,
  AssessmentDefinition,
  AssessmentQuestion,
  BandResult,
  EvaluationResult,
  Evaluator,
  MissingDataPolicy,
  MultiScaleResult,
  ScaleResult,
  ScoreBand,
  ScoreFlag,
  SumScoring,
  TriggeredFlag,
} from "./types.ts";
import { PsytoolsError } from "./errors.ts";

export interface EvaluateOptions {
  /** Custom evaluator used instead of the definition's declarative scoring. */
  evaluator?: Evaluator;
}

/**
 * Evaluates answers against an assessment definition.
 *
 * Every answer is first validated against the assessment: the question must
 * exist and the value must belong to its option scale. Then
 * `options.evaluator` is used when given; otherwise the definition's
 * declarative `scoring` (`sum`, `subscales`, or `count`) applies, honoring
 * its missing-data policy.
 *
 * @throws PsytoolsError `unknown_question` | `invalid_value` | `incomplete_response` | `no_scoring`
 */
export function evaluate(
  definition: AssessmentDefinition,
  answers: AnswerMap,
  options?: EvaluateOptions,
): EvaluationResult {
  if (typeof options === "function") {
    throw new PsytoolsError(
      "invalid_argument",
      "Pass the evaluator as an option: evaluate(definition, answers, { evaluator })",
    );
  }
  assertValidAnswers(definition, answers);
  if (options?.evaluator) return options.evaluator(definition, answers);

  const scoring = definition.scoring;
  if (!scoring) {
    throw new PsytoolsError(
      "no_scoring",
      `Assessment "${definition.id}" has no scoring definition; pass a custom evaluator`,
    );
  }
  switch (scoring.kind) {
    case "sum":
      return evaluateSum(definition, answers, scoring);
    case "count": {
      const questions = scoring.items.map((item) => requireQuestion(definition, item.questionId));
      const answered = enforceMissing(questions, answers, scoring.missing);
      let positives = 0;
      for (const item of scoring.items) {
        const question = requireQuestion(definition, item.questionId);
        const value = answers[question.id];
        if (value === undefined) continue;
        const values = (question.options ?? definition.options).map((o) => o.value);
        const effective = question.reverseScored
          ? Math.max(...values) + Math.min(...values) - value
          : value;
        if (effective >= item.minValue) positives += 1;
      }
      const score = prorate(positives, answered, questions.length, scoring.missing);
      return {
        kind: "scale",
        score,
        min: 0,
        max: scoring.items.length,
        ...bandOf(score, scoring.bands),
        flags: triggeredFlags(answers, scoring.flags),
      };
    }
    case "subscales": {
      const scales: MultiScaleResult["scales"] = scoring.subscales.map((subscale) => {
        const questions = subscale.questionIds.map((id) => requireQuestion(definition, id));
        const scored = scoreQuestionSet(definition, questions, answers, subscale.multiplier ?? 1, scoring.missing, subscale.id);
        return {
          id: subscale.id,
          label: subscale.label,
          ...scored,
          ...bandOf(scored.score, subscale.bands),
        };
      });
      return {
        kind: "multiscale",
        scales,
        flags: triggeredFlags(answers, scoring.flags),
      };
    }
    default:
      throw new PsytoolsError(
        "no_scoring",
        `Unsupported scoring kind "${(scoring as { kind: string }).kind}"`,
      );
  }
}

function assertValidAnswers(definition: AssessmentDefinition, answers: AnswerMap): void {
  const questions = new Map(definition.questions.map((q) => [q.id, q]));
  for (const [questionId, value] of Object.entries(answers)) {
    const question = questions.get(questionId);
    if (!question) {
      throw new PsytoolsError(
        "unknown_question",
        `Answers reference unknown question "${questionId}" in assessment "${definition.id}"`,
      );
    }
    const options = question.options ?? definition.options;
    if (!options.some((option) => option.value === value)) {
      const allowed = options.map((option) => option.value).join(", ");
      throw new PsytoolsError(
        "invalid_value",
        `Value ${value} is not a valid option for question "${questionId}" (allowed: ${allowed})`,
      );
    }
  }
}

function evaluateSum(
  definition: AssessmentDefinition,
  answers: AnswerMap,
  scoring: SumScoring,
): ScaleResult {
  const result = scoreQuestionSet(
    definition,
    definition.questions,
    answers,
    scoring.multiplier ?? 1,
    scoring.missing,
  );
  return {
    kind: "scale",
    ...result,
    ...bandOf(result.score, scoring.bands),
    flags: triggeredFlags(answers, scoring.flags),
  };
}

/**
 * Sums one set of questions (the whole assessment or one subscale),
 * applying reverse scoring, the missing-data policy, and the multiplier.
 */
function scoreQuestionSet(
  definition: AssessmentDefinition,
  questions: readonly AssessmentQuestion[],
  answers: AnswerMap,
  multiplier: number,
  missing: MissingDataPolicy | undefined,
  scaleId?: string,
): { score: number; min: number; max: number } {
  const answered = enforceMissing(questions, answers, missing, scaleId);

  let raw = 0;
  let min = 0;
  let max = 0;
  for (const question of questions) {
    const values = (question.options ?? definition.options).map((o) => o.value);
    const lowest = Math.min(...values);
    const highest = Math.max(...values);
    min += lowest;
    max += highest;

    const value = answers[question.id];
    if (value === undefined) continue;
    raw += question.reverseScored ? highest + lowest - value : value;
  }
  raw = prorate(raw, answered, questions.length, missing);
  return { score: raw * multiplier, min: min * multiplier, max: max * multiplier };
}

/**
 * Enforces the missing-data policy over one set of contributing questions
 * and returns how many of them are answered.
 *
 * `require-complete` only demands questions that are not marked `optional`.
 */
function enforceMissing(
  questions: readonly AssessmentQuestion[],
  answers: AnswerMap,
  missing: MissingDataPolicy | undefined,
  scaleId?: string,
): number {
  const strategy = missing?.strategy ?? "ignore";
  const minAnswered = missing?.minAnswered ?? (strategy === "prorate" ? 1 : 0);
  const scope = scaleId ? ` in subscale "${scaleId}"` : "";

  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  if (strategy === "require-complete") {
    const unanswered = questions
      .filter((q) => !(q.optional ?? false) && answers[q.id] === undefined)
      .map((q) => q.id);
    if (unanswered.length > 0) {
      throw new PsytoolsError(
        "incomplete_response",
        `Scoring requires complete answers${scope}; unanswered: ${unanswered.join(", ")}`,
      );
    }
  }
  if (answered < minAnswered) {
    throw new PsytoolsError(
      "incomplete_response",
      `Scoring requires at least ${minAnswered} answered item(s)${scope}, got ${answered}`,
    );
  }
  return answered;
}

/** Scales a partial raw score up to the full item count (rounded). */
function prorate(
  raw: number,
  answered: number,
  total: number,
  missing: MissingDataPolicy | undefined,
): number {
  if (missing?.strategy !== "prorate" || answered === 0 || answered === total) return raw;
  return Math.round((raw * total) / answered);
}

function bandOf(score: number, bands?: ScoreBand[]): { band?: BandResult } {
  const match = bands?.find((band) => score >= band.min && score <= band.max);
  return match ? { band: { id: match.id, label: match.label } } : {};
}

function triggeredFlags(answers: AnswerMap, flags?: ScoreFlag[]): TriggeredFlag[] {
  if (!flags) return [];
  const triggered: TriggeredFlag[] = [];
  for (const flag of flags) {
    const value = answers[flag.questionId];
    if (value !== undefined && value >= flag.minValue) {
      triggered.push({
        id: flag.id,
        questionId: flag.questionId,
        value,
        label: flag.label,
      });
    }
  }
  return triggered;
}

function requireQuestion(definition: AssessmentDefinition, questionId: string): AssessmentQuestion {
  const question = definition.questions.find((q) => q.id === questionId);
  if (!question) {
    throw new PsytoolsError(
      "unknown_question",
      `Scoring references unknown question "${questionId}" in assessment "${definition.id}"`,
    );
  }
  return question;
}
