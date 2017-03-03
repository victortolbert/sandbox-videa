<template lang="pug">
  .daypart-summary-grid
    h3.vui-text-heading--medium.vui-m-bottom--small.vui-text-align--center Daypart Summary
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table
        thead
          tr
            th Dayparts
            th Purchased To Date
            th Delivered To Date #[sup 1]
            th %
            th +/-
        tbody(
          v-if = 'campaign.daypartSummary.items'
        )
          tr(
            v-for='item in campaign.daypartSummary.items'
          )
            td.vui-truncate(
              v-bind:title = 'item.dayparts'
            ) {{ item.dayparts }}
            td.vui-truncate(
              v-bind:title = 'item.purchasedToDate'
            ) {{ item.purchasedToDate }}
            td.vui-truncate(
              v-bind:title = 'item.deliveredToDate'
            ) {{ item.deliveredToDate  }}
            td
              campaign-performance-delivery-indicator(
                v-bind:value = 'item.percentage'
              )
            td.vui-truncate(
              v-bind:title = 'item.difference'
            ) {{ item.difference }}
        tfoot(
          v-if = 'campaign.daypartSummary.items'
        )
          tr
            td Total
            td.vui-truncate(
              v-bind:title = 'campaign.daypartSummary.total.orderedToDate'
            ) {{ campaign.daypartSummary.total.orderedToDate }}
            td.vui-truncate(
              v-bind:title = 'campaign.daypartSummary.total.deliveredToDate'
            ) {{ campaign.daypartSummary.total.deliveredToDate }}
            td
              campaign-performance-delivery-indicator(
                v-bind:value = 'campaign.daypartSummary.total.percentageRatio'
              )
            td.vui-truncate(
              v-bind:title='campaign.daypartSummary.total.difference'
              style='color: rgb(197, 32, 62)'
            ) {{ campaign.daypartSummary.total.difference }}
</template>

<script>
  import CampaignPerformanceDeliveryIndicator from '~components/campaign-performance/campaign-performance-delivery-indicator'

  export default {
    props: {
      campaign: {
        type: Object
      }
    },

    components: {
      CampaignPerformanceDeliveryIndicator
    },
  }
</script>
