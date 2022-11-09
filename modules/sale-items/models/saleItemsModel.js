
    const {Sequelize , DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const SaleItem = sequelize.define('SaleItem', {
    product_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    discount_price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = SaleItem