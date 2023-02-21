import { TsconfigPathsPlugin } from "@esbuild-plugins/tsconfig-paths";
import { tsconifgLocation, config } from "./config";
import { flags } from "./flags";
import { generateBuildConfig } from "./build/base-config";
import { generateBuild } from "./build/generate-build";

async function emitDeclaration() {}

async function build() {
  const baseConfig = generateBuildConfig({
    entryPoints: [flags.lib],
    tsconfig: tsconifgLocation,
    plugins: [TsconfigPathsPlugin({ tsconfig: config })],
  });

  await generateBuild({
    ...baseConfig,
    outfile: "dist/index.umd.cjs",
    format: "cjs",
  });

  await generateBuild({
    ...baseConfig,
    outfile: "dist/index.js",
    format: "esm",
  });

  await emitDeclaration();
}

build();
