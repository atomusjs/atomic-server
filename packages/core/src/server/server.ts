import { AvailableServers } from "./ports";
import { ServerError } from "./server-error";
import { ServerOptions } from "./server-options";

export class Server<
  Library extends AvailableServers = AvailableServers.EXPRESS
> {
  public readonly lib: Library;
  public readonly port: number;

  constructor(options: ServerOptions<Library>) {
    this.lib = options.server || this.getDefaultServer();
    this.port = options.port;
  }

  private getDefaultServer() {
    return AvailableServers.EXPRESS as Library;
  }

  async start() {
    throw ServerError.MethodNotImplemented("start");
  }
}
