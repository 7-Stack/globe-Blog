const app = require("../../app");

const basePath = "/api/v1";

module.exports = (app) => {
    app.get(`${basePath}/docs`, (req, res) => {
        res.redirect()
    })

    app.get(`${basePath}/health-check`, (req, res) => {
        res.send({
            success: true,
            message: "Health Check"
        })
    })
};