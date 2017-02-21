<template lang="pug">
  .spot-allocation-row
    .spot-allocation-container.spot-allocation-data(v-bind:style='{ width: spotsWidth }')
      ul.spot-allocation(v-bind:style='{ left: left + "px" }')
        li(v-for='spot in spots', v-bind:class="{ 'hiatus-spot': spot.isHiatus }")
          div
            span(v-if='spot.value !== null')
              span {{ spot.value }}
              span(v-if='spot.value !== spot.trafficSpots')
                span /
                span.text-red {{ spot.trafficSpots }}
</template>

<script>
  export default {
    data () {
      return {
        left: 0,
        spotsWidth: '455px',
        spots: [
          { week: '06/27/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '07/04/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '07/11/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '07/18/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '07/25/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '08/01/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '08/08/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '08/15/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '08/22/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '08/29/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '09/05/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '09/12/2016', value: 1, isHiatus: false, trafficSpots: 1 },
          { week: '09/19/2016', value: 1, isHiatus: false, trafficSpots: 1 }
        ]
      }
    },

    methods: {
      scrollLeft () {},
      scrollRight () {}
    }
  }
</script>
