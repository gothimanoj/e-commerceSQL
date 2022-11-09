const sectionCategoryModel = require('../models/sectionCategoriesModel');
    const sectionCategoryService = require('../services/sectionCategoriesService');
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
            let sectionCategories = await sectionCategoryService.all(req);
            if (sectionCategories.length) {
                res.code = RESPONSE_OK;
                res.message = "Section categories data fetched successfully";
                res.data = sectionCategories;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Section categories not found";
                res.data = sectionCategories;
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
            res.message = "Section category saved successfully";
            res.data = await sectionCategoryModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let sectionCategory = await sectionCategoryService.update(req);
            if (sectionCategory) {
                sectionCategory = await sectionCategory.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Section category updated successfully";
                res.data = sectionCategory;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Section category not found";
                res.data = sectionCategory;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let sectionCategory = await sectionCategoryService.delete(req);
            if (sectionCategory) {
                res.code = RESPONSE_DELETED;
                res.message = "Section category deleted successfully";
                res.data = sectionCategory;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Section category not found";
                res.data = sectionCategory;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};