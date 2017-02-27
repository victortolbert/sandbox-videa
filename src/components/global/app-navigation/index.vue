<template lang="pug">
  nav.vui-site-navigation
    app-login(v-if='$store.state.activeApp == "login"')
    app-buyers-nav(v-else-if='$store.state.activeApp == "buyers"')
    app-examples-nav(v-else-if='$store.state.activeApp == "examples"')
    app-tickets-nav(v-else-if='$store.state.activeApp == "tickets"')
    app-sellers-nav.vui-max-medium-hide(v-else-if='$store.state.activeApp == "sellers"')
    //- app-notification
    //- .vui-grid.vui-grid--align-end(style='position: relative; top: 110%')
    //-     mark.vui-p-vertical--xx-small Still working...
</template>

<script>
  import AppTicketsNav from '~components/global/app-tickets-nav'
  import AppNotification from '~components/global/app-notification'
  import AppExamplesNav from '~components/global/app-examples-nav'
  import AppSellersNav from '~components/global/app-sellers-nav'
  import AppBuyersNav from '~components/global/app-buyers-nav'
  import AppLogin from '~components/global/app-login'

  export default {
    components: {
      AppTicketsNav,
      AppNotification,
      AppExamplesNav,
      AppSellersNav,
      AppBuyersNav,
      AppLogin
    }
  }
</script>
