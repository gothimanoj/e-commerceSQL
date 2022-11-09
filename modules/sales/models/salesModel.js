
    const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Sale = sequelize.define('Sale', {
    sale :{
        type : DataTypes.STRING,
        allowNull:false

    },
    
    start_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    end_date:{
        type:DataTypes.DATE,
        allowNull:false
    }

}, {
    timestamps: true
});

module.exports = Sale