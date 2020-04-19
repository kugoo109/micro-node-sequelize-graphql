import { getGlobbedPaths } from "../utils/path";

export default {
  app: {
    title: "Sample Task REST API",
    version: "1.0.0",
    description: "A solution to the problem provided by Sample"
  },
  port: 3000,
  db: {
    uri: "postgres://postgres:P@ssword123@localhost:5432/sample_dev",
    // uri: "postgres://postgres:P@ssword123@postgres:5432/sample_dev",
    debug: false
  },
  tokenSecret: process.env.TOKEN_SECRET || "sEcReT",
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || 5356800, // in seconds
  tokenAlgorithms: [],
  // Setting Globbed route files
  files: {
    routes: getGlobbedPaths(["dist/routes/**/*.js"]),
    handlers: getGlobbedPaths(["dist/handlers/**/*.js"]),
    models: getGlobbedPaths(["dist/models/*.js", "dist/models/**/*.js"]),
  },
};
