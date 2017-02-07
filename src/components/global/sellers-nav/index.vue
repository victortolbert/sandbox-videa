<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          vui-dropdown(
            v-bind:items = 'orderManagementMenuItems'
            text = 'Order Management'
          )
        li
          vui-dropdown(
            v-bind:items = 'reportingMenuItems'
            text = 'Reporting'
          )
        li
          router-link(
            v-bind:to = '{ name: "sellers-avails" }'
          ) Avails
        li
          router-link(
            v-bind:to = '{ name: "sellers-campaign-performance" }'
          ) Campaign Performance
      ul.actions.vui-align-middle
        li
          router-link.vui-button.vui-button--brand(
            v-bind:to = '{ name: "settings-user" }'
            style = 'color: white !important; white-space: nowrap'
            tag = 'button'
          )
            vui-icon.vui-m-right--x-small(
              name = 'cog'
            )
            span Settings
            span.vui-assistive-text Settings
</template>

<script>
  export default {
    data () {
      return {
        orderManagementMenuItems: [
          { name: 'Pending Orders', route: 'sellers-order-management-pending-orders' },
          { name: 'Pending Makegoods', route: 'sellers-order-management-pending-makegoods' },
          { name: 'Open Pre-Empts', route: 'sellers-order-management-open-preempts' },
          { name: 'Order Search', route: 'sellers-order-management-order-search' }
        ],
        reportingMenuItems: [
          { name: 'Account Performance', route: 'sellers-reporting-account-performance' },
          { name: 'Program Revenue', route: 'sellers-reporting-program-revenue' },
          { name: 'Order Reporting', route: 'sellers-reporting-order-reporting' }
        ]
      }
    }
  }
</script>
