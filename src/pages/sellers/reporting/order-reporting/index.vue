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
      v-bind:columns = 'columns'
      v-bind:orders = 'orders'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import OrderReportingFilter from '~components/order-reporting/order-reporting-filter'
  import OrderReportingGrid from '~components/order-reporting/order-reporting-grid'

  export default {
    name: 'order-reporting',

    metaInfo: {
      title: 'Order Reporting'
    },

    components: {
      OrderReportingFilter,
      OrderReportingGrid
    },

    data () {
      return {
        orders: [],
        columns: [
          { field: 'advertiser', title: 'Advertiser', isSortable: true },
          { field: 'agency', title: 'Agency', isSortable: true },
          { field: 'cpe', title: 'CPE', isSortable: true },
          { field: 'flightStartDate', title: 'Flight Start', isSortable: true },
          { field: 'flightEndDate', title: 'Flight End', isSortable: true },
          { field: 'revenue', title: 'Revenue', isSortable: true },
          { field: 'share', title: 'Share', isSortable: true },
          { field: 'stationOrderNumber', title: 'Station Order #', isSortable: true },
          { field: 'manageSchedule', title: 'Manage Schedule', isSortable: false },
          { field: 'orderId', title: 'Videa Order #', isSortable: true },
          { field: 'orderDate', title: 'Order Date', isSortable: true }
        ]
      }
    },

    methods: {
      fetchOrders () {
        axios.get('/orders')
          .then((response) => {
            this.orders = response.data
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
      this.fetchOrders()
    }
  }
</script>





