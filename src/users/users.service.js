const bcrypt = require("bcrypt")
const User = require("./users.model")

class UserService {
    async create(createUserDto) {
        const salt = 10;
        const hashPassword = await bcrypt.hash(createUserDto.password, salt)
        return await User.create({
            ...createUserDto,
            password: hashPassword
        })
    }

    async findOne(filter = { }) {
        return await User.findOne(filter)
    }

    async comparePassword(plainTextPassword, hashedPassword) {
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }
}

module.exports = new UserService()