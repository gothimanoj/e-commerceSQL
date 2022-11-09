const userDbQueries = require('../dbQueries/usersDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let users = await userDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let user = await userDbQueries.update(_id);
            return user
        } catch (e) {
            throw e
        } 
    },
    signin: async (req)=> {
        try {
            let user  = await userDbQueries.signin(req) ;
            return user 
        }
        catch (e){
            throw e 
        }

    }
     ,
    delete: async (req, res, next) => {
        try {
            let user = await userDbQueries.delete({ _id: req.params.id });
            return user
        } catch (e) {
            throw e
        } 
    },
};