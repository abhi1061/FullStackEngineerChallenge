const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDb = require('./dbConnection')
const config = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(config.serverSettings.port, function () {
    console.log(`Listening on ${config.serverSettings.port}`)
    connectDb().then(() => {
        console.log('MongoDb connected')
    })
})

app.use('/health', require('./routes/HealthRoute'))
app.use('/user', require('./routes/UserRoute'))
app.use('/employee', require('./routes/EmployeeRoute'))

app.use((req, res) => {
    res.status(404).send({
        code: 404,
        message: 'Route not found',
    })
})
app.use((err, req, res) => {
    reportInternalError(res, 'Internal Server Error!')
})
