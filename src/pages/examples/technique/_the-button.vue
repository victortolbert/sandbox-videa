<template lang="pug">
  button.vui-button.vui-button--brand(@click='makeItHappen') Sender: {{ what }}
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    name: 'the-button',
    props: ['what'],
    methods: {
      makeItHappen () {
        EventBus.fire('somethingHappened', this.what)
      }
    }
  }
</script>
