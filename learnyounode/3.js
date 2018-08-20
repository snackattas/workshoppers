var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var file_string = buf.toString();
console.log(file_string.split("\n").length - 1);