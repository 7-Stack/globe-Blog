const app = require("../../app");
const UserRoute = require("../users/users.routes");

const basePath = "/api/v1";

module.exports = (app) => {
    app.use(`${basePath}/users`, UserRoute);
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