const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const rolesController = require("../controllers/rolesController");

router.get(
    "/all",
    rolesController.all,
    response
);

router.post(
    "/create",
    rolesController.create,
    response
);

router.patch(
    "/update/:id",
    rolesController.update,
    response
);

router.delete(
    "/delete/:id",
    rolesController.delete,
    response
);

module.exports = router;