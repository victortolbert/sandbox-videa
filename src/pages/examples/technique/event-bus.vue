<template lang="pug">
  .the-example.container
    vui-title.vui-grid
      span.vui-p-right--xx-small Building an Event Bus with
      a(href='https://vuejs.org', target='_blank') Vue.js
    vui-subtitle
      | Here we have two Buttons, rigged to emit their respective Events to the Event Bus. Also, we have boxes that will respond to the Events. Both component types are completely isolated.

    grid(vertical='middle')
      grid-item(size='3/12')
        the-button(what='Event #1')
        the-button(what='Event #2')
      grid-item(size='9/12')
        grid
          grid-item(size='1/2')
            .vui-box.vui-theme--default
              the-box(name='Receiver #1')
          grid-item(size='1/2')
            .vui-box.vui-theme--default
              the-box(name='Receiver #2')
</template>

<script>

  import TheButton from './_the-button'
  import TheBox from './_the-box'

  export default {
    name: 'async-computed-example',

    metaInfo: {
      title: 'Example / Async Computed',
    },

    components: { TheBox, TheButton },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
