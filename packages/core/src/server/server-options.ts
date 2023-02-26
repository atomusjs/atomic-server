import { Directories } from "./directories";
import { AvailableServers } from "./ports";

export type ServerOptions<Framework extends AvailableServers> = {
  port: number;
  server?: Framework;
  directories?: Partial<Directories>;
};
