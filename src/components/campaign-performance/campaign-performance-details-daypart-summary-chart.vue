<template lang="pug">
  .daypart-summary-chart(v-if='campaign.daypartSummary')
    chart(
      v-bind:series = 'initSeries'
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
    components: { Chart },
    computed: {
      initSeries () {
        return [
          {
            name: 'Purchased To Date',
            data: [52, 18, 35, 29, 11],
            color: '#6CB9BD'
          }, {
            name: 'Delivered To Date',
            data: [70, 45, 25, 20, 20],
            color: '#80D9BA'
          },
          {
            name: '+/-',
            data: [-20, -10, -19, -20, -25],
            color: '#533873'
          }
        ]
      }
    }
  }
</script>
