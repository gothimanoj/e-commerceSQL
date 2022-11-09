const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const customerSupportsController = require("../controllers/customerSupportsController");

router.get(
    "/all",
    customerSupportsController.all,
    response
);

router.post(
    "/create",
    customerSupportsController.create,
    response
);

router.patch(
    "/update/:id",
    customerSupportsController.update,
    response
);

router.delete(
    "/delete/:id",
    customerSupportsController.delete,
    response
);

module.exports = router;