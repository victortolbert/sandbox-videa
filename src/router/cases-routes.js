module.exports = [
  {
    path: '/cases',
    name: 'cases',
    component: require('pages/cases')
  },
  {
    path: '/cases/create',
    name: 'cases-create',
    component: require('pages/cases/create')
  },
  {
    path: '/cases/:id',
    name: 'cases-id',
    component: require('pages/cases/_id')
  }
]
