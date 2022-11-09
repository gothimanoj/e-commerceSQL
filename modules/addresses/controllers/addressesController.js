const addressModel = require('../models/addressesModel');
    const addressService = require('../services/addressesService');
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
            let addresses = await addressService.all(req);
            if (addresses.length) {
                res.code = RESPONSE_OK;
                res.message = "Addresses data fetched successfully";
                res.data = addresses;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Addresses not found";
                res.data = addresses;
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
            res.message = "Address saved successfully";
            res.data = await addressModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let address = await addressService.update(req);
            if (address) {
                address = await address.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Address updated successfully";
                res.data = address;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Address not found";
                res.data = address;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let address = await addressService.delete(req);
            if (address) {
                res.code = RESPONSE_DELETED;
                res.message = "Address deleted successfully";
                res.data = address;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Address not found";
                res.data = address;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};