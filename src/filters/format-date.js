module.exports = function formatDate (value) {
  var date = new Date(value)
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
}
