const wishlistModel = require('../models/wishlistsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let wishlists = await wishlistModel.findAll();
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

    update: async (id) => {
        try {
            let wishlist = await wishlistModel.findOne({id:0}, {where: {id}});
            return wishlist
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let wishlist = await wishlistModel.destroy({ where: {id} });
            return wishlist
        } catch (e) {
            throw e
        } 
    },
};