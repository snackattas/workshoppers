const http =  require('http');
const url_to_hit = process.argv[2];

http.get(url_to_hit, (res) => {
    res.setEncoding('utf8');
    res.on('error', (e) => { return console.log(e)} );
    res.on('data', (data) => { console.log(data) } );
})
