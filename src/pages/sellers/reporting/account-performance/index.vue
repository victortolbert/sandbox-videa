<template lang="pug">
  .account-performance-view
    vui-title Account Performance
    vui-panel
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
    name: 'account-performance',

    metaInfo: {
      title: 'Account Performance'
    },

    components: {
      AccountPerformanceMetrics,
      AccountPerformanceFilter,
      AccountPerformanceGrid
    },

    data () {
      return {
        accounts: []
      }
    },

    methods: {
      fetchAccounts () {
        axios.get(`/accounts`)
          .then((response) => {
            this.accounts = response.data
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
      this.fetchAccounts()
    }
  }
</script>
