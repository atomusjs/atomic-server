import { Controller } from "../controller";

describe("Controller decorator", () => {
  it("Should set basepath from controller name", () => {
    @Controller()
    class UserController {}
    const basepath = Controller.ReadBasePath(UserController);
    expect(basepath).toBe("user");
  });

  it("Should set basepath passed by parameter", () => {
    @Controller("person")
    class UserController {}
    const basepath = Controller.ReadBasePath(UserController);
    expect(basepath).toBe("person");
  });
});
