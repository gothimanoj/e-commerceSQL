const userModel = require('../models/usersModel');
const roles = require('../../roles/models/rolesModel')

module.exports = {
    findAll: async (req) => {
        try {
            let users = await userModel.findAll({
                include:roles
            });
            return users
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return user
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let user = await userModel.findOne({id:0}, {where: {id}});
            return user
        } catch (e) {
            throw e
        } 
    },
    signin: async (req)=>{
        try {
            let user = await userModel.findOne(
                {
                   where:{
                   email:req.body.email,
                   password:req.body.password}
                }
            );
            return user 
        } catch(e){
            throw e 
        }
    }
      ,
    delete: async (id) => {
        try {
            let user = await userModel.destroy({ where: {id} });
            return user
        } catch (e) {
            throw e
        } 
    },
};