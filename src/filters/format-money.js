module.exports = function formatMoney (val) {
  var num = (val)
  // return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return '$' + num
}
