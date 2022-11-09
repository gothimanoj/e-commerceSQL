const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');
const Rating = sequelize.define('Rating', {
    // id :{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true ,
    //     primaryKey:true 
    // }
    rating:{
          type:DataTypes.STRING,
          allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Rating