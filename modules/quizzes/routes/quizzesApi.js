const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const quizzesController = require("../controllers/quizzesController");

router.get(
    "/all",
    quizzesController.all,
    response
);

router.post(
    "/create",
    quizzesController.create,
    response
);

router.patch(
    "/update/:id",
    quizzesController.update,
    response
);

router.delete(
    "/delete/:id",
    quizzesController.delete,
    response
);

module.exports = router;