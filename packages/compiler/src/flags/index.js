import { booleanFlag } from "./boolean";
import { stringFlag } from "./string";

export const flags = {
  watchMode: booleanFlag("watch"),
  lib: stringFlag("lib"),
};
