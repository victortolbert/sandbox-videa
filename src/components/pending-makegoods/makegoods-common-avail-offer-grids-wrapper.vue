<template lang="pug">
  .offers-makegoods-common-avail-offer-grids-wrapper
    .makegood-spots-offered.vui-m-bottom--xx-large
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        .vui-align-middle
          h4.vui-text-heading--small Makegood spot(s) offered
        .vui-align-middle
          button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='addSpotsColumn' type='button')
            vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
            | Add a week
          button.vui-button.vui-button--brand(@click='removeSpots' type='button')
            vui-icon.vui-align-middle.vui-m-right--xx-small(name='minus-circle')
            | Delete Spot(s)
      .vui-scrollable.offers-makegood-offered-spots-container(style='height: 14rem')
        makegoods-offered-spots-grid(items='makegoodOffers')
    .station-avails
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        .vui-align-middle
          h4.vui-text-heading--small Station Avails
        .vui-align-middle
          button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='createSpots' type='button')
            vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
            | Create Spots
          button.vui-button.vui-button--brand(@click='addSpots' type='button')
            vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
            | Add Spot(s)

      makegoods-avails-filter(show-requested-dayparts='showRequestedDayparts')
      div(style='height: 25rem')
        makegoods-avails-grid(order-buy-type='orderBuyType' items='availsItems')
      .vui-m-top--medium
        label Found Avails Count:
        span {{ availsCount }}
</template>

<script>
export default {
  data () {
    return {
      offersLabel: '',
      addSpotsLabel: '',
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
