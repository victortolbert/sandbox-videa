// https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
var deadline = '2015-12-31'

function getTimeRemaining (endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((total / 1000) % 60)
  var minutes = Math.floor((total / 1000 / 60) % 60)
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  var days = Math.floor(total / (1000 * 60 * 60 * 24))
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

function initializeClock (id, endtime) {
  var clock = document.getElementById(id)
  var timeinterval = setInterval(function () {
    var total = getTimeRemaining(endtime)
    clock.innerHTML = 'days: ' + total.days + '<br>' +
                      'hours: ' + total.hours + '<br>' +
                      'minutes: ' + total.minutes + '<br>' +
                      'seconds: ' + total.seconds
    if (total.total <= 0) {
      clearInterval(timeinterval)
    }
  }, 1000)
}
