const express = require("express");
const { CreateCommentSchema, UpdateCommentSchema } = require("./comments.schema-validator");
const commentController = require("./comments.controller");
const validator = require("../middlewares/validator.middleware");
const CommentRoute = express.Router();


CommentRoute.route("/")
.post([validator(CreateCommentSchema)], commentController.createComment);


CommentRoute.route("/:id")
.get(commentController.getComment)
.put([validator(UpdateCommentSchema)], commentController.updateComment)
.delete(commentController.deleteComment)


module.exports = CommentRoute;