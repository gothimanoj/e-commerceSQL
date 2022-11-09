const wishlistItemModel = require('../models/wishlistItemsModel');
    const wishlistItemService = require('../services/wishlistItemsService');
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
            let wishlistItems = await wishlistItemService.all(req);
            if (wishlistItems.length) {
                res.code = RESPONSE_OK;
                res.message = "Wishlist items data fetched successfully";
                res.data = wishlistItems;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlist items not found";
                res.data = wishlistItems;
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
            res.message = "Wishlist item saved successfully";
            res.data = await wishlistItemModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let wishlistItem = await wishlistItemService.update(req);
            if (wishlistItem) {
                wishlistItem = await wishlistItem.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Wishlist item updated successfully";
                res.data = wishlistItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlist item not found";
                res.data = wishlistItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let wishlistItem = await wishlistItemService.delete(req);
            if (wishlistItem) {
                res.code = RESPONSE_DELETED;
                res.message = "Wishlist item deleted successfully";
                res.data = wishlistItem;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlist item not found";
                res.data = wishlistItem;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};