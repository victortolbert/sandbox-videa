import Vue from 'vue'

const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function count (arr) {
  return arr.length
}

export function prettyDate (date) {
  var a = new Date(date)
  return a.toDateString()
}

export function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }

  return time + label + 's'
}

export default {
  registerAllGlobalFilters () {
    Vue.filter('caseInsensitiveOrderBy', require('~filters/case-insensitive-order-by'))
    Vue.filter('decimalToPercent', require('~filters/decimal-to-percent'))
    Vue.filter('numberWithCommas', require('~filters/number-with-commas'))
    Vue.filter('currencyDisplay', require('~filters/currency-display'))
    Vue.filter('currencyRounded', require('~filters/currency-rounded'))
    Vue.filter('percentDisplay', require('~filters/percent-display'))
    Vue.filter('formatRating', require('~filters/format-rating'))
    Vue.filter('toTitleCase', require('~filters/to-title-case'))
    Vue.filter('unCamelCase', require('~filters/un-camel-case'))
    Vue.filter('formatMoney', require('~filters/format-money'))
    Vue.filter('formatPrice', require('~filters/format-price'))
    Vue.filter('formatDate', require('~filters/format-date'))
    Vue.filter('twoDigits', require('~filters/two-digits'))
    Vue.filter('reverse', require('~filters/reverse'))
    Vue.filter('slugify', require('~filters/slugify'))
    Vue.filter('concat', require('~filters/concat'))
    Vue.filter('wrap', require('~filters/wrap'))
  }
}
