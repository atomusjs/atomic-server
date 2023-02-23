import "reflect-metadata";
import { IController } from "../ports";
import { MetadataKeys } from "./metadata-keys";

export class ControllerMetadata {
  static defineBasePath<C extends IController>(
    controller: C,
    basepath: string
  ) {
    Reflect.defineMetadata(MetadataKeys.BASEPATH, basepath, controller);
  }

  static readBasePath<C extends IController>(controller: C) {
    const basepath: string | undefined = Reflect.getMetadata(
      MetadataKeys.BASEPATH,
      controller
    );

    return basepath;
  }
}
