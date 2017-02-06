<template lang="pug">
  .account-performance-view
    ui-title Account Performance
    ui-panel
      account-performance-filter
    account-performance-metrics
    account-performance-grid(
      v-bind:accounts = 'accounts'
    )
</template>

<script>
  import axios from '~plugins/axios'

  import AccountPerformanceMetrics from '~components/account-performance/account-performance-metrics'
  import AccountPerformanceFilter from '~components/account-performance/account-performance-filter'
  import AccountPerformanceGrid from '~components/account-performance/account-performance-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      AccountPerformanceMetrics,
      AccountPerformanceFilter,
      AccountPerformanceGrid
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/accounts')
      return { accounts: data }
    }
  }
</script>
