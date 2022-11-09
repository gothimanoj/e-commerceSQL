const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const notificationsController = require("../controllers/notificationsController");

router.get(
    "/all",
    notificationsController.all,
    response
);

router.post(
    "/create",
    notificationsController.create,
    response
);

router.patch(
    "/update/:id",
    notificationsController.update,
    response
);

router.delete(
    "/delete/:id",
    notificationsController.delete,
    response
);

module.exports = router;