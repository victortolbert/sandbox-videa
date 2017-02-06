<template lang="pug">
  .daypart-summary-chart(v-if='campaign.daypartSummary')
    #highcharts.highcharts-container
</template>

<script>
  export default {
    props: {
      campaign: {
        type: Object
      }
    }
  }
</script>
