<template lang="pug">
  vui-modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show'
    size = 'large'
  )
    .modal-header.vui-m-bottom--x-large
      h3.vui-text-heading--medium Order Details
    .modal-body
      .vui-scrollable--x.vui-m-bottom--medium
        table.vui-table.vui-no-row-hover
          thead
            tr
              th Advertiser
              th Intended Air Date
              th Unit Rate
              th
                | CPP
                sup 1
          tbody
            tr(
              v-for = 'spot in spots'
            )
              td {{ spot.advertiser }}
              td.u-width-small {{ spot.intendedAirDate }}
              td.u-width-small.vui-text-align--right {{ spot.unitRate | numberWithCommas | formatMoney }}
              td.u-width-small.vui-text-align--right {{ spot.cpp | numberWithCommas | formatMoney }}
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
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      }
    }
  }
</script>
