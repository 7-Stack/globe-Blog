const User = require("../users/users.model");
const userService = require("./users.service");
const { CreateUserSchema } = require("../users/users.schema-validator");
class UserController {
    async create(req, res) {
        // check if user exists
        const existingUser = await userService.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(409).send({ success: false, message: "User already exists" })
        }

        // create the user
        const value = await CreateUserSchema.validateAsync(req.body);
        const user = await userService.create(value);
        return res.status(201).send({ success: true, message: "User created successfully", data: user })
    };

    async me(req, res) {
        const user = await userService.findOne({
            _id: req.user?._id
        })

        return res.status(200).send({
            success: true,
            message: "User retrieved on request",
            data: user
        })
    };

    async getUsers (req, res) {
        console.log("The request body is");
        const users = await User.find();
        res.status(200).json(users);
    };

    async getUser(req, res) {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }
        res.status(201).json(user);
    };

}


module.exports = new UserController()