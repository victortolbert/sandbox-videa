import Vue from 'vue'

export default {
  registerAllGlobalDirectives () {
    Vue.directive('confirm', require('~directives/confirm'))
    Vue.directive('focus', require('~directives/focus'))
    Vue.directive('clipboard', require('~directives/clipboard'))
    Vue.directive('highlight', require('~directives/highlight'))
    Vue.directive('highlightjs', require('~directives/highlightjs'))
    Vue.directive('ripple', require('~directives/ripple'))
    Vue.directive('tooltip', require('~directives/tooltip'))
  }
}

// Object.keys(Directives).forEach(key => {
//   Vue.directive(`${options.directivePrefix}${key}`, Directives[key])
// })
