
    const {Sequelize , DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const CustomerSupport = sequelize.define('CustomerSupport', {
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    problem:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = CustomerSupport