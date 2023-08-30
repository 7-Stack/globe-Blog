const Joi = require("joi");

exports.CreatePostSchema = Joi.object({
    title: Joi.string()
    .min(3)
    .max(100)
    .required(),

    content: Joi.string().min(70).max(1500),

    Image: Joi.string()
})

exports.UpdatePostSchema = Joi.object({
    title: Joi.string()
    .min(3)
    .max(100)
    .required(),

    content: Joi.string().min(30).max(1500),

    // Image: Joi.string()
})