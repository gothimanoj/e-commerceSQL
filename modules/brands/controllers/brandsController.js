const brandModel = require('../models/brandsModel');
    const brandService = require('../services/brandsService');
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
            let brands = await brandService.all(req);
            if (brands.length) {
                res.code = RESPONSE_OK;
                res.message = "Brands data fetched successfully";
                res.data = brands;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Brands not found";
                res.data = brands;
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
            res.message = "Brand saved successfully";
            res.data = await brandModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let brand = await brandService.update(req);
            if (brand) {
                brand = await brand.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Brand updated successfully";
                res.data = brand;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Brand not found";
                res.data = brand;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let brand = await brandService.delete(req);
            if (brand) {
                res.code = RESPONSE_DELETED;
                res.message = "Brand deleted successfully";
                res.data = brand;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Brand not found";
                res.data = brand;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};