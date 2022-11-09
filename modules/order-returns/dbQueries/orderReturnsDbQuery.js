const orderReturnModel = require('../models/orderReturnsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let orderReturns = await orderReturnModel.findAll();
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

    update: async (id) => {
        try {
            let orderReturn = await orderReturnModel.findOne({id:0}, {where: {id}});
            return orderReturn
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let orderReturn = await orderReturnModel.destroy({ where: {id} });
            return orderReturn
        } catch (e) {
            throw e
        } 
    },
};