<template lang="pug">
  .order-search-details
    vui-title
      .vui-grid.vui-grid--align-spread
        span Order Search Details
    makegoods-order-details-info(v-bind:orderId='order.id')
    order-search-details-actions(v-bind:orderId='order.id')
    order-search-details-tabs


  //- .order-search-details
  //-   makegoods-ebiz-history-popup(
  //-     is-order-type-impression = 'isOrderTypeImpression'
  //-     orders-with-revision = 'tabItems'
  //-     show-dialog = 'isEbizHistoryPopupShown'
  //-     videa-order-number = 'orderInfo.videaOrderNumber'
  //-   )
  //-   makegoods-spots-run-not-ordered-popup(
  //-     order-id = 'orderInfo.orderId'
  //-     show-dialog = 'openSpotsRunNotOrderedPopup'
  //-     target-demo = 'orderInfo.demo'
  //-   )
  //-   makegoods-offer-popup(
  //-     show-dialog = 'showPopupMakegoodOffersDialog'
  //-   )
  //-   makegoods-orbit-details-popup(
  //-     show-dialog = 'isOrbitDetailsPopupShown'
  //-   )
  //-   div(
  //-     v-if = 'orderInfo'
  //-   )
  //-     .vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center.vui-m-bottom--medium
  //-       h1.vui-text-heading--large Order Search - Order Details
  //-     .vui-m-bottom--large
  //-       makegoods-order-details-info(
  //-         cancellation-errors = 'cancellationErrors'
  //-         is-cancelled-order = 'isCancelledOrder'
  //-         is-comment-readonly = '!isCancelledOrder'
  //-         order-info = 'orderInfo'
  //-       )
  //-     .vui-grid.vui-grid--align-spread.vui-m-bottom--large
  //-       h2.vui-text-heading--medium Details
  //-       fieldset.vui-form-element
  //-         close-button.vui-m-right--x-small
  //-         input.vui-button.vui-button--secondary(
  //-           @click = 'openMakegoodDetails'
  //-           v-if = '!isCancelledOrder'
  //-           type = 'button'
  //-           value = 'Makegoods'
  //-         )
  //-         input.vui-button.vui-button--secondary(
  //-           @click = 'openSpotsRunNotOrderedPopup'
  //-           v-if = '!isCancelledOrder'
  //-           type = 'button'
  //-           value = 'Spots Run Not Ordered'
  //-         )
  //-         input.vui-button.vui-button--secondary(
  //-           @click = 'showEbizHistory'
  //-           v-if = '!isCancelledOrder'
  //-           type = 'button'
  //-           value = 'eBiz History'
  //-         )
  //-     .order-container
  //-       order-search-details-tabs.flex-container(
  //-         current-tab-changed = 'currentTabChanged'
  //-         current-tab-order-id = 'currentTabOrderId'
  //-         demo = 'orderInfo.demo'
  //-         is-active-order = '!isCancelledOrder'
  //-         order-buy-type = 'orderInfo.orderBuyType'
  //-         show-offer-dialog = 'showOfferDialog'
  //-         show-orbit-details = 'showOrbitDetailsPopup'
  //-         tab-items = 'tabItems'
  //-       )

</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  import OrderSearchDetailsActions from '~components/order-search/order-search-details-actions'
  import OrderSearchDetailsTabs from '~components/order-search/order-search-details-tabs'

  export default {
    name: 'order-search-details',

    metaInfo: {
      title: 'Order Search Details'
    },

    components: {
      OrderSearchDetailsActions,
      OrderSearchDetailsTabs
    },

    data () {
      return {
        id: this.$route.params.id,
        order: {},
        searchKey: '',
        fromDate: new Date('2016-04-25T12:24:00'),
        toDate: new Date('2016-06-05T12:24:00'),
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY')
      }
    },

    methods: {
      fetchOrder(id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      save () {}
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOrder(this.$route.params.id)
    }
  }
</script>
