function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

module.exports = [
  {
    path: '/sellers/order-management/pending-orders',
    name: 'sellers-order-management-pending-orders',
    component: require('pages/sellers/order-management/pending-orders'),
    props: { name: 'world' }
  }, // static values
  {
    path: '/sellers/order-management/pending-orders/:id',
    name: 'sellers-order-management-pending-orders-id',
    component: require('pages/sellers/order-management/pending-orders/_id'),
    props: true
  }, // Pass route.params to props
  {
    path: '/sellers/order-management/pending-makegoods',
    name: 'sellers-order-management-pending-makegoods',
    component: require('pages/sellers/order-management/pending-makegoods')
  },
  {
    path: '/sellers/order-management/pending-makegoods/:id',
    name: 'sellers-order-management-pending-makegoods-id',
    component: require('pages/sellers/order-management/pending-makegoods/_id')
  },
  {
    path: '/sellers/order-management/pending-makegoods/:id/:offer',
    name: 'sellers-order-management-pending-makegoods-id-offer',
    component: require('pages/sellers/order-management/pending-makegoods/_id/offer')
  },
  {
    path: '/sellers/order-management/open-preempts',
    name: 'sellers-order-management-open-preempts',
    component: require('pages/sellers/order-management/open-preempts')
  },
  {
    path: '/sellers/order-management/order-search',
    name: 'sellers-order-management-order-search',
    component: require('pages/sellers/order-management/order-search')
  },
  {
    path: '/sellers/order-management/order-search/:id',
    name: 'sellers-order-management-order-search-id',
    component: require('pages/sellers/order-management/order-search/_id')
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
    path: '/sellers/price-guide',
    name: 'sellers-price-guide',
    component: require('pages/sellers/price-guide')
    // children: [
    //   {
    //     path: '',
    //     name: 'sellers-price-guide-id',
    //     component: require('pages/sellers/price-guide/_id'),
    //     props: dynamicPropsFn
    //   } // custom logic for mapping between route and props
    // ]
  },
  {
    path: '/sellers/avails',
    name: 'sellers-avails',
    component: require('pages/sellers/avails')
  },
  {
    path: '/sellers/avails/:id',
    name: 'sellers-avails-id',
    component: require('pages/sellers/avails/_id')
  },
  {
    path: '/sellers/avails/:id/edit',
    name: 'sellers-avails-id-edit',
    component: require('pages/sellers/avails/_id/edit')
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
    path: '/settings',
    name: 'settings',
    component: require('pages/settings'),
    children: [
      {
        path: 'user',
        name: 'settings-user',
        component: require('pages/settings/user')
      },
      {
        path: 'specials',
        name: 'settings-specials',
        component: require('pages/settings/specials')
      },
      {
        path: 'premium-advertisers',
        name: 'settings-premium-advertisers',
        component: require('pages/settings/premium-advertisers')
      },
      {
        path: 'reps',
        name: 'settings-reps',
        component: require('pages/settings/reps')
      },
      {
        path: 'display',
        name: 'settings-display',
        component: require('pages/settings/display')
      }
    ]
  }

]
