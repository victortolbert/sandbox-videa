<template lang="pug">
  .email-thread
    vui-panel
      email
      email-thread
</template>

<script>
  import EmailThread from '~components/email-thread'
  import Email from '~components/_forms/email'

  export default {
    name: 'email-thread-example',

    metaInfo: {
      title: 'Example / Email Thread',
    },

    components: { EmailThread, Email },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
