<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          vui-dropdown(
            v-bind:items = 'examplesMenuItems'
            text = 'Examples'
          )
        li
          vui-dropdown(
            v-bind:items = 'osTicketingMenuItems'
            text = 'OS Ticketing'
          )
</template>

<script>
  export default {
    data () {
      return {
        examplesMenuItems: require('~models/examples'),
        osTicketingMenuItems: [
          { name: 'Cases', route: 'cases'  },
          { name: 'Create New Case', route: 'cases-create' }
        ]
      }
    }
  }
</script>
