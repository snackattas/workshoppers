const map = require('through2-map');
const http =  require('http');
const fs = require('fs')
const port = process.argv[2];

const server = http.createServer(function (req, res) {

    req.setEncoding('utf8');
    req.pipe(map(function (data) {
            return data.toString().toUpperCase()
        })).pipe(res)
    });

server.listen(port)
