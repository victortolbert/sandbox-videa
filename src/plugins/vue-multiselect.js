import Vue from 'vue'

if (process.BROWSER_BUILD) {
  Vue.component('multiselect', require('vue-multiselect'))
}
