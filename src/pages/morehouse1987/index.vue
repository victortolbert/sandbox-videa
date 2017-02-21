<template lang="pug">
  .container
    site-header
    section.section
      router-view
      site-aside.aside
    site-footer.footer
</template>

<script>
  import SiteFooter from './_partials/site-footer'
  import SiteHeader from './_partials/site-header'
  import SiteAside from './_partials/site-aside'

  export default {
    name: 'Home',

    metaInfo: {
      title: 'Home',
    },

    components: {
      SiteFooter,
      SiteHeader,
      SiteAside
    },

    data () {
      return {
        metrics: {
          classGift: { label: 'Class Gift', now: 160000, goal: 300000 },
          recurringGifts: { label: 'Recurring Gifts', now: 10, goal: 47 },
          firstTimeDonors: { label: 'First Time Donors', now: 5, goal: 93 },
          registrations: { label: 'Registrations', now: 9, goal: 47 },
          classParticipation: { label: 'Class Participation', now: 43, goal: 93 }
        }
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>

<!-- Base -->
<style lang="stylus">
  @import '~assets/variables'

  .container
    max-width 1440px
    width 1440px

  .section
    display flex

  .main
    background-color color-white
    padding 32px 60px
    width 1004px

  .vui-main
    // margin-bottom 0
    // background-color color-black
    // background-image url('/static/shared/morehouse1987/morehouse-block.jpg')
    // background-repeat repeat
</style>

<!-- Font Stack -->
<!-- Railway and Roboto Slab -->
<style lang="stylus">
  @import '~assets/variables'

  .h1, .h2, .h3
    font-family Raleway
    text-transform uppercase

  .h1
    font-family Roboto Slab
    font-size 30px
    text-transform capitalize

  .h2
    font-size 24px

  .h3
    font-size 18px

  p
    font-family Roboto
    letter-spacing .02em
</style>

<!-- Flex Demo -->
<style lang="stylus">
  @import '~assets/variables'

  .items
    background-color color-heathered-gray
    display flex
    flex-wrap wrap
    justify-content flex-start

  .item
    background rgba(255, 255, 255, .6)
    font-size 16px
    margin 10px
    padding 20px

  .item
    flex 0 1 calc(33.33% - 20px)
</style>
