export class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServerError";
  }

  static MethodNotImplemented(name: string) {
    const message = `Method ${name} not implemented`;
    return new ServerError(message);
  }
}
