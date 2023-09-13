// const { posts } = require("./posts.routes");
const postService = require("./posts.service");
const fs = require('fs')
// const { CreatePostSchema } = require("./posts.schema-validator");
// const { post } = require("../../app");

 const cloudinary = require('../config/cloudinary.config')


class PostController {
    async getPosts(req, res) {
        console.log("The request body is");
        const posts = await postService.find();
        res.status(200).send({ success: true, message: "Posts retrieved successfully", data: posts });
    };

    async createPost(req, res) {
        console.log("The request body is:", req.body);

        if (req?.file) {
            // handle cloudinary upload here
           const uploadToCloudinary = await cloudinary.upload(req.file.path)
           await fs.unlinkSync(req.file.path)
           req.body.image = uploadToCloudinary.secure_url
        }

        const post = await postService.create(req.body);
        res.status(201).send({ success: true, message: "Post created successfully", data: post });
    };

    async getPost(req, res) {
        const post = await postService.findOne({ _id: req.params.id });

        if (!post) {
            res.status(404);
            throw new Error("There is no such post");
        }
        res.status(200).send({ success: true, message: "Post retrieved successfully", data: post });
    };

    async updatePost(req, res) {
        console.log(req.params, req.body)
        const updatePost = await postService.updatePost(req.params.id, req.body);


        if (!updatePost) {
            return res.status(404).send({
                success: false,
                message: "There is no such post",
            });
        }

        res.status(200).send({
            success: true,
            data: updatePost
        });
    };

    async deletePost(req, res) {
        const deletePost = await postService.findOneAndRemove(
            { _id: req.params.id });
        if (!deletePost) {
            return res.status(404).send({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    };


    async uploadImage(req, res) {
        console.log("The request body is:", req.body);
       if (!req?.file) {
        return res.status(404).send({
            success: false,
            message: "Image not found",
        });
       }

        // handle cloudinary upload here
       const response = await cloudinary.upload(req.file)
        const post = await postService.upload({ _id: req.body.post_id }, {
            image: response.secure_url
        });

        res.status(201).send({
            success: true,
            message: "Post updated successfully",
            data: post
        });
    }
}


module.exports = new PostController();