const faker = require('faker')
const ticketCount = 30
const ticketData = []

for (var i = 0; i < ticketCount; i++) {
  ticketData.push({
    orderCount: i,
    advertiser: faker.company.companyName(),
    agency: faker.company.companyName(),
    revenue: faker.finance.amount(),
    marketBudget: faker.finance.amount(),
    spotVolume: faker.random.number(30, 90),
    share: faker.random.number()
  })
}

module.exports = {
  hidden: true,
  context: {
    tickets: ticketData,
    wiki_page: 'https://videatv.atlassian.net/wiki/pages/viewpage.action?pageId=12484646'
  }
}
