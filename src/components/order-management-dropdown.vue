<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click.dropdown(
    @closeDropdowns = 'show = false'
    v-bind:aria-expanded = 'show'
    v-bind:class = '{ "vui-is-open": show }'
  )
    a(
      @click.prevent = 'toggle'
      v-bind:aria-expanded = 'show'
      v-bind:class = '"v-link-active"'
      v-bind:disabled = 'disabled'
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
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("sellers-order-management-pending-orders")'
            role = 'menuitem'
          )
            p.vui-truncate Pending Orders
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("sellers-order-management-pending-makegoods")'
            role = 'menuitem'
          )
            p.vui-truncate Pending Makegoods
        //- li.dropdown-item.vui-dropdown__item
        //-   a(@click.prevent='clicked("sellers-makegoods-create")', role='menuitem')
        //-     p.vui-truncate Makegood -- Create
        //- li.dropdown-item.vui-dropdown__item
        //-   a(@click.prevent='clicked("sellers-makegoods-id-details", 135001)', role='menuitem')
        //-     p.vui-truncate Makegood -- Details (Show)
        //- li.dropdown-item.vui-dropdown__item
        //-   a(@click.prevent='clicked("sellers-makegoods-id-add-bonus-offer", 135001)', role='menuitem')
        //-     p.vui-truncate Makegood -- Add Bonus Offer (Offer)
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("sellers-order-management-open-preempts")'
            role = 'menuitem'
          )
            p.vui-truncate Open Pre-Empts
        li.dropdown-item.vui-dropdown__item
          a(
            @click.prevent = 'clicked("sellers-order-management-order-search")'
            role = 'menuitem'
          )
            p.vui-truncate Order Search
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
      hideDropdown (options) {
        // this.show = false
        // console.log(options)
      },

      toggle (e) {
        this.show = !this.show
        if (this.show) {
          // eventHub.$emit('hide-dropdowns', {
          //   show: this.show
          // })
          this.show = true
          e.stopPropagation()
        } else {
          this.show = false
        }
      },

      clicked (route, id) {
        this.show = false
        this.$router.push({
          name: route,
          params: { id: id },
          activeClass: 'v-link-active',
          exact: true
        })
      }
    }
  }
</script>
