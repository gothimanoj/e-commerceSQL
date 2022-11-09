const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const wishlistsController = require("../controllers/wishlistsController");

router.get(
    "/all",
    wishlistsController.all,
    response
);

router.post(
    "/create",
    wishlistsController.create,
    response
);

router.patch(
    "/update/:id",
    wishlistsController.update,
    response
);

router.delete(
    "/delete/:id",
    wishlistsController.delete,
    response
);

module.exports = router;