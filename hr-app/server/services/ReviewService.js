const Review = require('../model/Review')

const list = async () => {
    return await getAllReviews()
}

const put = async (request) => {
    return await updateReview(request)
}

const getAllReviews = async () => {
    try {
        return await Review.find().populate('employee')
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

const updateReview = async (request) => {
    try {
        const review = await Review.findById(request.params.id)
        if ((!review).length) {
            return {
                error: 'Review Not Found',
                status: 404,
            }
        }
        review.jobKnowledge = request.body.jobKnowledge
        review.workQuality = request.body.workQuality
        review.attendance = request.body.attendance
        review.initiative = request.body.initiative
        review.communication = request.body.communication
        review.dependibility = request.body.dependibility
        review.updatedAt = Date.now()
        return await review.save()
    } catch (error) {
        return {
            error: error,
            status: 500,
        }
    }
}

exports.list = list
exports.put = put
