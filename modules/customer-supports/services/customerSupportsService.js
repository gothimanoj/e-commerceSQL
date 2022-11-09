const customerSupportDbQueries = require('../dbQueries/customerSupportsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let customerSupports = await customerSupportDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let customerSupport = await customerSupportDbQueries.update(_id);
            return customerSupport
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let customerSupport = await customerSupportDbQueries.delete({ _id: req.params.id });
            return customerSupport
        } catch (e) {
            throw e
        } 
    },
};