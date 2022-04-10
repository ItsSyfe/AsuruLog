/**
 * @class Logger
 * 
 * @author: @itssyfe
 */

const Logger = function(options) {
    'use strict';

    const loggerName = options.name || 'AsuruLog';
    const logDebug = options.debug || false;

    /**
     * log a message with level of info
     * 
     * @param {*} What to log 
     */
    this.info = function(message) {
        logFormat('info', message);
    }

    /**
     * log a message with level of warn
     * 
     * @param {*} What to log 
     */
    this.warn = function(message) {
        logFormat('warn', message);
    }

    /**
     * log a message with level of error
     * 
     * @param {*} What to log 
     */
    this.error = function(message) {
        logFormat('error', message);
    }

    /**
     * log a message with level of debug
     * 
     * @param {*} What to log
     */
    this.debug = function(message) {
        if (logDebug)
            logFormat('debug', message);
    }

    function logFormat(logType, message) {
        const date_ob = new Date();
        const date = ('0' + date_ob.getDate()).slice(-2);
        const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
        const year = date_ob.getFullYear();
        const hours = date_ob.getHours();
        const minutes = date_ob.getMinutes();
        const seconds = date_ob.getSeconds();
    
        console.log(`\u001b[36m${year}-${month}-${date}\u001b[0m \u001b[34m${hours}:${minutes}:${seconds}\u001b[0m \u001b[35m[\u001b[0m${Logger.LEVELS[logType]}\u001b[35m]\u001b[0m \u001b[32m${loggerName}\u001b[0m \u001b[34;1m-\u001b[0m ${message}`);
    }
}

/**
 * Black: \u001b[30m
 * Red: \u001b[31m
 * Green: \u001b[32m
 * Yellow: \u001b[33m
 * Blue: \u001b[34m
 * Magenta: \u001b[35m
 * Cyan: \u001b[36m
 * White: \u001b[37m
 * Bright Black: \u001b[30;1m
 * Bright Red: \u001b[31;1m
 * Bright Green: \u001b[32;1m
 * Bright Yellow: \u001b[33;1m
 * Bright Blue: \u001b[34;1m
 * Bright Magenta: \u001b[35;1m
 * Bright Cyan: \u001b[36;1m
 * Bright White: \u001b[37;1m
 * Reset: \u001b[0m
 */

Logger.LEVELS = {
    info: '\u001b[36;1mINFO\u001b[0m',
    warn: '\u001b[35;1mWARN\u001b[0m',
    error: '\u001b[31;1mERROR\u001b[0m',
    debug: '\u001b[34mDEBUG\u001b[0m'
}

module.exports = Logger;