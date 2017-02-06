import Vue from 'vue'

Vue.filter('caseInsensitiveOrderBy', require('src/filters/case-insensitive-order-by'))
Vue.filter('concat', require('src/filters/concat'))
Vue.filter('currencyDisplay', require('src/filters/currency-display'))
Vue.filter('currencyRounded', require('src/filters/currency-rounded'))
Vue.filter('decimalToPercent', require('src/filters/decimal-to-percent'))
Vue.filter('formatDate', require('src/filters/format-date'))
Vue.filter('formatMoney', require('src/filters/format-money'))
Vue.filter('formatPrice', require('src/filters/format-price'))
Vue.filter('formatRating', require('src/filters/format-rating'))
Vue.filter('humanizeUrl', require('src/filters/humanize-url'))
Vue.filter('numberWithCommas', require('src/filters/number-with-commas'))
Vue.filter('percentDisplay', require('src/filters/percent-display'))
Vue.filter('reverse', require('src/filters/reverse'))
Vue.filter('slugify', require('src/filters/slugify'))
Vue.filter('toTitleCase', require('src/filters/to-title-case'))
Vue.filter('unCamelCase', require('src/filters/un-camel-case'))
Vue.filter('wrap', require('src/filters/wrap'))

export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}
Vue.filter('host', host)

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}
Vue.filter('timeAgo', timeAgo)

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
