<template lang="pug">
  .page.settings.specials.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#specials-settings"'
    aria-labelledby = 'tab-scoped-3__item'
    role = 'tabpanel'
  )
    .vui-container--x-large
      p.vui-text-longform.vui-m-bottom--large Please add an upcoming program for your station, and click submit for Videa to review.
      p Fields marked #[sup *] are required
      .vui-m-bottom--large
        table.vui-table.vui-no-row-hover
          thead
            tr
              th Program Name #[sup *]
              th Air Date #[sup *]
              th Time Period #[sup *]
              th Notes
          tbody
            tr(
              v-for = 'special in specials'
            )
              td
                fieldset.vui-form-element
                  .vui-form-element__control
                  input.vui-input(
                    type = 'text'
                  )
              td
                form
                  fieldset.vui-form-element
                    .vui-form-element__control.vui-m-right--small
                      vui-datepicker#fromDate(
                        v-model = 'airDate'
                        name = 'airDate'
                        style = 'white-space: normal'
                      )
              td
                fieldset.vui-form-element
                  .vui-form-element__control
                    input.vui-input(
                      type = 'text'
                    )
              td
                fieldset.vui-form-element
                  .vui-form-element__control
                    input.vui-input(
                      type = 'text'
                    )
      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--brand(
          @click.prevent = ''
        ) Submit
</template>

<script>
  import moment from 'moment'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newpassword: '',
        activeTab: '#specials-settings',
        newProgram: {},
        specials: [
          {
            name: 'Electronic Music Awards Show',
          },
          {
            name: 'Nascar: Charlotte',
          },
          {
            name: 'MLB: Braves v Nationals',
          },
          {
            name: 'Empire Finale',
          },
          {
            name: 'American Idol Series Finale Night 1',
          }
        ],
        airDate: new Date(moment().toISOString()),
        searchKey: ''
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

      addNewProgram (program) {
        this.specials.push(program)
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
