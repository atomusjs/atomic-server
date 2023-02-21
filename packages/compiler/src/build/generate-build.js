import esbuild from "esbuild";
import { generateBuildConfig } from "./base-config";

/**
 *
 * @param {import("esbuild").BuildOptions} config
 * @param {boolean} sync
 */
export async function generateBuild(config, sync = true) {
  const finalConfig = generateBuildConfig(config);

  const build = esbuild.build(finalConfig);

  if (sync) {
    await build;
  }
}
