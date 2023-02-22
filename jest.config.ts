import type { Config } from "jest";

export default <Config>{
  clearMocks: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "@swc/jest",
  },
};
