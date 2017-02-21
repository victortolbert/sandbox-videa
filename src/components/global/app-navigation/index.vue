<template lang="pug">
  nav.vui-site-navigation
    app-login(
      v-if = '$store.state.activeApp == "login"'
    )
    app-buyers-nav(
      v-else-if = '$store.state.activeApp == "buyers"'
    )
    app-sandbox-nav(
      v-else-if = '$store.state.activeApp == "sandbox"'
    )
    app-sellers-nav(
      v-else = '$store.state.activeApp == "sellers"'
    )
    app-notification
</template>

<script>
  import AppNotification from '~components/global/app-notification'
  import AppSandboxNav from '~components/global/app-sandbox-nav'
  import AppSellersNav from '~components/global/app-sellers-nav'
  import AppBuyersNav from '~components/global/app-buyers-nav'
  import AppLogin from '~components/global/app-login'

  export default {
    components: {
      AppNotification,
      AppSandboxNav,
      AppSellersNav,
      AppBuyersNav,
      AppLogin
    }
  }
</script>
