const commentService = require("./comments.service");


class CommentController {
    async createComment(req, res) {
        console.log("The request body is", req.body);

        const comment = await commentService.create(req.body);
        res.status(200).send({ success: true, message: "Comment created successfully", data: comment });
    };

    async getComment(req, res) {
        const comment = await commentService.findOne({ _id: req.params.id });

        if (!comment) {
            res.status(404);
            throw new Error("Comment not found");
        }
        res.status(200).send({ success: true, message: "Comment retrieved successfully", data: comment });
    };

    async updateComment (req, res) {
        console.log(req.params, req.body)
        const updateComment = await commentService.updateComment(req.params.id, req.body);

        if(!updateComment) {
            return res.status(404).send({ success: true, message: "Comment not found" });
        }

        res.status(200).send({ success: true, message: "Changes made successfully", data: updateComment});
    };

    async deleteComment(req, res) {
        const deleteComment = await commentService.findOneAndRemove(
            { _id: req.params.id });
            if(!deleteComment) {
                return res.status(400).send({ message: "Post not found" });
            }
            res.json({ message: "Comment deleted successfully" });
    };
}


module.exports = new CommentController();