
    const {Sequelize ,DataTypes} = require('sequelize');

const sequelize = require('../../../config/db');

const Bag = sequelize.define('Bag', {
    user_id:{
        type:DataTypes.INTEGER,
        // allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Bag