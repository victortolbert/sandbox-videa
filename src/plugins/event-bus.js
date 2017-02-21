import Vue from 'vue'

class VueEventBus {
  constructor () {
    this.vue = new Vue()
  }

  fire (event, data = null) {
    this.vue.$emit(event, data)
  }

  listen (event, callback) {
    this.vue.$on(event, callback)
  }
}

export const EventBus = new VueEventBus()

// // export default VueEventHandler
// // Create a global Event Bus
// var EventBus = new VueEventBus()

// // Add to Vue properties by exposing a getter for $bus
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get () {
//       return EventBus
//     }
//   }
// })
