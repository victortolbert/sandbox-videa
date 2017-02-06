module.exports = function (url) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
}
