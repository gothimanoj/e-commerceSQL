const wishlistItemModel = require('../models/wishlistItemsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let wishlistItems = await wishlistItemModel.findAll();
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

    update: async (id) => {
        try {
            let wishlistItem = await wishlistItemModel.findOne({id:0}, {where: {id}});
            return wishlistItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let wishlistItem = await wishlistItemModel.destroy({ where: {id} });
            return wishlistItem
        } catch (e) {
            throw e
        } 
    },
};