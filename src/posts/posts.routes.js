const express = require("express");
const PostRoute = express.Router();
const postController = require("./posts.controller");
const validator = require("../middlewares/validator.middleware");
const { CreatePostSchema } = require("./posts.schema-validator");
const { UpdatePostSchema } = require("./posts.schema-validator");

PostRoute.route("/")
.get(postController.getPosts)
.post([validator(CreatePostSchema)], postController.createPost);


PostRoute.route("/:id")
.get(postController.getPost)
.put([validator(UpdatePostSchema)], postController.updatePost)
.delete(postController.deletePost);


module.exports = PostRoute;