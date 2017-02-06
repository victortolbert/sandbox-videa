<template lang="pug">
  .page.settings.premium-advertisers.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#premium-advertisers"'
    aria-labelledby = 'tab-scoped-3__item'
    role = 'tabpanel'
  )
    h2.vui-text-heading--medium.vui-m-bottom--medium Premium Advertisers
    p.vui-text-longform.vui-m-bottom--large Manage your premium advertisers. Premium clients will be affected by the premium pricing on the price guide.

    form.vui-form--inline.vui-m-bottom--large
      fieldset.vui-form-element
        label.vui-form-element__label(
          for = 'search'
        )
        .vui-form-element__control
          input#search.vui-input(
            placeholder = 'Search'
            style = 'width: 24rem'
            type = 'text'
          )
      fieldset.vui-form-element
        button.vui-button.vui-button--brand(
          type = 'submit'
        ) Search

    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Agency
            th Client
            th.vui-text-align--center Premium
        tbody
          tr(
            v-for = 'client in account.clients'
          )
            td {{ client.agency }}
            td {{ client.advertiser }}
            td.vui-text-align--center
              label.vui-checkbox
                input#checkbox-01(
                  v-bind:checked = 'client.premium'
                  name = 'options'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newpassword: '',
        activeTab: '#premium-advertisers',
        account: {
          clients: [
            {
              agency: 'Zone Group Advertising',
              advertiser: 'Papa John\'s Pizza',
              premium: true
            },
            {
              agency: 'Auto Advertising Partners',
              advertiser: 'Southeast Ford',
              premium: true
            },
            {
              agency: 'Vanthrop and Associates',
              advertiser: 'Community Loans, Inc.',
              premium: true
            },
            {
              agency: 'The Media Masters Group',
              advertiser: 'Metro Wireless',
              premium: true
            },
            {
              agency: 'Huges-Martin Agency',
              advertiser: 'Piedmont Healthcare',
              premium: false
            },
            {
              agency: 'Mullberry Way Group',
              advertiser: 'Sun Valley Bank',
              premium: true
            }
          ]
        }
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>
