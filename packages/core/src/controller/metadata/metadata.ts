import "reflect-metadata";
import { MetadataKeys } from "./metadata-keys";

export class ControllerMetadata {
  static defineBasePath<C extends Function>(controller: C, basepath: string) {
    Reflect.defineMetadata(MetadataKeys.BASEPATH, basepath, controller);
  }

  static readBasePath<C extends Function>(controller: C) {
    const basepath: string | undefined = Reflect.getMetadata(
      MetadataKeys.BASEPATH,
      controller
    );

    return basepath;
  }
}
