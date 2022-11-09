const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const luckyBouchersController = require("../controllers/luckyBouchersController");

router.get(
    "/all",
    luckyBouchersController.all,
    response
);

router.post(
    "/create",
    luckyBouchersController.create,
    response
);

router.patch(
    "/update/:id",
    luckyBouchersController.update,
    response
);

router.delete(
    "/delete/:id",
    luckyBouchersController.delete,
    response
);

module.exports = router;