const ratingModel = require('../models/ratingsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let ratings = await ratingModel.findAll();
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

    update: async (id) => {
        try {
            let rating = await ratingModel.findOne({id:0}, {where: {id}});
            return rating
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let rating = await ratingModel.destroy({ where: {id} });
            return rating
        } catch (e) {
            throw e
        } 
    },
};