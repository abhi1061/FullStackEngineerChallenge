const employeeRouter = require('express').Router()

const employeeService = require('../services/EmployeeService')
const { validate } = require('../middleware/RequestValidator')
const { requestSchema } = require('../model/RequestSchema')
const {
    sendError,
    sendResponse,
    reportInternalError,
} = require('../utils/http-utils')

employeeRouter.post('/', validate(requestSchema.EMPLOYEE), (req, res) => {
    employeeService
        .post(req)
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 201, result)
        })
        .catch((error) => {
            reportInternalError(res, 'Error creating employee', error)
        })
})

employeeRouter.get('/', (req, res) => {
    employeeService
        .list()
        .then((result) => {
            if (result.error) {
                return sendError(res, result.status, result.error)
            }
            sendResponse(res, 200, result)
        })
        .catch((error) => {
            reportInternalError(res, 'Error getting employees', error)
        })
})

employeeRouter.put(
    '/:id',
    validate(requestSchema.UPDATE_EMPLOYEE),
    (req, res) => {
        employeeService
            .put(req)
            .then((result) => {
                if (result.error) {
                    return sendError(res, result.status, result.error)
                }
                sendResponse(res, 204, {})
            })
            .catch((error) => {
                reportInternalError(res, 'Error updating employee', error)
            })
    },
)

module.exports = employeeRouter
