<template lang="pug">
  .orders-view
    ui-title Order Reporting
    ui-subtitle.
      The order information below reflects the data from your station's
      traffic system. Videa updates traffic information once each day;
      as a result, data may not be current.
    ui-panel
      order-reporting-filter
    ui-loader
    order-reporting-grid(
      v-bind:grid-columns = 'gridColumns'
      v-bind:orders = 'orders'
    )
</template>

<script>
  import { mapState } from 'vuex'
  import axios from '~plugins/axios'

  import OrderReportingFilter from '~components/order-reporting/order-reporting-filter'
  import OrderReportingGrid from '~components/order-reporting/order-reporting-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      OrderReportingFilter,
      OrderReportingGrid
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/orders')
      return {
        orders: data,
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

    computed: {
      ...mapState(['apiHost', 'activeApp'])
    }
  }
</script>





