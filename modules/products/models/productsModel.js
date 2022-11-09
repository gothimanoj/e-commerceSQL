
const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');

const Product = sequelize.define('Product', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true ,
        autoIncrement:true 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true 
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    keyword:{
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Product