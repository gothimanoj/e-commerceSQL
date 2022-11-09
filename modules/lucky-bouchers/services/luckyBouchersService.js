const luckyBoucherDbQueries = require('../dbQueries/luckyBouchersDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let luckyBouchers = await luckyBoucherDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let luckyBoucher = await luckyBoucherDbQueries.update(_id);
            return luckyBoucher
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let luckyBoucher = await luckyBoucherDbQueries.delete({ _id: req.params.id });
            return luckyBoucher
        } catch (e) {
            throw e
        } 
    },
};