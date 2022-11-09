const bagItemModel = require('../models/bagItemsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let bagItems = await bagItemModel.findAll();
            return bagItems
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return bagItem
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let bagItem = await bagItemModel.findOne({id:0}, {where: {id}});
            return bagItem
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let bagItem = await bagItemModel.destroy({ where: {id} });
            return bagItem
        } catch (e) {
            throw e
        } 
    },
    remove: async (req) => {
        try {
            let bagItem = await bagItemModel.destroy({ where: 
                {
                    bag_id:req.body.bag_id,
                    product_id:req.body.product_id
                } 
            })
            console.log(bagItem);
            return bagItem
        } catch (e) {
            throw e
        } 
    },
};