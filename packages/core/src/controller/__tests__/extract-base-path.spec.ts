import { extractBasepath } from "../extract-base-path";

describe("Extract basepath", () => {
  it("Should return basepath from controller name", () => {
    class UserController {}
    const basepath = extractBasepath(UserController);
    expect(basepath).toBe("user");
  });

  it("Should return basepath passed by parameter", () => {
    class UserController {}
    const basepath = extractBasepath(UserController, "person");
    expect(basepath).toBe("person");
  });
});
