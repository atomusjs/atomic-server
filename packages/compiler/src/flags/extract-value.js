/**
 * @param {string} flag
 * @param {string} raw
 * @returns {string}
 */
export function extractValueFromFlag(flag, raw) {
  return raw.replace(`${flag}=`, "");
}
