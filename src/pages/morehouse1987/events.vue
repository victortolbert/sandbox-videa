<template lang="pug">
  main.main
    article.article
      h2.article__headline Events
      table
        thead
          tr
            th Day
            th Time
            th Event
            th Location
        tbody
          tr(v-for='event in events')
            td {{ event.day }}
            td {{ event.time }}
            td {{ event.description }}
            td {{ event.location }}
</template>

<script>
  export default {
    data () {
      return {
        events: [
          {
            day: 'Thu 5/8',
            time: 'TBD',
            description: 'The Party',
            location: 'Kilgore Center, 830 Westview Dr, Atlanta, GA 30314',
          }
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'morehouse1987'
    }
  }
</script>
