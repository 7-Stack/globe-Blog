const { string } = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please provide a title"],
        minlength: 3,
        maxlength: 100
    },

    content: {
        type: String,
        require: [true, "What's on your mind?"],
        minlength: 70,
        maxlength: 1500
    },


})

module.exports = mongoose.model("Post", postSchema);