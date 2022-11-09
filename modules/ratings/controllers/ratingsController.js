const ratingModel = require('../models/ratingsModel');
    const ratingService = require('../services/ratingsService');
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
            let ratings = await ratingService.all(req);
            if (ratings.length) {
                res.code = RESPONSE_OK;
                res.message = "Ratings data fetched successfully";
                res.data = ratings;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Ratings not found";
                res.data = ratings;
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
            res.message = "Rating saved successfully";
            res.data = await ratingModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let rating = await ratingService.update(req);
            if (rating) {
                rating = await rating.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Rating updated successfully";
                res.data = rating;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Rating not found";
                res.data = rating;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let rating = await ratingService.delete(req);
            if (rating) {
                res.code = RESPONSE_DELETED;
                res.message = "Rating deleted successfully";
                res.data = rating;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Rating not found";
                res.data = rating;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};