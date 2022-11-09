const userRoleModel = require('../models/userRolesModel');
    const userRoleService = require('../services/userRolesService');
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
            let userRoles = await userRoleService.all(req);
            if (userRoles.length) {
                res.code = RESPONSE_OK;
                res.message = "User roles data fetched successfully";
                res.data = userRoles;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "User roles not found";
                res.data = userRoles;
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
            res.message = "User role saved successfully";
            res.data = await userRoleModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let userRole = await userRoleService.update(req);
            if (userRole) {
                userRole = await userRole.save();
                res.code = RESPONSE_UPDATED;
                res.message = "User role updated successfully";
                res.data = userRole;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "User role not found";
                res.data = userRole;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let userRole = await userRoleService.delete(req);
            if (userRole) {
                res.code = RESPONSE_DELETED;
                res.message = "User role deleted successfully";
                res.data = userRole;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "User role not found";
                res.data = userRole;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};