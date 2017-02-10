<template lang="pug">
  .daypart-summary-chart(v-if='campaign.daypartSummary')
    chart(
      v-bind:categories = 'dayparts'
      v-bind:series = 'campaign.series'
      title = 'Daypart Summary'
    )
</template>

<script>
  import Chart from '~components/common/chart/highchart'

  export default {
    components: { Chart },

    props: {
      campaign: {
        type: Object
      }
    },

    data () {
      return {
        dayparts: [ 'EM', 'EN', 'PR', 'LN', 'LF' ]
      }
    }
  }
</script>
