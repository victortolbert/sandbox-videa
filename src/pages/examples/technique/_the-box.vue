<template lang="pug">
  .well
    .text-muted {{ name }}
    div {{ respondedText }}
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    name: 'the-box',
    props: ['name'],
    data () {
      return {
        respondedText: null
      }
    },
    created () {
      EventBus.listen('somethingHappened', (what) => {
        this.respondedText = 'Event Received: ' + what
      })
      console.log('Responder')
    }
  }
</script>
