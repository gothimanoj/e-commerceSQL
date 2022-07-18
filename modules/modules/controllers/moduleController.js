const { join } = require("path");
const pluralize = require("pluralize");
const Module = require("../models/modulesModel");
const { mkdirSync, writeFileSync } = require("fs");
const { error } = require("../../../middlewares/response");
const modelTemplate = require("../templates/modelTemplate");
const controllerTemplate = require("../templates/controllerTemplate");
const serviceTemplate = require("../templates/serviceTemplate");
const dbQueryTemplate = require("../templates/dbQueryTemplate");
const modulesPath = require("../../../environment")("app").modulesPath;
const {
    camelCase,
    sentenceCase,
    paramCase,
    pascalCase,
} = require("change-case");
const createRequestTemplate = require("../templates/createRequestTemplate");
const updateRequestTemplate = require("../templates/updateRequestTemplate");
const apiTemplate = require("../templates/apiTemplate");

module.exports = {
    create: async (req, res, next) => {
        try {
            let { moduleName, createModule } = req.body;
            moduleName = pluralize.plural(moduleName);

            let module = await Module.findOne({ where: { moduleName } });
            console.log(module);

            if (module) {
                res.code = 409;
                res.message = "Module already exists";
                return (res.data = module);
            }

            if (createModule) {
                let [
                    moduleNameCamelCase,
                    moduleNameParamCase,
                    moduleNameSentanceCase,
                    moduleNamePascalCase,
                ] = [
                    camelCase(moduleName),
                    paramCase(moduleName),
                    sentenceCase(moduleName),
                    pascalCase(moduleName),
                ];

                let moduleStructure = {
                    modulePath: join(modulesPath, moduleNameParamCase), 
                    controllerPath: join(
                        modulesPath,
                        moduleNameParamCase,
                        "controllers"
                    ),
                    servicePath: join(
                        modulesPath,
                        moduleNameParamCase,
                        "services"
                    ),
                    dbQueryPath: join(
                        modulesPath,
                        moduleNameParamCase,
                        "dbQueries"
                    ),
                    modelPath: join(modulesPath, moduleNameParamCase, "models"),
                    // requestPath: join(
                    //     modulesPath,
                    //     moduleNameParamCase,
                    //     "requests"
                    // ),
                    routePath: join(modulesPath, moduleNameParamCase, "routes"),
                    controller: join(
                        modulesPath,
                        moduleNameParamCase,
                        "controllers",
                        `${moduleNameCamelCase}Controller.js`
                    ),
                    service: join(
                        modulesPath,
                        moduleNameParamCase,
                        "services",
                        `${moduleNameCamelCase}Service.js`
                    ),
                    dbQuery: join(
                        modulesPath,
                        moduleNameParamCase,
                        "dbQueries",
                        `${moduleNameCamelCase}DbQuery.js`
                    ),
                    model: join(
                        modulesPath,
                        moduleNameParamCase,
                        "models",
                        `${moduleNameCamelCase}Model.js`
                    ),
                    createRequest: join(
                        modulesPath,
                        moduleNameParamCase,
                        "requests",
                        `create${moduleNamePascalCase}Request.js`
                    ),
                    updateRequest: join(
                        modulesPath,
                        moduleNameParamCase,
                        "requests",
                        `update${moduleNamePascalCase}Request.js`
                    ),
                    api: join(
                        modulesPath,
                        moduleNameParamCase,
                        "routes",
                        `${moduleNameCamelCase}Api.js`
                    ),
                };

                mkdirSync(moduleStructure.modulePath);
                mkdirSync(moduleStructure.controllerPath);
                mkdirSync(moduleStructure.servicePath);
                mkdirSync(moduleStructure.dbQueryPath);
                mkdirSync(moduleStructure.modelPath);
                // mkdirSync(moduleStructure.requestPath);
                mkdirSync(moduleStructure.routePath);

                writeFileSync(
                    moduleStructure.controller,
                    controllerTemplate(
                        moduleNameCamelCase,
                        moduleNameSentanceCase
                    )
                );
                writeFileSync(
                    moduleStructure.service,
                    serviceTemplate(
                        moduleNameCamelCase,
                        moduleNameSentanceCase
                    )
                );
                writeFileSync(
                    moduleStructure.dbQuery,
                    dbQueryTemplate(
                        moduleNameCamelCase,
                        moduleNameSentanceCase
                    )
                );

                writeFileSync(
                    moduleStructure.model,
                    modelTemplate(moduleNameCamelCase, moduleNamePascalCase)
                );

                // writeFileSync(
                //     moduleStructure.createRequest,
                //     createRequestTemplate()
                // );

                // writeFileSync(
                //     moduleStructure.updateRequest,
                //     updateRequestTemplate()
                // );

                writeFileSync(
                    moduleStructure.api,
                    apiTemplate(
                        moduleNameCamelCase,
                        moduleNamePascalCase,
                        moduleNameParamCase
                    )
                );
            }

            res.code = 201;
            res.message = "Module saved successfully";
            res.data = await Module.create({
                moduleName,
            });
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};
