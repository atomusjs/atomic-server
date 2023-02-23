import { IController } from "./ports";

export function extractBasepath<C extends IController>(
  controller: C,
  basepath?: string
) {
  if (!!basepath) {
    return basepath;
  }

  return controller.name.toLocaleLowerCase().replace(/controller$/, "");
}
