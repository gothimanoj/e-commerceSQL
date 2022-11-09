
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const OrderReturn = sequelize.define('OrderReturn', {
    order_id:{
        type : DataTypes.INTEGER,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    reason:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = OrderReturn