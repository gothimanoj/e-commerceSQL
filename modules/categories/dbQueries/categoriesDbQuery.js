const categoryModel = require('../models/categoriesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let categories = await categoryModel.findAll();
            return categories
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return category
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let category = await categoryModel.findOne({id:0}, {where: {id}});
            return category
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let category = await categoryModel.destroy({ where: {id} });
            return category
        } catch (e) {
            throw e
        } 
    },
};