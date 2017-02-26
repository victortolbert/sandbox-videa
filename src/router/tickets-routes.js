module.exports = [
  {
    path: '/tickets',
    name: 'tickets',
    component: require('pages/tickets')
  },
  {
    path: '/tickets/create',
    name: 'tickets-create',
    component: require('pages/tickets/create')
  },
  {
    path: '/tickets/:id',
    name: 'tickets-id',
    component: require('pages/tickets/_id')
  }
]
