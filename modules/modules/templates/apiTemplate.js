module.exports = (
    moduleNameCamelCase,
    moduleNamePascalCase,
    moduleNameParamCase
) => `const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const ${moduleNameCamelCase}Controller = require("../controllers/${moduleNameCamelCase}Controller");

router.get(
    "/all",
    ${moduleNameCamelCase}Controller.all,
    response
);

router.post(
    "/create",
    ${moduleNameCamelCase}Controller.create,
    response
);

router.patch(
    "/update/:id",
    ${moduleNameCamelCase}Controller.update,
    response
);

router.delete(
    "/delete/:id",
    ${moduleNameCamelCase}Controller.delete,
    response
);

module.exports = router;`;
