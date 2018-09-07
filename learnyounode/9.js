const http =  require('http');
const urls_to_hit = process.argv.splice(2,4);

let count = 0

function readURL(urls_to_hit, count) {
    http.get(urls_to_hit[count], (res) => {
        let result = [];
        res.setEncoding('utf8');
        res.on('error', (e) => { return console.log(e)} );
        res.on('data', (data) => { result.push(data) });
        res.on('end', (e) => {
            console.log(result.join(''))
            if (urls_to_hit.length != count) {
                count++
                readURL(urls_to_hit, count)
            }
        })
    })
}

readURL(urls_to_hit, count)
