const addressDbQueries = require('../dbQueries/addressesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let addresses = await addressDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let address = await addressDbQueries.update(_id);
            return address
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let address = await addressDbQueries.delete({ _id: req.params.id });
            return address
        } catch (e) {
            throw e
        } 
    },
};