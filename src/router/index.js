import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  { path: '/', name: 'index', component: require('pages') },
  { path: '/chart', name: 'chart', component: require('pages/chart') },
  { path: '/privacy', name: 'privacy', component: require('pages/privacy') },
  { path: '/terms', name: 'terms', component: require('pages/terms') },
  { path: '*', component: require('pages/error') },
  ...require('./seller-routes')
]

export default new VueRouter({
  // mode: 'history',
  routes
})
