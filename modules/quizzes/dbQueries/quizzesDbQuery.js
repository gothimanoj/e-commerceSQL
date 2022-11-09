const quizModel = require('../models/quizzesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let quizzes = await quizModel.findAll();
            return quizzes
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return quiz
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let quiz = await quizModel.findOne({id:0}, {where: {id}});
            return quiz
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let quiz = await quizModel.destroy({ where: {id} });
            return quiz
        } catch (e) {
            throw e
        } 
    },
};