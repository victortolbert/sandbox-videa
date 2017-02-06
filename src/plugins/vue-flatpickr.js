import Vue from 'vue'

if (process.BROWSER_BUILD) {
  Vue.component('ui-flatpickr', require('vue-flatpickr'))
}
