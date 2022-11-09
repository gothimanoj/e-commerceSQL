const productDbQueries = require('../dbQueries/productsDbQuery');


module.exports = {
    all: async (req) => {
        console.log(req.params.id)
        try {
            let products = await productDbQueries.findAll(req);
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            console.log(req.params.id)
            let {} = req.body;
            let product = await productDbQueries.update(_id);
            return product
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let product = await productDbQueries.delete({ _id: req.params.id });
            return product
        } catch (e) {
            throw e
        } 
    },
    viewByCategory: async (req) => {
        console.log(req.params.id)
        try {
            let products = await productDbQueries.viewByCategory(req);
            return products
        } catch (e) {
            throw e
        } 
    },
    
    viewParticular: async (req) => {
        // console.log(req.params.id)
        try {
            let products = await productDbQueries.viewParticular(req);
            return products
        } catch (e) {
            throw e
        } 
    },
    search:async (req,res,next)=>{
     try {
        let product =  await productDbQueries.search(req);
        return product 
     }
     catch (e){
         throw e 
     }
    }
    
};