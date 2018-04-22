function makeImportant(s, i = s.length) {
  return `${s}${'!'.repeat(i)}`
}
var a  = 5
module.exports = makeImportant
