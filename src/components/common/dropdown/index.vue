<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click.dropdown(
    v-bind:aria-expanded = 'show'
    v-bind:class = '{ "vui-is-open": show }'
  )
    a(
      @click.prevent = 'click'
      v-bind:aria-expanded = 'show'
      v-bind:class = 'menuActive ? "v-link-active" : ""'
      v-bind:disabled = 'disabled'
      v-on-clickaway = 'away'
      aria-haspopup = 'true'
      aria-live = 'assertive'
      style = 'margin-right: 0'
    )
      span.vui-m-right--xx-small(
        style = 'color: white'
      ) {{ text }}
      vui-icon(
        name = 'caret-down'
        style = 'color: #4296b4; margin-right: 0'
      )
    .vui-dropdown.vui-dropdown--site-nav
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(
        role = 'menu'
      )
        li.dropdown-item.vui-dropdown__item(
          v-for = '(item, index) in items'
        )
          a(
            @click.prevent = 'select(item)'
            role = 'menuitem'
          )
            p.vui-truncate {{ item.name}}
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'

  export default {
    mixins: [ clickaway ],
    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      items: {
        type: Array
      }
    },

    data () {
      return {
        menuActive: false,
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
      }
    },
    methods: {
      click () {
        this.show = true
      },
      away (event) {
        this.show = false
        // console.log('clicked away', event.target )
      },

      hideDropdown (options) {
        this.show = false
      },

      slugify (str) {
        return str.toLowerCase().split(' ').join('-')
      },

      closeDropdown () {
        this.show = false
      },

      toggle (e) {
        this.show = !this.show
      },

      select (item) {
        this.$emit('menuSelected')

        this.show = false
        // this.menuActive = true

        this.$router.push({
          name: item.route,
          activeClass: 'v-link-active',
          exact: true
        })
      }
    }
  }
</script>
