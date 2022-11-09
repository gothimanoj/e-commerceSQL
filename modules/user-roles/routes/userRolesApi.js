const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const userRolesController = require("../controllers/userRolesController");

router.get(
    "/all",
    userRolesController.all,
    response
);

router.post(
    "/create",
    userRolesController.create,
    response
);

router.patch(
    "/update/:id",
    userRolesController.update,
    response
);

router.delete(
    "/delete/:id",
    userRolesController.delete,
    response
);

module.exports = router;