// project logger file

const AsuruLog = require('./index.js');
const Logger = AsuruLog.createLogger({
    name: 'TestLogger',
    debug: true
});

module.exports = Logger;


// elsewhere

const logger = require('./test.js');

logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.debug('This is a debug message');