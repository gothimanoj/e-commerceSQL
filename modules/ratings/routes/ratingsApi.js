const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const ratingsController = require("../controllers/ratingsController");

router.get(
    "/all",
    ratingsController.all,
    response
);

router.post(
    "/create",
    ratingsController.create,
    response
);

router.patch(
    "/update/:id",
    ratingsController.update,
    response
);

router.delete(
    "/delete/:id",
    ratingsController.delete,
    response
);

module.exports = router;