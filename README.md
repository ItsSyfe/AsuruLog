# @itssyfe/asurulog

![npm](https://img.shields.io/npm/v/@itssyfe/asurulog)
![NPM](https://img.shields.io/npm/l/@itssyfe/asurulog)

Simple Logger for NodeJS.

## Example

Simple Example of single file usage of logger.

```javascript
const AsuruLog = require('@itssyfe/asurulog');
const Logger = AsuruLog.createLogger({
    name: 'MyLogger',
    debug: true
});

Logger.info('We can log whatever we want here!');
```

Another logger that is for use throughout a project.

```javascript
// Logger.js

const AsuruLog = require('@itssyfe/asurulog');
const Logger = AsuruLog.createLogger({
    name: 'MyLogger',
    debug: true
});

module.exports = Logger;


// Otherfile.js
const Logger = require('./Logger');

Logger.info('I can use this wherever I want!');
```