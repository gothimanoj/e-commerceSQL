const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const saleItemsController = require("../controllers/saleItemsController");

router.get(
    "/all",
    saleItemsController.all,
    response
);

router.post(
    "/create",
    saleItemsController.create,
    response
);

router.patch(
    "/update/:id",
    saleItemsController.update,
    response
);

router.delete(
    "/delete/:id",
    saleItemsController.delete,
    response
);

module.exports = router;