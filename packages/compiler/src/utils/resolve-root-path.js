import path from "path";
import { getRootPath } from "./get-root-path";

/**
 * @param {string} filename
 * @returns {string}
 */
export function resolveRootPath(filename) {
  const rootPath = getRootPath();
  return path.resolve(rootPath, filename).replace(/\\/g, "/");
}
