<!-- https://github.com/AStaroverov/vue-toast -->
<template lang="pug">
  .example

    button.vui-button.vui-button--brand(
      v-on:click = 'showTime'
      type = 'button'
      name = 'button'
    ) Show Time

    vui-subtitle Options of component
    label
      input.vui-input(
        v-model = 'maxToasts'
        type = 'text'
      )
      | maxToasts
    br
    label
      input.vui-input(
        v-model = 'position'
        type = 'text'
      )
      | position

    hr

    vui-subtitle Options of toast
    label
      input.vui-input(
        v-model = 'theme'
        type = 'text'
      )
      | theme
    br
    label
      input.vui-input(
        v-model = 'timeLife'
        type = 'text'
      )
      | timeLife
    br

    vui-checkbox(
      label = 'End User Outage'
    )

    label
      input(
        v-model = 'closeBtn'
        type = 'checkbox'
      )
      | closeBtn

    hr

    vue-toast(
      ref = 'toast'
    )
</template>

<script>
  import 'vue-toast/dist/vue-toast.min.css'
  import VueToast from 'vue-toast'

  export default {
    name: 'vue-toast-example',

    metaInfo: {
      title: 'Example / Vue Toast',
    },

    components: { VueToast },

    data () {
      return {
        maxToasts: 6,
        position: 'top right',
        theme: 'error',
        timeLife: 3000,
        closeBtn: false,
      }
    },

    watch: {
      'delayOfJumps': 'resetOptions',
      'maxToasts': 'resetOptions',
      'position': 'resetOptions'
    },

    methods: {
      resetOptions () {
        this.$refs.toast.setOptions({
          delayOfJumps: this.delayOfJumps,
          maxToasts: this.maxToasts,
          position: this.position
        })
      },
      showTime () {
        this.$refs.toast.showToast(new Date, {
          theme: this.theme,
          timeLife: this.timeLife,
          closeBtn: this.closeBtn
        })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    },

    mounted () {
      this.resetOptions()
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/variables'

  // color-success: hsla(153, 94%, 27%, 1)
  // color-error: hsla(2, 58%, 48%, 1)
  // color-warn: hsla(33, 100%, 68%, 1)

  .vue-toast-manager_container.\--top
      top 4px
  .vue-toast_container._default .vue-toast_message
    background-color rgba(0,0,0, .9)

  .vue-toast_container._info .vue-toast_message
    background-color rgba(49,112,143, .9)

  .vue-toast_container._success .vue-toast_message
    background-color hsla(153, 94%, 27%, 1)

  .vue-toast_container._warning .vue-toast_message
    background-color hsla(33, 100%, 68%, 1)

  .vue-toast_container._error .vue-toast_message
    background-color hsla(2, 58%, 48%, 1)

</style>
