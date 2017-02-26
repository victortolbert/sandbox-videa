<!-- https://bkzl.github.io/vue-fraction-grid/ -->
<template lang="pug">
  container
    grid(vertical='middle', :rwd="{compact: 'stack'}")
      grid-item(size='1/6', :rwd="{compact: '0/1'}")
        .vui-box.vui-theme--shade ...
      grid-item(size='3/6', :rwd="{compact: '1/1'}")
        .vui-box.vui-theme--shade ...
      grid-item(size='2/6', :rwd="{compact: '1/1'}")
        .vui-box.vui-theme--shade ...
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'fraction-grid-example',

    metaInfo: {
      title: 'Example / Fraction Grid',
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
