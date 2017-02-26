<template lang="pug">
  .home
    grid
      grid-item(size = '1/4')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          chartjs-bar
      grid-item(size = '1/4')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          canvas#mycanvas2(count='2')
          chartjs-bar(target='mycanvas2', :backgroundcolor="'#383838'")
          chartjs-bar(target='mycanvas2')

      grid-item(size = '1/4')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          chartjs-horizontal-bar

      grid-item(size = '1/4')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          chartjs-line(:labels='mylabels', :datasets='mydatasets')

      grid-item(size = '1/2')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          chartjs-radar

      grid-item(size = '1/2')
        .vui-box.vui-theme--shade.vui-m-bottom--large
          chartjs-polar-area

</template>

<script>
  import Highchart from '~components/common/chart/highchart'
  import CommitChart from 'components/common/chart/commit-chart'

  export default {
    name: 'highchart-example',
    metaInfo: {
      title: 'Example / Highchart',
    },
    components: { CommitChart, Highchart },

    computed: {
      initSeries () {
        return [
          {
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
          },
          {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
          },
          {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
          },
          {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
          }
        ]
      }
    },

    data () {
      return {
        mylabels: ["January", "February", "March", "April", "May", "June", "July"],
        mydatasets:[
          {
            label: "My first dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          },
          {
            label: "My second dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 20, 40, 41, 66, 25, 80],
            spanGaps: false,
          }
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
