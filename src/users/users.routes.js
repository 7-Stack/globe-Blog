const express = require("express");
const userController = require("./users.controller");

const UserRoute = express.Router();

UserRoute.post("/", userController.create);

// UserRoute.get("/me", [
//     authenticate
// ], userController.me);



module.exports = UserRoute;