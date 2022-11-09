
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const SectionCategory = sequelize.define('SectionCategory', {
    //
}, {
    timestamps: true
});

module.exports = SectionCategory