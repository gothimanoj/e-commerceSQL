const ratingDbQueries = require('../dbQueries/ratingsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let ratings = await ratingDbQueries.findAll();
            return ratings
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return rating
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let rating = await ratingDbQueries.update(_id);
            return rating
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let rating = await ratingDbQueries.delete({ _id: req.params.id });
            return rating
        } catch (e) {
            throw e
        } 
    },
};