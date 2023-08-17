
const  express = require ("express");
const indexMiddleware = require("./src/middlewares/index.middleware");


const app = express();

indexMiddleware(app);

module.exports = app;