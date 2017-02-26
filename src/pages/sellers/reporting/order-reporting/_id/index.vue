<template lang="pug">
  .orders-show-detail
    vui-title.vui-grid.vui-grid--align-spread(style='margin-bottom: 0')
      span Order Reporting Detail
      span {{ order.advertiser }} &mdash;Order # {{ order.id }}

    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
        a(@click.prevent='showOrders')
          vui-icon.vui-align-middle.vui-m-right--xx-small(name='arrow-circle-left')
          span.vui-align-middle Back to Order Reporting

    vui-datagrid-heading

    .vui-scrollable--x
      order-reporting-details-grid(
        v-bind:order = 'order'
      )
    vui-footnote
    vui-footer
</template>

<script>
  import axios from '~plugins/axios'
  import OrderReportingDetailsGrid from '~components/order-reporting/order-reporting-details-grid'

  export default {
    name: 'order-reporting-id',

    metaInfo: {
      title: 'Order Reporting Details'
    },

    components: {
      OrderReportingDetailsGrid
    },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers-reporting-order-reporting'
      }
    },

    data () {
      return {
        order: {},
        editing: false,
        loading: false,
        error: false,
        blank: false
      }
    },

    methods: {
      fetchOrder (id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      handleDaypartExpansion (daypart, event) {
        if (daypart.expanded === true) {
          daypart.expanded = false
        } else {
          daypart.expanded = true
        }
      },

      handleShowExpansion (show) {
        if (show.expanded === true) {
          show.expanded = false
        } else {
          show.expanded = true
        }
      },

      showOrders () {
        this.$router.push({
          name: this.ordersRoute
        })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOrder(this.$route.params.id)
    }
  }
</script>
