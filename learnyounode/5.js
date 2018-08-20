const fs = require('fs');

const dir = process.argv[2];
const ext = process.argv[3];

function filteredLs (err, list) {
    if (err) { return console.log(err); };
    for (i = 0; i < list.length; i++) {
        let file = list[i]
        let chunks = file.split('.');
        let file_ext = chunks[chunks.length - 1];
        if (file_ext == ext && chunks.length != 1) {
            console.log(file);
        }
    }
}

fs.readdir(dir, filteredLs);