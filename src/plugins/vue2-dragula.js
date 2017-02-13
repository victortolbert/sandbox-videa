import Vue from 'vue'

import { Vue2Dragula } from 'vue2-dragula'
import 'dragula/dist/dragula.css'

Vue.use(Vue2Dragula, {
  logging: {
    directive: true,
    plugin: true,
    service: true,
    dragHandler: true,
    modelManager: true
  }
})
