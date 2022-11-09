const luckyBoucherModel = require('../models/luckyBouchersModel');
    const luckyBoucherService = require('../services/luckyBouchersService');
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
            let luckyBouchers = await luckyBoucherService.all(req);
            if (luckyBouchers.length) {
                res.code = RESPONSE_OK;
                res.message = "Lucky bouchers data fetched successfully";
                res.data = luckyBouchers;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Lucky bouchers not found";
                res.data = luckyBouchers;
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
            res.message = "Lucky boucher saved successfully";
            res.data = await luckyBoucherModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let luckyBoucher = await luckyBoucherService.update(req);
            if (luckyBoucher) {
                luckyBoucher = await luckyBoucher.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Lucky boucher updated successfully";
                res.data = luckyBoucher;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Lucky boucher not found";
                res.data = luckyBoucher;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let luckyBoucher = await luckyBoucherService.delete(req);
            if (luckyBoucher) {
                res.code = RESPONSE_DELETED;
                res.message = "Lucky boucher deleted successfully";
                res.data = luckyBoucher;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Lucky boucher not found";
                res.data = luckyBoucher;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};