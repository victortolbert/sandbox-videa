<template lang="pug">
  .order-management-view
    ui-title Pending Orders
    ui-subtitle.
      Click an Order Number below to accept/reject new orders, modify orders,
      and update share information. Note that sales representatives can only
      view orders and update share information.
    pending-orders-grid(
      v-bind:grid-columns = 'gridColumns'
      v-bind:orders = 'orders'
    )
    .vui-align-middle
      sup.vui-m-right--xx-small *
      span(
        style = 'font-weight: normal'
      ) Accepted and Rejected Orders displayed for 60 days
</template>

<script>
  import axios from '~plugins/axios'

  import PendingOrdersGrid from '~components/pending-orders/pending-orders-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      PendingOrdersGrid
    },

    props: {
      detailRoute: {
        type: String,
        default: 'sellers-order-management-pending-orders-id'
      }
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/orders')
      return {
        orders: data,
        gridColumns: [
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'campaign', title: 'Campaign' },
          { field: 'flightStartDate', title: 'Flight Start Date' },
          { field: 'flightEndDate', title: 'Flight End Date' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'orderId', title: 'Order #' },
          { field: 'orderDate', title: 'Order Date' }
        ]
      }
    }
  }
</script>
