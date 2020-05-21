const reviewRouter = require('express').Router()

const { validate } = require('../middleware/RequestValidator')
const { requestSchema } = require('../model/RequestSchema')
const {
    sendError,
    sendResponse,
    reportInternalError,
} = require('../utils/http-utils')
const reviewService = require('../services/ReviewService')

reviewRouter.get('/', (req, res) => {
    reviewService
        .list()
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 200, result)
        })
        .catch((error) => {
            reportInternalError(res, 'Error getting reviews', error)
        })
})

reviewRouter.put('/:id', validate(requestSchema.UPDATE_REVIEW), (req, res) => {
    reviewService
        .put(req)
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 204, {})
        })
        .catch((error) => {
            reportInternalError(res, 'Error updating review', error)
        })
})

module.exports = reviewRouter
