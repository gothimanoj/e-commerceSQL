const sectionCategoryDbQueries = require('../dbQueries/sectionCategoriesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let sectionCategories = await sectionCategoryDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let sectionCategory = await sectionCategoryDbQueries.update(_id);
            return sectionCategory
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let sectionCategory = await sectionCategoryDbQueries.delete({ _id: req.params.id });
            return sectionCategory
        } catch (e) {
            throw e
        } 
    },
};