module.exports = [
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
        path: '/user',
        name: 'settings-user',
        component: require('pages/settings/user')
      },
      {
        path: '/specials',
        name: 'settings-specials',
        component: require('pages/settings/specials')
      },
      {
        path: '/premium-advertisers',
        name: 'settings-premium-advertisers',
        component: require('pages/settings/premium-advertisers')
      },
      {
        path: '/reps',
        name: 'settings-reps',
        component: require('pages/settings/reps')
      },
      {
        path: '/display',
        name: 'settings-display',
        component: require('pages/settings/display')
      }
    ]
  }

]
