/** Error thrown by psytools, carrying a stable machine-readable code. */
export class PsytoolsError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "PsytoolsError";
    this.code = code;
  }
}
