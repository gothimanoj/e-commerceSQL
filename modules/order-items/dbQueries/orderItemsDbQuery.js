const orderItemModel = require('../models/orderItemsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let orderItems = await orderItemModel.findAll();
            return orderItems
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return orderItem
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let orderItem = await orderItemModel.findOne({id:0}, {where: {id}});
            return orderItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let orderItem = await orderItemModel.destroy({ where: {id} });
            return orderItem
        } catch (e) {
            throw e
        } 
    },
};