import type {
  AnswerMap,
  AssessmentDefinition,
  AssessmentQuestion,
  BandResult,
  EvaluationResult,
  Evaluator,
  MultiScaleResult,
  ScaleResult,
  ScoreBand,
  ScoreFlag,
  TriggeredFlag,
} from "./types.ts";
import { PsytoolsError } from "./errors.ts";

/**
 * Evaluates answers against an assessment definition.
 *
 * Every answer is first validated against the assessment: the question must
 * exist and the value must belong to its option scale. Then `evaluator` is
 * used when given; otherwise the definition's declarative `scoring`
 * (`sum` or `subscales`) applies.
 *
 * @throws PsytoolsError `unknown_question` | `invalid_value` | `no_scoring`
 */
export function evaluate(
  definition: AssessmentDefinition,
  answers: AnswerMap,
  evaluator?: Evaluator,
): EvaluationResult {
  assertValidAnswers(definition, answers);
  if (evaluator) return evaluator(definition, answers);

  const scoring = definition.scoring;
  if (!scoring) {
    throw new PsytoolsError(
      "no_scoring",
      `Assessment "${definition.id}" has no scoring definition; pass a custom evaluator`,
    );
  }
  switch (scoring.kind) {
    case "sum":
      return evaluateSum(definition, answers, scoring.bands, scoring.flags);
    case "subscales": {
      const scales: MultiScaleResult["scales"] = scoring.subscales.map((subscale) => {
        const questions = subscale.questionIds.map((id) => requireQuestion(definition, id));
        const multiplier = subscale.multiplier ?? 1;
        const { score, min, max } = sumQuestions(definition, questions, answers, multiplier);
        return {
          id: subscale.id,
          label: subscale.label,
          score,
          min,
          max,
          ...bandOf(score, subscale.bands),
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
  bands?: ScoreBand[],
  flags?: ScoreFlag[],
): ScaleResult {
  const { score, min, max } = sumQuestions(definition, definition.questions, answers, 1);
  return {
    kind: "scale",
    score,
    min,
    max,
    ...bandOf(score, bands),
    flags: triggeredFlags(answers, flags),
  };
}

function sumQuestions(
  definition: AssessmentDefinition,
  questions: readonly AssessmentQuestion[],
  answers: AnswerMap,
  multiplier: number,
): { score: number; min: number; max: number } {
  let score = 0;
  let min = 0;
  let max = 0;
  for (const question of questions) {
    const values = (question.options ?? definition.options).map((o) => o.value);
    const lowest = Math.min(...values);
    const highest = Math.max(...values);
    min += lowest;
    max += highest;

    const answered = answers[question.id];
    if (answered === undefined) continue;
    score += question.reverseScored ? highest + lowest - answered : answered;
  }
  return { score: score * multiplier, min: min * multiplier, max: max * multiplier };
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
