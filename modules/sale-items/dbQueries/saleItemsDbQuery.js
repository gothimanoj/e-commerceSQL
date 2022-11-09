const saleItemModel = require('../models/saleItemsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let saleItems = await saleItemModel.findAll();
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

    update: async (id) => {
        try {
            let saleItem = await saleItemModel.findOne({id:0}, {where: {id}});
            return saleItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let saleItem = await saleItemModel.destroy({ where: {id} });
            return saleItem
        } catch (e) {
            throw e
        } 
    },
};