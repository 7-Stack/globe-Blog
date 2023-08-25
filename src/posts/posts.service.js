const Post = require("./posts.model");

class PostService {
    async create(createPostDto) {
        const newPost = await Post.create(createPostDto);
        return newPost
    };

    async getPosts(req, res) {
        console.log("The request body is");
        const posts = await Post.find();
        res.status(200).json(posts);
    };

    async getPost(req, res) {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404);
            throw new Error("There is no such post");
        }
        res.status(201).json(post);
    };
    

    async updatePost(id, post_details) {
        console.log(id, post_details)
        const updatedPost = await Post.findOneAndUpdate({_id: id}, post_details, { new: true });
        console.log(updatedPost, "Updated Post")
        return updatedPost;
    }

    async deletePost(req, res) {
        const deletePost = await Post.findOneAndRemove(
            req.params.id,
            req.body,
            { remove: true }
        );
        // const postIndex = posts.findIndex(post => post.id === postId);
        if (!deletePost === -1) {
            return res.status(404).json({ message: "Post not found" });
        }

        posts.splice(deletePost, 1);

        res.json({ message: "Post deleted successfully" });
    };
}


module.exports = new PostService();