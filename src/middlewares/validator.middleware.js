// const { schema } = require("../users/users.model");

const validate = (schema) => async(req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body);
        req._body = req.body
        req.body = value
        next();
    } catch(error) {
        return res.status(res.statusCode || 400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = validate