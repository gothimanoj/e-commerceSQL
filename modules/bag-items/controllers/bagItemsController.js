const bagItemModel = require('../models/bagItemsModel');
    const bagItemService = require('../services/bagItemsService');
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
            let bagItems = await bagItemService.all(req);
            if (bagItems.length) {
                res.code = RESPONSE_OK;
                res.message = "Bag items data fetched successfully";
                res.data = bagItems;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag items not found";
                res.data = bagItems;
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
            res.message = "Bag item saved successfully";
            res.data = await bagItemModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let bagItem = await bagItemService.update(req);
            if (bagItem) {
                bagItem = await bagItem.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Bag item updated successfully";
                res.data = bagItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag item not found";
                res.data = bagItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let bagItem = await bagItemService.delete(req);
            if (bagItem) {
                res.code = RESPONSE_DELETED;
                res.message = "Bag item deleted successfully";
                res.data = bagItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag item not found";
                res.data = bagItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    removeItem: async (req, res, next) => {
        try {
            let bagItem = await bagItemService.remove(req);
           
            if (bagItem) {
                res.code = RESPONSE_OK;
                res.message = "Bag item removed successfully";
                res.data = bagItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag item not found";
                res.data = bagItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};