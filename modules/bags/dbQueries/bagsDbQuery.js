const bagModel = require('../models/bagsModel');
const user = require('../../users/models/usersModel')
const bagItemModel= require("../../bag-items/models/bagItemsModel");
const productModel = require("../../products/models/productsModel");

module.exports = {
    findAll: async (req) => {
        try {
            let bags = await bagModel.findAll({
                include:user,
                // where:{id:1}
            });
            return bags
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            var bag = await bagModel.findOne({
                where:{
                    user_id:req.body.user_id
                }
            })
            if(!bag){
                // bagModel.create(req.body)
                // .then((result)=>{
                // console.log(req.product_id);
                // })
                // .catch((err)=>{
                //      console.log(err);
                // })
                bag = new bagModel(req.body);

            }
            // else{
                bag.save()
                .then((result)=>{
                    bagItemModel.create({
                        product_id:req.body.product_id,
                        bag_id:result.id
                    })
                })
            // }
            return bag

        }catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let bag = await bagModel.findOne({id:0}, {where: {id}});
            return bag
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let bag = await bagModel.destroy({ where: {id} });
            return bag
        } catch (e) {
            throw e
        } 
    },
    viewParticularCart: async(req)=>{
        try {
            var bags;
            var bag = await bagModel.findOne({
                where:{
                    user_id:req.body.user_id
                }
            })
            .then((result)=>{
                   bags=  bagItemModel.findAll({
                        where:{
                            bag_id:result.id
                        },
                        include:productModel
                     })
            
            })
            .catch((err)=>{
                console.log(err);
            })
            // console.log(bags);
            return bags

        }
        catch(e){
            throw e 
        }
    }
};