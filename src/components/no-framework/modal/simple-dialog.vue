<template>
  <modal :showModal="showModal" :closeAction="closeAction">
    <h1 slot="header">Simple Dialog</h1>
    <span slot="body">
      Hello <strong>simple!</strong>
    </span>
  </modal>
</template>

<script>
  import Modal from '~components/no-framework/modal'

  export default {
    props: ['showModal', 'closeAction'],
    components: { Modal }
  }
</script>
