import { ControllerMetadata } from "./metadata";
import { extractBasepath } from "./extract-base-path";

export function Controller<C extends Function>(basepath?: string) {
  return (controller: C) => {
    const finalBasepath = extractBasepath(controller, basepath);
    ControllerMetadata.defineBasePath(controller, finalBasepath);
  };
}

Controller.ReadBasePath = function <C extends Function>(controller: C) {
  return ControllerMetadata.readBasePath(controller);
};
