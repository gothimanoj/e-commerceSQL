const productModel = require('../models/productsModel');
    const productService = require('../services/productsService');
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
            let products = await productService.all(req);
            if (products.length) {
                res.code = RESPONSE_OK;
                res.message = "Products data fetched successfully";
                res.data = products;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Products not found";
                res.data = products;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    add: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Product saved successfully";
            res.data = await productModel.create({
                name : req.body.name,
                price : req.body.price,
                stock : req.body.stock,
                description: req.body.description,
                image : req.file.filename,
                keyword: req.body.keyword,
                brand_id: req.body.brand_id,
                category_id: req.body.category_id
            });
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let product = await productService.update(req);
            if (product) {
                product = await product.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Product updated successfully";
                res.data = product;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Product not found";
                res.data = product;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
   delete: async (req, res, next) => {
        try {
            let product = await productService.delete(req);
            if (product) {
                res.code = RESPONSE_DELETED;
                res.message = "Product deleted successfully";
                res.data = product;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Product not found";
                res.data = product;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    viewByCategory: async (req, res, next) => {
        try {
            let products = await productService.viewByCategory(req);
            if (products.length) {
                res.code = RESPONSE_OK;
                res.message = "Products data fetched successfully";
                res.data = products;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Products not found";
                res.data = products;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    viewParticular: async (req, res, next) => {
        try {
            let products = await productService.viewParticular(req);
            if (products.length) {
                res.code = RESPONSE_OK;
                res.message = "Products data fetched successfully";
                res.data = products;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Products not found";
                res.data = products;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    search : async (req,res,next)=> {
          try{
            let product = await productService.search(req);
            console.log(product);
            // if (product) {
            //     res.code = RESPONSE_OK;
            //     res.message = "Product found successfully";
            //     res.data = product;
            // } else {
            //     res.code = RESPONSE_NOT_FOUND;
            //     res.message = "Product not found";
            //     res.data = product;
            // }
          }
          catch (e){
            error(e);
          }
    }
};