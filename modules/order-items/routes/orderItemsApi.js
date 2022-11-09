const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const orderItemsController = require("../controllers/orderItemsController");

router.get(
    "/all",
    orderItemsController.all,
    response
);

router.post(
    "/create",
    orderItemsController.create,
    response
);

router.patch(
    "/update/:id",
    orderItemsController.update,
    response
);

router.delete(
    "/delete/:id",
    orderItemsController.delete,
    response
);

module.exports = router;