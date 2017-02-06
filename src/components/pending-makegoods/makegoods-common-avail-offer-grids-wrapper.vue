<template lang="pug">
  .offers-makegoods-common-avail-offer-grids-wrapper
    div
      .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
        .vui-col--padded.vui-align-middle
          h4.vui-text-heading--small {{ offersLabel }}
        .vui-col--padded
          button.vui-button.vui-button--neutral(
            @click = 'addSpotsColumn'
            type = 'button'
          )
            icon(
              name = 'plus-circle'
            )
            span {{ addSpotsLabel }}
          button.vui-button.vui-button--brand(
            @click = 'removeSpots'
            type = 'button'
          )
            icon(
              name = 'minus-circle'
            )
            | Delete Spot(s)
      .vui-scrollable.offers-makegood-offered-spots-container(
        style = 'height: 14rem'
      )
        makegoods-offered-spots-grid(
          items = 'makegoodOffers'
          length-items = 'spotLengthItems'
          offers-changed = 'onDataChanged'
          order-buy-type = 'orderBuyType'
        )
      .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
        .vui-col--padded.vui-align-middle
          h4.vui-text-heading--small Station Avails
        .vui-col--padded
          button.vui-button.vui-button--neutral(
            @click = 'createSpots'
            type = 'button'
          )
            icon(
              name = 'plus-circle'
            )
            | Create Spots
          button.vui-button.vui-button--brand(
            @click = 'addSpots'
            type = 'button'
          )
            icon(
              name = 'plus-circle'
            )
            | Add Spot(s)
    div
      makegoods-avails-filter(
        apply-filter = 'filterAvailsApply'
        clear-filter = 'filterAvailsClear'
        filter = 'filterAvails.value'
        selected-preemt-spot-lengths-async = 'selectedPreemtSpotLengthsAsync'
        show-requested-dayparts = 'showRequestedDayparts'
      )
      div(
        style = 'height: 25rem'
      )
        makegoods-avails-grid(
          order-buy-type = 'orderBuyType'
          items = 'availsItems'
        )
      .vui-m-top--medium
        label Found Avails Count:
        span {{ availsCount }}
</template>

<script>
export default {
  data () {
    return {
      offersLabel: 'Makegood spot(s) offered',
      addSpotsLabel: 'Add a week',
      availsCount: 0
    }
  },
  methods: {
    addSpotsColumn () {},
    removeSpots () {},
    createSpots () {},
    addSpots () {}
  }
}
</script>
