<template lang="pug">
  .example
    vui-panel.vui-m-top--large
      button(
        v-on:click = 'clickHandler'
        class = 'vui-button vui-button--neutral'
      ) Sweet Alert
</template>

<script>
  export default {
    name: 'sweetalert-example',

    metaInfo: {
      title: 'Example / Sweet Alert',
    },

    methods: {
      clickHandler () {
        this.$swal('hello')
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
