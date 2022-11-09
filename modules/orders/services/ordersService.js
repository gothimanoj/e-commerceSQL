const orderDbQueries = require('../dbQueries/ordersDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let orders = await orderDbQueries.findAll();
            return orders
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            var order = await orderDbQueries.create(req);
            return order
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let order = await orderDbQueries.update(_id);
            return order
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let order = await orderDbQueries.delete({ _id: req.params.id });
            return order
        } catch (e) {
            throw e
        } 
    },
};