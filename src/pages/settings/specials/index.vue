<template lang="pug">
  .page.settings.specials.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#specials-settings"'
    aria-labelledby = 'tab-scoped-3__item'
    role = 'tabpanel'
  )
    .vui-container--medium
      p.vui-text-longform.vui-m-bottom--large Please add an upcoming program for your station, and click submit for Videa to review.
      p Fields marked #[sup *] are required
      .vui-scrollable--x.vui-m-bottom--large
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
              td {{ special.name }}
              td {{ special.airDate }}
              td
              td
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newpassword: '',
        activeTab: '#specials-settings',
        airDate: new Date(),
        newProgram: {},
        specials: [
          {
            name: 'Electronic Music Awards Show',
            airDate: '04/23/16'
          },
          {
            name: 'Nascar: Charlotte',
            airDate: '05/29/16'
          },
          {
            name: 'MLB: Braves v Nationals',
            airDate: '05/21/16'
          },
          {
            name: 'Empire Finale',
            airDate: '05/25/16 '
          },
          {
            name: 'American Idol Series Finale Night 1',
            airDate: '04/05/16'
          },
          {
            name: 'American Idol Series Finale Night 2',
            airDate: '04/06/16'
          },
          {
            name: 'American Idol Series Finale Night 3',
            airDate: '04/07/16'
          },
          {
            name: 'Gotham Season Finale',
            airDate: '05/23/16'
          },
          {
            name: 'Fox Premiere Boxing',
            airDate: '04/30/16'
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
