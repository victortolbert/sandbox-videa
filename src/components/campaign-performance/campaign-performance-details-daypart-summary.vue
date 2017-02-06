<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-theme--default.vui-m-bottom--xx-large.vui-p-around--large(
    v-if = 'campaign.daypartSummary'
    style = 'height: 479px'
  )
    .vui-col.vui-large-size--1-of-3
      campaign-performance-details-daypart-summary-totals(
        v-bind:campaign = 'campaign'
      )
    .vui-col.vui-large-size--1-of-3
      campaign-performance-details-daypart-summary-grid(
        v-if='section === "table"'
        v-bind:campaign = 'campaign'
      )
      campaign-performance-details-daypart-summary-chart(
        v-if='section === "chart"'
        v-bind:campaign = 'campaign'
      )
      campaign-performance-details-daypart-summary-legend.vui-text-align--center(
        v-bind:campaign = 'campaign'
      )
    .vui-col.vui-large-size--1-of-3
      .view-selector.vui-text-align--right
        label.vui-form-element__label View:
        button.vui-button--neutral(
          @click = 'section = "table"'
        )
          vui-icon.vui-m-right--x-small(name='table')
        button.vui-button--neutral(
          @click = 'section = "chart"'
        )
          vui-icon.vui-m-right--x-small(name='bar-chart')
</template>

<script>
  import CampaignPerformanceDetailsDaypartSummaryTotals from '~components/campaign-performance/campaign-performance-details-daypart-summary-totals'
  import CampaignPerformanceDetailsDaypartSummaryLegend from '~components/campaign-performance/campaign-performance-details-daypart-summary-legend'
  import CampaignPerformanceDetailsDaypartSummaryChart from '~components/campaign-performance/campaign-performance-details-daypart-summary-chart'
  import CampaignPerformanceDetailsDaypartSummaryGrid from '~components/campaign-performance/campaign-performance-details-daypart-summary-grid'

  export default {
    props: {
      campaign: {
        type: Object
      }
    },

    components: {
      CampaignPerformanceDetailsDaypartSummaryTotals,
      CampaignPerformanceDetailsDaypartSummaryLegend,
      CampaignPerformanceDetailsDaypartSummaryChart,
      CampaignPerformanceDetailsDaypartSummaryGrid
    },

    data () {
      return {
        section: 'table'
      }
    }
  }
</script>
