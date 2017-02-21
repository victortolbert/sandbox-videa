<template lang="pug">
  header.site-header
    section.site-header__left
      site-logo
      site-banner

    section.site-header__right
      site-hero
      site-navigation
</template>

<script>
  import SiteNavigation from './site-navigation'
  import SiteBanner from './site-banner'
  import SiteHero from './site-hero'
  import SiteLogo from './site-logo'

  export default {
    components: { SiteNavigation, SiteBanner, SiteHero, SiteLogo }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .site-header
    display flex

  .site-header__left
    background-color color-black
    display flex
    flex-direction column
    height 656px
    padding 28px 32px
    width 376px

  .site-header__right
    background-image url('/static/shared/Morehouse1987/hero-background.jpg')
    background-position 100% 0
    background-repeat no-repeat
    display flex
    flex-direction column
    height 656px
    // height 100%
    // justify-content flex-end
    width 1064px
</style>
