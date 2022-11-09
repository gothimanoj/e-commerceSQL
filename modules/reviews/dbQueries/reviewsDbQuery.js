const reviewModel = require('../models/reviewsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let reviews = await reviewModel.findAll();
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

    update: async (id) => {
        try {
            let review = await reviewModel.findOne({id:0}, {where: {id}});
            return review
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let review = await reviewModel.destroy({ where: {id} });
            return review
        } catch (e) {
            throw e
        } 
    },
};