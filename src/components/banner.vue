<template lang="pug">
  section.banner
    container
      row(
        center-xs = ''
      )
        column(
          xs = '11'
        )
          img.banner__logo(
            alt = 'Cox'
            src = '/static/shared/vectors/vuejs-logo.svg'
          )
          h1.banner__title
            | Videa
            span Design
          h3.banner__subtitle
            | UI Component Library and Patterns Lab

          ul.banner__actions
            li.banner__actions__item(v-for = 'action in actions')
              a.vui-button(
                v-bind:class = '[ action.primary ? "vui-button--secondary" : "vui-button--neutral" ]'
                v-bind:href = 'action.url'
                target = '_blank'
              )
                | {{ action.label }}
</template>

<script>
  export default {
    props: {
      actions: {
        type: Array,
        default () {
          return [
            { label: 'Resume', url: '/static/shared/resume.pdf', primary: true }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .banner
    color color-white
    width 100%
    min-height 100vh
    background-attachment fixed
    background-image url('/static/shared/img/about-background.jpg')
    background-repeat no-repeat
    background-size cover
    padding-bottom 200px
    padding-top 100px
    text-align center

    &__logo
      width 120px
      display inline-block

    &__title
      font-weight 400
      font-size 50px
      padding-top 30px
      span
        font-weight 300

    &__subtitle
      font-weight 300
      font-size 26px
      padding-top 10px
      padding-bottom 30px

    &__actions
      list-style none
      padding-bottom 50px

      &__item
        display inline-block
        padding 10px

        &__button
          display block
          width 250px
          font-weight 400
          text-align center
          text-decoration none
          letter-spacing 0.5px
          color color-white
          border 2px solid color-white
          border-radius 5px
          padding 12px 0

          &--white
            color #2e2f30
            background-color color-white
</style>
