let app = require('./app')
const connectDb = require('./dbConnection')
const config = require('./config')

app.listen(config.serverSettings.port, function () {
    console.log(`Listening on ${config.serverSettings.port}`)
    connectDb().then(() => {
        console.log('MongoDb connected')
    })
})
