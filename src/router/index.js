import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  { path: '/', name: 'index', component: require('pages') },
  { path: '/campaign-performance', name: 'campaign-performance', component: require('pages/campaign-performance') },
  { path: '/privacy', name: 'privacy', component: require('pages/privacy') },
  { path: '/terms', name: 'terms', component: require('pages/terms') },
  { path: '*', component: require('pages/error') }
]

export default new VueRouter({
  mode: 'history',
  routes
})
