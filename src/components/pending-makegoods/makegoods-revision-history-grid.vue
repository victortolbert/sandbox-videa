<template lang="pug">
  .fixed-header-grid(
    style = 'display: flex; flex-direction: column; position: relative; height: 100%'
  )
    div(
      style ='overflow: hidden; flex: 0 0 auto; width: 0px'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(
        style = 'position: relative'
      )
        thead
          tr
            th(
              style = 'width: 56px'
            ) Version
            th(
              style = 'width: 100px'
            ) Last Updated
            th(
              style = 'width: 100px'
            ) Total Dollars
            th.ng-scope(
              v-if = '!isOrderTypeImpression'
              style = 'width: 100px'
            ) Total GRPs
            th(
              style = 'width: 70px'
            ) Total Spots
            th(
              style = 'width: 70px'
            ) Total Lines
            th(
              style = 'width: 105px'
            ) Difference Dollars
            th(
              v-if = '!isOrderTypeImpression'
              style = 'width: 95px'
            ) Difference GRPs
            th(
              style = 'width: 95px'
            ) Difference Spots
            th(
              style = 'width: 20%'
            ) Difference Lines
    .vui-scrollable(
      style = 'flex: 0 1 auto'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>
