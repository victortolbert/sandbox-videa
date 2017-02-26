<template lang="pug">
  #navigation-wrapper
    vui-navigation(inline-template)
      nav.navigation(:class='expandedClass')
        vui-navigation-handler(:telephone="'0800 800 800'")
        ul
          vui-dropdown-wrapper(:id='1', :label="'About us'", :is-opened='isOpened(1)')
            li: a(href='#') History
            li: a(href='#') Meet the team
            li: a(href='#') Testimonials
          vui-dropdown-wrapper(:id='2', :label="'Services'", :is-opened='isOpened(2)')
            li: a(href='#') Service type one
            li: a(href='#') Service type two
          vui-dropdown-wrapper(:id='3', :label="'Products'", :is-opened='isOpened(3)')
            li: a(href='#') Product number one
            li: a(href='#') Product number two
          li: a(href='#') Contact us
</template>

<style lang="stylus">
  @import '~assets/variables'

  white = #fff
  body-bg = #27343d
  body-color = #fff
  navigation-bg = #c93428
  navigation-height = 3rem
  border-radius = 3px

  .navigation
    text-align left
    .handlers
      font-size 0
      background-color navigation-bg
      > a, > span
        width 50%
        display inline-block
        font-size 1rem
    .trigger
      color white
      cursor pointer
      text-align right
    .trigger, a, .fa
      line-height navigation-height
    .trigger, a
      display block
      padding 0 0.6rem
    ul
      display none
      list-style none
      margin 0
      padding 0
      background-color lighten(navigation-bg, 10%)
      li
        a
          border-bottom solid 1px lighten(navigation-bg, 20%)
        &.has-dropdown
          &, > a
            position relative
          > a
            &::after
              font-family FontAwesome
              content '\f107'
              display inline-block
              position absolute
              right 0.6rem
          &.opened
            > ul
              display block
            > a
              &::after
                content '\f106'
      &.dropdown
        background-color lighten(navigation-bg, 15%)
    &.expanded
      > ul
        display block

  @media all and (min-width: 1024px)
    // to move it to the right corner
    #navigation-wrapper
      text-align right
      padding 0 0.6rem
    .navigation
      display inline-block
      .handlers
        display none
      > ul
        display block
        background-color transparent
        position relative
        > li
          display inline-block
          > a
            border-bottom none
            padding 0 1.7rem 0 0.6rem
          &.opened
            > a
              color lighten(body-bg, 50%)
              &::before
                content ''
                display block
                width 0
                height 0
                border-style inset solid
                border-width 0 5px 10px 5px
                border-color transparent transparent lighten(navigation-bg, 15%) transparent
                -webkit-transform rotate(360deg)
                position absolute
                right 0.6rem
                bottom 0
          // last dropdown on the right
          // to not go over the right edge
          &:last-child
            .dropdown
              right 0
      ul
        &.dropdown
          position absolute
          top navigation-height
          border-radius border-radius
          li
            a
              white-space nowrap
              line-height 2rem
              font-size 0.9em
            &:first-child
              a
                border-top-left-radius border-radius
                border-top-right-radius border-radius
            &:last-child
              a
                border-bottom-left-radius border-radius
                border-bottom-right-radius border-radius
                border-bottom none
</style>
