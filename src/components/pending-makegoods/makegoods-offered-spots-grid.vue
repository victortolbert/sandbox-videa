<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th.vui-cell-wrap(
            style = 'width: 80px'
          )
            vui-sorting-column(
              column-name = 'lineNumber'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Line #'
            )
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              column-name = 'days'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Days'
            )
          th(
            style = 'width: 105px'
          )
            vui-sorting-column(
              column-name = 'startTime'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Start Time'
            )
          th(
            style = 'width: 105px'
          )
            vui-sorting-column(
              column-name = 'endTime'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'End Time'
            )
          th(
            style = 'width: 235px'
          )
            vui-sorting-column(
              column-name = 'programName'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Program'
            )
          th(
            style = 'width: 105px'
          )
            vui-sorting-column(
              column-name = 'spotLength'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Len'
            )
          th.vui-cell-wrap(
            style = 'width: 75px'
          )
            vui-sorting-column(
              column-name = 'totalSpots'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
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
              column-name = 'spotRate'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Station Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'V=videaImpressions'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Station IMP'
            )
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              column-name = 'stationCpp'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Station CPM'
            )
          th(
            style = 'width: 120px;'
          )
            | Makegood
            br
            | Comment
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { spotAllocations: [] }
        ]
      }
    }
  }
</script>
