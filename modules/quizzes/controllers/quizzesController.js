const quizModel = require('../models/quizzesModel');
    const quizService = require('../services/quizzesService');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    all: async (req, res, next) => {
        try {
            let quizzes = await quizService.all(req);
            if (quizzes.length) {
                res.code = RESPONSE_OK;
                res.message = "Quizzes data fetched successfully";
                res.data = quizzes;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Quizzes not found";
                res.data = quizzes;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Quiz saved successfully";
            res.data = await quizModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let quiz = await quizService.update(req);
            if (quiz) {
                quiz = await quiz.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Quiz updated successfully";
                res.data = quiz;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Quiz not found";
                res.data = quiz;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let quiz = await quizService.delete(req);
            if (quiz) {
                res.code = RESPONSE_DELETED;
                res.message = "Quiz deleted successfully";
                res.data = quiz;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Quiz not found";
                res.data = quiz;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};