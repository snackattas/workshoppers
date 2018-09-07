const http = require('http');
const async = require('async');

const urls = process.argv.splice(2, 3);
function getURL(url, cb) {
  let body = '';
  http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => {
      cb(null, body);
    });
    res.on('error', (err) => {
      cb(err);
    });
  });
}

async.series({
  requestOne(done) {
    getURL(urls[0], done);
  },
  requestTwo(done) {
    getURL(urls[1], done);
  },
}, (err, results) => {
  if (err) { return err; }
  return console.log(results);
  // results will be {one: 1, two: 2}
});
