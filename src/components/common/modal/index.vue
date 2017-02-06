<template lang="pug">
  .modal-mask(
    @click = 'close'
    v-show = 'show'
    transition = 'modal'
  )
    .modal-container(
      @click.stop = ''
      v-bind:class = '{ "modal-container--xx-large": size }'
    )
      slot
</template>

<script>
  export default {
    props: [
      'show',
      'onClose',
      'size'
    ],

    methods: {
      close () {
        this.onClose()
      }
    },

    mounted () {
      document.addEventListener('keydown', (event) => {
        if (this.show && event.keyCode === 27) {
          this.onClose()
        }
      })
    }
  }
</script>

