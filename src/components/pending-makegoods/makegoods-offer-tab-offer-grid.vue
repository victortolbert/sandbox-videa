<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(
            style = 'width: 80px'
          ) Select
          th(
            style = 'width: 52px'
          )
            | View
            br
            | Offer
          th(
            style = 'width: 107px'
          )
            vui-sorting-column(
              column-name = 'sentDate'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.sentDate)'
              title = 'Date<br>Offer Sent'
            )
          th(
            style = 'width: 92px'
          )
            vui-sorting-column(
              column-name = 'offerNumber'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.offerNumber)'
              title = 'Offer<br>Number'
            )
          th(
            style = 'width: 89px'
          )
            vui-sorting-column(
              column-name = 'offerVersion'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.offerVersion)'
              title = 'Offer<br>Version'
            )
          th(
            style = 'width: 120px'
          )
            vui-sorting-column(
              column-name = 'transactionType'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.transactionType)'
              title = 'Offer<br>Type'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'offerStatusName'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.offerStatusName)'
              title = 'Offer<br>Status'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'agencyStatusName'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.agencyStatusName)'
              title = 'Accepted<br>by Agency'
            )
          th(
            style = 'width: 80px'
          )
            | Agency
            br
            | Notes
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'stationStatusName'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.stationStatusName)'
              title = 'Accepted<br>by Station'
            )
          th(
            style = 'width: 80px'
          )
            | Station
            br
            | Notes
          th(
            style = 'width: 80px'
          )
            | Transfer
            br
            | Status
          th(
            style = 'width: 400px'
          )
            | Makegood
            br
            | comments
          th(
            style = 'width: 30%'
          )
            | Customer Care
            br
            | Internal Notes
      tbody
        tr(v-for='offer in order.offers')
          td {{}}
    grid
      grid-item(size = '3/4')
        .vui-box.vui-theme--shade
      grid-item(size = '1/4')
        .vui-box.vui-theme--shade
          pre {{ order.offers }}
</template>

<script>
  export default {
    props: [ 'orderId', 'order' ]
  }
</script>
