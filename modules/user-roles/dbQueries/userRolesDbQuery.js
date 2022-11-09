const userRoleModel = require('../models/userRolesModel');


const roleModel = require('../../roles/models/rolesModel');

module.exports = {
    findAll: async (req) => {
        try {
            let userRoles = await userRoleModel.findAll(
           
            );
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

    update: async (id) => {
        try {
            let userRole = await userRoleModel.findOne({id:0}, {where: {id}});
            return userRole
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let userRole = await userRoleModel.destroy({ where: {id} });
            return userRole
        } catch (e) {
            throw e
        } 
    },
};