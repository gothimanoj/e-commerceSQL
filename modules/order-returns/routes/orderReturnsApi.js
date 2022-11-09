const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const orderReturnsController = require("../controllers/orderReturnsController");

router.get(
    "/all",
    orderReturnsController.all,
    response
);

router.post(
    "/create",
    orderReturnsController.create,
    response
);

router.patch(
    "/update/:id",
    orderReturnsController.update,
    response
);

router.delete(
    "/delete/:id",
    orderReturnsController.delete,
    response
);

module.exports = router;