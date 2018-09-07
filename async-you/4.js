const http = require('http');
const async = require('async');

const urls = process.argv.splice(2, 3);

// async.map(urls, (url, done) => {
//   let body = '';
//   http.get(url, (res) => {
//     res.on('data', (chunk) => { body += chunk.toString(); });
//     res.on('end', () => done(null, body));
//     res.on('error', err => done(err));
//   })
//   (err, results) => {
//     if (err) { console.log(err); }
//     results.forEach((result) => { console.log(result); });
//   };
// });


async.map(urls, (item, done) => {
  let body = '';
  const req = http.request(item, (res) => {
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => done(null, body));
  });
  req.end();
},
(err, results) => {
  if (err) return console.log(err);
  return console.log(results);

// results is an array of the response bodies in the same order
});

// var http = require('http')
// , async = require('async');

// async.map(process.argv.slice(2), function(url, done){
// var body = '';
// http.get(url, function(res){
//   res.on('data', function(chunk){
//     body += chunk.toString();
//   });

//   res.on('end', function(){
//    return done(null, body);
//   });
// });
// },
// function done(err, results){
// if (err) return console.log(err);
// // results is an array of the response bodies in the same order
// console.log(results);
// });

