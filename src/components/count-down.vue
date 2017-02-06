<template lang="pug">
  ul.countdown
    li.time-wrap
      span.time {{ minutes | twoDigits }}
      p.unit minutes
    li.time-wrap
      span.time {{ seconds | twoDigits }}
      p.unit seconds
</template>

<script>
  export default {
    props: {
      date: {
        type: String,
        coerce: str => Math.trunc(Date.parse(str) / 1000)
      },
      now: {
        type: String,
        default: Math.trunc((new Date()).getTime() / 1000)
      }
    },
    computed: {
      seconds () {
        let seconds = (this.remainDateValue - this.now) % 60
        if (seconds >= 0) {
          return (this.remainDateValue - this.now) % 60
        }
        return 0
      },
      minutes () {
        let minutes = Math.trunc((this.remainDateValue - this.now) / 60) % 60
        if (minutes >= 0) {
          return Math.trunc((this.remainDateValue - this.now) / 60) % 60
        }
        return 0
      },
      // change given date to numbers
      remainDateValue () {
        return Math.trunc(Date.parse(this.date) / 1000)
      }
    },
    methods: {},
    created () {
      // get UTC time every 1 second
      setInterval(() => {
        this.now = new Date(Date.now() + (new Date().getTimezoneOffset() * 60000)).getTime() / 1000 | 0
      }, 1000)
    },
    filters: {
      twoDigits (value) {
        if (value.toString().length <= 1) {
          return '0' + value.toString()
        }
        return value.toString()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #countdown
    list-style none
    padding-left 0
    margin 0
    display inline-block
    width 100%
    max-width 600px
  .unit
    text-transform uppercase
    letter-spacing 0.1em
    margin-top 5px
    font-size 8px
  .time-wrap
    padding 0
  .time
    letter-spacing 0.05em
    display inline-block
</style>
