const userService = require("./users.service");
class UserController {
    async create(req, res) {
        // check if user exists
        const existingUser = await userService.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(409).send({ success: false, message: "User already exists" })
        }

        // create the user
        const user = await userService.create(req.body)
        return res.status(201).send({ success: true, message: "User created successfully", data: user })
    }

}


module.exports = new UserController()