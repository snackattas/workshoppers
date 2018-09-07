const filteredLs = require('./6helper.js')

const dirName = process.argv[2];
const extFilter = process.argv[3];

filteredLs(dirName, extFilter, function(err, data) {
    if (err) { return err };
    data.forEach( function(entry) { console.log(entry); });
})