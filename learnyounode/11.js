const http =  require('http');
const fs = require('fs')
const port = process.argv[2];
const file_path = process.argv[3];

const server = http.createServer(function (req, res) {
    let src = fs.createReadStream(file_path)
    src.pipe(res)
  })
server.listen(port)