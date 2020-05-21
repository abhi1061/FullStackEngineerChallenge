const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        index: true,
        required: true,
    },
    jobKnowledge: { type: Number, required: true },
    workQuality: { type: Number, required: true },
    attendance: { type: Number, required: true },
    initiative: { type: Number, required: true },
    communication: { type: Number, required: true },
    dependibility: { type: Number, required: true },
    remarks: String,
    totalScore: Number,
    createdAt: Date,
    updatedAt: Date,
})

module.exports =
    mongoose.models.Reviews || mongoose.model('Reviews', reviewSchema)
