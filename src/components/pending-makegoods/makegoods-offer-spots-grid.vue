<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th(
            style = 'width: 80px'
          )
            vui-sorting-column(
              title = 'Line #'
            )
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              title = 'Order Days'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              title = 'Start Time'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              title = 'End Time'
            )
          th(
            style = 'width: 248px'
          )
            vui-sorting-column(
              title = 'Program'
            )
          th(
            style = 'width: 60px'
          )
            vui-sorting-column(
              title = 'Len'
            )
          th.vui-cell-wrap(
            style = 'width: 85px'
          )
            vui-sorting-column(
              title = 'Offered Spots'
            )
          th.spot-allocation-column(
            style = 'width: 48px;'
          )
            makegoods-spot-allocation-header(
              v-model = 'items[0].spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Spot Rate'
            )
          th.vui-cell-wrap.ng-scope(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Station IMP'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Station CPM'
            )
          th.vui-cell-wrap(
            style = 'width: 50%'
          ) Makegood Comments
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { }
        ]
      }
    }
  }
</script>
