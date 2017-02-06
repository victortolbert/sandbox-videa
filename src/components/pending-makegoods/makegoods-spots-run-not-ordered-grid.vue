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
              style = 'width: 80px'
            )
              vui-sorting-column(
                column-name = 'lineNumber'
                current-sorting = 'gridColumns.lineNumber'
                on-sorting = 'columnSortingChanged(gridColumns.lineNumber)'
                title = 'Station<br>Line #'
              )
            th(
              style = 'width: 80px'
            ) Alt. #[br] Line #
            th(
              style = 'width: 80px'
            )
              vui-sorting-column(
                column-name = 'spotNumber'
                current-sorting = 'gridColumns.spotNumber'
                on-sorting = 'columnSortingChanged(gridColumns.spotNumber)'
                title = 'Spot #'
              )
            th(
              style = 'width: 200px'
            )
              vui-sorting-column(
                column-name = 'programName'
                current-sorting = 'gridColumns.programPlaced'
                on-sorting = 'columnSortingChanged(gridColumns.programPlaced)'
                title = 'Program Placed'
              )
            th(style='width: 198px')
              vui-sorting-column(
                column-name = 'statusName'
                current-sorting = 'gridColumns.statusName'
                on-sorting = 'columnSortingChanged(gridColumns.statusName)'
                title = 'Status Name'
              )
            th(style = 'width: 80px')
              vui-sorting-column(
                column-name = 'priority'
                current-sorting = 'gridColumns.priority'
                on-sorting = 'columnSortingChanged(gridColumns.priority)'
                title = 'Priority'
              )
            th(style = 'width: 100px')
              vui-sorting-column(
                column-name = 'airDay'
                current-sorting = 'gridColumns.airDay'
                on-sorting = 'columnSortingChanged(gridColumns.airDay)'
                title = 'Air Day'
              )
            th(style = 'width: 100px')
              vui-sorting-column(
                column-name = 'airDate'
                current-sorting = 'gridColumns.airDate'
                on-sorting = 'columnSortingChanged(gridColumns.airDate)'
                title = 'Air Date'
              )
            th(style = 'width: 100px')
              vui-sorting-column(
                column-name = 'airTime'
                current-sorting = 'gridColumns.airTime'
                on-sorting = 'columnSortingChanged(gridColumns.airTime)'
                title = 'Air Time'
              )
            th(style = 'width: 80px')
              vui-sorting-column(
                column-name = 'spotLength'
                current-sorting = 'gridColumns.spotLength'
                on-sorting = 'columnSortingChanged(gridColumns.spotLength)'
                title = 'Length'
              )
            th(
              style = 'width: 100px'
            )
              vui-sorting-column(
                column-name = 'rate'
                current-sorting = 'gridColumns.rate'
                on-sorting = 'columnSortingChanged(gridColumns.rate)'
                title = 'Rate'
              )
            th(
              style = 'width: 220px'
            )
              vui-sorting-column(
                column-name = 'currentStateDescription'
                current-sorting = 'gridColumns.reason'
                on-sorting = 'columnSortingChanged(gridColumns.reason)'
                title = 'Reason'
              )
    .vui-scrollable(
      style = 'flex: 0 1 auto'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>
