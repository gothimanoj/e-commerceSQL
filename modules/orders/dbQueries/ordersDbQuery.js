const orderModel = require('../models/ordersModel');
const orderItemModel = require('../../order-items/models/orderItemsModel');
const bagItemsModel = require('../../bag-items/models/bagItemsModel');
const bagModel = require('../../bags/models/bagsModel');

module.exports = {
    findAll: async (req) => {
        try {
            let orders = await orderModel.findAll();
            return orders
        } catch (e) {
            throw e
        }
    },

    create: async (req) => {
        try {
            var order = await orderModel.create({
                status: "ordered",
                user_id: req.body.user_id
            });
            bagModel.findOne({
                where: { user_id: req.body.user_id },

            }).then((result) => {
                bagItemsModel.findAll({
                    where: { bag_id: result.id },
                }).then((result) => {
                    console.log(result);
                })
                // console.log(result.id);
            })

            // console.log(bagItem);
            return order
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let order = await orderModel.findOne({ id: 0 }, { where: { id } });
            return order
        } catch (e) {
            throw e
        }
    },

    delete: async (id) => {
        try {
            let order = await orderModel.destroy({ where: { id } });
            return order
        } catch (e) {
            throw e
        }
    },
};