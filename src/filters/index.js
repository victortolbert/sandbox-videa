import Vue from 'vue'

export default {
  registerAllGlobalFilters () {
    Vue.filter('caseInsensitiveOrderBy', require('~filters/case-insensitive-order-by'))
    Vue.filter('concat', require('~filters/concat'))
    Vue.filter('currencyDisplay', require('~filters/currency-display'))
    Vue.filter('currencyRounded', require('~filters/currency-rounded'))
    Vue.filter('decimalToPercent', require('~filters/decimal-to-percent'))
    Vue.filter('formatDate', require('~filters/format-date'))
    Vue.filter('formatMoney', require('~filters/format-money'))
    Vue.filter('formatPrice', require('~filters/format-price'))
    Vue.filter('formatRating', require('~filters/format-rating'))
    Vue.filter('numberWithCommas', require('~filters/number-with-commas'))
    Vue.filter('percentDisplay', require('~filters/percent-display'))
    Vue.filter('reverse', require('~filters/reverse'))
    Vue.filter('slugify', require('~filters/slugify'))
    Vue.filter('toTitleCase', require('~filters/to-title-case'))
    Vue.filter('unCamelCase', require('~filters/un-camel-case'))
    Vue.filter('wrap', require('~filters/wrap'))
  }
}
