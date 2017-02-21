<template lang="pug">
  .silver
    banner(:actions='exampleActions')
</template>

<script>
  import Banner from '~components/banner.vue'

  export default {
    name: 'banner-example',

    metaInfo: {
      title: 'Example / Banner',
    },

    components: { Banner },

    data () {
      return {
        exampleActions: [
          { label: 'Getting Started', url: 'http://videa.design', primary: true },
          { label: 'Components', url: 'http://videa.design/components/' }
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .silver
    background-color #eee
</style>

