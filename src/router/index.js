import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'index',
    component: require('pages')
  },
  {
    path: '/sellers/reporting/program-revenue',
    name: 'sellers-reporting-program-revenue',
    component: require('pages/sellers/reporting/program-revenue')
  },
  {
    path: '/sellers/reporting/account-performance',
    name: 'sellers-reporting-account-performance',
    component: require('pages/sellers/reporting/account-performance')
  },
  {
    path: '/sellers/reporting/order-reporting',
    name: 'sellers-reporting-order-reporting',
    component: require('pages/sellers/reporting/order-reporting')
  },
  {
    path: '/sellers/reporting/order-reporting/:id',
    name: 'sellers-reporting-order-reporting-id',
    component: require('pages/sellers/reporting/order-reporting/_id')
  },
  {
    path: '/sellers/campaign-performance',
    name: 'sellers-campaign-performance',
    component: require('pages/sellers/campaign-performance')
  },
  {
    path: '/sellers/campaign-performance/:id',
    name: 'sellers-campaign-performance-id',
    component: require('pages/sellers/campaign-performance/_id')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: require('pages/privacy')
  },
  {
    path: '/terms',
    name: 'terms',
    component: require('pages/terms')
  },
  {
    path: '*',
    component: require('pages/error')
  }
]

export default new VueRouter({
  // mode: 'history',
  routes
})
