<template lang="pug">
  .page.settings.display.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#display-settings"'
    aria-labelledby = 'tab-scoped-3__item'
    role = 'tabpanel'
  )
    form.vui-container--medium
      .vui-grid.vui-grid--align-spread
        .vui-col.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2.vui-p-right--xx-large
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(
              for = 'stationAudienceShare'
            ) Station Share Goal
            .vui-form-element__control
              input#stationAudienceShare.vui-input(
                v-model = 'stationAudienceShare'
                type = 'text'
              )
            .vui-form-element__help Format xx.xx%
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(
              for = 'numberOfTableRows'
            ) Default number of table rows
            .vui-form-element__control
              .vui-select_container
                select#numberOfTableRows.vui-select
                  option 25
        .vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(
              for = 'primaryDemographic'
            ) Primary Demographic
            .vui-form-element__control
              .vui-select_container
                select#primaryDemographic.vui-select
                  option A25-54

          legend.vui-form-element__label Additional Demographics

          .vui-grid.vui-grid--align-spread.vui-p-around--x-large
            div(
              v-for = "demoGroup in demographics"
            )
              fieldset.vui-form-element.vui-m-bottom--small(
                v-for = 'value in demoGroup'
              )
                .vui-form-element__control(
                  v-for = 'item in value'
                )
                  label.vui-checkbox
                    input(
                      v-bind:checked = 'item.checked'
                      id = 'checkbox-01'
                      name = 'options'
                      type = 'checkbox'
                    )
                    span.vui-checkbox--faux
                    span.vui-form-element__label {{ item.group }}
      .vui-form-element
        button.vui-button.vui-button--brand.vui-m-right--xx-small(
          @click.prevent = ''
        ) Save
        button.vui-button.vui-button--neutral(
          @click.prevent = ''
        ) Cancel
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newpassword: '',
        stationAudienceShare: '0.31',
        activeTab: '#display-settings',
        demographics: require('../demos.json'),
        demographics2: [
          {
            'teen': [
              {
                group: '12+',
                checked: false
              },
              {
                group: '12-17',
                checked: false
              },
              {
                group: '12-20',
                checked: false
              }
            ]
          },
          {
            'young-adult': [
              {
                group: '18+',
                checked: false
              },
              {
                group: '18-24',
                checked: false
              },
              {
                group: '18-34',
                checked: true
              },
              {
                group: '18-49',
                checked: true
              },
              {
                group: '18-54',
                checked: false
              },
              {
                group: '18-64',
                checked: false
              }
            ]
          },
          {
            'adult': [
              {
                group: '21+',
                checked: false
              },
              {
                group: '21-24',
                checked: false
              },
              {
                group: '21-34',
                checked: false
              },
              {
                group: '21-49',
                checked: false
              },
              {
                group: '21-54',
                checked: false
              },
              {
                group: '21-64',
                checked: false
              },
              {
                group: '25-49',
                checked: true
              },
              {
                group: '25-54',
                checked: true
              },
              {
                group: '25-64',
                checked: false
              }
            ]
          },
          {
            'older-adult': [
              {
                group: '35+',
                checked: false
              },
              {
                group: '35-54',
                checked: false
              },
              {
                group: '35-64',
                checked: false
              }
            ]
          },
          {
            'senior': [
              {
                group: '50+',
                checked: false
              },
              {
                group: '55+',
                checked: false
              },
              {
                group: '65+',
                checked: false
              }
            ]
          }
        ]
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
