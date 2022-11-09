const notificationDbQueries = require('../dbQueries/notificationsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let notifications = await notificationDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let notification = await notificationDbQueries.update(_id);
            return notification
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let notification = await notificationDbQueries.delete({ _id: req.params.id });
            return notification
        } catch (e) {
            throw e
        } 
    },
};