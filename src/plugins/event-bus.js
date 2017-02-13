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

// export default VueEventHandler
