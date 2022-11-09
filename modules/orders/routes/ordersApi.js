const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const ordersController = require("../controllers/ordersController");

router.get(
    "/all",
    ordersController.all,
    response
);

router.post(
    "/create",
    ordersController.create,
    response
);

router.patch(
    "/update/:id",
    ordersController.update,
    response
);

router.delete(
    "/delete/:id",
    ordersController.delete,
    response
);

module.exports = router;