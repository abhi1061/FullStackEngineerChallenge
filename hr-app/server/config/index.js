const values = require('./values/Config.json')

const config = {
    serverSettings: {
        port: values.config.serverSettings.port,
        dbConnectString: values.config.serverSettings.dbConnectString,
    },
}

module.exports = config
