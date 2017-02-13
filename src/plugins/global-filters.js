import Vue from 'vue'

Vue.filter('caseInsensitiveOrderBy', require('~/filters/case-insensitive-order-by'))
Vue.filter('concat', require('~/filters/concat'))
Vue.filter('currencyDisplay', require('~/filters/currency-display'))
Vue.filter('currencyRounded', require('~/filters/currency-rounded'))
Vue.filter('decimalToPercent', require('~/filters/decimal-to-percent'))
Vue.filter('formatDate', require('~/filters/format-date'))
Vue.filter('formatMoney', require('~/filters/format-money'))
Vue.filter('formatPrice', require('~/filters/format-price'))
Vue.filter('formatRating', require('~/filters/format-rating'))
Vue.filter('humanizeUrl', require('~/filters/humanize-url'))
Vue.filter('numberWithCommas', require('~/filters/number-with-commas'))
Vue.filter('percentDisplay', require('~/filters/percent-display'))
Vue.filter('reverse', require('~/filters/reverse'))
Vue.filter('slugify', require('~/filters/slugify'))
Vue.filter('toTitleCase', require('~/filters/to-title-case'))
Vue.filter('unCamelCase', require('~/filters/un-camel-case'))
Vue.filter('wrap', require('~/filters/wrap'))

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
