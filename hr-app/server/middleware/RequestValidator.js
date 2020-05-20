const Joi = require('@hapi/joi')
/*
 * Middleware used to validate incoming request contents by schema.
 */
const RequestValidator = {
    validate: (schema) => {
        return (req, res, next) => {
            const { error } = schema.validate({
                ...req.body,
                ...req.params,
                ...req.query,
            })
            if (!error) {
                // Continue processing the request.
                next()
            } else {
                const message = error.details.map((i) => i.message).join(', ')
                res.status(400).send({ code: 400, message: message })
            }
        }
    },
}

module.exports = RequestValidator
