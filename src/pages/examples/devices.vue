<template lang="pug">
  vui-device Content
</template>

<script>
  export default {
    name: 'devices-example',

    metaInfo: {
      title: 'Example / Devices'
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
