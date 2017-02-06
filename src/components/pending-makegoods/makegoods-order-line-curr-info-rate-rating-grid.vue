<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(
            style = 'width: 180px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Program","columnName":"program"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.program)'
              title = 'Program'
            )
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Time","columnName":"time"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.time)'
              title = 'Time'
            )
          th(
            style = 'width: 80px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Days","columnName":"days"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.days)'
              title = 'Days'
            )
          th(
            style = 'width: 56px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Len","columnName":"spotLength"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.spotLength)'
              title = 'Len'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Start Date","columnName":"startDate"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.startDate)'
              title = 'Start Date'
            )
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"End Date","columnName":"endDate "}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.endDate)'
              title = 'End Date'
            )
          th(
            style = 'width: 80px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Current<br>Rate","columnName":"videaCurrentSpotRate"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.videaCurrentSpotRate)'
              title = 'Current<br>Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 80px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Current<br>IMP","columnName":"videaCurrentImpressions"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.videaCurrentImpressions)'
              title = 'Current<br>IMP'
            )
          th(
            style = 'width: 125px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Ordered vs<br>Current Rate","columnName":"orderVsCurrentRateDeviation"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderVsCurrentRateDeviation)'
              title = 'Ordered vs<br>Current Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 125px'
          )
            vui-sorting-column(
              column-name = '{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Ordered vs<br>Current IMP","columnName":"orderVsCurrentImpressionsDeviation"}'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderVsCurrentImpressionsDeviation)'
              title = 'Ordered vs<br>Current IMP'
            )
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true
      }
    }
  }
</script>
