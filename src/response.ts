import type {
  AnswerMap,
  ResponseData,
  ResponseStatus,
  ValidationIssue,
  ValidationResult,
} from "./types.ts";
import type { Assessment } from "./assessment.ts";
import { PsytoolsError } from "./errors.ts";

/**
 * A respondent's answers to one assessment.
 *
 * Supports answering one question at a time (`answer`) or all at once
 * (`answerAll`), validates every value against the assessment's option
 * scale, and becomes immutable once submitted.
 */
export class AssessmentResponse {
  readonly assessment: Assessment;
  readonly respondentId?: string;
  readonly meta?: Record<string, unknown>;
  readonly startedAt: Date;

  private readonly values = new Map<string, number>();
  private submittedTime?: Date;
  private state: ResponseStatus = "empty";

  constructor(
    assessment: Assessment,
    options?: {
      respondentId?: string;
      meta?: Record<string, unknown>;
      startedAt?: Date;
    },
  ) {
    this.assessment = assessment;
    this.respondentId = options?.respondentId;
    this.meta = options?.meta;
    this.startedAt = options?.startedAt ?? new Date();
  }

  /** Answers keyed by question id (a copy — mutate via `answer`). */
  get answers(): AnswerMap {
    return Object.fromEntries(this.values);
  }

  get submittedAt(): Date | undefined {
    return this.submittedTime;
  }

  get isSubmitted(): boolean {
    return this.submittedTime !== undefined;
  }

  /** Current lifecycle state (see `ResponseStatus`). */
  get status(): ResponseStatus {
    return this.state;
  }

  /**
   * Answers a single question. Re-answering replaces the previous value.
   * @throws PsytoolsError `already_submitted` | `unknown_question` | `invalid_value`
   */
  answer(questionId: string, value: number): this {
    this.assertMutable();
    const issue = this.checkAnswer(questionId, value);
    if (issue) throw new PsytoolsError(issue.code, issue.message);
    this.values.set(questionId, value);
    this.refreshState();
    return this;
  }

  /**
   * Answers many questions at once. Accepts a map of question id -> value,
   * or an array of values in question order.
   */
  answerAll(answers: AnswerMap | number[]): this {
    this.assertMutable();
    const entries: Array<[string, number]> = Array.isArray(answers)
      ? answers.map((value, i) => {
          const question = this.assessment.questions[i];
          if (!question) {
            throw new PsytoolsError(
              "invalid_value",
              `Got ${answers.length} answers but assessment "${this.assessment.id}" has ${this.assessment.questions.length} questions`,
            );
          }
          return [question.id, value];
        })
      : Object.entries(answers);

    // Validate everything first so a failure does not apply partially.
    for (const [questionId, value] of entries) {
      const issue = this.checkAnswer(questionId, value);
      if (issue) throw new PsytoolsError(issue.code, issue.message);
    }
    for (const [questionId, value] of entries) {
      this.values.set(questionId, value);
    }
    this.refreshState();
    return this;
  }

  /** Removes an answer (e.g. respondent deselects a choice). */
  clearAnswer(questionId: string): this {
    this.assertMutable();
    this.values.delete(questionId);
    this.refreshState();
    return this;
  }

  /** Ids of required questions that are not answered yet. */
  unanswered(): string[] {
    return this.assessment.questions
      .filter((q) => !(q.optional ?? false) && !this.values.has(q.id))
      .map((q) => q.id);
  }

  /** Completion ratio in `[0, 1]` over all questions. */
  progress(): number {
    const total = this.assessment.questions.length;
    return total === 0 ? 1 : this.values.size / total;
  }

  isComplete(): boolean {
    return this.unanswered().length === 0;
  }

  /**
   * Validates the current answers against the assessment: every answered
   * value must belong to the question's option scale, and (unless
   * `partial`) every required question must be answered.
   */
  validate(options?: { partial?: boolean }): ValidationResult {
    const issues: ValidationIssue[] = [];
    for (const [questionId, value] of this.values) {
      const issue = this.checkAnswer(questionId, value);
      if (issue) issues.push(issue);
    }
    if (!options?.partial) {
      for (const questionId of this.unanswered()) {
        issues.push({
          code: "missing_answer",
          message: `Question "${questionId}" is not answered`,
          questionId,
        });
      }
    }
    return { valid: issues.length === 0, issues };
  }

  /**
   * Validates and finalizes the response. After submission the response is
   * immutable. Pass `allowIncomplete` to submit with unanswered optional-use
   * cases (answered values are still validated).
   * @throws PsytoolsError `already_submitted` | `invalid_response`
   */
  submit(options?: { allowIncomplete?: boolean; submittedAt?: Date }): this {
    this.assertMutable();
    const result = this.validate({ partial: options?.allowIncomplete });
    if (!result.valid) {
      const details = result.issues.map((issue) => issue.message).join("; ");
      throw new PsytoolsError("invalid_response", `Cannot submit response: ${details}`);
    }
    this.submittedTime = options?.submittedAt ?? new Date();
    this.state = "submitted";
    return this;
  }

  /** Plain serializable data (used by `JSON.stringify`). */
  toJSON(): ResponseData {
    const data: ResponseData = {
      assessmentId: this.assessment.id,
      answers: this.answers,
      status: this.state,
      startedAt: this.startedAt.toISOString(),
    };
    if (this.assessment.definition.version !== undefined) {
      data.assessmentVersion = this.assessment.definition.version;
    }
    if (this.respondentId !== undefined) data.respondentId = this.respondentId;
    if (this.submittedTime) data.submittedAt = this.submittedTime.toISOString();
    if (this.meta !== undefined) data.meta = this.meta;
    return data;
  }

  /** Serializes to a JSON string (for DB storage etc.). */
  stringify(space?: number): string {
    return JSON.stringify(this.toJSON(), null, space);
  }

  /**
   * Restores a response from serialized data, validating every answer
   * against the assessment.
   * @throws PsytoolsError `invalid_json` | `assessment_mismatch` | `unknown_question` | `invalid_value`
   */
  static parse(assessment: Assessment, input: string | ResponseData): AssessmentResponse {
    let data: ResponseData;
    if (typeof input === "string") {
      try {
        data = JSON.parse(input) as ResponseData;
      } catch (error) {
        throw new PsytoolsError("invalid_json", `Not valid JSON: ${(error as Error).message}`);
      }
    } else {
      data = input;
    }

    if (data.assessmentId !== assessment.id) {
      throw new PsytoolsError(
        "assessment_mismatch",
        `Response belongs to assessment "${data.assessmentId}", not "${assessment.id}"`,
      );
    }

    const response = new AssessmentResponse(assessment, {
      respondentId: data.respondentId,
      meta: data.meta,
      startedAt: data.startedAt ? new Date(data.startedAt) : undefined,
    });
    response.answerAll(data.answers ?? {});
    if (data.submittedAt) {
      response.submittedTime = new Date(data.submittedAt);
      response.state = "submitted";
    }
    return response;
  }

  private checkAnswer(questionId: string, value: number): ValidationIssue | undefined {
    const question = this.assessment.question(questionId);
    if (!question) {
      return {
        code: "unknown_question",
        message: `Question "${questionId}" does not exist in assessment "${this.assessment.id}"`,
        questionId,
      };
    }
    const options = question.options ?? this.assessment.definition.options;
    if (!options.some((option) => option.value === value)) {
      const allowed = options.map((option) => option.value).join(", ");
      return {
        code: "invalid_value",
        message: `Value ${value} is not a valid option for question "${questionId}" (allowed: ${allowed})`,
        questionId,
      };
    }
    return undefined;
  }

  private assertMutable(): void {
    if (this.state === "submitted") {
      throw new PsytoolsError("already_submitted", "Response was already submitted and is immutable");
    }
  }

  private refreshState(): void {
    if (this.values.size === 0) {
      this.state = "empty";
    } else {
      this.state = this.unanswered().length === 0 ? "complete" : "in-progress";
    }
  }
}
