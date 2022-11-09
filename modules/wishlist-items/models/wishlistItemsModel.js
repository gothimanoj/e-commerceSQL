
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const WishlistItem = sequelize.define('WishlistItem', {
    wishlist_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    product_id:{
        allowNull:false,
        type:DataTypes.INTEGER
    }
}, {
    timestamps: true
});

module.exports = WishlistItem