<template lang="pug">
  .social-icons
    .social-icon.facebook
      a(
        href = 'https://www.facebook.com/groups/spelmanreunionc87/'
      )
        vui-icon(
          name = 'facebook-square'
          style = 'color: #fff; width: 2rem; height: 2rem'
        )

    .social-icon.twitter
      a(
        href = 'https://twitter.com/MorehouseC1987'
      )
        vui-icon(
          name = 'twitter-square'
          style = 'color: #fff; width: 2rem; height: 2rem'
        )

    .social-icon.instagram
      a(
        href = ''
      )
        vui-icon(
          name = 'instagram-square'
          style = 'color: #fff; width: 2rem; height: 2rem'
        )
</template>

<style lang="stylus">
  @import '~assets/variables'

  .social-icons
    display flex
    justify-content flex-end
    margin-top 32px
    flex 1

  .social-icon
    align-items center
    background-color color-fiord
    border-radius 50%
    display flex
    justify-content center
    margin-right 16px
    height 64px
    width 64px
</style>
