<template lang="pug">
  vui-table(
    v-bind:columns = 'ordersColumns'
    v-bind:items = 'orders'
  )
</template>

<script>
  export default {
    data () {
      return {
        orders: require('~models/orders'),
        ordersColumns: [
          { label: 'Videa Order Number' }
        ]
      }
    }
  }
</script>
