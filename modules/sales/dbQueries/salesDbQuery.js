const saleModel = require('../models/salesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let sales = await saleModel.findAll();
            return sales
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return sale
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let sale = await saleModel.findOne({id:0}, {where: {id}});
            return sale
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let sale = await saleModel.destroy({ where: {id} });
            return sale
        } catch (e) {
            throw e
        } 
    },
};