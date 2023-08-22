const express = require("express");
const userController = require("./users.controller");
const UserRoute = express.Router();
const validator = require("../middlewares/validator.middleware");
const { CreateUserSchema } = require("../users/users.schema-validator");
// const { router } = require("../../app");

UserRoute.route("/")
.get(userController.getUsers)
.post([validator(CreateUserSchema)], userController.create);

UserRoute.route("/:id")
.get(userController.getUser)
// .put(userController.updateUser)
// .delete(userController.deleteUser);

UserRoute.post("/", userController.create);
UserRoute.get("/me", [
    // authenticate
], userController.me);




module.exports = UserRoute;