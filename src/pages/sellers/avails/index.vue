<template lang="pug">
  .avails-view
    ui-title Avails
    ui-panel
      avails-filter
    avails-grid(
      v-bind:avails = 'avails'
    )
</template>

<script>
  import axios from '~plugins/axios'

  import AvailsFilter from '~components/avails/avails-filter'
  import AvailsGrid from '~components/avails/avails-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      AvailsFilter,
      AvailsGrid
    },
    props: {
      availRoute: {
        type: String,
        default: 'sellers-avails-id'
      }
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/avails')
      return {
        avails: data,
        gridColumns: [
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'cpe', title: 'CPE' },
          { field: 'flightStartDate', title: 'Start' },
          { field: 'flightEndDate', title: 'End' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'stationOrderNumber', title: 'Station Order #' },
          { field: 'manageSchedule', title: 'Manage Schedule' },
          { field: 'orderId', title: 'Videa Order #' },
          { field: 'orderDate', title: 'Order Date' }
        ]
      }
    }
  }
</script>
