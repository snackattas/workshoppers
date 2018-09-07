var strftime = require('strftime')
var net = require('net')
var server = net.createServer(function (socket) {
    socket.write(`${strftime('%Y-%m-%d %H:%M')}\n`)
    socket.end( () => {
        server.close()
    })
    // socket.on('data', (data) => {
    //     console.log(strftime('%Y-%m-%d %H:%M'))
    //     server.close()
    // })
    // socket.on('end', () => {
    //     socket.close()
    // })
    // // var data = strftime('%Y-%m-%d %H:%M');
    // socket.write(strftime('%Y-%m-%d %H:%M'));
    // socket.on('end', (data) => {
    //     // console.log(strftime('%Y-%m-%d %H:%M'))
    //     // console.log('disconnected')
    // })
    // socket.pipe(socket)
})
const port = process.argv[2];
server.listen(port)
    // () => { console.log('server bound')})

