const Comment = require("./comments.model");

class CommentService {
    async create(createCommentDto) {
        const newComment = await Comment.create(createCommentDto);
        return newComment
    };

    async getComment(req, res) {
        const comment = await Comment.findById(req.params.id);
        if(!comment) {
            res.status(404);
            throw new Error("Comment not found")
        }
        res.status(200).send({ success: true, message: "Comment retrieved successfully", data: comment })
    };
    async findOne(filter = {}) {
        return await Comment.findOne(filter);
    };

    async updateComment(id, comment_details) {
        console.log(id, comment_details)
        const updateComment = await Comment.findOneAndUpdate({ _id: id },
            comment_details, { new: true });
            return updateComment;
    };

    async  deleteComment(req, res) {
        const deleteComment = await Comment.findOneAndRemove(
            { _id: req.params.id });
            if(!deleteComment) {
                return res.status(404).send({ message: "Comment not found" })
            }
            res.json({ message: "Comment deleted successfully" });
    };
    async findOneAndRemove(filter = {}) {
        return await Comment.findOneAndRemove(filter);
    }
}


module.exports = new CommentService();