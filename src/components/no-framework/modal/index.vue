<template lang="pug">
  div(:class='containerClass')
    div(:class='{ modal: true, in: showModal}', :style="{ display: showModal ? 'block' : 'none' }")
      .modal-dialog
        .modal-content
          .modal-header(v-if='this.$slots.header || closeAction')
            //- button.close(@click='closeAction') x
            slot(name='header')
          .modal-body(v-if='this.$slots.body')
            slot(name='body')
          .modal-footer(v-if='this.$slots.footer')
            slot(name='footer')
    div(:class="{'modal-backdrop': showModal, in: showModal}")
</template>

<script>
  export default {
    props: {
      showModal: Boolean,
      closeAction: Function,
      containerClass: String
    }
  }
</script>

<style scoped>

</style>
