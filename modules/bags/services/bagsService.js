const bagDbQueries = require('../dbQueries/bagsDbQuery');
const user = require('../../users/models/usersModel')

module.exports = {
    all: async (req) => {
        try {
            let bags = await bagDbQueries.findAll();
            return bags
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            var bag = await bagDbQueries.create(req);
            return bag
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let bag = await bagDbQueries.update(_id);
            return bag
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let bag = await bagDbQueries.delete({ _id: req.params.id });
            return bag
        } catch (e) {
            throw e
        } 
    },
    viewParticularCart: async(req,res,next)=>{
            try{
             let bag = await bagDbQueries.viewParticularCart(req);
             console.log(bag)
             return bag 
            }
            catch(e){
                throw e
            }
    }
};