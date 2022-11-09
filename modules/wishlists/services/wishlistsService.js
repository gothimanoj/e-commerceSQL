const wishlistDbQueries = require('../dbQueries/wishlistsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let wishlists = await wishlistDbQueries.findAll();
            return wishlists
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return wishlist
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let wishlist = await wishlistDbQueries.update(_id);
            return wishlist
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let wishlist = await wishlistDbQueries.delete({ _id: req.params.id });
            return wishlist
        } catch (e) {
            throw e
        } 
    },
};