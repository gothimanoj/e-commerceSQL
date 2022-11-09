const sectionDbQueries = require('../dbQueries/sectionsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let sections = await sectionDbQueries.findAll();
            return sections
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return section
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let section = await sectionDbQueries.update(_id);
            return section
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let section = await sectionDbQueries.delete({ _id: req.params.id });
            return section
        } catch (e) {
            throw e
        } 
    },
};