const express = require("express");
const PostRoute = express.Router();
const postController = require("./posts.controller");
const postService = require("./posts.service");
const validator = require("../middlewares/validator.middleware");
const { CreatePostSchema } = require("./posts.schema-validator");
const { UpdatePostSchema } = require("./posts.schema-validator");

PostRoute.route("/")
.get(postService.getPosts)
.post([validator(CreatePostSchema)], postController.createPost);


PostRoute.route("/:id")
.get(postService.getPost)
.put([validator(UpdatePostSchema)], postController.updatePost)
.delete(postService.deletePost);


module.exports = PostRoute;