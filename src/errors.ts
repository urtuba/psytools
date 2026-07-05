/** Every error code psytools can throw, for exhaustive handling. */
export type PsytoolsErrorCode =
  // definition problems
  | "malformed"
  | "duplicate_question"
  | "invalid_definition"
  // answer problems
  | "unknown_question"
  | "invalid_value"
  | "missing_answer"
  // response lifecycle
  | "already_submitted"
  | "invalid_response"
  | "incomplete_response"
  | "assessment_mismatch"
  // evaluation
  | "no_scoring"
  // serialization & lookup
  | "invalid_json"
  | "unknown_inventory"
  // API misuse
  | "invalid_argument";

/** Error thrown by psytools, carrying a stable machine-readable code. */
export class PsytoolsError extends Error {
  readonly code: PsytoolsErrorCode;

  constructor(code: PsytoolsErrorCode, message: string) {
    super(message);
    this.name = "PsytoolsError";
    this.code = code;
  }
}
