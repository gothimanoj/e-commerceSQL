const app = require("./app");
const cors = require("cors");
const { join } = require("path");
const env = require("../environment");
const pluralize = require("pluralize");
const { camelCase, paramCase } = require("change-case");
const { readdirSync, statSync } = require("fs");
const { response } = require("../middlewares/response");
const { RESPONSE_NOT_FOUND, ROLES } = require("../helpers/constants");
// const limiter = require("../helpers/rateLimit")
const modulesPath = env("app").modulesPath;
const modules = readdirSync(modulesPath).filter((path) =>
  statSync(join(modulesPath, path)).isDirectory()
);

app.use(
  cors({
    origin: ["development", "staging"].includes(env("environment"))
      ? [
          env("frontend"),
          "http://localhost:3000",
          "https://admin.sourcebae.com",
        ]
      : env("frontend"),
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
// app.use(limiter);

  modules.forEach((module) => {
    const moduleNameCamelCase = pluralize.plural(camelCase(module));
    console.log(`${
      env("app").path
    }/modules/${module}/routes/${moduleNameCamelCase}Api.js`);
    app.use(
      `/api/${module}`,
      require(`${
        env("app").path
      }/modules/${module}/routes/${moduleNameCamelCase}Api.js`)
    );
  });

app.use("/api/*", (req, res) => {
  res.code = RESPONSE_NOT_FOUND;
  res.message = "Api not found";
  response(req, res);
});

module.exports = {};
