const winston = require('winston');
const { createLogger, transports } = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new transports.DailyRotateFile({
            filename: './test//logs/info.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            level: 'info'
         }),
         new winston.transports.Console({ level: 'debug' }),
        new transports.DailyRotateFile({
            filename: './test//logs/debug.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            level: 'info'
         }),
    ],
    format: winston.format.simple()
});

module.exports = logger;