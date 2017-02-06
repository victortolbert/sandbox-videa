<template lang="pug">
  router-link.vui-button.vui-button--brand(
    v-bind:to = 'routeObject'
    style = 'color: white !important; white-space: nowrap'
    tag = 'button'
  )
    icon.vui-m-right--x-small(
      v-bind:name = 'icon'
    )
    span {{ text }}
    span.vui-assistive-text {{ text }}
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Button text'
      },
      icon: {
        type: String,
        default: 'cog'
      },
      route: {
        type: String,
        default: 'settings-user'
      }
    },
    computed: {
      routeObject () {
        return {
          name: this.route
        }
      }
    }
  }
</script>
