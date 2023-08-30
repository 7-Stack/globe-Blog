// const { posts } = require("./posts.routes");
const postService = require("./posts.service");
// const { CreatePostSchema } = require("./posts.schema-validator");
// const { post } = require("../../app");


class PostController {
    async getPosts(req, res) {
        console.log("The request body is");
        const posts = await postService.find(req.body);
        res.status(200).send({ success: true, message: "Posts retrieved successfully", data: posts });
    };

    async createPost(req, res) {
        console.log("The request body is:", req.body);

        // const value = await CreatePostSchema.validateAsync(req.body);

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
            req.params.id,
            req.body,
            { remove: true }
        );
        // const postIndex = posts.findIndex(post => post.id === postId);
        if (!deletePost === -1) {
            return res.status(404).send({ message: "Post not found" });
        }

        // posts.splice(deletePost, 1);

        res.json({ message: "Post deleted successfully" });
    };
}


module.exports = new PostController();