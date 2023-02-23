import { ControllerMetadata, MetadataKeys } from "../metadata";

describe("Metadata controller", () => {
  it("Should set basepath metadata", () => {
    class PostController {}
    ControllerMetadata.defineBasePath(PostController, "post");
    const basepath = Reflect.getMetadata(MetadataKeys.BASEPATH, PostController);
    expect(basepath).toBe("post");
  });

  it("Should read basepath metadata", () => {
    class PostController {}
    ControllerMetadata.defineBasePath(PostController, "post");
    const basepath = ControllerMetadata.readBasePath(PostController);
    expect(basepath).toBe("post");
  });
});
