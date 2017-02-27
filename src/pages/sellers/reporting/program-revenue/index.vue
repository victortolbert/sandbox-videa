<template lang="pug">
  .program-revenue
    vui-title Program Revenue
    vui-panel
      .vui-scrollabl.vui-p-bottom--x-small
        program-revenue-filter
    program-revenue-metrics
    program-revenue-grid(
      v-bind:programs = 'programs'
    )
    vui-footnote
</template>

<script>
  import axios from '~plugins/axios'
  import ProgramRevenueMetrics from '~components/program-revenue/program-revenue-metrics'
  import ProgramRevenueFilter from '~components/program-revenue/program-revenue-filter'
  import ProgramRevenueGrid from '~components/program-revenue/program-revenue-grid'

  export default {
    name: 'program-revenue',

    metaInfo: {
      title: 'Program Revenue'
    },

    components: {
      ProgramRevenueMetrics,
      ProgramRevenueFilter,
      ProgramRevenueGrid
    },

    data () {
      return {
        programs: []
      }
    },

    methods: {
      fetchPrograms () {
        axios.get(`/programs`)
          .then((response) => {
            this.programs = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchPrograms()
    }
  }
</script>
