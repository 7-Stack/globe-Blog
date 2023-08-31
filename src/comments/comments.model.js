const Joi = require("joi");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        require: [true, "Please add a content"],
        minlength: 10,
        maxlength: 1500
    },
    Image: Joi.string()
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("comment", commentSchema);