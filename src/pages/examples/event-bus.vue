<template lang="pug">
  .the-example.container
    h1
      | Building an Event Bus with
      a(href='https://vuejs.org', target='_blank') Vue.js
    p
      | Here we have two Buttons, rigged to emit their respective Events to the Event Bus. Also, we have boxes that will respond to the Events. Both component types are completely isolated.
    .row
      .col-xs-6
        the-button(what='Event #1')
        the-button(what='Event #2')
      .col-xs-6
        the-box(name='Receiver #1')
        the-box(name='Receiver #2')
</template>

<script>
  export default {
    name: 'async-computed-example',

    metaInfo: {
      title: 'Example / Async Computed',
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
