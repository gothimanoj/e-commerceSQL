const notificationModel = require('../models/notificationsModel');
    const notificationService = require('../services/notificationsService');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    all: async (req, res, next) => {
        try {
            let notifications = await notificationService.all(req);
            if (notifications.length) {
                res.code = RESPONSE_OK;
                res.message = "Notifications data fetched successfully";
                res.data = notifications;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Notifications not found";
                res.data = notifications;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Notification saved successfully";
            res.data = await notificationModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let notification = await notificationService.update(req);
            if (notification) {
                notification = await notification.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Notification updated successfully";
                res.data = notification;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Notification not found";
                res.data = notification;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let notification = await notificationService.delete(req);
            if (notification) {
                res.code = RESPONSE_DELETED;
                res.message = "Notification deleted successfully";
                res.data = notification;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Notification not found";
                res.data = notification;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};