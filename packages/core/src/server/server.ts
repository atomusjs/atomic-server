import { IController } from "@/controller/ports";
import { defaultDirectories, Directories } from "./directories";
import { DynamicImport } from "./dynamic-import";
import { AvailableServers } from "./ports";
import { ServerError } from "./server-error";
import { ServerOptions } from "./server-options";

export class Server<
  Library extends AvailableServers = AvailableServers.EXPRESS
> {
  public readonly lib: Library;
  public readonly port: number;
  public readonly directories: Directories;

  constructor(options: ServerOptions<Library>) {
    this.lib = options.server || this.getDefaultServer();
    this.port = options.port;
    this.directories = { ...defaultDirectories, ...options.directories };
  }

  private registerRoute(Controller: IController) {
    console.log("register", Controller.name);
    console.log(Controller);
  }

  private async registerControllers() {
    const controllersPath = this.directories.controllers;
    const ImportedModule = await DynamicImport.fromRoot(controllersPath);
    const moduleItems: any[] = Object.values(ImportedModule);
    const invalidControllers: string[] = [];

    for (const Controller of moduleItems) {
      if (typeof Controller !== "function") {
        const controllerName = (Controller as any).name || "unknown name";
        invalidControllers.push(controllerName);
        return;
      }

      if (!Controller.name.includes("Controller")) {
        invalidControllers.push(Controller.name);
        return;
      }

      this.registerRoute(Controller);
    }
  }

  private getDefaultServer() {
    return AvailableServers.EXPRESS as Library;
  }

  async start() {
    await this.registerControllers();
    throw ServerError.MethodNotImplemented("start");
  }
}
