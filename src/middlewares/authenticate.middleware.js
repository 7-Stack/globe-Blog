const jwt = require("jsonwebtoken");
const User = require("../users/users.model");

exports.authenticate = async (req, res, next) => {
    const authorization = req.headers?.authorization || req.headers?.Authorization;
    const token = authorization?.split(" ")[1];

    if(!token) {
        return res.status(400).send({
            success: false,
            message: "Unauthorized: No token provided."
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ _id: decoded._id });
        if(!user) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized: User not found or deleted"
            })
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: error.message
        })
    }
}