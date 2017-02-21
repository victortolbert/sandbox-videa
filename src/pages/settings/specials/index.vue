<template lang="pug">
  .page.settings.specials.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#specials-settings"'
    aria-labelledby = 'tab-scoped-3__item'
    role = 'tabpanel'
  )
    .vui-container--large
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
              v-for = 'n in 4'
            )
              td
                input.vui-input(value='TODO: Add Behavior')
              td: input.vui-input
              td: input.vui-input
              td: input.vui-input
      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--brand(
          v-bind:disabled = 'true'
          v-on:click.prevent = ''
        ) Submit
</template>

<script>
  export default {
    name: 'specials-settings',

    metaInfo: {
      title: 'Specials Settings'
    },

    data () {
      return {
        newpassword: '',
        activeTab: '#specials-settings',
        airDate: new Date(),
        newProgram: {}
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
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    }
  }
</script>
