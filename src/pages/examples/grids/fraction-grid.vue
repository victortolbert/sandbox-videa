<!-- https://bkzl.github.io/vue-fraction-grid/ -->
<template lang="pug">
  container
    grid(:rwd='{ compact: "stack" }' vertical='middle')
      grid-item(:rwd='{ compact: "0/1" }' size='1/6')
        .vui-box.vui-theme--shade
          vui-subtitle 1/6, hide when compact (415px)

      grid-item(:rwd='{ compact: "1/1" }' size='3/6')
        .vui-box.vui-theme--shade
          vui-subtitle 3/6, full width when compact
          p.longform Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse vitae rem magnam quasi iusto quia molestiae, quas? Hic facere esse, nam accusantium aut quam neque magni beatae, voluptate debitis.

      grid-item(:rwd='{ compact: "1/1" }' size='2/6')
        .vui-box.vui-theme--shade
          vui-subtitle 2/6, full width when compact
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
