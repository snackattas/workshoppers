const http = require('http');
const async = require('async');

const urls = process.argv.splice(2, 3);

async.each(urls, (url, done) => {
  http.get(url, (res) => {
    // res.on('data', (chunk) => {});
    res.on('end', () => done());
  }).on('error', (err) => { done(err); }),
  function (err) {
    if (err) { console.log(err); }
  };
});

//   async.each(process.argv.slice(2), function(item, done){
//     http.get(item, function(res){
//       res.on('data', function(chunk){
//       });

//       res.on('end', function(){
//         done(null);
//       });
//     }).on('error', function(err){
//       done(err);
//     });
//   },
//   function(err){
//     if(err) console.error(err);
//   });
