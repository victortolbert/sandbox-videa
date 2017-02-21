module.exports = [
  {
    path: '/morehouse1987',
    component: require('pages/morehouse1987'),
    children: [
      {
        path: '',
        name: 'morehouse1987',
        component: require('pages/morehouse1987/home')
      },
      {
        path: 'events',
        name: 'morehouse1987-events',
        component: require('pages/morehouse1987/events')
      },
      {
        path: 'photos',
        name: 'morehouse1987-photos',
        component: require('pages/morehouse1987/photos')
      },
      {
        path: 'contact',
        name: 'morehouse1987-contact',
        component: require('pages/morehouse1987/contact')
      },
      {
        path: 'resources',
        name: 'morehouse1987-resources',
        component: require('pages/morehouse1987/resources')
      }
    ]
  }
  // ,
  // {
  //   path: '/morehouse1987',
  //   name: 'morehouse1987',
  //   component: require('pages/morehouse1987')
  // },
  // {
  //   path: '/morehouse1987/events',
  //   name: 'morehouse1987-events',
  //   component: require('pages/morehouse1987/events')
  // },
  // {
  //   path: '/morehouse1987/photos',
  //   name: 'morehouse1987-photos',
  //   component: require('pages/morehouse1987/photos')
  // },
  // {
  //   path: '/morehouse1987/contact',
  //   name: 'morehouse1987-contact',
  //   component: require('pages/morehouse1987/contact')
  // },
  // {
  //   path: '/morehouse1987/resources',
  //   name: 'morehouse1987-resources',
  //   component: require('pages/morehouse1987/resources')
  // }
]
