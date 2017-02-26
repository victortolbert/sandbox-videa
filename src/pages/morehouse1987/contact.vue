<template lang="pug">
  main.main
    article.article
      h2.article__headline Contact
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'morehouse1987'
    }
  }
</script>
