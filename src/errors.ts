/** Error thrown by psykit, carrying a stable machine-readable code. */
export class PsykitError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "PsykitError";
    this.code = code;
  }
}
