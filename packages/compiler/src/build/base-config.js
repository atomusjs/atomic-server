/**
 * @type {import("esbuild").BuildOptions}
 */
export const defaultBuildConfig = {
  bundle: true,
  platform: "node",
  keepNames: true,
};

/**
 *
 * @param {import("esbuild").BuildOptions} config
 * @returns {import("esbuild").BuildOptions}
 */
export function generateBuildConfig(config = {}) {
  return { ...defaultBuildConfig, ...config };
}
