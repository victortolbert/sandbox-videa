<template lang="pug">
  input(
    @input = 'updateValue($event.target.value)'
    v-bind:value = 'value'
    type = 'text'
  )
</template>

<script>
  import Cleave from 'cleave.js'

  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        cleave: null
      }
    },

    methods: {
      updateValue (value) {
        this.$emit('input', value)
      }
    },
    mounted () {
      this.cleave = new Cleave(this.$el, this.options)
    },
    beforeDestroy () {
      this.cleave.destroy()
    }
  }
</script>
