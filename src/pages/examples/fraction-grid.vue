<!-- https://bkzl.github.io/vue-fraction-grid/ -->
<template lang="pug">
  grid
    grid-item(size = '1/3')
      .vui-box.vui-theme--shade 1/3

    grid-item(size = '2/3')
      .vui-box.vui-theme--shade 2/3
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'fraction-grid-example',

    metaInfo: {
      title: 'Example / Fraction Grid',
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
