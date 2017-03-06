<template lang="pug">
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
          { label: 'Components', url: 'http://videa.design/components/' },
          { label: 'Getting Started  →', url: 'http://videa.design', primary: true }
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .silver
    background-color #eee
</style>

