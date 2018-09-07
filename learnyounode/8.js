const http =  require('http');
const url_to_hit = process.argv[2];
const results = [];
http.get(url_to_hit, (res) => {
    res.setEncoding('utf8');
    res.on('error', (e) => { return console.log(e)} );
    res.on('data', (data) => { results.push(data) });
    res.on('end', () => {
        const string = results.join('');
        console.log(string.length);
        console.log(string);
    })
})
