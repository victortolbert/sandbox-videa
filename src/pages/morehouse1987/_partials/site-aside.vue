<template lang="pug">
  aside.aside
    countdown(date='May 17, 2017')
</template>

<script>
  import Countdown from './countdown'

  export default {
    components: { Countdown }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .aside
    background-color color-heathered-gray
    padding 32px
    width 436px

  .aside__header
    color #000
    font-family font-family-body
    font-size 24px
    line-height 32px
    text-transform uppercase
</style>
