<template lang="pug">
  .fixed-header-grid(
    style = 'display: flex; flex-direction: column; position: relative; height: 100%'
  )
    div(style='overflow: hidden; flex: 0 0 auto; width: 0px')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(
        style = 'position: relative'
      )
        thead
          tr
            th(style='width: 80px'): vui-sorting-column(title='Station<br>Line #')
            th(style='width: 80px') Alt. #[br] Line #
            th(style='width: 80px'): vui-sorting-column(title='Spot #')
            th(style='width: 200px'): vui-sorting-column(title='Program Placed')
            th(style='width: 198px'): vui-sorting-column(title='Status Name')
            th(style='width: 80px'): vui-sorting-column(title='Priority')
            th(style='width: 100px'): vui-sorting-column(title='Air Day')
            th(style='width: 100px'): vui-sorting-column(title='Air Date')
            th(style='width: 100px'): vui-sorting-column(title='Air Time')
            th(style='width: 80px'): vui-sorting-column(title='Length')
            th(style='width: 100px'): vui-sorting-column(title='Rate')
            th(style='width: 220px'): vui-sorting-column(title='Reason')
    .vui-scrollable(
      style='flex: 0 1 auto'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>
