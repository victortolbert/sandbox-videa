<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-missed-spots
      thead
        tr
          th.vui-truncate(
            style = 'width: 240px'
          )
            vui-sorting-column(
              column-name = 'programName'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Program'
            )
          th(
            style = 'width: 102px'
          )
            vui-sorting-column(
              column-name = 'startTime'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Start Time'
            )
          th(
            style = 'width: 102px'
          )
            vui-sorting-column(
              column-name = 'endTime'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'End Time'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              column-name = 'days'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Days'
            )
          th(
            style = 'width: 140px'
          )
            vui-sorting-column(
              column-name = 'dayPartName'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Daypart'
            )
          th(
            style = 'width: 60px'
          )
            vui-sorting-column(
              column-name = 'spotLength'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Len'
            )
          th(
            style = 'width: 77px'
          )
            vui-sorting-column(
              column-name = 'totalSpots'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'MG<br>Spots'
            )
          th.spot-allocation-column(
            style = 'width: 48px'
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
              title = 'Spot Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 122px'
          )
            vui-sorting-column(
              column-name = 'videaImpressions'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Videa<br>Impressions'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 85px'
          )
            vui-sorting-column(
              column-name = 'stationCpm'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Station<br>CPM'
            )
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              column-name = 'comment'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Makegood<br>Comment'
            )
          th(
            style = 'width: 85px'
          )
            vui-sorting-column(
              column-name = 'gDLNS'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'GDLNS'
            )
          th(
            style = 'width: 255px'
          )
            vui-sorting-column(
              column-name = 'gdlnsWarnings'
              current-sorting = 'sorting'
              sorting-changed = 'sortingChanged(column)'
              title = 'Guidelines Warnings / Violations'
            )
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
