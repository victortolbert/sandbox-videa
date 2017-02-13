<template lang="pug">
  #app.app
    app-header
    app-navigation
    main.vui-main(
      v-bind:class = '{ "vui-main--login": $store.state.activeApp == "login" }'
    )
      router-view
    app-footer
</template>

<script>
  import AppNavigation from '~components/global/app-navigation'
  import AppHeader from '~components/global/app-header'
  import AppFooter from '~components/global/app-footer'

  import { EventBus } from '~plugins/event-bus'

  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | Videa Demo'
    },

    components: {
      AppNavigation,
      AppHeader,
      AppFooter
    },

    mounted () {
      document.body.addEventListener('click', event => EventBus.fire('body-clicked', event))
    }
  }
</script>

<style lang="sass">
  @import '~accoutrement-color/sass/color'

  .box
    width: calc(100% - 50px)

  /// TODO Find that article, and test the code below.
  /// also delete or move to an appropriate location
  //
  #slider:after
    content: attr(value) '%'
    // custom styling

  //
  #inbox:after
    content: attr(data-new-items)
    // custom styling

</style>

<style lang="stylus">
  .app
    display flex
    flex-direction column
    min-height 100vh
    height 100%  // Avoid the IE 10-11 `min-height` bug.
    background-color #f4f6f9
    color #000000
    position relative
</style>

<style>
 .debug * { background-color: rgba(255, 0 , 0, 0.2) }
 .debug * * { background-color: rgba(0, 255, 0, 0.2) }
 .debug * * * { background-color: rgba(0, 0, 255, 0.2) }
 .debug * * * * { background-color: rgba(255, 0, 255, 0.2) }
 .debug * * * * * { background-color: rgba(0, 255, 255, 0.2) }
 .debug * * * * * * { background-color: rgba(255, 255, 0, 0.2) }
</style>

<style lang="scss">
  @import './assets/sass/app'
</style>

<style lang="stylus">
  // @import './stylus/main'
</style>
