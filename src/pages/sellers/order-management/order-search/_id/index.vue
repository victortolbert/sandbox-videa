<template lang="pug">
  .order-search-details
    makegoods-ebiz-history-popup(
      is-order-type-impression = 'isOrderTypeImpression'
      orders-with-revision = 'tabItems'
      show-dialog = 'isEbizHistoryPopupShown'
      videa-order-number = 'orderInfo.videaOrderNumber'
    )
    makegoods-spots-run-not-ordered-popup(
      order-id = 'orderInfo.orderId'
      show-dialog = 'openSpotsRunNotOrderedPopup'
      target-demo = 'orderInfo.demo'
    )
    makegoods-offer-popup(
      show-dialog = 'showPopupMakegoodOffersDialog'
    )
    makegoods-orbit-details-popup(
      show-dialog = 'isOrbitDetailsPopupShown'
    )
    div(
      v-if = 'orderInfo'
    )
      .vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center.vui-m-bottom--medium
        h1.vui-text-heading--large Order Search - Order Details
      .vui-m-bottom--large
        makegoods-order-details-info(
          cancellation-errors = 'cancellationErrors'
          is-cancelled-order = 'isCancelledOrder'
          is-comment-readonly = '!isCancelledOrder'
          order-info = 'orderInfo'
        )
      .vui-grid.vui-grid--align-spread.vui-m-bottom--large
        h2.vui-text-heading--medium Details
        fieldset.vui-form-element
          close-button.vui-m-right--x-small
          input.vui-button.vui-button--secondary(
            @click = 'openMakegoodDetails'
            v-if = '!isCancelledOrder'
            type = 'button'
            value = 'Makegoods'
          )
          input.vui-button.vui-button--secondary(
            @click = 'openSpotsRunNotOrderedPopup'
            v-if = '!isCancelledOrder'
            type = 'button'
            value = 'Spots Run Not Ordered'
          )
          input.vui-button.vui-button--secondary(
            @click = 'showEbizHistory'
            v-if = '!isCancelledOrder'
            type = 'button'
            value = 'eBiz History'
          )
      .order-container
        order-search-details-tabs.flex-container(
          current-tab-changed = 'currentTabChanged'
          current-tab-order-id = 'currentTabOrderId'
          demo = 'orderInfo.demo'
          is-active-order = '!isCancelledOrder'
          order-buy-type = 'orderInfo.orderBuyType'
          show-offer-dialog = 'showOfferDialog'
          show-orbit-details = 'showOrbitDetailsPopup'
          tab-items = 'tabItems'
        )
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    }
  }
</script>
