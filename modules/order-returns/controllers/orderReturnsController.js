const orderReturnModel = require('../models/orderReturnsModel');
    const orderReturnService = require('../services/orderReturnsService');
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
            let orderReturns = await orderReturnService.all(req);
            if (orderReturns.length) {
                res.code = RESPONSE_OK;
                res.message = "Order returns data fetched successfully";
                res.data = orderReturns;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order returns not found";
                res.data = orderReturns;
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
            res.message = "Order return saved successfully";
            res.data = await orderReturnModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let orderReturn = await orderReturnService.update(req);
            if (orderReturn) {
                orderReturn = await orderReturn.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Order return updated successfully";
                res.data = orderReturn;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order return not found";
                res.data = orderReturn;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let orderReturn = await orderReturnService.delete(req);
            if (orderReturn) {
                res.code = RESPONSE_DELETED;
                res.message = "Order return deleted successfully";
                res.data = orderReturn;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order return not found";
                res.data = orderReturn;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};