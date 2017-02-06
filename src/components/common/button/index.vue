<template lang="pug">
  button.vui-button(
    @click = 'buttonClick'
    v-bind:class = '[ primary ? "vui-button--brand" : "vui-button--neutral" ]'
  )
    slot Submit
</template>

<script>
  export default {
    props: {
      primary: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      buttonClick () {
        this.$emit('buttonClick')
      }
    }
  }
</script>
