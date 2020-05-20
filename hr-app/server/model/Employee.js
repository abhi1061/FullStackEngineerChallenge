const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: String,
    post: String,
    phoneNumber: String,
    createdAt: Date,
    updatedAt: Date,
})

module.exports =
    mongoose.models.Employees || mongoose.model('Employees', employeeSchema)
