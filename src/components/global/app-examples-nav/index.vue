<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          vui-dropdown(
            v-bind:items = 'examplesMenuItems'
            text = 'Examples'
          )
</template>

<script>
  export default {
    data () {
      return {
        examplesMenuItems: require('~models/examples')
      }
    }
  }
</script>
