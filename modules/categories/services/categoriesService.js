const categoryDbQueries = require('../dbQueries/categoriesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let categories = await categoryDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let category = await categoryDbQueries.update(_id);
            return category
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let category = await categoryDbQueries.delete({ _id: req.params.id });
            return category
        } catch (e) {
            throw e
        } 
    },
};