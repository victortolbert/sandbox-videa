<template lang="pug">
  vui-device Content
</template>

<script>
  export default {
    name: 'device-example',

    metaInfo: {
      title: 'Example / Device'
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
