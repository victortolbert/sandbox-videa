// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

// import Load from './util/load'
// import Toast from './functions/toast'
// Vue.prototype.$vuetify = {
//   load: Load,
//   toast: Toast
// }

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)

import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed)

import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)

import FetchData from 'vue-fetch-data'
Vue.use(FetchData)

// require('~plugins/ga')
// require('~plugins/global-event-bus')
// require('~plugins/simple-vue-validator')
// require('~plugins/sweetalert2')
// require('~plugins/vee-validate')
// require('~plugins/vue-plugin')
// require('~plugins/vue-flatpickr')
// require('~plugins/vue-awesome')
// require('~plugins/vue-highcharts')
// require('~plugins/vue-instant')
// require('~plugins/vue-multiselect')
// require('~plugins/vue2-dragula')

// require('./stylus/main.styl')

import Components from '~components'
import Directives from '~directives'
import Filters from '~filters'

Components.registerAllGlobalComponents()
Directives.registerAllGlobalDirectives()
Filters.registerAllGlobalFilters()

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
