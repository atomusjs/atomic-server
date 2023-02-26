export type Directories = {
  controllers: string;
  models: string;
  views: string;
};

export const defaultDirectories: Directories = {
  controllers: "src/controllers/index.js",
  models: "src/models/index.js",
  views: "src/views/index.js",
};
