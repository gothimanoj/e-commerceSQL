
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const UserRole = sequelize.define('UserRole', {
     user_id:{
        type:DataTypes.INTEGER
     },
     role_id:{
        type:DataTypes.INTEGER
     }
}, {
    timestamps: true
});

module.exports = UserRole