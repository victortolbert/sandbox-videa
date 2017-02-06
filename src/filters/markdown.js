var marked = require('marked')

marked.setOptions({
  gfm: false,

  highlight (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

module.exports = function (value) {
  return marked(value)
}
