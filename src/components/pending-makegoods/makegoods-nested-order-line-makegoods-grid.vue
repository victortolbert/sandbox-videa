<template lang="pug">
  .nested-order-line-makegoods-grid
    .vui-box(
      style = 'padding: 0.5rem; border: none; border-top: 1px solid #51535c'
    )
      h3.vui-text-heading--label Makegoods
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(
              v-bind:style = '{ "width": ctrl.columnWidths.sellerOfferId }'
              style = 'width: 97px'
            )
              vui-sorting-column(
                title = 'MG #'
              )
            th(
              v-bind:style = '{ "width": ctrl.columnWidths.statusName }'
              style = 'width: 100px'
            )
              vui-sorting-column(
                title = 'MG<br>Status'
              )
            th(
              v-bind:style = '{ "width": ctrl.columnWidths.confirmDate }'
              style = 'width: 100px'
            )
              vui-sorting-column(
                title = 'MG<br>Applied'
              )
            th(
              v-bind:style = '{ "width": ctrl.columnWidths.newMakegoodLines }'
              style = 'width: 100px'
            )
              vui-sorting-column(
                title = 'MG<br>New Lines'
              )
        tbody
</template>
