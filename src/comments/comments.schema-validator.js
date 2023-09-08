const joi = require("joi");

exports.CreateCommentSchema = joi.object({
    content: joi.string()
    .min(10)
    .max(1000)
    .required("Please add a comment"),

    // Image: joi.string()
})

exports.UpdateCommentSchema = joi.object({
    content: joi.string()
    .min(10)
    .max(1000)
    .required("There may be something wrong"),

    // Image: joi.string()
})