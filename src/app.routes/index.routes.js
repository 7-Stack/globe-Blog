const app = require("../../app");
const CommentRoute = require("../comments/comments.routes");
const PostRoute = require("../posts/posts.routes");
const UserRoute = require("../users/users.routes");

const basePath = "/api/v1";

module.exports = (app) => {
    app.use(`${basePath}/users`, UserRoute);
    // app.use(`${basePath}/posts/upload`, PostRoute);
    app.use(`${basePath}/posts`, PostRoute);
    app.use(`${basePath}/comments`, CommentRoute);
    app.get(`${basePath}/docs`, (req, res) => {
        res.redirect("https://documenter.getpostman.com/view/28028237/2s9Y5R2mK5")
    })
    // app.use(`${basePath}`, UserRoute);

    app.get(`${basePath}/health-check`, (req, res) => {
        res.send({
            success: true,
            message: "Server is Live!"
        })
    })
};