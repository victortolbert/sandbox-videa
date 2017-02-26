<template lang="pug">
  .example.vui-grid.vui-grid--align-center
    //- http://marvelapp.github.io/devices.css/
    vui-device
      app-header
      app-navigation
      main.vui-main
      app-footer
</template>

<script>
  import AppNavigation from '~components/global/app-navigation'
  import AppHeader from '~components/global/app-header'
  import AppFooter from '~components/global/app-footer'

  export default {
    name: 'devices-example',

    metaInfo: {
      title: 'Example / Devices'
    },

    components: { AppNavigation, AppHeader, AppFooter },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
