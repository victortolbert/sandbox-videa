<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--click.dropdown(
    v-bind:aria-expanded = 'show'
    v-bind:class = '{ "vui-is-open": show }'
  )
    button.vui-button.vui-not-selected(
      @click = 'toggle'
      v-bind:aria-expanded = 'show'
      v-bind:disabled = 'disabled'
      aria-haspopup = 'true'
      aria-live = 'assertive'
    )
      span.vui-m-right--xx-small(
        style = 'color: white'
      ) {{ text }}
      vui-icon(
        name = 'caret-down'
        style = 'color: #4296b4; margin-right: 0'
      )
    .vui-dropdown(
      v-bind:class = '{
        "vui-nubbin--top": nubbinTop,
        "vui-nubbin--top-left": nubbinLeft,
        "vui-nubbin--top-right": nubbinRight
      }'
    )
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(
        role = 'menu'
      )
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("settings")'
            role = 'menuitem'
          )
            p.vui-truncate Preferences
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("home")'
            role = 'menuitem'
          )
            p.vui-truncate Logout
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
      }
    },

    methods: {
      toggle (e) {
        this.show = !this.show
        if (this.show) {
          e.stopPropagation()
        } else {
        }
      },

      clicked (route) {
        this.show = false
        this.$router.push({
          name: route
        })
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
      }
    }
  }
</script>
