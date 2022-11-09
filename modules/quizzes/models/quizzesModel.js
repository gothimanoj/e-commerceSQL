
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Quiz = sequelize.define('Quiz', {
    //
}, {
    timestamps: true
});

module.exports = Quiz