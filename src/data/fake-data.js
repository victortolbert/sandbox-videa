var R = require('ramda')
var faker = require('faker')
var nLoop = R.range(0)

function aPerson () {
  return {
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
  }
}

var data = {
  person: nLoop(10).map(aPerson)
}

require('fs').writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf-8')
