const productModel = require('../models/productsModel');
const Sequelize  = require('sequelize');




module.exports = {
    findAll: async (req) => {
        try {
            
            let products = await productModel.findAll();
            return products
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return product
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let product = await productModel.findOne({id:0}, {where: {id}},{
            });
            return product
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let product = await productModel.destroy({ where: {id} });
            return product
        } catch (e) {
            throw e
        } 
    },
    viewByCategory: async (req)=>{
        try {
            // console.log(req.params.id);
            let products = await productModel.findAll(
                {
                    where :{category_id:req.params.id}
                }
            );
            return products
        } catch (e) {
            throw e
        } 
    },
    
    viewParticular: async (req)=>{
        try {
            // console.log(req.params.id);
            let products = await productModel.findOne(
                {
                    where :{id:req.params.id}
                }
            );
            return products
        } catch (e) {
            throw e
        } 
    },
    search : async (req)=>{
        try {
           let product  =  await productModel.findOne({
            where : req.body.keyword
           });
           return product
        }
        catch(e){
            throw e 
        }
    }
       
};