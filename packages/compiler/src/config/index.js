import { resolveRootPath } from "../utils";

export { default as config } from "./../../../../tsconfig.json" assert { type: "json" };

export const tsconifgLocation = resolveRootPath("tsconfig.json");
