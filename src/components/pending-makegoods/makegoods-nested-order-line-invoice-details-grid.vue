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
            th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.isciAdId }')
              | ISCI #[br] AD ID
            th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.invoiceDate }')
              | Station #[br] Inv Date
            th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.affidavitRate }')
              | Station #[br] Inv Amt
            th.vui-truncate.vui-no-border-right(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.externalInvoiceId }')
              | Station #[br] Inv #
        tbody
          tr.with-row-span(v-for='agencyInvoiceDetail in agencyInvoiceDetails')
            td.vui-no-border-left(:title='agencyInvoiceDetail.isciAdId') {{ agencyInvoiceDetail.isciAdId }}
            td.vui-truncate(:title='agencyInvoiceDetail.invoiceDate') {{ agencyInvoiceDetail.invoiceDate }}
            td.vui-truncate.vui-text-align--right(
              v-bind:class="{ 'currency': agencyInvoiceDetail.detailsAffidavitRate }"
              v-bind:title='agencyInvoiceDetail.detailsAffidavitRate') {{ agencyInvoiceDetail.detailsAffidavitRate }}
            td.vui-truncate.vui-no-border-right(:title='agencyInvoiceDetail.externalInvoiceId') {{ agencyInvoiceDetail.externalInvoiceId }}
</template>

<script>
  export default {
    props: {
      agencyInvoiceDetails: {
        type: Array
      }
    },
    data: () => ({
      orderDetailsGridExpandingColumnsWidths: {
        blank: '0px',
        unitAiredStatusName: '80px',
        spotNumber: '78px',
        programPlaced: '200px',
        airTime: '110px',
        airDay: '82px',
        priority: '88px',
        status: '116px',
        airDate: '100px',
        lineNumber: '86px',
        altLineNumber: '60px',
        assignedMakegoodId: '72px',
        isciAdId: '80px',
        invoiceDate: '85px',
        externalInvoiceId: '81px',
        affidavitRate: '81px'
      }
    })
  }
</script>
