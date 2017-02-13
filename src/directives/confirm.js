module.exports = {
  isLiteral: false,
  bind () {
    this.el.addEventListener('click', (e) => {
      if (!confirm(this.expression)) {
        e.preventDefault()
        return
      }
    })
  }
}

// module.exports = function (message) {
//   this.el.addEventListener('click', (e) => {
//     if (!confirm(message)) {
//       e.preventDefault()
//       return
//     }
//   })
// }
