const User = require('../model/User')

const post = async (request) => {
    return await createUser(request)
}

const createUser = async (request) => {
    try {
        if ((await User.find({ email: request.body.email }).exec()).length) {
            return {
                error: 'User Exists',
                status: 409,
            }
        }
        const user = new User({
            email: request.body.email,
            password: request.body.password,
            role: 'admin',
            accountType: 'admin',
        })
        return await user.save()
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

const login = async (request) => {
    try {
        const user = await User.find({
            email: request.body.email,
            password: request.body.password,
        }).exec()

        if (!user.length) {
            return {
                error: 'User not found',
                status: 404,
            }
        }
        return user
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

exports.post = post
exports.login = login
