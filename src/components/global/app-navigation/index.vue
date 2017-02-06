<template lang="pug">
  nav.vui-site-navigation
    app-login(
      v-if = '$store.state.activeApp == "login" || $store.state.activeApp == null'
    )
    sellers-nav(
      v-else = '$store.state.activeApp == "sellers"'
    )
</template>

<script>
  import SellersNav from '~components/global/sellers-nav'
  import AppLogin from '~components/global/app-login'

  export default {
    props: {
      app: {
        type: String,
        default: 'sellers'
      }
    },

    components: {
      SellersNav,
      AppLogin
    }
  }
</script>
