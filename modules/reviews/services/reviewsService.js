const reviewDbQueries = require('../dbQueries/reviewsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let reviews = await reviewDbQueries.findAll();
            return reviews
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return review
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let review = await reviewDbQueries.update(_id);
            return review
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let review = await reviewDbQueries.delete({ _id: req.params.id });
            return review
        } catch (e) {
            throw e
        } 
    },
};