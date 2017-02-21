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
    avails: require('./avails'),
    campaigns: require('./campaigns'),
    class87: require('../models/class-of-87'),
    dayparts: require('./dayparts'),
    offers: require('./offers'),
    orders: require('./orders'),
    priceGuide: require('./price-guide'),
    programs: require('./programs'),
    requestAvails: require('./request-avails'),
    specials: require('./specials'),
  }
}
