const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const indexRoutes = require("../app.routes/index.routes");
const errorHandler = require("./errorHandler");

const connectDb = require("../config/dbConnection");
connectDb();


module.exports = (app) => {
    app.use(morgan("dev"));
    app.use(cors());''
    app.use(express.json());
    indexRoutes(app);

    app.use(errorHandler);
};