module.exports = () => `const validation = require("../../../middlewares/validation");

const rules = {
    //
};

module.exports = (req, res, next) => validation(req, res, next, rules, {});`;
