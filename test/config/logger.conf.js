const winston = require('winston');
const { createLogger, transports } = require('winston');
// const fs = require('fs');
require('winston-daily-rotate-file');

// var transport = new winston.transports.DailyRotateFile({
//     filename: 'info-%DATE%.log',
//     datePattern: 'YYYY-MM-DD-HH',
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d'
//   });

//   transport.on('rotate', function(oldFilename, newFilename) {
//     // do something fun
//   });

// const infoFile = './test//logs/info-%DATE%.log';
// const debugFile = './test//logs/debug-%DATE%.log';

// if (!fs.existsSync(infoFile) || !fs.existsSync(debugFile))  {
//     fs.writeFile("books.txt", data, (err) => {
//         if (err)
//           console.log(err);
//         else {
//           console.log("File written successfully\n");
//           console.log("The written has the following contents:");
//           console.log(fs.readFileSync("books.txt", "utf8"));
//         }
//       });
// }




const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new transports.DailyRotateFile({
            filename: './test//logs/info.log',
            datePattern: 'YYYY-MM-DD.',
            zippedArchive: true,
            level: 'info'
         }),
         new winston.transports.Console({ level: 'debug' }),
        new transports.DailyRotateFile({
            filename: './test//logs/debug.log',
            datePattern: 'YYYY-MM-DD.',
            zippedArchive: true,
            level: 'info'
         }),
    ],
    format: winston.format.simple()
});



module.exports = logger;