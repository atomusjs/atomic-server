export function extractBasepath<C extends Function>(
  controller: C,
  basepath?: string
) {
  if (!!basepath) {
    return basepath;
  }

  return controller.name.toLocaleLowerCase().replace(/controller$/, "");
}
