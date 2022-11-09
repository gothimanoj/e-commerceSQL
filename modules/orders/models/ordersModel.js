const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');

const Order = sequelize.define('Order', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true ,
    //     autoIncrement:true 
    // },
    status:{
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

module.exports = Order