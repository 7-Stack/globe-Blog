const Post = require("./posts.model");

class PostService {
    async create(createPostDto) {
        const newPost = await Post.create(createPostDto);
        return newPost
    };

    async getPosts(req, res) {
        console.log("The request body is");
        const posts = await Post.find(req.body);
        res.status(200).json(posts);
    };
    async find(filter = {}) {
        return await Post.find(filter);
    }

    async getPost(req, res) {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404);
            throw new Error("There is no such post");
        }
        res.status(201).json(post);
    };

    async findOne(filter = {}) {
        return await Post.findOne(filter);
    };
    

    async updatePost(id, post_details) {
        console.log(id, post_details)
        const updatedPost = await Post.findOneAndUpdate({_id: id}, post_details, { new: true });
        console.log(updatedPost, "Updated Post")
        return updatedPost;
    }

    async deletePost(req, res) {
        const deletePost = await Post.findOneAndRemove(
            { _id: req.params.id });
        // const postIndex = posts.findIndex(post => post.id === postId);
        if (!deletePost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    };

    async findOneAndRemove(filter = {}) {
        return await Post.findOneAndRemove(filter);
    }
}


module.exports = new PostService();