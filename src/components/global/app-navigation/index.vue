<template lang="pug">
  nav.vui-site-navigation
    app-login(
      v-if = '$store.state.activeApp == "login" || $store.state.activeApp == null'
    )
    buyers-nav(
      v-else-if = '$store.state.activeApp == "buyers"'
    )
    sellers-nav(
      v-else = '$store.state.activeApp == "sellers"'
    )
</template>

<script>
  import SellersNav from '~components/global/sellers-nav'
  import BuyersNav from '~components/global/buyers-nav'
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
      BuyersNav,
      AppLogin
    }
  }
</script>
