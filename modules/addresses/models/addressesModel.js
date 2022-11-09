
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Address = sequelize.define('Address', {
      address:{
        type: DataTypes.STRING,
        allowNull:false
      },
      user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
}, {
    timestamps: true
});

module.exports = Address