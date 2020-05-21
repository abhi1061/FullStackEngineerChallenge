const userRouter = require('express').Router()

const userService = require('../services/UserService')
const { validate } = require('../middleware/RequestValidator')
const { requestSchema } = require('../model/RequestSchema')
const {
    sendError,
    sendResponse,
    reportInternalError,
} = require('../utils/http-utils')

userRouter.post('/', validate(requestSchema.USER), (req, res) => {
    userService
        .post(req)
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 201, result.id)
        })
        .catch((error) => {
            reportInternalError(res, 'Error while creating user', error)
        })
})

userRouter.post('/login', validate(requestSchema.LOGIN), (req, res) => {
    userService
        .login(req)
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 200, result)
        })
        .catch((error) => {
            reportInternalError(res, 'Error login user', error)
        })
})

userRouter.put('/:id', validate(requestSchema.UPDATE_USER), (req, res) => {
    userService
        .put(req)
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 204, {})
        })
        .catch((error) => {
            reportInternalError(res, 'Error updating user', error)
        })
})

module.exports = userRouter
