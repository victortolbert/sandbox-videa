<template lang="pug">
  .nested-order-line-invoice-details-grid
    .vui-box(
      style = 'padding: 0.5rem; border: none; border-top: 1px solid #51535c'
    )
      h3.vui-text-heading--label Agency Invoice Details
    div
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        caption
        thead
          tr
            th.vui-truncate(
              v-bind:style = '{ "width": ctrl.columnWidths.isciAdId }'
              style = 'border-left: 1px solid rgb(81, 83, 92); width: 100px'
            ) ISCI #[br] AD ID
            th.vui-truncate(
              v-bind:style = '{ "width": ctrl.columnWidths.invoiceDate }'
              style = 'width: 100px'
            ) Station #[br] Inv Date
            th.vui-truncate(
              v-bind:style = '{ "width": ctrl.columnWidths.affidavitRate }'
              style = 'width: 99px'
            ) Station #[br] Inv Amt
            th.vui-truncate(
              v-bind:style = '{ "width": ctrl.columnWidths.externalInvoiceId }'
              style = 'width: 99px'
            ) Station #[br] Inv #
        tbody
          tr(
            v-for = 'item in childItems'
          )
            td(
              v-bind:title = 'item.isciAdId'
              style = 'border-left: 1px solid #51535c; height: 2.5rem'
            ) {{ item.isciAdId }}
            td.vui-truncate(
              v-bind:title = 'item.invoiceDate'
            ) {{ item.invoiceDate }}
            td.vui-truncate.vui-text-align--right(
              v-bind:class = '{ "currency": item.detailsAffidavitRate }'
              v-bind:title = 'item.detailsAffidavitRate'
            )
            td.vui-truncate(
              v-bind:title = 'item.externalInvoiceId'
            ) {{ item.externalInvoiceId }}
</template>
