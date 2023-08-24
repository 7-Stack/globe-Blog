const Joi = require("joi")

exports.CreateUserSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(20)
        .required(),

    lastName: Joi.string()
        .min(3)
        .max(20)
        .required(),

    email: Joi.string().email().required(),

    password: Joi.string()
        .min(5)
        .required()
})

exports.UpdateUserSchema = Joi.object({
    firstName: Joi.string()
    .min(3)
    .max(20),

    lastName: Joi.string()
    .min(3)
    .max(20),

    email: Joi.string().email()
})