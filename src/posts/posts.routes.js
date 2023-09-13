const express = require("express");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const PostRoute = express.Router();
const postController = require("./posts.controller");
const validator = require("../middlewares/validator.middleware");

const { CreatePostSchema } = require("./posts.schema-validator");
const { UpdatePostSchema } = require("./posts.schema-validator");

PostRoute.route("/")
.get(postController.getPosts)
.post([upload.single('image'),validator(CreatePostSchema)], postController.createPost);

PostRoute.route("/:id")
.get(postController.getPost)
.put([validator(UpdatePostSchema)], postController.updatePost)
.delete(postController.deletePost);

PostRoute.put('/:id/upload',
 postController.uploadImage
)


module.exports = PostRoute;