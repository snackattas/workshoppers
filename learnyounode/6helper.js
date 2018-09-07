const fs = require('fs');


function filtering (list, extFilter) {
    let filteredList = [];
    for (i = 0; i < list.length; i++) {
        let file = list[i]
        let chunks = file.split('.');
        let fileExt = chunks[chunks.length - 1];
        if (fileExt == extFilter && chunks.length != 1) {
            filteredList.push(file)
        }
    }
    return filteredList
}

function filteredLs (dirName, extFilter, callback) {
    fs.readdir(dirName, function(err, list) {
        if (err) { return callback(err) }
        filteredList = filtering(list, extFilter);
        callback(null, filteredList)
    })
}

module.exports = function (dirName, extFilter, callback) {
    filteredLs(dirName, extFilter, callback);
}
