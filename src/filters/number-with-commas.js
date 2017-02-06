module.exports = function numberWithCommas (num) {
  num = num + ''
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
