/**
 * Contains common, reusable utility functions such as sending response/error objects to the client.
 */

/**
 * Sends an HTTP response with a payload.
 * @param {Response} res The Response object
 * @param {number} statusCode The status code of the response
 * @param {*} data The payload to put in the response
 * @returns {undefined}
 */
function sendResponse(res, statusCode, data) {
    res.status(statusCode)
    res.send(data)
}

/**
 * Sends an HTTP response with error message and details
 * @param {Response} res The Response object
 * @param {number} statusCode The status code of the response
 * @param {string} errorMessage The error message
 * @param {*} data The payload to put in the response
 * @returns {undefined}
 */
function sendError(res, statusCode, errorMessage, data) {
    res.status(statusCode)
    res.send(
        errorMessage || data
            ? {
                  code: statusCode,
                  message: errorMessage,
                  data: data,
              }
            : '',
    )
}

/**
 * Sends an HTTP 500 error
 * @param {Response} res The Response object
 * @param {String} errorMessage The error
 * @param {*} data The data to put in the response
 * @returns {undefined}
 */
function reportInternalError(res, errorMessage, data) {
    sendError(res, 500, errorMessage, data)
}

module.exports = {
    sendResponse,
    sendError,
    reportInternalError,
}
