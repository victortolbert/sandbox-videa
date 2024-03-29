import Vue from 'vue'

// components
//   form
//    .label
//    .input
//    .textarea
//    .select
//    .checkbox
//    .radio
//    .button
//    .help

export default {
  registerAllGlobalComponents () {
    Vue.component('vui-items-per-page-selector', require('~components/common/datagrid/items-per-page-selector'))
    Vue.component('vui-resizable-textarea', require('~components/common/form-element/resizable-textarea'))
    Vue.component('vui-quarter-selector', require('~components/common/form-element/quarter-selector'))
    Vue.component('vui-datagrid-heading', require('~components/common/datagrid/datagrid-heading'))
    Vue.component('vui-navigation-handler', require('~components/common/nav/navigation-handler'))
    Vue.component('vui-checkbox-list', require('~components/common/form-element/checkbox-list'))
    Vue.component('vui-sorting-column', require('~components/common/datagrid/sorting-column'))
    Vue.component('vui-datagrid-tools', require('~components/common/datagrid/datagrid-tools'))
    Vue.component('vui-dropdown-wrapper', require('~components/common/nav/dropdown-wrapper'))
    Vue.component('vui-datepicker', require('~components/common/form-element/datepicker'))
    Vue.component('vui-daypart-selector', require('~components/common/daypart-selector'))
    Vue.component('vui-password', require('~components/common/form-element/password'))
    Vue.component('vui-navigation', require('~components/common/nav/navigation'))
    Vue.component('vui-input', require('~components/common/form-element/input'))
    Vue.component('vui-back-to-top', require('~components/common/back-to-top'))
    // Vue.component('vui-datepicker', require('~components/common/datepicker'))
    Vue.component('vui-media', require('~components/common/media-object'))
    Vue.component('vui-checkbox', require('~components/common/checkbox'))
    Vue.component('vui-dropdown', require('~components/common/dropdown'))
    Vue.component('vui-footnote', require('~components/common/footnote'))
    Vue.component('vui-subtitle', require('~components/common/subtitle'))
    Vue.component('vui-textarea', require('~components/common/textarea'))
    Vue.component('vui-avatar', require('~components/common/avatar'))
    Vue.component('vui-button', require('~components/common/button'))
    Vue.component('vui-footer', require('~components/common/footer'))
    Vue.component('vui-select', require('~components/common/select'))
    Vue.component('vui-badge', require('~components/common/badge'))
    Vue.component('vui-input', require('~components/common/input'))
    Vue.component('vui-modal', require('~components/common/modal'))
    Vue.component('vui-pager', require('~components/common/pager'))
    Vue.component('vui-panel', require('~components/common/panel'))
    Vue.component('vui-table', require('~components/common/table'))
    Vue.component('vui-title', require('~components/common/title'))
    Vue.component('vui-icon', require('~components/common/icon'))
    Vue.component('vui-modal-header', require('~components/modal/modal-header'))
    Vue.component('cpm', require('~components/common/cpm'))
    Vue.component('cpp', require('~components/common/cpp'))

    Vue.component('vui-audio-player', require('~components/_media/audio-player'))
    Vue.component('vui-debug', require('~components/utilities/debug'))
    Vue.component('vui-device', require('~components/scopes/device'))
    Vue.component('vui-container', require('~components/container'))
    Vue.component('vui-section', require('~components/section'))
    Vue.component('vui-article', require('~components/article'))
    Vue.component('vui-widget', require('~components/widget'))
    Vue.component('vui-well', require('~components/well'))

    Vue.component('makegoods-nested-order-line-invoice-details-grid', require('~components/pending-makegoods/makegoods-nested-order-line-invoice-details-grid'))
    Vue.component('makegoods-order-line-curr-info-rate-rating-grid', require('~components/pending-makegoods/makegoods-order-line-curr-info-rate-rating-grid'))
    Vue.component('makegoods-spot-allocation-with-traffic-spots', require('~components/pending-makegoods/makegoods-spot-allocation-with-traffic-spots'))
    Vue.component('makegoods-spot-allocation-with-missed-spots', require('~components/pending-makegoods/makegoods-spot-allocation-with-missed-spots'))
    Vue.component('makegoods-common-avail-offer-grids-wrapper', require('~components/pending-makegoods/makegoods-common-avail-offer-grids-wrapper'))
    Vue.component('makegoods-nested-order-line-makegoods-grid', require('~components/pending-makegoods/makegoods-nested-order-line-makegoods-grid'))
    Vue.component('makegoods-program-name-change-lines-grid', require('~components/pending-makegoods/makegoods-program-name-change-lines-grid'))
    Vue.component('makegoods-order-line-current-info-popup', require('~components/pending-makegoods/makegoods-order-line-current-info-popup'))
    Vue.component('makegoods-spots-run-not-ordered-popup', require('~components/pending-makegoods/makegoods-spots-run-not-ordered-popup'))
    Vue.component('makegoods-spots-run-not-ordered-grid', require('~components/pending-makegoods/makegoods-spots-run-not-ordered-grid'))
    Vue.component('makegoods-offers-reject-offer-popup', require('~components/pending-makegoods/makegoods-offers-reject-offer-popup'))
    Vue.component('makegoods-orbit-details-popup-grid', require('~components/pending-makegoods/makegoods-orbit-details-popup-grid'))
    Vue.component('makegoods-requested-dayparts-popup', require('~components/pending-makegoods/makegoods-requested-dayparts-popup'))
    Vue.component('makegoods-classification-dropdown', require('~components/pending-makegoods/makegoods-classification-dropdown'))
    Vue.component('makegoods-nested-order-line-grid', require('~components/pending-makegoods/makegoods-nested-order-line-grid'))
    Vue.component('makegoods-spot-allocation-header', require('~components/pending-makegoods/makegoods-spot-allocation-header'))
    Vue.component('makegoods-revision-history-grid', require('~components/pending-makegoods/makegoods-revision-history-grid'))
    Vue.component('makegoods-offer-tab-offer-grid', require('~components/pending-makegoods/makegoods-offer-tab-offer-grid'))
    Vue.component('makegoods-offer-tab-order-grid', require('~components/pending-makegoods/makegoods-offer-tab-order-grid'))
    Vue.component('makegoods-orbit-details-popup', require('~components/pending-makegoods/makegoods-orbit-details-popup'))
    Vue.component('makegoods-order-details-info', require('~components/pending-makegoods/makegoods-order-details-info'))
    Vue.component('makegoods-offered-spots-grid', require('~components/pending-makegoods/makegoods-offered-spots-grid'))
    Vue.component('makegoods-ebiz-history-popup', require('~components/pending-makegoods/makegoods-ebiz-history-popup'))
    Vue.component('makegoods-offer-tab-details', require('~components/pending-makegoods/makegoods-offer-tab-details'))
    Vue.component('makegoods-ebiz-history-grid', require('~components/pending-makegoods/makegoods-ebiz-history-grid'))
    Vue.component('makegoods-offer-spots-grid', require('~components/pending-makegoods/makegoods-offer-spots-grid'))
    Vue.component('makegoods-preempts-grid', require('~components/pending-makegoods/makegoods-preempts-grid'))
    Vue.component('makegoods-avails-filter', require('~components/pending-makegoods/makegoods-avails-filter'))
    Vue.component('makegoods-offer-popup', require('~components/pending-makegoods/makegoods-offer-popup'))
    Vue.component('makegoods-avails-grid', require('~components/pending-makegoods/makegoods-avails-grid'))
    Vue.component('makegoods-total-grid', require('~components/pending-makegoods/makegoods-total-grid'))

    Vue.component('order-search-details-tabs', require('~components/order-search/order-search-details-tabs'))
    Vue.component('order-search-details-grid', require('~components/order-search/order-search-details-grid'))
  }
}

// Object.keys(Components).forEach(key => {
//   Vue.component(`${options.componentPrefix}${key}`, Components[key])
// })



