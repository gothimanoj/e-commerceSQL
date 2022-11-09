const roleDbQueries = require('../dbQueries/rolesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let roles = await roleDbQueries.findAll();
            return roles
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return role
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let role = await roleDbQueries.update(_id);
            return role
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let role = await roleDbQueries.delete({ _id: req.params.id });
            return role
        } catch (e) {
            throw e
        } 
    },
};