const express = require("express");
const userController = require("./users.controller");
const UserRoute = express.Router();
const { authenticate } = require("../middlewares/authenticate.middleware");
const validator = require("../middlewares/validator.middleware");
const { CreateUserSchema } = require("../users/users.schema-validator");
// const { router } = require("../../app");

UserRoute.route("/")
.get(userController.getUsers)
.post([validator(CreateUserSchema)], userController.create);

UserRoute.get("/me", [
    authenticate
], userController.me);

UserRoute.get("/:id", userController.getUser)
// .put(userController.updateUser)
// .delete(userController.deleteUser);

UserRoute.post("/", userController.create);
UserRoute.post("/login", userController.login);


module.exports = UserRoute;