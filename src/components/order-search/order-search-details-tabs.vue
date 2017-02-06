<template lang="pug">
  .flex-container(
    demo = 'detailsCtrl.orderInfo.demo'
    current-tab-changed = 'detailsCtrl.currentTabChanged'
    current-tab-order-id = 'detailsCtrl.currentTabOrderId'
    is-active-order = '!detailsCtrl.isCancelledOrder'
    order-buy-type = 'detailsCtrl.orderInfo.orderBuyType'
    show-offer-dialog = 'detailsCtrl.showOfferDialog'
    show-orbit-details = 'detailsCtrl.showOrbitDetailsPopup'
    tab-items = 'detailsCtrl.tabItems'
  )
    makegoods-order-line-current-info-popup(
      demo = 'demo'
      order-buy-type = 'orderBuyType'
      show-dialog = 'isCurrentLineInfoPopupShown'
    )
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(
        role = 'tablist'
      )
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(
          v-bind:class = "{'vui-active':tab.orderId === currentTabOrderId}"
          v-for = 'tab in tabItems'
          role = 'presentation'
        )
          a#tab_5009.vui-tabs--scoped__link(
            @click = 'selectTab(tab)'
            v-text = 'tab.tabHeader'
            href = ''
          ) Original Order Version #1
    div(
      v-for = 'tab in tabItems'
      v-if = 'tab.orderId === currentTabOrderId'
      role = 'tabpanel'
    )
      .vui-p-around--large.vui-tabs--scoped__content
        .vui-m-bottom--xx-small.p-a-5.row.active-orders-details-tab-options
          .col-md-2
            label.vui-checkbox
              input.vui-input(
                v-model = 'tab.isShowSpotAllocations'
                type = 'checkbox'
              )
              span.vui-checkbox--faux
              span.vui-form-element__label Show Spot Allocations
            .vui-form-element_control.vui-m-right--small.vui-visible(
              v-bind:class = "tab.isShowSpotAllocations ? 'vui-visible' : 'vui-hidden'"
            )
              label.vui-radio(
                for = 'radio_1'
              )
                input#radio_1(
                  v-model = 'tab.isMissedSpotsShown'
                  name = 'spotTypeFilter0'
                  type = 'radio'
                  value = 'true'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Missed
              label.vui-radio(
                for = 'radio_2'
              )
                input#radio_2(
                  v-model = 'tab.isMissedSpotsShown'
                  name = 'spotTypeFilter0'
                  type = 'radio'
                  value = 'false'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Traffic

        order-search-details-grid.flex-container(
          has-description-of-change-column = 'hasDescriptionOfChangeColumn(tab)'
          is-missed-spots-shown = 'tab.isMissedSpotsShown'
          is-show-spot-allocations = 'tab.isShowSpotAllocations'
          items = 'tab.tableItems'
          order-buy-type = 'orderBuyType'
          show-current-info = 'showCurrentLineInfoPopup'
          show-offer-dialog = 'showOfferDialog'
          show-orbit-details = 'showOrbitDetails'
        )
</template>
