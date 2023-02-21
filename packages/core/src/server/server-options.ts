import { AvailableServers } from "./ports";

export type ServerOptions<Framework extends AvailableServers> = {
  port: number;
  server?: Framework;
};
