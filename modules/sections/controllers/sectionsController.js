const sectionModel = require('../models/sectionsModel');
    const sectionService = require('../services/sectionsService');
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
            let sections = await sectionService.all(req);
            if (sections.length) {
                res.code = RESPONSE_OK;
                res.message = "Sections data fetched successfully";
                res.data = sections;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Sections not found";
                res.data = sections;
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
            res.message = "Section saved successfully";
            res.data = await sectionModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let section = await sectionService.update(req);
            if (section) {
                section = await section.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Section updated successfully";
                res.data = section;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Section not found";
                res.data = section;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let section = await sectionService.delete(req);
            if (section) {
                res.code = RESPONSE_DELETED;
                res.message = "Section deleted successfully";
                res.data = section;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Section not found";
                res.data = section;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};