const orderItemDbQueries = require('../dbQueries/orderItemsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let orderItems = await orderItemDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let orderItem = await orderItemDbQueries.update(_id);
            return orderItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let orderItem = await orderItemDbQueries.delete({ _id: req.params.id });
            return orderItem
        } catch (e) {
            throw e
        } 
    },
};