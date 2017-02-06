<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Days'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Start Time'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'End Time'
            )
          th(
            style = 'width: 30%'
          )
            vui-sorting-column(
              title = 'Program'
            )
      tbody.avails-pulled-table-body
</template>
