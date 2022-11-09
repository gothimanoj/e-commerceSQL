const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const bagsController = require("../controllers/bagsController");

router.get(
    "/all",
    bagsController.all,
    response
);

router.post(
    "/add",
    bagsController.create,
    response
);

router.patch(
    "/update/:id",
    bagsController.update,
    response
);
router.post("/viewBag",bagsController.viewParticularBag,response);

router.delete(
    "/delete/:id",
    bagsController.delete,
    response
);

module.exports = router;