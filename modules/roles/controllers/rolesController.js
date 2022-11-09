const roleModel = require('../models/rolesModel');
const roleService = require('../services/rolesService');
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
            let roles = await roleService.all(req);
            if (roles.length) {
                res.code = RESPONSE_OK;
                res.message = "Roles data fetched successfully";
                res.data = roles;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Roles not found";
                res.data = roles;
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
            res.message = "Role saved successfully";
            res.data = await roleModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let role = await roleService.update(req);
            if (role) {
                role = await role.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Role updated successfully";
                res.data = role;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Role not found";
                res.data = role;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let role = await roleService.delete(req);
            if (role) {
                res.code = RESPONSE_DELETED;
                res.message = "Role deleted successfully";
                res.data = role;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Role not found";
                res.data = role;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};