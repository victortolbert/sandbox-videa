<template lang="pug">
  vui-section.cases
    vui-title.vui-m-bottom--large OS Ticket Overview
    router-link.vui-m-bottom--large(
      class = "vui-button vui-button--brand"
      v-bind:to = '{ name: "cases-create" }'
      style = 'color: white !important; white-space: nowrap'
      tag = 'button'
    )
      vui-icon.vui-m-right--x-small(
        name = 'cog'
      )
      span Create New Ticket
      span.vui-assistive-text Settings
    vui-table(
      v-bind:columns = 'columns'
      v-bind:items = 'cases'
      row-hover
    )
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          { name: 'Number' },
          { name: 'Status' },
          { name: 'Priority' },
          { name: 'Reason' },
          { name: 'Subject' }
        ],
        cases: [
          {
            id: 1,
            status: 'New',
            priority: 1,
            reason: 'lorem',
            subject: 'ipsum'
          }
        ],
        requestTypes: [
          'DBA Request',
          'Release Management Change Request',
          'Server Request',
          'Tech Ops CM Request'
        ]
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
