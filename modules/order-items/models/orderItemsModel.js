const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');

const OrderItem = sequelize.define('OrderItem', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true,
    //     primaryKey:true 
    // }
    order_id:{
        type:DataTypes.INTEGER,
        allowNull:false 
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = OrderItem