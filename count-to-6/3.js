const inputs = process.argv.slice(2)
const result = inputs
  .map( input => input[0])
  .reduce ( (accum, cV) => accum+cV )
console.log(`[${inputs}] becomes "${result}"`)
