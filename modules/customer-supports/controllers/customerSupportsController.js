const customerSupportModel = require('../models/customerSupportsModel');
    const customerSupportService = require('../services/customerSupportsService');
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
            let customerSupports = await customerSupportService.all(req);
            if (customerSupports.length) {
                res.code = RESPONSE_OK;
                res.message = "Customer supports data fetched successfully";
                res.data = customerSupports;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Customer supports not found";
                res.data = customerSupports;
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
            res.message = "Customer support saved successfully";
            res.data = await customerSupportModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let customerSupport = await customerSupportService.update(req);
            if (customerSupport) {
                customerSupport = await customerSupport.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Customer support updated successfully";
                res.data = customerSupport;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Customer support not found";
                res.data = customerSupport;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let customerSupport = await customerSupportService.delete(req);
            if (customerSupport) {
                res.code = RESPONSE_DELETED;
                res.message = "Customer support deleted successfully";
                res.data = customerSupport;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Customer support not found";
                res.data = customerSupport;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};