<template lang="pug">
  vui-section.tickets.vui-container--large
    vui-title Tech Ops Ticketing System
    router-link.vui-m-bottom--large(
      class = "vui-button vui-button--brand"
      v-bind:to = '{ name: "tickets-create" }'
      style = 'color: white !important; white-space: nowrap'
      tag = 'button'
    )
      //- vui-icon.vui-m-right--x-small(
      //-   name = 'cog'
      //- )
      span Create New Ticket
    vui-table(
      v-bind:columns = 'columns'
      v-bind:items = 'tickets'
      row-hover
    )
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    data () {
      return {
        columns: [
          { name: 'Number' },
          { name: 'Date Opened' },
          { name: 'Status' },
          { name: 'Priority' },
          { name: 'Reason' },
          { name: 'Subject' }
        ],
        tickets: [],
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
      },

      fetchTickets () {
        axios.get('/tickets')
          .then((response) => {
            this.tickets = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'tickets'
    },

    created () {
      this.fetchTickets()
    }
  }
</script>

