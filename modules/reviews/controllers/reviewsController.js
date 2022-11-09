const reviewModel = require('../models/reviewsModel');
    const reviewService = require('../services/reviewsService');
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
            let reviews = await reviewService.all(req);
            if (reviews.length) {
                res.code = RESPONSE_OK;
                res.message = "Reviews data fetched successfully";
                res.data = reviews;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Reviews not found";
                res.data = reviews;
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
            res.message = "Review saved successfully";
            res.data = await reviewModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let review = await reviewService.update(req);
            if (review) {
                review = await review.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Review updated successfully";
                res.data = review;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Review not found";
                res.data = review;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let review = await reviewService.delete(req);
            if (review) {
                res.code = RESPONSE_DELETED;
                res.message = "Review deleted successfully";
                res.data = review;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Review not found";
                res.data = review;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};