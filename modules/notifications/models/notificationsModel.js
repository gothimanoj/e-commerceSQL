
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Notification = sequelize.define('Notification', {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    Notification:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Notification