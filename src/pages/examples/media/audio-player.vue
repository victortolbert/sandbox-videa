<template lang="pug">
  vui-audio-player(
    v-bind:loop = 'true'
    v-bind:sources = 'audioSources'
  )
</template>

<script>
  export default {
    name: 'audio-player-example',

    metaInfo: {
      title: 'Example / Audio Player',
    },

    data () {
      return {
        audioSources: [
          "/static/shared/audio/dear-old-morehouse.mp3",
          "/static/shared/audio/best-friend.mp3",
          "/static/shared/audio/rock-yo-hips.mp3"
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
