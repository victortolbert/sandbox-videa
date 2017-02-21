<template lang="pug">
  main.main
    article.article
      h2.article__headline Resources
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
