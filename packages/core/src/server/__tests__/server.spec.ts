import { AvailableServers } from "../ports";
import { Server } from "../server";

describe("Test server class", () => {
  it("Should set express server as default", () => {
    const server = new Server({
      port: 3000,
    });

    expect(server.lib).toBe(AvailableServers.EXPRESS);
  });

  it("Should set express server if it is chosen", () => {
    const server = new Server({
      port: 3000,
      server: AvailableServers.EXPRESS,
    });

    expect(server.lib).toBe(AvailableServers.EXPRESS);
  });

  it("Should set hapi server if it is chosen", () => {
    const server = new Server({
      port: 3000,
      server: AvailableServers.HAPI,
    });

    expect(server.lib).toBe(AvailableServers.HAPI);
  });
});
