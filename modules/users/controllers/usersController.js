const userModel = require('../models/usersModel');
const userRoleMOdel = require('../../user-roles/models/userRolesModel');
    const userService = require('../services/usersService');
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
            let users = await userService.all(req);
            if (users.length) {
                res.code = RESPONSE_OK;
                res.message = "Users data fetched successfully";
                res.data = users;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Users not found";
                res.data = users;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    signUp: async (req, res, next) => {

        try {
            res.code = RESPONSE_CREATED;
            res.message = "User signUp  successfully";
            res.data = await userModel.create({
                firstName :req.body.firstName,
                email: req.body.email,
                password: req.body.password,
                number : req.body.number,
                lastName : req.body.lastName,
                image : req.file.filename

            }).then((result)=>{
                userRoleMOdel.create({

                    user_id:result.id,
                    role_id :1
                })
            })
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    signin : async (req,res,next)=>{
       try {
          let user = await userService.signin(req);
          if(user){
                   res.code = RESPONSE_OK;
                   res.message = "Sign in successfully";
                   res.data= user;
          return res.status(200).json(user);
          }
          else {
            res.code = RESPONSE_NOT_FOUND;
            res.message = "User not found";
            res.data = user;
        }
       }
       catch(e){
        error(res,e);
       }
    },
    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let user = await userService.update(req);
            if (user) {
                user = await user.save();
                res.code = RESPONSE_UPDATED;
                res.message = "User updated successfully";
                res.data = user;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "User not found";
                res.data = user;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let user = await userService.delete(req);
            if (user) {
                res.code = RESPONSE_DELETED;
                res.message = "User deleted successfully";
                res.data = user;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "User not found";
                res.data = user;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};