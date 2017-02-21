<template lang="pug">
div
  .countdown__header.aside__header Countdown

  .countdown
    .countdown__days
      .countdown__number {{ days | twoDigits  }}
      .countdown__label Days

    .countdown__hours
      .countdown__number {{ hours | twoDigits  }}
      .countdown__label Hours

    .countdown__minutes
      .countdown__number {{ minutes | twoDigits  }}
      .countdown__label Mins

    .countdown__seconds
      .countdown__number {{ seconds | twoDigits  }}
      .countdown__label Secs
</template>

<script>
  export default {
    props: ['date', 'units'],

    // props: {
    //   date: {
    //     type: Number,
    //     coerce: str => Math.trunc(Date.parse(str) / 1000)
    //   }
    // },

    data () {
      return {
        now: Math.trunc((new Date()).getTime() / 1000)
      }
    },
    methods: {
      twoDigits (number) {
        return (number < 10)
          ? '0' + number
          : number
      }
    },

    computed: {
      usableDate () {
        return Math.trunc(Date.parse(this.date) / 1000)
      },

      seconds () {
        return (this.usableDate - this.now) % 60
      },

      minutes () {
        return Math.trunc((this.usableDate - this.now) / 60) % 60
      },

      hours () {
        return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
      },

      days () {
         return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
      }
    },

    mounted () {
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .countdown
    display flex
    justify-content space-between
    width 100%

    > *
      // align-items center
      display flex
      flex-direction column
      justify-content center

  .countdown__number
    align-items center
    background-color color-claret
    color color-white
    display flex
    font-family Roboto-Regular
    font-size 36px
    height 80px
    justify-content center
    text-align center
    width 80px
    // line-height 3 // 48px


  .countdown__label
    color color-claret
    font-family Roboto-Regular
    font-size 20px
    // line-height 1.625 // 26px
    text-transform uppercase
</style>
