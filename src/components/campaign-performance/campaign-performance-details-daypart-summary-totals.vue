<template lang="pug">
  .daypart-summary-totals
    h3.vui-text-heading--medium.vui-m-bottom--small.vui-text-align--left Total
    .vui-m-bottom--x-small.vui-grid
      .vui-col
        label.vui-form-element__label Purchased GRPs/IMPs
      .vui-col
        //- b.vui-form-element__helper {{ order.totalPurchased }}
    .vui-m-bottom--x-small
      .vui-col
        label.vui-form-element__label Purchased To Date
      .vui-col
        b.vui-form-element__helper {{ total.orderedToDate }}
    .vui-m-bottom--x-small.vui-grid
      .vui-col
        label.vui-form-element__label Delivered To Date #[sup 1]
      .vui-col
        b.vui-form-element__helper {{ total.deliveredToDate }}
    .vui-m-bottom--x-small.vui-grid
      .vui-col
        label.vui-form-element__label %
      .vui-col
        b.vui-form-element__helper {{ total.percentage }}
    .vui-m-bottom--x-small.vui-grid
      .vui-col
        label.vui-form-element__label +/-
      .vui-col
        b.vui-form-element__helper(
          style='color: rgb(197, 32, 62)'
        ) {{ total.difference }}
</template>

<script>
  export default {
    props: {
      campaign: {
        type: Object
      },
      order: {
        type: Object
      }
    },
    computed: {
      total () {
        return this.campaign.daypartSummary.total
      }
    }
  }
</script>
