import { PathManipulation } from "./path-manipulation";

export class DynamicImport extends PathManipulation {
  static async fromRoot(pathToFile: string) {
    const rootDir = this.getRootDir();
    const currentPath = this.getCurrentDir();
    const relativeToDir = this.relative(currentPath, rootDir);
    const finalPath = this.join(relativeToDir, pathToFile);
    const normalizedPath = this.normalize(finalPath);
    return import(normalizedPath);
  }
}
