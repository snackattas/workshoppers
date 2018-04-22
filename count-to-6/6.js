module.exports = function average (...nums) {
  return nums.reduce ((accum, cV) => accum + cV ) / nums.length
}
