<template lang="pug">
  .example
    full-calendar(:events="events")
    //- year-calendar
    calendar(
       v-bind:value="value"
       v-bind:disabled-days-of-week="disabled"
       v-bind:format="format"
       v-bind:clear-button="clear"
       v-bind:placeholder="placeholder"
       v-bind:pane="2"
       v-bind:has-input="false"
       v-bind:on-day-click="onDayClick2"
       v-bind:special-days="_dateMap"
     )
</template>

<!-- https://github.com/CroudSupport/vue-fullcalendar -->
<script>
  // import YearCalendar from 'vue-year-calendar'

  // http://blog.w3cub.com/vue2-calendar/
  import Calendar from 'vue2-calendar'

  export default {
    components: { Calendar },

    data () {
      return {
        events: [
          {
            title: 'event1',
            start: '2010-01-01'
          },
          {
            title: 'event2',
            start: '2010-01-05',
            end: '2010-01-07'
          },
          {
            title: 'event3',
            start: '2010-01-09T12:30:00',
            allDay: false
          }
        ]
      }
    }
    // data() {
    //     return {
    //       eventSources: [
    //         {
    //           events(start, end, timezone, callback) {
    //             self.$http.get(`/myFeed`, {timezone: timezone}).then(response => {
    //               callback(response.data.data)
    //             })
    //           },
    //           color: 'yellow',
    //           textColor: 'black',
    //         },
    //         {
    //           events(start, end, timezone, callback) {
    //             self.$http.get(`/anotherFeed`, {timezone: self.timezone}).then(response => {
    //               callback(response.data.data)
    //             })
    //           },
    //           color: 'red',
    //         },
    //       ]
    //     }
    //   }
    }
</script>
