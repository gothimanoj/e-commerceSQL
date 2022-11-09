const sectionModel = require('../models/sectionsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let sections = await sectionModel.findAll();
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

    update: async (id) => {
        try {
            let section = await sectionModel.findOne({id:0}, {where: {id}});
            return section
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let section = await sectionModel.destroy({ where: {id} });
            return section
        } catch (e) {
            throw e
        } 
    },
};