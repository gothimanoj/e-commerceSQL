const luckyBoucherModel = require('../models/luckyBouchersModel');


module.exports = {
    findAll: async (req) => {
        try {
            let luckyBouchers = await luckyBoucherModel.findAll();
            return luckyBouchers
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return luckyBoucher
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let luckyBoucher = await luckyBoucherModel.findOne({id:0}, {where: {id}});
            return luckyBoucher
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let luckyBoucher = await luckyBoucherModel.destroy({ where: {id} });
            return luckyBoucher
        } catch (e) {
            throw e
        } 
    },
};