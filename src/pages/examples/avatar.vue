<template lang="pug">
  .home
    vui-well
      vui-avatar
</template>

<script>
  export default {
    name: 'avatar-example',

    metaInfo: {
      title: 'Example / Avatar',
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
