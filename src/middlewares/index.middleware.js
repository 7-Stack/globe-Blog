const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");

const indexRoutes = require("../app.routes/index.routes");
const errorHandler = require("./errorHandler");

const connectDb = require("../config/dbConnection");
connectDb();
const upload = multer({dest: "uploads/"});


module.exports = (app) => {
    app.use(morgan("dev"));
    app.use(cors());''
    app.use(express.json());
    indexRoutes(app);

    app.use(errorHandler);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(__dirname, { message: "public"}));
};