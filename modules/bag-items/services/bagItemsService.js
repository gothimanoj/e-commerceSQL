const bagItemDbQueries = require('../dbQueries/bagItemsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let bagItems = await bagItemDbQueries.findAll();
            return bagItems
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return bagItem
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let bagItem = await bagItemDbQueries.update(_id);
            return bagItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let bagItem = await bagItemDbQueries.delete({ _id: req.params.id });
            return bagItem
        } catch (e) {
            throw e
        } 
    },
    
    remove : async (req, res, next) => {
        try {
            let bagItem = await bagItemDbQueries.remove(req);
            return bagItem
        } catch (e) {
            throw e
        } 
    },
};