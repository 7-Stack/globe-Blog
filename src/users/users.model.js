const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "Please add first name"]
    },
    lastName: {
        type: String,
        require: [true, "Pleaase add last name"]
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Please provide email"],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        minlength: 5,
        select: false
    },
})



module.exports = mongoose.model("User", userSchema);