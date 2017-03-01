<template lang="pug">
  .nested-order-line-makegoods-grid
    .vui-box(style='padding: 0.5rem; border:none; border-top: 1px solid #51535c')
      h3.vui-text-heading--label Makegoods
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout(cg-busy='promise')
        thead
          tr
            th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": expandingMakegoodColumnsWidths.sellerOfferId }')
              vui-sorting-column(title='MG #')
            th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.statusName }')
              vui-sorting-column(title='MG<br>Status')
            th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.confirmDate }')
              vui-sorting-column(title='MG<br>Applied')
            th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.newMakegoodLines }')
              vui-sorting-column(title='MG<br>New Lines')
        tbody
          tr(v-for='makegood in makegoods')
            td {{ makegood.makegoodNumber }}
            td {{ makegood.makegoodStatus }}
            td {{ makegood.makegoodApplied }}
            td {{ makegood.makegoodNewLines }}
</template>

<script>
  export default {
    props: {
      makegoods: {
        type: Array
      }
    },

    data: () => ({
      expandingMakegoodColumnsWidths: {
        sellerOfferId: '97px',
        statusName: '100px',
        confirmDate: '100px',
        newMakegoodLines: '100px'
      }
    })

  }
</script>


