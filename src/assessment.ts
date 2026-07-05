import type {
  AssessmentDefinition,
  AssessmentOption,
  AssessmentQuestion,
  EvaluationResult,
  Evaluator,
  LocalizedAssessmentView,
  ValidationIssue,
  ValidationResult,
} from "./types.ts";
import { PsytoolsError } from "./errors.ts";
import { collectLocales, localizeText } from "./i18n.ts";
import { AssessmentResponse } from "./response.ts";
import { evaluate, type EvaluateOptions } from "./evaluation.ts";

/**
 * Structurally validates an assessment definition (useful before persisting
 * user-created assessments). Returns issues instead of throwing.
 */
export function validateDefinition(input: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  const malformed = (message: string): ValidationResult => ({
    valid: false,
    issues: [{ code: "malformed", message }],
  });

  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return malformed("definition must be an object");
  }
  const def = input as Partial<AssessmentDefinition>;

  if (typeof def.id !== "string" || def.id.length === 0) {
    issues.push({ code: "malformed", message: "id must be a non-empty string" });
  }
  if (!isLocalizedText(def.title)) {
    issues.push({ code: "malformed", message: "title must map locales to strings" });
  }
  if (typeof def.defaultLocale !== "string" || def.defaultLocale.length === 0) {
    issues.push({ code: "malformed", message: "defaultLocale must be a non-empty string" });
  }
  if (!Array.isArray(def.options) || def.options.length === 0) {
    issues.push({ code: "malformed", message: "options must be a non-empty array" });
  } else {
    def.options.forEach((option, i) => {
      if (!isOption(option)) {
        issues.push({ code: "malformed", message: `options[${i}] must have a numeric value and a localized label` });
      }
    });
  }
  if (!Array.isArray(def.questions) || def.questions.length === 0) {
    issues.push({ code: "malformed", message: "questions must be a non-empty array" });
  } else {
    const seen = new Set<string>();
    def.questions.forEach((question, i) => {
      if (typeof question !== "object" || question === null) {
        issues.push({ code: "malformed", message: `questions[${i}] must be an object` });
        return;
      }
      const q = question as Partial<AssessmentQuestion>;
      if (typeof q.id !== "string" || q.id.length === 0) {
        issues.push({ code: "malformed", message: `questions[${i}].id must be a non-empty string` });
      } else if (seen.has(q.id)) {
        issues.push({ code: "duplicate_question", message: `duplicate question id "${q.id}"`, questionId: q.id });
      } else {
        seen.add(q.id);
      }
      if (!isLocalizedText(q.text)) {
        issues.push({ code: "malformed", message: `questions[${i}].text must map locales to strings`, questionId: typeof q.id === "string" ? q.id : undefined });
      }
      if (q.options !== undefined && (!Array.isArray(q.options) || q.options.length === 0 || !q.options.every(isOption))) {
        issues.push({ code: "malformed", message: `questions[${i}].options, when present, must be a non-empty array of options`, questionId: typeof q.id === "string" ? q.id : undefined });
      }
    });

    if (def.scoring && typeof def.scoring === "object") {
      const scoring = def.scoring;
      if (scoring.kind === "subscales" && Array.isArray(scoring.subscales)) {
        for (const subscale of scoring.subscales) {
          for (const questionId of subscale.questionIds ?? []) {
            if (!seen.has(questionId)) {
              issues.push({ code: "unknown_question", message: `subscale "${subscale.id}" references unknown question "${questionId}"`, questionId });
            }
          }
        }
      }
      if (scoring.kind === "count" && Array.isArray(scoring.items)) {
        for (const item of scoring.items) {
          if (!seen.has(item.questionId)) {
            issues.push({ code: "unknown_question", message: `count scoring references unknown question "${item.questionId}"`, questionId: item.questionId });
          }
        }
      }
      const flags =
        scoring.kind === "sum" || scoring.kind === "subscales" || scoring.kind === "count"
          ? scoring.flags ?? []
          : [];
      for (const flag of flags) {
        if (!seen.has(flag.questionId)) {
          issues.push({ code: "unknown_question", message: `flag "${flag.id}" references unknown question "${flag.questionId}"`, questionId: flag.questionId });
        }
      }
    }
  }

  return { valid: issues.length === 0, issues };
}

function isLocalizedText(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0 &&
    Object.values(value).every((entry) => typeof entry === "string")
  );
}

function isOption(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as AssessmentOption).value === "number" &&
    Number.isFinite((value as AssessmentOption).value) &&
    isLocalizedText((value as AssessmentOption).label)
  );
}

/**
 * An assessment: questions plus an enumerated option scale, with helpers for
 * localization, serialization, response creation, and evaluation.
 */
export class Assessment {
  readonly definition: AssessmentDefinition;
  private readonly questionIndex: Map<string, AssessmentQuestion>;

  /** @throws PsytoolsError `invalid_definition` when the definition is malformed. */
  constructor(definition: AssessmentDefinition) {
    const result = validateDefinition(definition);
    if (!result.valid) {
      const details = result.issues.map((issue) => issue.message).join("; ");
      throw new PsytoolsError("invalid_definition", `Invalid assessment definition: ${details}`);
    }
    this.definition = definition;
    this.questionIndex = new Map(definition.questions.map((q) => [q.id, q]));
  }

  get id(): string {
    return this.definition.id;
  }

  get questions(): readonly AssessmentQuestion[] {
    return this.definition.questions;
  }

  /** Locales for which at least one text of this assessment is available. */
  get locales(): string[] {
    return collectLocales([
      this.definition.title,
      this.definition.description,
      this.definition.instructions,
      ...this.definition.questions.map((q) => q.text),
    ]);
  }

  question(questionId: string): AssessmentQuestion | undefined {
    return this.questionIndex.get(questionId);
  }

  /** The option scale that applies to a question (its own or the default). */
  optionsFor(questionId: string): readonly AssessmentOption[] {
    const question = this.questionIndex.get(questionId);
    if (!question) {
      throw new PsytoolsError("unknown_question", `Unknown question "${questionId}" in assessment "${this.id}"`);
    }
    return question.options ?? this.definition.options;
  }

  title(locale?: string): string {
    return this.text(this.definition.title, locale);
  }

  /**
   * Flat, render-ready projection in one locale — hand this straight to a
   * frontend to display the questionnaire.
   */
  localize(locale?: string): LocalizedAssessmentView {
    const resolved = locale ?? this.definition.defaultLocale;
    const view: LocalizedAssessmentView = {
      id: this.id,
      locale: resolved,
      title: this.text(this.definition.title, resolved),
      questions: this.definition.questions.map((question, i) => ({
        id: question.id,
        index: i + 1,
        text: this.text(question.text, resolved),
        optional: question.optional ?? false,
        options: (question.options ?? this.definition.options).map((option) => ({
          value: option.value,
          label: this.text(option.label, resolved),
        })),
      })),
    };
    if (this.definition.description) {
      view.description = this.text(this.definition.description, resolved);
    }
    if (this.definition.instructions) {
      view.instructions = this.text(this.definition.instructions, resolved);
    }
    return view;
  }

  /** Starts a new (empty) response for this assessment. */
  createResponse(options?: { respondentId?: string; meta?: Record<string, unknown> }): AssessmentResponse {
    return new AssessmentResponse(this, options);
  }

  /**
   * Evaluates a response (or raw answers) with the definition's declarative
   * scoring, or with `options.evaluator` when provided.
   *
   * When given an `AssessmentResponse`, its status must be `complete` or
   * `submitted` — pass `allowIncomplete` to score partial responses anyway.
   * Raw answer maps skip the completeness check, but their values are
   * still validated against the option scales, and the scoring definition's
   * missing-data policy still applies.
   *
   * @throws PsytoolsError `incomplete_response` | `unknown_question` | `invalid_value` | `no_scoring`
   */
  evaluate(
    response: AssessmentResponse | Record<string, number>,
    options?: EvaluateOptions & { allowIncomplete?: boolean },
  ): EvaluationResult {
    if (typeof options === "function") {
      throw new PsytoolsError(
        "invalid_argument",
        "Pass the evaluator as an option: assessment.evaluate(response, { evaluator })",
      );
    }
    if (response instanceof AssessmentResponse) {
      const scorable = response.status === "complete" || response.status === "submitted";
      if (!scorable && !options?.allowIncomplete) {
        const missing = response.unanswered().join(", ");
        throw new PsytoolsError(
          "incomplete_response",
          `Cannot evaluate a response with status "${response.status}" (unanswered: ${missing}); ` +
            "pass { allowIncomplete: true } to score it anyway",
        );
      }
      return evaluate(this.definition, response.answers, { evaluator: options?.evaluator });
    }
    return evaluate(this.definition, response, { evaluator: options?.evaluator });
  }

  /** The plain serializable definition (used by `JSON.stringify`). */
  toJSON(): AssessmentDefinition {
    return this.definition;
  }

  /** Serializes the definition to a JSON string (for DB storage etc.). */
  stringify(space?: number): string {
    return JSON.stringify(this.definition, null, space);
  }

  /**
   * Parses and validates a definition from a JSON string or plain object.
   * @throws PsytoolsError `invalid_json` | `invalid_definition`
   */
  static parse(input: string | object): Assessment {
    let raw: unknown = input;
    if (typeof input === "string") {
      try {
        raw = JSON.parse(input);
      } catch (error) {
        throw new PsytoolsError("invalid_json", `Not valid JSON: ${(error as Error).message}`);
      }
    }
    return new Assessment(raw as AssessmentDefinition);
  }

  private text(text: Record<string, string>, locale?: string): string {
    return localizeText(text, locale ?? this.definition.defaultLocale, this.definition.defaultLocale);
  }
}
