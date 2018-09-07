const http = require('http')
const async = require('async')
const fs = require('fs')

const path = process.argv[2]


async.waterfall([
    function getURLFromFile (cb) {
        cb(null, fs.readFileSync(path, 'utf8'))
    },
    function pingURL(url, cb) {
        http.get(url, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk){
                console.log(chunk)
                body += chunk.toString();
              });
              res.on('end', function(){
                cb(null, body);
              });
            }).on('error', function(err) {
              cb(err);
            });
    }
    ], function(err, result){
        if (err) return console.error(err);
        console.log(result);
    }
);
   
// var fs = require('fs')
// , http = require('http')
// , async = require('async');

// async.waterfall([
// function(done){
//   fs.readFile(process.argv[2], function(err, data){
//     if (err) return done(err);
//     done(null, data)
//   });
// },

// function(data, done){
//   var body = '';
//   http.get(data.toString().trimRight(), function(res){
//     res.on('data', function(chunk){
//       body += chunk.toString();
//     });

//     res.on('end', function(chunk){
//       done(null, body);
//     });
//   }).on('error', function(e){
//     done(e);
//   });
// }
// ], function done(err, result){
// if (err) return console.error(err);
// console.log(result);
// });
