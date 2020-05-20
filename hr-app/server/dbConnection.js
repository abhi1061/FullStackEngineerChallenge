const mongoose = require('mongoose')

const config = require('./config')

const connectDb = () => {
    return mongoose.connect(config.serverSettings.dbConnectString)
}

module.exports = connectDb
