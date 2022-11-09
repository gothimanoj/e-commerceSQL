
    const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Section = sequelize.define('Section', {
     section : {
        type : DataTypes.STRING,
        allowNull:false
     },
    
}, {
    timestamps: true
});

module.exports = Section