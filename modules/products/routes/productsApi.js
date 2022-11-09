const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const productsController = require("../controllers/productsController");
const multer  = require("multer");
const storage = multer.diskStorage({
    destination:"public/images",
    filename: (request,file,cb)=>{
        cb(null,Date.now()+"_"+file.originalname);
    }
})

const upload = multer({storage:storage});

router.get(
    "/all",
    productsController.all,
    response
);

router.post(
    "/add",upload.single('image'),
    productsController.add,
    response
);

router.patch(
    "/update/:id",
    productsController.update,
    response
);

    router.get(
        "/viewbycategory/:id",
        productsController.viewByCategory,
        response
    );

    router.get("/viewparticular/:id",productsController.viewParticular,response)
    

router.post("/search",
productsController.search,
response
);

router.delete(
    "/delete/:id",
    productsController.delete,
    response
);

module.exports = router;