<template>
  <div><div>
</template>

<script>
  const Highcharts = require('highcharts')

  export default {
    name: 'Chart',
    props: {
      series: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        target: undefined
      }
    },

    mounted () {
      this.target = Highcharts.chart(this.$el, {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Daypart Summary'
        },
        legend: {
          itemMarginTop: 30
        },
        xAxis: {
          tickWidth: 0,
          title: {
            text: null
          },
          labels:
          {
            enabled: true,
            style: {
              fontWeight: 'bold'
            }
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          plotLines: [
            {
              color: '#cccccc',
              dashStyle: 'shortdash',
              width: 2,
              value: 360,
              zIndex: 5
            }
          ],
          title: {
            text: '',
            align: 'middle'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: '°C'
        },
        credits: {
          enabled: false
        },
        series: this.series
      })
    },

    beforeDestroy () {
      this.target.destroy()
    }
}
</script>
