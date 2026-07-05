/**
 * Core data model for psytools.
 *
 * Everything here is plain, JSON-serializable data. Scoring rules are
 * declarative (not functions) so that a full assessment definition survives
 * `JSON.stringify` -> database -> `JSON.parse` round trips without losing
 * behavior.
 */

/**
 * A piece of text in one or more locales, keyed by BCP-47 language tag
 * (e.g. `{ en: "Not at all", tr: "Hiç", de: "Überhaupt nicht" }`).
 */
export type LocalizedText = Record<string, string>;

/** One choice in an enumerated multiple-choice scale (e.g. a Likert point). */
export interface AssessmentOption {
  /** Numeric score contributed when this option is chosen. */
  value: number;
  label: LocalizedText;
}

/** A single question (item) of an assessment. */
export interface AssessmentQuestion {
  /** Stable unique id within the assessment, e.g. `"phq9-3"`. */
  id: string;
  text: LocalizedText;
  /**
   * Question-specific options. When omitted, the assessment-level `options`
   * scale applies (the common case for standardized inventories).
   */
  options?: AssessmentOption[];
  /**
   * When true, the answered value is reversed against the option scale
   * (max + min - value) before scoring.
   */
  reverseScored?: boolean;
  /** When true, the question may be left unanswered at submit time. */
  optional?: boolean;
}

/** A severity band: an inclusive score range with a localized label. */
export interface ScoreBand {
  /** Stable machine-readable id, e.g. `"moderate"`. */
  id: string;
  /** Inclusive lower bound. */
  min: number;
  /** Inclusive upper bound. */
  max: number;
  label: LocalizedText;
}

/**
 * A clinical flag raised by a single item's answer, independent of the total
 * score — e.g. PHQ-9 item 9 (self-harm ideation) answered above 0.
 */
export interface ScoreFlag {
  /** Stable machine-readable id, e.g. `"suicidality"`. */
  id: string;
  questionId: string;
  /** The flag is raised when the (raw) answer value is >= this. */
  minValue: number;
  label: LocalizedText;
}

/** How a scorer treats unanswered items among the ones it uses. */
export type MissingDataStrategy = "ignore" | "prorate" | "require-complete";

/**
 * Missing-data policy for declarative scoring. Applies when incomplete
 * answers reach the scorer (raw answer maps, or `allowIncomplete`).
 *
 * - `ignore` (default): unanswered items contribute nothing — partial
 *   totals understate severity, so use deliberately.
 * - `prorate`: the raw score is scaled up by totalItems / answeredItems
 *   and rounded before any multiplier, per scale/subscale.
 * - `require-complete`: evaluation throws `incomplete_response` when any
 *   contributing item is unanswered.
 */
export interface MissingDataPolicy {
  strategy: MissingDataStrategy;
  /**
   * Minimum answered contributing items (per scale/subscale) needed to
   * produce a score; below it evaluation throws `incomplete_response`.
   * Defaults to 1 for `prorate`, 0 otherwise.
   */
  minAnswered?: number;
}

/** Sums all answers into a single total score (PHQ-9, GAD-7, ...). */
export interface SumScoring {
  kind: "sum";
  /** Multiplier applied to the raw sum (WHO-5 reports raw x 4 as 0-100). */
  multiplier?: number;
  /** Severity bands the (multiplied) total is matched against. */
  bands?: ScoreBand[];
  flags?: ScoreFlag[];
  missing?: MissingDataPolicy;
}

/** One subscale of a multi-scale scoring definition. */
export interface SubscaleDefinition {
  /** Stable machine-readable id, e.g. `"depression"`. */
  id: string;
  label: LocalizedText;
  /** Ids of the questions contributing to this subscale. */
  questionIds: string[];
  /** Multiplier applied to the raw subscale sum (DASS-21 uses 2). */
  multiplier?: number;
  bands?: ScoreBand[];
}

/** Scores groups of items into named subscales (DASS-21, ...). */
export interface SubscaleScoring {
  kind: "subscales";
  subscales: SubscaleDefinition[];
  flags?: ScoreFlag[];
  /** Applied to each subscale independently. */
  missing?: MissingDataPolicy;
}

/** One item of a `count` scoring: when it counts as screen-positive. */
export interface CountScoringItem {
  questionId: string;
  /**
   * The item counts as positive when its answer value is >= this.
   * `reverseScored` questions are inverted against their scale first.
   */
  minValue: number;
}

/**
 * Counts how many items cross their per-item threshold (ASRS v1.1,
 * AQ-10, ...). The score is the number of positive items.
 */
export interface CountScoring {
  kind: "count";
  items: CountScoringItem[];
  /** Bands the positive-item count is matched against. */
  bands?: ScoreBand[];
  flags?: ScoreFlag[];
  /** `prorate` scales the positive count by totalItems / answeredItems. */
  missing?: MissingDataPolicy;
}

/** Declarative, serializable scoring rules built into psytools. */
export type ScoringDefinition = SumScoring | SubscaleScoring | CountScoring;

/**
 * The complete, serializable description of an assessment.
 *
 * This is the unit you persist, exchange between backend and frontend, and
 * feed to the `Assessment` class.
 */
export interface AssessmentDefinition {
  /** Stable unique id, e.g. `"phq9"` or `"my-clinic/intake-2026"`. */
  id: string;
  /** Version of this definition (semver or free-form), for provenance. */
  version?: string;
  title: LocalizedText;
  description?: LocalizedText;
  /** Instructions shown to the respondent (incl. the recall timeframe). */
  instructions?: LocalizedText;
  /** Locale used when a requested locale is missing. */
  defaultLocale: string;
  /** Default option scale applied to every question without own options. */
  options: AssessmentOption[];
  questions: AssessmentQuestion[];
  /** Optional declarative scoring. Custom evaluators may be used instead. */
  scoring?: ScoringDefinition;
  /** Free-form metadata (source, license, citation, timeframe, ...). */
  meta?: Record<string, unknown>;
}

/** Answers keyed by question id. */
export type AnswerMap = Record<string, number>;

/**
 * Lifecycle of a response, tracked as a simple state machine:
 *
 * `empty` -> `in-progress` -> `complete` -> `submitted`
 *
 * Answering and clearing answers moves between the first three states in
 * both directions; `submit()` moves to the terminal `submitted` state.
 */
export type ResponseStatus = "empty" | "in-progress" | "complete" | "submitted";

/** Serialized form of an `AssessmentResponse`. */
export interface ResponseData {
  assessmentId: string;
  /** Version of the assessment definition answered, if it declared one. */
  assessmentVersion?: string;
  answers: AnswerMap;
  /** Informational lifecycle state; recomputed from answers on parse. */
  status?: ResponseStatus;
  /** Opaque identifier of the respondent (client/case id). Optional. */
  respondentId?: string;
  /** ISO-8601 timestamps. */
  startedAt: string;
  submittedAt?: string;
  meta?: Record<string, unknown>;
}

/** Codes a validation issue can carry (a subset of `PsytoolsErrorCode`). */
export type ValidationIssueCode =
  | "unknown_question"
  | "invalid_value"
  | "missing_answer"
  | "duplicate_question"
  | "malformed";

/** A single validation problem. */
export interface ValidationIssue {
  code: ValidationIssueCode;
  message: string;
  questionId?: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

/** A resolved severity band in an evaluation result. */
export interface BandResult {
  id: string;
  label: LocalizedText;
}

/** A flag that was raised during evaluation. */
export interface TriggeredFlag {
  id: string;
  questionId: string;
  value: number;
  label: LocalizedText;
}

/** A single numeric score with its possible range and matched band. */
export interface ScaleScore {
  score: number;
  /** Lowest achievable score. */
  min: number;
  /** Highest achievable score. */
  max: number;
  /** Matched severity band, if bands are defined and one matches. */
  band?: BandResult;
}

/** Result of a single-scale evaluation (e.g. PHQ-9 total). */
export interface ScaleResult extends ScaleScore {
  kind: "scale";
  flags: TriggeredFlag[];
}

/** Result of a multi-scale evaluation (e.g. DASS-21 subscales). */
export interface MultiScaleResult {
  kind: "multiscale";
  scales: Array<ScaleScore & { id: string; label: LocalizedText }>;
  flags: TriggeredFlag[];
}

/** Result of a categorizing evaluation (e.g. attachment style). */
export interface CategoricalResult {
  kind: "categorical";
  category: string;
  label?: LocalizedText;
  flags?: TriggeredFlag[];
}

/** Escape hatch for arbitrary evaluator output. */
export interface CustomResult {
  kind: "custom";
  data: unknown;
}

export type EvaluationResult =
  | ScaleResult
  | MultiScaleResult
  | CategoricalResult
  | CustomResult;

/**
 * A custom evaluation function. Receives the definition and the validated
 * answers and returns any `EvaluationResult` shape.
 */
export type Evaluator = (
  definition: AssessmentDefinition,
  answers: AnswerMap,
) => EvaluationResult;

/** Flat, render-ready projection of an assessment in a single locale. */
export interface LocalizedAssessmentView {
  id: string;
  locale: string;
  title: string;
  description?: string;
  instructions?: string;
  questions: Array<{
    id: string;
    /** 1-based position, handy for display. */
    index: number;
    text: string;
    optional: boolean;
    options: Array<{ value: number; label: string }>;
  }>;
}
