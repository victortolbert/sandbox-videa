<template lang="pug">
  #app.app
    app-header
    nav.vui-site-navigation
      app-login
    main.vui-main(
      v-bind:class = '{ "vui-main--login": $store.state.activeApp == "login" }'
    )
      router-view
    app-footer
</template>

<script>
  import AppHeader from '~components/global/app-header'
  import AppFooter from '~components/global/app-footer'
  import AppLogin from '~components/global/app-login'

  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | Videa Demo'
    },
    components: { AppHeader, AppFooter, AppLogin }
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
