const router = require('express').Router()
const { sendResponse } = require('../utils/http-utils')

// Server status check
router.get('/', (_req, res) => {
    sendResponse(res, 200, 'Server is online')
})

module.exports = router
