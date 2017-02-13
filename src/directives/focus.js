module.exports = {
  bind (el, binding, vNode) {
    el.focus()
  }
}

// export default {
//   bind: function () {
//     let self = this
//     self.vm.$nextTick(_ => {
//       self.el.focus()
//     })
//   }
// }
