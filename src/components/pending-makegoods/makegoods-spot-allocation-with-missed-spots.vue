<template lang="pug">
  .spot-allocation-row
    .spot-allocation-container.spot-allocation-data(v-bind:style = '{ "width": spotsWidth }')
      ul.spot-allocation(style='left: 0')
        li(
          v-bind:class = '{ "hiatus-spot": spot.isHiatus }'
          v-for = 'spot in spots'
        )
          div: span: span {{ spot.value }}
</template>

<script>
  export default {
    props: ['spots'],
    data () {
      return {
        spotsWidth: '455px'
      }
    },

    methods: {
      scrollLeft () {},
      scrollRight () {}
    }
  }
</script>
