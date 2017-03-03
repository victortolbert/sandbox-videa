// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'script-loader!jquery/dist/jquery.min'
// import 'script-loader!what-input/dist/what-input.min'
// import 'script-loader!foundation-sites/dist/js/foundation.min'

import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'




Vue.config.productionTip = false
Vue.config.performance = true

// import auth from './auth'

// // Check the user's auth status when the app starts
// auth.checkAuth()

// import Load from './util/load'
// import Toast from './functions/toast'
// Vue.prototype.$vuetify = {
//   load: Load,
//   toast: Toast
// }
// window.jQuery = window.$ = require('jquery')
// Vue.use(require('vue-full-calendar'))

// import fullCalendar from 'vue-fullcalendar'
// Vue.component('fullcalendar', fullCalendar)

// https://github.com/surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

import Carousel3d from 'vue-carousel-3d'
Vue.use(Carousel3d)

import Dropdown from 'hsy-vue-dropdown'
Vue.use(Dropdown)

import vueBemCn from 'vue-bem-cn'
// default settings
const bemConfig = {
  ns: '', // namespace
  el: '__', // element delimeter
  mod: '--', // modifier delimeter
  modValue: '-' // value delimeter for modifier
}
Vue.use(vueBemCn, bemConfig)

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

import svgicon from 'vue-svgicon'
// Default tag name is 'svgicon'
Vue.use(svgicon, {
  tagName: 'svgicon'
})

// chartjs package
require('chart.js')

// vue-charts package
require('hchs-vue-charts')
Vue.use(VueCharts)

import VueFloatLabel from 'vue-float-label'
Vue.use(VueFloatLabel)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import Validity from 'vue-validity'
Vue.use(Validity, {
  errorMessages: {
    required: '{field} is required'
  }
})

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueAsyncComputed from 'vue-async-computed'
Vue.use(VueAsyncComputed)

import VueFetchData from 'vue-fetch-data'
Vue.use(VueFetchData)

import VueFlexboxgrid from 'vue-flexboxgrid'
Vue.use(VueFlexboxgrid)

import VueFractionGrid from 'vue-fraction-grid'
Vue.use(VueFractionGrid)

import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)

import VueSweetalert from 'vue-sweetalert'
Vue.use(VueSweetalert)

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

// import VueWaypoint from 'vue-waypoint'
// Vue.use(VueWaypoint)

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
// import Directives from '~directives'
import Filters from '~filters'

Components.registerAllGlobalComponents()
// Directives.registerAllGlobalDirectives()
Filters.registerAllGlobalFilters()

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
