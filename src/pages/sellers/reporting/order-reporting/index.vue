<template lang="pug">
  .orders-view
    vui-title Order Reporting
    vui-subtitle.
      The order information below reflects the data from your station's
      traffic system. Videa updates traffic information once each day;
      as a result, data may not be current.
    vui-panel
      order-reporting-filter
    order-reporting-grid(
      v-bind:grid-columns = 'gridColumns'
      v-bind:orders = 'orders'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import OrderReportingFilter from '~components/order-reporting/order-reporting-filter'
  import OrderReportingGrid from '~components/order-reporting/order-reporting-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOrders()
    },

    data () {
      return {
        orders: [],
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

    methods: {
      fetchOrders () {
        axios.get('/orders')
          .then((res) => {
            this.orders = res.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    components: { OrderReportingFilter, OrderReportingGrid }
  }
</script>





