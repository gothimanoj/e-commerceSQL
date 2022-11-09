const quizDbQueries = require('../dbQueries/quizzesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let quizzes = await quizDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let quiz = await quizDbQueries.update(_id);
            return quiz
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let quiz = await quizDbQueries.delete({ _id: req.params.id });
            return quiz
        } catch (e) {
            throw e
        } 
    },
};