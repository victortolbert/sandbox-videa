<template lang="pug">
  .progress
    .progress-bar(style='margin-bottom: 2rem')
      span(style='width: 80%') Progress: 80%

    progress(max='100', value='80')
      .progress-bar
        span(style='width: 80%') Progress: 80%
</template>

<style lang="stylus">
  @import '~assets/variables'

  progress[value]
    appearance none
    height 48px
    width 250px

  .progress-bar
    background-color color-alto
    border-radius 2px
    box-shadow 0 2px 3px rgba(0, 0, 0, 0.25) inset
    display block
    height 48px
    position relative
    width 250px

  .progress-bar > span
    background-color color-claret
    border-radius 2px
    display block
    height 100%
    text-indent -9999px

</style>
