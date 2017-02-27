<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--x-large
      h3.vui-text-heading--medium Spot Details
    .modal-body
      .vui-scrollable--x.vui-m-bottom--medium
        table.vui-table.vui-no-row-hover
          thead
            tr
              th Advertiser
              th Intended Air Date
              th Purchased Demo
              th Unit Rate
              th RTGs/IMPs
                  sup 1
              th
                | CPP/CPM
                sup 1
              th Station Order #
          tbody
            tr(
              v-for = 'spot in spots'
            )
              td {{ spot.advertiser }}
              td.u-width-small {{ spot.intendedAirDate }}
              td {{ spot.purchasedDemo }}
              td.u-width-small.vui-text-align--right {{ spot.unitRate | numberWithCommas | formatMoney }}
              td {{ spot.ratingsIMPs }}
              td.u-width-small.vui-text-align--right {{ spot.cpp | numberWithCommas | formatMoney }}
              td {{ spot.stationOrder }}
      vui-footnote
</template>

<script>
  export default {
    props: ['show', 'program'],

    data () {
      return {
        comment: '',
        spots: require('./sample-spots.json')
      }
    }
  }
</script>
