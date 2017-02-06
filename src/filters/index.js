import Vue from 'vue'

export default {
  registerAllGlobalFilters () {
    Vue.filter('caseInsensitiveOrderBy', require('./caseInsensitiveOrderBy'))
    Vue.filter('concat', require('./concat'))
    Vue.filter('currencyDisplay', require('./currencyDisplay'))
    Vue.filter('currencyRounded', require('./currencyRounded'))
    Vue.filter('decimalToPercent', require('./decimalToPercent'))
    Vue.filter('formatDate', require('./formatDate'))
    Vue.filter('formatMoney', require('./formatMoney'))
    Vue.filter('formatPrice', require('./formatPrice'))
    Vue.filter('formatRating', require('./formatRating'))
    Vue.filter('numberWithCommas', require('./numberWithCommas'))
    Vue.filter('percentDisplay', require('./percentDisplay'))
    Vue.filter('reverse', require('./reverse'))
    Vue.filter('slugify', require('./slugify'))
    Vue.filter('toTitleCase', require('./toTitleCase'))
    Vue.filter('unCamelCase', require('./unCamelCase'))
    Vue.filter('wrap', require('./wrap'))
  }
}
