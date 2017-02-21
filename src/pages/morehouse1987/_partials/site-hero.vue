<template lang="pug">
  .site-hero
    .site-hero__main
      social-icons
    actions
</template>

<script>
  import SocialIcons from './social-icons'
  import Actions from './actions'

  export default {
    components: { SocialIcons, Actions }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .site-hero
    display flex
    flex-direction column
    height 656px
    text-align center

  .site-hero__main
    flex 1
</style>
