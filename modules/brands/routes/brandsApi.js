const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const brandsController = require("../controllers/brandsController");

router.get(
    "/all",
    brandsController.all,
    response
);

router.post(
    "/create",
    brandsController.create,
    response
);

router.patch(
    "/update/:id",
    brandsController.update,
    response
);

router.delete(
    "/delete/:id",
    brandsController.delete,
    response
);

module.exports = router;