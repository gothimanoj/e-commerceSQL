const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const usersController = require("../controllers/usersController");
const multer  = require('multer');
const storage = multer.diskStorage({
    destination:"public/images",
    filename:(request,file,cb)=>{
        cb(null,Date.now()+"_"+file.originalname);
    }
});
const upload = multer({storage:storage});
router.get(
    "/all",
    usersController.all,
    response
);

router.post(
    "/signup",upload.single("image"),
    usersController.signUp,
    response
);

router.post("/signin",usersController.signin);
router.patch(
    "/update/:id",
    usersController.update,
    response
);

router.delete(
    "/delete/:id",
    usersController.delete,
    response
);

module.exports = router;