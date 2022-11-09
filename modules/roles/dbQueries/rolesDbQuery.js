const roleModel = require('../models/rolesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let roles = await roleModel.findAll();
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

    update: async (id) => {
        try {
            let role = await roleModel.findOne({id:0}, {where: {id}});
            return role
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let role = await roleModel.destroy({ where: {id} });
            return role
        } catch (e) {
            throw e
        } 
    },
};