const { RESPONSE_SERVER_ERROR } = require("../helpers/constants");

module.exports = {
    response: (req, res) => {
        const results = Object.keys(res).reverse().slice(0, 4).reverse();
        if (!results.includes("success")) {
            res.success = true;
            results[0] = "success";
        }

        return res.status(res.code).json({
            success: res.success,
            code: res.code,
            message: res.message,
            data: res.data ? res.data : undefined,
            error: res.error ? res.error : undefined,
        });
    },

    error: (res, error) => {
        res.success = false;
        res.code = RESPONSE_SERVER_ERROR;
        res.message = "Something went wrong";
        res.error = error.toString();
    },
};
