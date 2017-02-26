<template lang="pug">
  .youtube-embed
    section
      h2 listening events
      youtube(
        v-bind:video-id = 'videoId'
        v-on:playing = 'playing'
        v-on:ready = 'ready'
      )

    section
      h2 add options
      youtube(
        v-bind:video-id = 'videoId'
        v-bind:player-vars = '{autoplay: 1}'
        player-height = '750'
        player-width = '1280'
      )
</template>

<script>
  export default {
    name: 'youtube-embed-example',

    metaInfo: {
      title: 'Example / Youtube Embed',
    },

    data () {
      return {
        videoId: 'videoId',
        player: null
      }
    },

    methods: {
      ready (player) {
        this.player = player
      },

      playing (player) {
        // The player is playing a video.
      },

      change () {
        // when you change the value, the player will also change.
        // If you would like to change `playerVars`, please change it before you change `videoId`.
        // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
        // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
        this.videoId = 'another video id'
      },

      stop () {
        this.player.stopVideo()
      },

      pause () {
        this.player.pauseVideo()
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
