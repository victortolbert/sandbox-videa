<template lang="pug">
  .home
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'login'
    }
  }
</script>
