const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');
const Category = sequelize.define('Category', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true
    // },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    section_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Category