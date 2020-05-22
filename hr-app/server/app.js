const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { reportInternalError } = require('./utils/http-utils')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/health', require('./routes/HealthRoute'))
app.use('/user', require('./routes/UserRoute'))
app.use('/employee', require('./routes/EmployeeRoute'))
app.use('/review', require('./routes/ReviewRoute'))

app.use((req, res) => {
    res.status(404).send({
        code: 404,
        message: 'Route not found',
    })
})
app.use((err, req, res) => {
    reportInternalError(res, 'Internal Server Error!')
})

module.exports = app
