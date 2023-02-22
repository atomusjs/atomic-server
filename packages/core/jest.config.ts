import type { Config } from "jest";
import { name } from "./package.json";

export default <Config>{
  displayName: name,
  name,
};
