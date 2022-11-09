
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Wishlist = sequelize.define('Wishlist', {
    user_id:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Wishlist