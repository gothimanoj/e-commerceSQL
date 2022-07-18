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

    return `const ${moduleNameCamelCaseSingular}DbQueries = require('../dbQueries/${moduleNameCamelCase}DbQuery');


module.exports = {
    all: async (req) => {
        try {
            let ${moduleNameCamelCasePlural} = await ${moduleNameCamelCaseSingular}DbQueries.findAll();
            return ${moduleNameCamelCasePlural}
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return ${moduleNameCamelCaseSingular}
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}DbQueries.update(_id);
            return ${moduleNameCamelCaseSingular}
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}DbQueries.delete({ _id: req.params.id });
            return ${moduleNameCamelCaseSingular}
        } catch (e) {
            throw e
        } 
    },
};`;
};
