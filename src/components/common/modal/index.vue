<template lang="pug">
  // http://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/
  .modal-mask(@click='$emit("close")' transition='modal')
    .modal-container(@click.stop='', :class="{ 'modal-container--xx-large': size, 'class-b': isB }")
      slot
</template>

<script>
  export default {
    props: [
      'onClose',
      'size',
      'isB'
    ],

    mounted () {
      document.addEventListener('keydown', (event) => {
        if (this.show && event.keyCode === 27) {
          this.onClose()
        }
      })
    }
  }
</script>

