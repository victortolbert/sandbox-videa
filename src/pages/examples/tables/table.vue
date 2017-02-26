<template lang="pug">
  vui-table2(
    v-bind:fields = 'fields'
    v-bind:items = 'orders'
    v-bind:perPage = '3'
    pagination
  )
    template(
      scope = 'item'
      slot = 'actions'
    )
      button.vui-button.vui-button--neutral(
        @click = 'details(item.item)'
      ) Details
</template>

<script>
  import VuiTable2 from '~components/table'
  // const orders = require('yamljs').load('~data/orders.yaml')

  export default {
    name: 'table-example',

    metaInfo: {
      title: 'Example / Table',
    },

    components: {
      VuiTable2
    },

    data () {
      return {
        orders: orders,
        orders: [],
        fields: {
          advertiser: { label: 'Advertiser', isSortable: true },
          agency: { label: 'Agency', isSortable: true },
          cpe: { label: 'CPE', isSortable: true },
          flightStartDate: { label: 'Flight Start', isSortable: true },
          flightEndDate: { label: 'Flight End', isSortable: true },
          revenue: { label: 'Revenue', isSortable: true },
          share: { label: 'Share', isSortable: true },
          stationOrderNumber: { label: 'Station Order #', isSortable: true },
          manageSchedule: { label: 'Manage Schedule', isSortable: false },
          orderId: { label: 'Videa Order #', isSortable: true },
          orderDate: { label: 'Order Date', isSortable: true },
          actions: { label: 'Actions' }
        },
        columns: [
          { field: 'advertiser', label: 'Advertiser', isSortable: true },
          { field: 'agency', label: 'Agency', isSortable: true },
          { field: 'cpe', label: 'CPE', isSortable: true },
          { field: 'flightStartDate', label: 'Flight Start', isSortable: true },
          { field: 'flightEndDate', label: 'Flight End', isSortable: true },
          { field: 'revenue', label: 'Revenue', isSortable: true },
          { field: 'share', label: 'Share', isSortable: true },
          { field: 'stationOrderNumber', label: 'Station Order #', isSortable: true },
          { field: 'manageSchedule', label: 'Manage Schedule', isSortable: false },
          { field: 'orderId', label: 'Videa Order #', isSortable: true },
          { field: 'orderDate', label: 'Order Date', isSortable: true }
        ]
      }
    },

    methods: {
      details(item) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(item));
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>

