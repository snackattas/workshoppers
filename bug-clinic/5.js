var readFile = require("fs").readFile;
var resolve = require("path").resolve;

module.exports = scenario;

function scenario(jsonPath, cb) {
  readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
    cb(error, JSON.parse(contents));
  });
}

// scenario(resolve(process.cwd(), 'test-input.json'), (err, value) =>  {console.log(value) })

var domain = require("domain");

function doSomethingDangerousAndAsync(cb) {
  // create a new domain
  var d = domain.create();

  // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
  d.on("error", cb);

  // use the domain
  d.run(function () {
    scenario(resolve(process.cwd(), 'test-input.json'), cb)

  });
}
