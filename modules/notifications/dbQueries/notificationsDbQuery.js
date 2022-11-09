const notificationModel = require('../models/notificationsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let notifications = await notificationModel.findAll();
            return notifications
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return notification
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let notification = await notificationModel.findOne({id:0}, {where: {id}});
            return notification
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let notification = await notificationModel.destroy({ where: {id} });
            return notification
        } catch (e) {
            throw e
        } 
    },
};