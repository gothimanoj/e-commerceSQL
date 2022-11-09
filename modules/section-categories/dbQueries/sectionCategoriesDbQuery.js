const sectionCategoryModel = require('../models/sectionCategoriesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let sectionCategories = await sectionCategoryModel.findAll();
            return sectionCategories
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return sectionCategory
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let sectionCategory = await sectionCategoryModel.findOne({id:0}, {where: {id}});
            return sectionCategory
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let sectionCategory = await sectionCategoryModel.destroy({ where: {id} });
            return sectionCategory
        } catch (e) {
            throw e
        } 
    },
};