const categoryModel = require('../models/categoriesModel');
    const categoryService = require('../services/categoriesService');
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
            let categories = await categoryService.all(req);
            if (categories.length) {
                res.code = RESPONSE_OK;
                res.message = "Categories data fetched successfully";
                res.data = categories;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Categories not found";
                res.data = categories;
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
            res.message = "Category saved successfully";
            res.data = await categoryModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let category = await categoryService.update(req);
            if (category) {
                category = await category.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Category updated successfully";
                res.data = category;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Category not found";
                res.data = category;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let category = await categoryService.delete(req);
            if (category) {
                res.code = RESPONSE_DELETED;
                res.message = "Category deleted successfully";
                res.data = category;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Category not found";
                res.data = category;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};