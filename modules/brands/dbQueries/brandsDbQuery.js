const brandModel = require('../models/brandsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let brands = await brandModel.findAll();
            return brands
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return brand
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let brand = await brandModel.findOne({id:0}, {where: {id}});
            return brand
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let brand = await brandModel.destroy({ where: {id} });
            return brand
        } catch (e) {
            throw e
        } 
    },
};