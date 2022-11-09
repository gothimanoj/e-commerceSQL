const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const categoriesController = require("../controllers/categoriesController");

router.get(
    "/all",
    categoriesController.all,
    response
);

router.post(
    "/create",
    categoriesController.create,
    response
);

router.patch(
    "/update/:id",
    categoriesController.update,
    response
);

router.delete(
    "/delete/:id",
    categoriesController.delete,
    response
);

module.exports = router;