const http = require('http');
const async = require('async');

const hostname = process.argv[2];
const port = process.argv[3];
const endpoint = '/users/create';


function createUsers(cb) {
  async.times(5, (n, next) => {
    const options = {
      hostname,
      method: 'POST',
      path: endpoint,
      port,
    };
    const body = '';
    const req = http.request(options, (res) => {
      res.setEncoding('utf8');

      res.on('end', () => next(null, body));
    });
    req.write(JSON.stringify({ user_id: n }));
    req.end();
  }, (err) => {
    if (err) { return err; }
    return cb(null);
    // we should now have 5 users
  });
}

const getOptions = {
  hostname,
  port,
};
async.series([
  function requestOne(cb) {
    createUsers(cb);
  },
  function requestTwo(cb) {
    http.get(`${hostname}/users`, getOptions, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk.toString(); });
      res.on('end', () => { cb(null, body); });
      res.on('error', (err) => { cb(err); });
    });
  },
],
(err, results) => {
  if (err) { return err; }
  console.log('here');
  return console.log(results);
  // results is now equal to ['one', 'two']
});
