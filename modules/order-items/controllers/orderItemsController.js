const orderItemModel = require('../models/orderItemsModel');
    const orderItemService = require('../services/orderItemsService');
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
            let orderItems = await orderItemService.all(req);
            if (orderItems.length) {
                res.code = RESPONSE_OK;
                res.message = "Order items data fetched successfully";
                res.data = orderItems;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order items not found";
                res.data = orderItems;
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
            res.message = "Order item saved successfully";
            res.data = await orderItemModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let orderItem = await orderItemService.update(req);
            if (orderItem) {
                orderItem = await orderItem.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Order item updated successfully";
                res.data = orderItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order item not found";
                res.data = orderItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let orderItem = await orderItemService.delete(req);
            if (orderItem) {
                res.code = RESPONSE_DELETED;
                res.message = "Order item deleted successfully";
                res.data = orderItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order item not found";
                res.data = orderItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};