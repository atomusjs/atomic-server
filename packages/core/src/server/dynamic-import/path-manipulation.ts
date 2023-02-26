import path from "path";

export class PathManipulation {
  static getRootDir() {
    return process.cwd();
  }

  static getCurrentDir() {
    // const currentFile = __filename.replace(/file:\/*/, "");
    const currentFile = import.meta.url.replace(/file:\/*/, "");
    const currentDir = path.dirname(currentFile);
    return path.resolve(currentDir);
  }

  static relative(from: string, to: string) {
    return path.relative(from, to);
  }

  static join(...paths: string[]) {
    return path.join(...paths);
  }

  static normalize(value: string) {
    return value.replace(/\\/g, "/");
  }
}
