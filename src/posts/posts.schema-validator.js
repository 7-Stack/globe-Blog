const Joi = require("joi");
const { POST_CATEGORY } = require('../utilities/constants.utility')
exports.CreatePostSchema = Joi.object({
    title: Joi.string()
    .min(3)
    .max(100)
    .required(),

    content: Joi.string().min(70).max(1500),

    Image: Joi.string(),

    category: Joi.string().valid(...POST_CATEGORY).required()
})

exports.UpdatePostSchema = Joi.object({
    title: Joi.string()
    .min(3)
    .max(100)
    .required(),

    content: Joi.string().min(30).max(1500),

    Image: Joi.string()
})