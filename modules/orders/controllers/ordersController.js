const orderModel = require('../models/ordersModel');
    const orderService = require('../services/ordersService');
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
            let orders = await orderService.all(req);
            if (orders.length) {
                res.code = RESPONSE_OK;
                res.message = "Orders data fetched successfully";
                res.data = orders;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Orders not found";
                res.data = orders;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            let orders = await orderService.create(req);
            if (orders) {
                res.code = RESPONSE_CREATED;
                res.message = "Order saved successfully"
                res.data = orders;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Orders not saved";
                res.data = orders;
            }
         
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let order = await orderService.update(req);
            if (order) {
                order = await order.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Order updated successfully";
                res.data = order;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order not found";
                res.data = order;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let order = await orderService.delete(req);
            if (order) {
                res.code = RESPONSE_DELETED;
                res.message = "Order deleted successfully";
                res.data = order;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Order not found";
                res.data = order;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};