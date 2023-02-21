import { createFlag } from "./create";

/**
 * @param {string} name
 * @returns {boolean}
 */
export function booleanFlag(name) {
  const flag = createFlag(name);
  return process.argv.includes(flag);
}
