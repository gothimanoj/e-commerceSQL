const customerSupportModel = require('../models/customerSupportsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let customerSupports = await customerSupportModel.findAll();
            return customerSupports
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return customerSupport
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let customerSupport = await customerSupportModel.findOne({id:0}, {where: {id}});
            return customerSupport
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let customerSupport = await customerSupportModel.destroy({ where: {id} });
            return customerSupport
        } catch (e) {
            throw e
        } 
    },
};