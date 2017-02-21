<template lang="pug">
  .examples
    vui-panel
      ul
        li(v-for='example in examples')
          a(
            v-bind:href = 'example.path'
          ) {{ example.path }}
    vui-panel
      component-a
      component-b
      parent
      vui-widget
        h1(
          slot = 'header'
        ) This is the main title
        p I will go in the unnamed slot!

      a(
        href = "paparazzi:(width=2500,height=600)http://localhost:8082/"
      ) Test Paparazzi URL

      keep-alive
        component(
          v-bind:is = 'selected'
        )

      vui-button(
        @buttonClick = 'selected = "appBlack", labelColor = "#000000"'
        primary
      ) Black Label

      vui-button(
        @buttonClick = 'selected = "appWhite", labelColor = "#ffffff"'
      ) White Label

      input(
        type = 'color'
        v-model = "labelColor"
        defaultValue = '#ff0000'
      )
</template>

<script>
  import Vue from 'vue'

  import { EventBus } from '~plugins/event-bus'

  import btn from '~components/buttons/button'
  import appBlack from '~components/black'
  import appWhite from '~components/white'
  import parent from '~components/parent'

  let ComponentA = Vue.extend({
    template: '<p>ComponentA</p>',
    created () {
      EventBus.listen('thatEvent', () => {
        console.log('Event received')
      })
    }
  })

  let ComponentB = Vue.extend({
    template: '<p>ComponentB</p>',
    created () {
      EventBus.fire('thatEvent')
      console.log('Event emitted.')
    }
  })

  export default {
    name: 'examples',

    metaInfo: {
      title: 'Examples',
    },

    components: { btn, appBlack, appWhite, parent, ComponentA, ComponentB },

    data () {
      return {
        examples: require('~models/examples'),
        selected: 'appBlack',
        labelColor: '#000000'
      }
    },

    methods: {
      toggleGrid () {
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
