const sequelize = require('../../../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true 
    },
    number: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,

});

module.exports = User