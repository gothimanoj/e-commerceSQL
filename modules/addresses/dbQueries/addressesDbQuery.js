const addressModel = require('../models/addressesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let addresses = await addressModel.findAll();
            return addresses
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return address
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let address = await addressModel.findOne({id:0}, {where: {id}});
            return address
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let address = await addressModel.destroy({ where: {id} });
            return address
        } catch (e) {
            throw e
        } 
    },
};