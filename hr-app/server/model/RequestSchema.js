const Joi = require('@hapi/joi')

const requestSchema = {
    EMPLOYEE: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        department: Joi.string().required(),
        post: Joi.string().required(),
        phoneNumber: Joi.string().optional(),
    }),
    UPDATE_EMPLOYEE: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        department: Joi.string().required(),
        post: Joi.string().required(),
        phoneNumber: Joi.string().optional(),
    }),
    DELETE_EMPLOYEE: Joi.object().keys({
        id: Joi.string().required(),
    }),
    USER: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
    LOGIN: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
}

module.exports = {
    requestSchema,
}
