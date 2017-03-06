<template lang="pug">
  .avails-view
    vui-title Avails
    vui-panel
      .vui-scrollable--x.vui-p-bottom--x-small
        avails-filter
    avails-grid(:avails='avails')
</template>

<script>
  import axios from '~plugins/axios'
  import AvailsFilter from '~components/avails/avails-filter'
  import AvailsGrid from '~components/avails/avails-grid'

  export default {
    metaInfo: {
      title: 'Avails'
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

    data () {
      return {
        avails: [],
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
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      axios.get('/avails')
        .then(response => this.avails = response.data)
        .catch(error => console.log(error))
    }
  }
</script>
