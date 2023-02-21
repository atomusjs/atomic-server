import { createFlag } from "./create";
import { FlagError } from "./error";
import { extractValueFromFlag } from "./extract-value";

/**
 * @param {string} name
 * @returns {string}
 */
export function stringFlag(name) {
  const flag = createFlag(name);
  const raw = process.argv.find((item) => item.includes(flag));

  if (!raw) {
    throw FlagError.FlagNotProvided(name);
  }

  const data = extractValueFromFlag(flag, raw);
  return data;
}
