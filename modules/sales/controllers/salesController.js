const saleModel = require('../models/salesModel');
    const saleService = require('../services/salesService');
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
            let sales = await saleService.all(req);
            if (sales.length) {
                res.code = RESPONSE_OK;
                res.message = "Sales data fetched successfully";
                res.data = sales;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sales not found";
                res.data = sales;
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
            res.message = "Sale saved successfully";
            res.data = await saleModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let sale = await saleService.update(req);
            if (sale) {
                sale = await sale.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Sale updated successfully";
                res.data = sale;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sale not found";
                res.data = sale;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let sale = await saleService.delete(req);
            if (sale) {
                res.code = RESPONSE_DELETED;
                res.message = "Sale deleted successfully";
                res.data = sale;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sale not found";
                res.data = sale;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};