<template lang="pug">
  .fixed-header-grid(
    style = 'display: flex; flex-direction: column; position: relative; height: 100%'
  )
    div(
      style = 'overflow: hidden; flex: 0 0 auto; width: 0px'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(
        style = 'position: relative'
      )
        thead
          tr
            th(
              style = 'width: 120px'
            )
              vui-sorting-column(
                column-data = 'gridColumns.requestType'
                column-name = 'requestType'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.requestType)'
                title = 'Request Type'
              )
            th(
              style = 'width: 210px'
            )
              vui-sorting-column(
                column-data = 'gridColumns.transactionStatusName'
                column-name = 'transactionStatusName'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.transactionStatusName)'
                title = 'Status'
              )
            th(
              style = 'width: 200px'
            )
              vui-sorting-column(
                column-data = 'gridColumns.userName'
                column-name = 'userName'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.userName)'
                title = 'User'
              )
            th(
              style = 'width: 150px'
            )
              vui-sorting-column(
                column-data = 'gridColumns.transactionDateTime'
                column-name = 'transactionDateTime'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.transactionDateTime)'
                title = 'Date/Time'
              )
            th(
              style = 'width: 100px'
            )
              vui-sorting-column(
                column-data = 'gridColumns.iterationNumber'
                column-name = 'iterationNumber'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.iterationNumber)'
                title = 'Iteration'
              )
            th(
              style = 'width: 15%'
            )
              vui-sorting-column(
                column-data = 'gridColumns.versionNumber'
                column-name = 'versionNumber'
                current-sorting = 'sorting'
                on-sorting = 'columnSortingChanged(gridColumns.versionNumber)'
                title = 'Version'
              )
    .vui-scrollable(
      style = 'flex: 0 1 auto'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>
