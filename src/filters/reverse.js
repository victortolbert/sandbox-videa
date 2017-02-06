module.exports = function reverse (value, wordsOnly) {
  var separator = ''
  wordsOnly && (separator = ' ')
  return value.split(separator).reverse().join(separator)
}
