const saleItemDbQueries = require('../dbQueries/saleItemsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let saleItems = await saleItemDbQueries.findAll();
            return saleItems
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return saleItem
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let saleItem = await saleItemDbQueries.update(_id);
            return saleItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let saleItem = await saleItemDbQueries.delete({ _id: req.params.id });
            return saleItem
        } catch (e) {
            throw e
        } 
    },
};