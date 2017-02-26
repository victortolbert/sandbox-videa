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
    accounts: require('../models/accounts'),
    avails: require('../models/avails'),
    campaigns: require('../models/campaigns'),
    class87: require('../models/class-of-87'),
    dayparts: require('../models/dayparts'),
    markets: require('../models/markets'),
    offers: require('../models/offers'),
    orders: require('../models/orders'),
    priceGuide: require('../models/price-guide'),
    programs: require('../models/programs'),
    requestedAvails: require('../models/requested-avails'),
    specials: require('../models/specials')
  }
}
