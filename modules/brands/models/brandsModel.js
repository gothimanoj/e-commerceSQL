
const {Sequelize,DataTypes} = require('sequelize'); 
const sequelize = require('../../../config/db');
const Brand = sequelize.define('Brand', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true,
    //     primaryKey:true
    // },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Brand

