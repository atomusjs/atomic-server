import { AvailableServers } from "./ports";
import { ServerError } from "./server-error";
import { ServerOptions } from "./server-options";

export class Server<
  Framework extends AvailableServers = AvailableServers.EXPRESS
> {
  public readonly server: Framework;
  public readonly port: number;

  constructor(options: ServerOptions<Framework>) {
    this.server = options.server || this.getDefaultServer();
    this.port = options.port;
  }

  private getDefaultServer() {
    return AvailableServers.EXPRESS as Framework;
  }

  async start() {
    throw ServerError.MethodNotImplemented("start");
  }
}
