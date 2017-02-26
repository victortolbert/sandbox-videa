<template lang="pug">
  .settings-view
    vui-title Settings
    .vui-tabs--scoped
      ul.vui-tabs--scoped__nav(
        role = 'tablist'
      )
        router-link.vui-tabs--scoped__item.vui-text-heading--label(
          v-bind:to = '{ name: "settings-user" }'
          active-class = 'vui-active'
          exact
          role = 'presentation'
          tag = 'li'
          title = 'User Settings'
        )
          a#user-settings__item.vui-tabs--scoped__link(
            aria-selected = 'true'
            aria-controls = 'tab-scoped-1'
            role = 'tab'
            tabindex = '0'
          ) User Settings

        router-link.vui-tabs--scoped__item.vui-text-heading--label(
          v-if = '$store.state.user.name == "Seller User"'
          v-bind:to = '{ name: "settings-display" }'
          active-class = 'vui-active'
          exact
          role = 'presentation'
          tag = 'li'
          title = 'Display Settings'
        )
          a#display-settings__item.vui-tabs--scoped__link(
            aria-controls='tab-scoped-2'
            aria-selected='false'
            role = 'tab'
            tabindex = '-1'
          ) Display Settings

        router-link.vui-tabs--scoped__item.vui-text-heading--label(
          v-if = '$store.state.user.name == "Seller User"'
          v-bind:to = "{ name: 'settings-specials' }"
          active-class = 'vui-active'
          exact
          role = 'presentation'
          tag = 'li'
          title = 'Add A Program'
        )
          a#specials-settings__item.vui-tabs--scoped__link(
            aria-controls = 'tab-scoped-4'
            aria-selected = 'false'
            role = 'tab'
            tabindex = '-1'
          ) Add A Program

        router-link.vui-tabs--scoped__item.vui-text-heading--label(
          v-if = '$store.state.user.name == "Seller User"'
          v-bind:to = '{ name: "settings-reps" }'
          active-class='vui-active'
          exact
          role='presentation'
          tag = 'li'
          title='Sales Reps'
        )
          a#reps-settings__item.vui-tabs--scoped__link(
            aria-controls = 'tab-scoped-5'
            aria-selected = 'false'
            role = 'tab'
            tabindex = '-1'
          ) Sales Reps
    router-view
</template>

<script>
  export default {
    name: 'settings',

    metaInfo: {
      title: 'Settings'
    },

    data () {
      return {
        newpassword: ''
      }
    }
  }
</script>
