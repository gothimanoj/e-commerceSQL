const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const wishlistItemsController = require("../controllers/wishlistItemsController");

router.get(
    "/all",
    wishlistItemsController.all,
    response
);

router.post(
    "/create",
    wishlistItemsController.create,
    response
);

router.patch(
    "/update/:id",
    wishlistItemsController.update,
    response
);

router.delete(
    "/delete/:id",
    wishlistItemsController.delete,
    response
);

module.exports = router;