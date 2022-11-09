const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const sectionsController = require("../controllers/sectionsController");

router.get(
    "/all",
    sectionsController.all,
    response
);

router.post(
    "/create",
    sectionsController.create,
    response
);

router.patch(
    "/update/:id",
    sectionsController.update,
    response
);

router.delete(
    "/delete/:id",
    sectionsController.delete,
    response
);

module.exports = router;