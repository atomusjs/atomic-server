import fs from "fs";
import { StringReplacer } from "./string-replacer";

/** @constructor */
class ImportToRequire {
  /**
   * @param {string} path
   * @return {Promise<string>}
   * @private
   */
  static transpile(path) {
    const source = fs.readFileSync(path, "utf-8");
    const code = new StringReplacer(source);
    code.replace(/import\.meta\.url/g, "__filename");
    // code.replace(/import\((.+)\)/g, "require($1)");
    return code.toString();
  }
}

/** @return {import("esbuild").Plugin} */
export function ImportToRequirePlugin() {
  const name = "ImportToRequire";

  /** @type {import("esbuild").Plugin["setup"]} */
  const setup = (build) => {
    build.onLoad({ filter: /.*/g, namespace: "file" }, async ({ path }) => {
      if (build.initialOptions.format !== "cjs") {
        return;
      }

      const transpiledCode = ImportToRequire.transpile(path);
      return { contents: transpiledCode, loader: "ts" };
    });
  };

  return { name, setup };
}
