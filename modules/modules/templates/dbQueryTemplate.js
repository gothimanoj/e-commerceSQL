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


module.exports = {
    findAll: async (req) => {
        try {
            let ${moduleNameCamelCasePlural} = await ${moduleNameCamelCaseSingular}Model.findAll();
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

    update: async (id) => {
        try {
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}Model.findOne({id:0}, {where: {id}});
            return ${moduleNameCamelCaseSingular}
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let ${moduleNameCamelCaseSingular} = await ${moduleNameCamelCaseSingular}Model.destroy({ where: {id} });
            return ${moduleNameCamelCaseSingular}
        } catch (e) {
            throw e
        } 
    },
};`;
};
