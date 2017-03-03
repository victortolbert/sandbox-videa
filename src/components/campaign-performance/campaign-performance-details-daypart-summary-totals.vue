<template lang="pug">
  .daypart-summary-totals.vui-text-align--center
    h3.vui-text-heading--medium.vui-m-bottom--small Total
    .vui-m-bottom--x-small
      .vui-theme--default.vui-box.vui-m-bottom--x-small
        label.vui-form-element__label Purchased GRPs/IMPs
        br
        b.vui-form-element__helper {{ total.purchasedGrpsImps }}
    .vui-m-bottom--x-small
      .vui-theme--default.vui-box.vui-m-bottom--x-small
        label.vui-form-element__label Purchased To Date
        br
        b.vui-form-element__helper {{ total.purchasedToDate }}
    .vui-m-bottom--x-small
      .vui-theme--default.vui-box.vui-m-bottom--x-small
        label.vui-form-element__label Delivered To Date #[sup 1]
        br
        b.vui-form-element__helper.vui-m-right--small {{ total.deliveredToDate }}
    .vui-m-bottom--x-small
      .vui-theme--default.vui-box.vui-m-bottom--x-small
        label.vui-form-element__label %
        br
        b.vui-form-element__helper.vui-m-right--small {{ total.percentage }}
    .vui-m-bottom--x-small
      .vui-theme--default.vui-box.vui-m-bottom--x-small
        label.vui-form-element__label +/-
        br
        b.vui-form-element__helper.vui-m-right--small(
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
