<template lang="pug">
  .makegoods-details-view
    ui-title {{ $store.state.stationCallLetters }} {{ offer.flightStartDate }} - {{ offer.flightEndDate }}
    ui-subtitle Order Information - Offers
    makegoods-order-details-info(
      order-info = 'offer.orderId'
    )

    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span {{ $store.state.stationCallLetters }} Details

      fieldset.vui-form-element
        input.vui-button.vui-button--brand.vui-m-right--x-small(
          @click = 'save'
          type = 'button'
          value = 'Save'
        )
      //- close-button

    makegoods-offer-tab-details.flex-container(
      orders = 'orders'
      offers = 'offers'
      show-offer-dialog = 'showOfferDialog'
      delete-makegood = 'deleteMakegood'
      copy-makegood = 'copyMakegood'
      edit-makegood = 'editMakegood'
      create-makegood = 'createMakegood'
      create-makegood-preempts = 'createMakegoodPreempts'
      create-makegood-missed-spots = 'createMakegoodMissedSpots'
      transfer-makegood = 'transfer'
      create-credit = 'createCredit'
      create-bonus = 'createBonus'
      change-program = 'changeProgram'
      current-tab-name = 'currentTabName'
      current-tab-changed = 'currentTabChanged'
      demo = 'orderInfo.demo'
      order-buy-type = 'orderInfo.orderBuyType'
      show-orbit-details = 'showOrbitDetailsPopup'
    )

    .row.legend-text.col-md-12.text-center
      .col-md-3
      .col-md-2
        label Total Spots Ordered:
        span 10
      .col-md-2
        label Open Pre-empts:
        span 1
      .col-md-2
        label Pending MGs:
        span 1

    makegoods-orbit-details-popup(
      show-dialog = 'isOrbitDetailsPopupShown'
    )
    makegoods-offer-popup(
      show-dialog = 'showPopupMakegoodOffersDialog'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    async data ({ env, params }) {
      let { data } = await axios.get(`/offers/${params.id}`)
      // let { ordersData } = await axios.get(`${ env.API_URL }/orders`)
      return {
        offer: data,
        // orders: ordersData,
        searchKey: '',
        fromDate: new Date('2016-04-25T12:24:00'),
        toDate: new Date('2016-06-05T12:24:00'),
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY')
      }
    },

    methods: {
      save () {}
    }
  }
</script>
