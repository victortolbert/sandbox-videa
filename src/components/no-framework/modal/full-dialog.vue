<template lang="pug">
  modal(:showmodal='showModal', :closeaction='closeAction')
    h1(slot='header') Full Dialog
    span(slot='body')
      | Not such a
      strong fool!
    div(slot='footer')
      button(@click='clickAction') Start again
</template>

<script>
  import Modal from '~components/no-framework/modal'

  export default {
    props: ['showModal', 'closeAction', 'clickAction'],
    components: { Modal }
  }
</script>

<style scoped>
</style>
