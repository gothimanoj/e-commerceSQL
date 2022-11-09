const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');

const Review = sequelize.define('Review', {
    // id :{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true ,
    //     autoIncrement:true 
    // },
    review:{
        type:DataTypes.STRING,
        allowNull: false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Review