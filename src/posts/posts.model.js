const { string } = require("joi");
const mongoose = require("mongoose");
const { POST_CATEGORY } = require("../utilities/constants.utility");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please provide a title"],
        minlength: 3,
        maxlength: 100
    },

    content: {
        type: String,
        require: [true, "Please add a content"],
        minlength: 70,
        maxlength: 1500
    },

    category: {
        type: String,
        enum: POST_CATEGORY,
        require: [true, "Please indicate post category"],
    },
    image: {
        type: String
    }
  },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);