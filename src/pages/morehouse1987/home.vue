<template lang="pug">
  main.main
    article-greetings
    article-goals

    article.article
      h2.article__headline {{ videos[0].headline }}
      .s-embed.s-embed--widescreen
        //- ready
        //- ended
        //- playing
        //- paused
        //- buffering
        //- qued
        //- error
        youtube(
          v-bind:video-id = 'videos[0].id'
          v-on:playing = 'playing'
          player-height = '750'
          player-width = '1280'
        )

    article.article
      h2.article__headline {{ videos[1].headline }}
      .s-embed.s-embed--widescreen
        youtube(:video-id='videos[1].id')

</template>

<script>
  // let videoId = VueYouTubeEmbed.getIdFromURL(url)
  // let startTime = VueYouTubeEmbed.getTimeFromURL(url)

  import ArticleGreetings from './_partials/article-greetings'
  import ArticleGoals from './_partials/article-goals'
  import vuiArticle from './_partials/article'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    components: { ArticleGreetings, ArticleGoals, vuiArticle },

    data () {
      return {
        videos: [
          {
            id: 'ZcIsol3yY4Y',
            headline: 'Celebrating Morehouse Men and the Legacy of Civil and Human Rights'
          },
          {
            id: 'qVQKTPHBdVg',
            headline: 'President Barack Obama Delivers Morehouse Commencement Address'
          }
        ],

        goals: {
          classGift: { label: 'Class Gift', now: 160000, goal: 300000 },
          recurringGifts: { label: 'Recurring Gifts', now: 10, goal: 47 },
          firstTimeDonors: { label: 'First Time Donors', now: 5, goal: 93 },
          registrations: { label: 'Registrations', now: 9, goal: 47 },
          classParticipation: { label: 'Class Participation', now: 43, goal: 93 }
        }
      }
    },

    methods: {
      method (url) {
        this.videoId = this.$youtube.getIdFromURL(url)
        this.startTime = this.$youtube.getTimeFromURL(url)
      },

      ready (player) {
        this.player = player
      },

      playing (player) {
        // The player is playing a video.
        console.log('playing...')
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
      this.$store.state.activeApp = 'morehouse1987'
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .s-embed
    height 0
    max-width 100%
    overflow hidden
    padding-bottom 75% /* 4:3 */
    position relative

    iframe
      height 100%
      left 0
      position absolute
      top 0
      width 100%

  .s-embed--widescreen
    padding-bottom 56.25% /* 16:9 */

</style>
