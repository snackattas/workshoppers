const http = require('http');
const url = require('url');
const port = process.argv[2];
const parse = require('date-fns/parse')

const server = http.createServer(function (req, res) {
    const url_parse = url.parse(req.url, true)
    const query = url_parse.query
    const pathname = url_parse.pathname
    let json = new Object()
    req.setEncoding('utf8');
    res.setHeader('Content-Type', 'application/json');
    if (req.method != 'GET') { return res.end() }
    if (!query['iso']) { return res.end() }

    const date = parse(query['iso'])
    if (date == 'Invalid Date') { return res.end() }
    const jsDate = new Date(date)
    if (pathname == '/api/parsetime') {
        json['hour'] = jsDate.getHours()
        json['minute'] = jsDate.getMinutes()
        json['second'] = jsDate.getSeconds()
    } else if (pathname == '/api/unixtime') {
        json['unixtime'] = jsDate.getTime()
    } else { return res.end() }
    // req.pipe(() => {return JSON.stringify(json);}).pipe(res)
    res.write( JSON.stringify(json))
    res.end()
})
server.listen(port)

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
