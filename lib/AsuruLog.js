const Logger = require('./Logger')

const AsuruLog = function() {
    /**
     * create logger with options
     * 
     * @param {object} options 
     * @returns Logger
     */
    this.createLogger = function(options) {
        const logger = new Logger(options);
        return logger;
    }
}

module.exports = AsuruLog;

/**
 * static method to create a logger
 * 
 * @param {object} options 
 * 
 * Valid options:
 *  - name : {string} Name of the logger
 *  - debug : {boolean} Do we want to log debug messages?
 * @returns Logger
 */
AsuruLog.createLogger = function(options) {
    const logManager = new AsuruLog();

    return logManager.createLogger(options);
}