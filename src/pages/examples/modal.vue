<template lang="pug">
  .modal-example
    button#show-modal(@click='showModal = true') Show Modal
    // use the modal component, pass in the prop
    modal(v-if='showModal', @close='showModal = false')
      //
        you can use custom content here to overwrite
        default content
      h3(slot='header') custom header
</template>

<script>
  import modal from '~components/common/modal/modal'

  export default {
    name: 'modal-example',

    metaInfo: {
      title: 'Example / Modal',
    },

    components: {
      modal
    },

    data () {
      return {
        showModal: false
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
