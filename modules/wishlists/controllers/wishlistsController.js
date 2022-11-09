const wishlistModel = require('../models/wishlistsModel');
    const wishlistService = require('../services/wishlistsService');
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
            let wishlists = await wishlistService.all(req);
            if (wishlists.length) {
                res.code = RESPONSE_OK;
                res.message = "Wishlists data fetched successfully";
                res.data = wishlists;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlists not found";
                res.data = wishlists;
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
            res.message = "Wishlist saved successfully";
            res.data = await wishlistModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let wishlist = await wishlistService.update(req);
            if (wishlist) {
                wishlist = await wishlist.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Wishlist updated successfully";
                res.data = wishlist;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlist not found";
                res.data = wishlist;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let wishlist = await wishlistService.delete(req);
            if (wishlist) {
                res.code = RESPONSE_DELETED;
                res.message = "Wishlist deleted successfully";
                res.data = wishlist;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Wishlist not found";
                res.data = wishlist;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};