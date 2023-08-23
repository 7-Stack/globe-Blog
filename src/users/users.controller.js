const User = require("../users/users.model");
const userService = require("./users.service");
const { CreateUserSchema } = require("../users/users.schema-validator");
const jwt = require("jsonwebtoken");
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

    // login user
    async login(req, res) {
        const existingUser = await userService.findOne({ email: req.body.email})
        if (!existingUser) {
            return res.status(400).send({ success: false, message: "Invalid email or password" })
        }

        const isValidPassword = await userService.comparePassword(req.body.password, existingUser.password)
        if (!isValidPassword) {
            return res.status(400).send({ success: false, message: "Invalid email or password" })
        }

        const token = jwt.sign({ _id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: "60m"})

        return res.header("auth-token", token).status(200).send({
            success: true,
            message: "User logged in successfully",
            data: {
                token
            }
        })
    }

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