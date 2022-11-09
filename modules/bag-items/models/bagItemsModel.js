const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');

const BagItem = sequelize.define('BagItem', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true ,
    //     primaryKey:true 
    // }
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    bag_id:{
        type : DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = BagItem