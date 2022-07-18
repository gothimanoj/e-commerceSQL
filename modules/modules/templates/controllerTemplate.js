const pluralize = require("pluralize");

module.exports = (moduleNameCamelCase, moduleNameSentanceCase) => {
    const moduleNameCamelCasePlural = pluralize.plural(moduleNameCamelCase);
    const moduleNameCamelCaseSingular = pluralize.singular(moduleNameCamelCase);
    const moduleNameSentanceCasePlural = pluralize.plural(
        moduleNameSentanceCase
    );
    const moduleNameSentanceCaseSingular = pluralize.singular(
        moduleNameSentanceCase
    );

    return `const ${moduleNameCamelCaseSingular}Model = require('../models/${moduleNameCamelCase}Model');
    const ${moduleNameCamelCaseSingular}Service = require('../services/${moduleNameCamelCase}Service');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    all: async (req, res, next) => {
        try {
            let ${moduleNameCamelCasePlural} = await ${moduleNameCamelCaseSingular}Service.all(req);
            if (${moduleNameCamelCasePlural}.length) {
                res.code = RESPONSE_OK;
                res.message = "${moduleNameSentanceCasePlural} data fetched successfully";
                res.data = ${moduleNameCamelCasePlural};
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "${moduleNameSentanceCasePlural} not found";
                res.data = ${moduleNameCamelCasePlural};
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "${moduleNameSentanceCaseSingular} saved successfully";
            res.data = await ${moduleNameCamelCaseSingular}Model.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}Service.update(req);
            if (${moduleNameCamelCaseSingular}) {
                ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}.save();
                res.code = RESPONSE_UPDATED;
                res.message = "${moduleNameSentanceCaseSingular} updated successfully";
                res.data = ${moduleNameCamelCaseSingular};
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "${moduleNameSentanceCaseSingular} not found";
                res.data = ${moduleNameCamelCaseSingular};
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}Service.delete(req);
            if (${moduleNameCamelCaseSingular}) {
                res.code = RESPONSE_DELETED;
                res.message = "${moduleNameSentanceCaseSingular} deleted successfully";
                res.data = ${moduleNameCamelCaseSingular};
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "${moduleNameSentanceCaseSingular} not found";
                res.data = ${moduleNameCamelCaseSingular};
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};`;
};
