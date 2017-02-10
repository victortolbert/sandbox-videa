<template lang="pug">
  .daypart-summary-chart(v-if='campaign.daypartSummary')
    chart(
      v-bind:series = 'campaign.series'
    )
</template>

<script>
  import Chart from '~components/common/chart/highchart'

  export default {
    props: {
      campaign: {
        type: Object
      }
    },
    name: 'campaign-performance-datails-daypart-summary-chart',
    components: { Chart }
  }
</script>
