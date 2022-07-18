const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const moduleController = require("../controllers/moduleController");
// const createModuleRequest = require("../requests/createModuleRequest");

router.post("/create", moduleController.create, response);

module.exports = router;
