const saleDbQueries = require('../dbQueries/salesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let sales = await saleDbQueries.findAll();
            return sales
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return sale
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let sale = await saleDbQueries.update(_id);
            return sale
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let sale = await saleDbQueries.delete({ _id: req.params.id });
            return sale
        } catch (e) {
            throw e
        } 
    },
};