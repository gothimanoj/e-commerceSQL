const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const sectionCategoriesController = require("../controllers/sectionCategoriesController");

router.get(
    "/all",
    sectionCategoriesController.all,
    response
);

router.post(
    "/create",
    sectionCategoriesController.create,
    response
);

router.patch(
    "/update/:id",
    sectionCategoriesController.update,
    response
);

router.delete(
    "/delete/:id",
    sectionCategoriesController.delete,
    response
);

module.exports = router;