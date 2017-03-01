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
    props: [ 'spots' ],
    data () {
      return {
        left: 0,
        spotsWidth: '455px'
      }
    },

    methods: {
      scrollLeft () {},
      scrollRight () {}
    }
  }
</script>
