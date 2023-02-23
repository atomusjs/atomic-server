import { ControllerMetadata } from "./metadata";
import { extractBasepath } from "./extract-base-path";
import { IController } from "./ports";

export function Controller<C extends IController>(basepath?: string) {
  return (controller: C) => {
    const finalBasepath = extractBasepath(controller, basepath);
    ControllerMetadata.defineBasePath(controller, finalBasepath);
  };
}

Controller.ReadBasePath = function <C extends IController>(controller: C) {
  return ControllerMetadata.readBasePath(controller);
};
