<template>
  <div>
    <image-modal :visible="true" transition="roll">
      <p class="image is-4by3">
        <img src="http://placehold.it/1280x960">
      </p>
    </image-modal>
    <card-modal :visible="true" :title="title" transition="zoom">
      <div class="content has-text-centered">
        <img :src="src" height="120" alt="Vue Admin">
      </div>
    </card-modal>
  </div>
</template>

<script>
import { Modal, ImageModal, CardModal } from '~components/modal'

export default {
  components: {
    Modal,
    ImageModal,
    CardModal
  },
  data () {
    return {
      title: 'The Modal',
      src: 'http://placehold.it/1280x960'
    }
  }
}
</script>
