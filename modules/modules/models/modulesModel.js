const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Module = sequelize.define('Module', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    moduleName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: true
});

module.exports = Module;
