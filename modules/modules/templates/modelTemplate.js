const pluralize = require("pluralize");

module.exports = (moduleNameCamelCase, moduleNamePascalCase) => {
    const moduleNameCamelCaseSingular = pluralize.singular(moduleNameCamelCase);
    const moduleNamePascalCaseSingular = pluralize.singular(
        moduleNamePascalCase
    );

    return `
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const ${moduleNamePascalCaseSingular} = sequelize.define('${moduleNamePascalCaseSingular}', {
    //
}, {
    timestamps: true
});

module.exports = ${moduleNamePascalCaseSingular}`;
};
