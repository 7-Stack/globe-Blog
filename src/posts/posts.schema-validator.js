const Joi = require("joi");

exports.CreatePostSchema = Joi.object({
    title: Joi.string()
    .min(3)
    .max(100).require(),

    content: Joi.string().min(70).max(1500),

    Image: Joi.string()
})