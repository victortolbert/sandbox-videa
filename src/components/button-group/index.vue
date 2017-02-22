<template lang="pug">
  div(
    v-bind:class = '{ "btn-group": buttons, "btn-group-justified": justified, "btn-group-vertical": vertical }'
    v-bind:data-toggle = 'buttons && "buttons"'
  )
    slot
</template>

<script>
  export default {
    props: {
      buttons: { default: true },
      justified: { type: Boolean, default: false },
      type: { type: String, default: 'default' },
      value: { default: null },
      vertical: { type: Boolean, default: false }
    },

    data () {
      this._btnGroup = true
      return {
        val: this.value
      }
    },

    watch: {
      val (val) {
        this.$emit('input', val)
      }
    }
  }
</script>
