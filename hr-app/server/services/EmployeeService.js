const Employee = require('../model/Employee')
const User = require('../model/User')

const post = async (request) => {
    return await createEmployee(request)
}

const put = async (request) => {
    return await updateEmployee(request)
}

const list = async () => {
    return await getEmployees()
}

const getEmployees = async () => {
    try {
        return await Employee.find({}).exec()
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

const createEmployee = async (request) => {
    try {
        if (
            (await Employee.find({ email: request.body.email }).exec()).length
        ) {
            return {
                error: 'Employee Exists',
                status: 409,
            }
        }

        if (!(await User.find({ email: request.body.email }).exec()).length) {
            const user = new User({
                email: request.body.email,
                password: '1234', // TODO default password set but need password change process
                role: 'employee',
                accountType: 'employee',
            })
            await user.save()
        }

        const employee = new Employee({
            name: request.body.name,
            email: request.body.email,
            department: request.body.department,
            post: request.body.post,
            phoneNumber: request.body.phoneNumber,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        })
        return await employee.save()
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

const updateEmployee = async (request) => {
    try {
        const employee = await Employee.findById(request.params.id).exec()
        if ((!employee).length) {
            return {
                error: 'Employee Not Found',
                status: 404,
            }
        }
        employee.name = request.body.name
        employee.email = request.body.email
        employee.department = request.body.department
        employee.post = request.body.post
        employee.phoneNumber = request.body.phoneNumber
        updatedAt = Date.now()
        return await employee.save()
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

exports.post = post
exports.put = put
exports.list = list
