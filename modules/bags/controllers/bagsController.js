const bagModel = require('../models/bagsModel');
    const bagService = require('../services/bagsService');
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
            let bags = await bagService.all(req);
            if (bags.length) {
                res.code = RESPONSE_OK;
                res.message = "Bags data fetched successfully";
                res.data = bags;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bags not found";
                res.data = bags;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            let bags = await bagService.create(req);
            if (bags) {
                res.code = RESPONSE_CREATED;
                res.message = "Bag saved successfully";
                res.data = bags;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bags not found";
                res.data = bags;
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
            let bag = await bagService.update(req);
            if (bag) {
                bag = await bag.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Bag updated successfully";
                res.data = bag;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag not found";
                res.data = bag;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let bag = await bagService.delete(req);
            if (bag) {
                res.code = RESPONSE_DELETED;
                res.message = "Bag deleted successfully";
                res.data = bag;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bag not found";
                res.data = bag;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    viewParticularBag: async(req,res,next)=>{
        try {
            let bags = await bagService.viewParticularCart(req);
            if (!bags) {
                
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bags not found";
                res.data = bags;
            } else {
                res.code = RESPONSE_OK;
                res.message = "Bag found";
                res.data = bags;
            }
          
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    }
};