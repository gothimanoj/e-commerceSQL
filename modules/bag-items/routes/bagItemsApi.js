const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const bagItemsController = require("../controllers/bagItemsController");

router.get(
    "/all",
    bagItemsController.all,
    response
);

router.post(
    "/create",
    bagItemsController.create,
    response
);

router.patch(
    "/update/:id",
    bagItemsController.update,
    response
);
router.post("/remove",bagItemsController.removeItem,response);

router.delete(
    "/delete/:id",
    bagItemsController.delete,
    response
);

module.exports = router;