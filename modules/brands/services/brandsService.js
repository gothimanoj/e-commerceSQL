const brandDbQueries = require('../dbQueries/brandsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let brands = await brandDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let brand = await brandDbQueries.update(_id);
            return brand
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let brand = await brandDbQueries.delete({ _id: req.params.id });
            return brand
        } catch (e) {
            throw e
        } 
    },
};