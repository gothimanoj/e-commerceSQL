const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const salesController = require("../controllers/salesController");

router.get(
    "/all",
    salesController.all,
    response
);

router.post(
    "/create",
    salesController.create,
    response
);

router.patch(
    "/update/:id",
    salesController.update,
    response
);

router.delete(
    "/delete/:id",
    salesController.delete,
    response
);

module.exports = router;