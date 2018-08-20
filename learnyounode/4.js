var fs = require('fs');

let logFile = (err, data) => {
    console.log(data.split("\n").length - 1)
}

fs.readFile(process.argv[2], 'utf8', logFile);