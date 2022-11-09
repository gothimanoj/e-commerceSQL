const wishlistItemDbQueries = require('../dbQueries/wishlistItemsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let wishlistItems = await wishlistItemDbQueries.findAll();
            return wishlistItems
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return wishlistItem
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let wishlistItem = await wishlistItemDbQueries.update(_id);
            return wishlistItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let wishlistItem = await wishlistItemDbQueries.delete({ _id: req.params.id });
            return wishlistItem
        } catch (e) {
            throw e
        } 
    },
};