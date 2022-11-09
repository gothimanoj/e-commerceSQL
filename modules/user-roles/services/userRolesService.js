const userRoleDbQueries = require('../dbQueries/userRolesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let userRoles = await userRoleDbQueries.findAll();
            return userRoles
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return userRole
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let userRole = await userRoleDbQueries.update(_id);
            return userRole
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let userRole = await userRoleDbQueries.delete({ _id: req.params.id });
            return userRole
        } catch (e) {
            throw e
        } 
    },
};