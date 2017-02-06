// const request = require('request-promise') // require the request-promise module

// // make the request to the API, returns a Promise
// const response = request({
//   uri: 'http://www.mysite-api.com/avails',
//   json: true
// })

// // do some post-processing on the response to wrangle it into the correct format
// response.then(function (availsApiData) {
//   const availData = []
//   for (let avail of availsApiData) {
//     availData.push({
//       name: `${avail.firstName} ${avail.lastName}`,
//       email: avail.emailAddress
//     })
//   }
//   return availData
// })

module.exports = {
  hidden: true
  // context: {
  //   avails: response // use the response as context data for our template.
  // }
}
