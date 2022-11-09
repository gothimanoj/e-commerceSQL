
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const LuckyBoucher = sequelize.define('LuckyBoucher', {
    //
}, {
    timestamps: true
});

module.exports = LuckyBoucher