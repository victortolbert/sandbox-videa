module.exports = function formatRating (val) {
  var num = parseFloat(val)
  return num.toFixed(1)
}
