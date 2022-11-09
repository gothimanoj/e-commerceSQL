const orderReturnDbQueries = require('../dbQueries/orderReturnsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let orderReturns = await orderReturnDbQueries.findAll();
            return orderReturns
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return orderReturn
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let orderReturn = await orderReturnDbQueries.update(_id);
            return orderReturn
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let orderReturn = await orderReturnDbQueries.delete({ _id: req.params.id });
            return orderReturn
        } catch (e) {
            throw e
        } 
    },
};