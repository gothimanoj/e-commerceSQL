const saleItemModel = require('../models/saleItemsModel');
    const saleItemService = require('../services/saleItemsService');
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
            let saleItems = await saleItemService.all(req);
            if (saleItems.length) {
                res.code = RESPONSE_OK;
                res.message = "Sale items data fetched successfully";
                res.data = saleItems;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sale items not found";
                res.data = saleItems;
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
            res.message = "Sale item saved successfully";
            res.data = await saleItemModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let saleItem = await saleItemService.update(req);
            if (saleItem) {
                saleItem = await saleItem.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Sale item updated successfully";
                res.data = saleItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sale item not found";
                res.data = saleItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let saleItem = await saleItemService.delete(req);
            if (saleItem) {
                res.code = RESPONSE_DELETED;
                res.message = "Sale item deleted successfully";
                res.data = saleItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sale item not found";
                res.data = saleItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};