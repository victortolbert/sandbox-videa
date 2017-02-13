module.exports = function () {
  var faker = require('faker')
  var _ = require('lodash')
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    requestAvails: require('../models/request-avails'),
    priceGuide: require('../models/price-guide'),
    campaigns: require('../models/campaigns'),
    dayparts: require('../models/dayparts'),
    programs: require('../models/programs'),
    specials: require('../models/specials'),
    offers: require('../models/offers'),
    orders: require('../models/orders'),
    avails: require('../models/avails')
  }
}
