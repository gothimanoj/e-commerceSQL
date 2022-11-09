const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const reviewsController = require("../controllers/reviewsController");

router.get(
    "/all",
    reviewsController.all,
    response
);

router.post(
    "/create",
    reviewsController.create,
    response
);

router.patch(
    "/update/:id",
    reviewsController.update,
    response
);

router.delete(
    "/delete/:id",
    reviewsController.delete,
    response
);

module.exports = router;