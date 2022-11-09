const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const addressesController = require("../controllers/addressesController");

router.get(
    "/all",
    addressesController.all,
    response
);

router.post(
    "/create",
    addressesController.create,
    response
);

router.patch(
    "/update/:id",
    addressesController.update,
    response
);

router.delete(
    "/delete/:id",
    addressesController.delete,
    response
);

module.exports = router;