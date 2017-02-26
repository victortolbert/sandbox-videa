<!-- https://github.com/alessiomaffeis/vue-picture-input -->
<template lang="pug">
  .hello
    picture-input(
      ref='pictureInput'
      @change='onChange'
      width='600'
      height='600'
      margin='16'
      accept='image/jpeg,image/png'
      size='10'
      buttonclass='btn'
    )

</template>

<script>
  import PictureInput from 'vue-picture-input'

  export default {
    name: 'app',
    data () {
      return {
      }
    },

    components: {
      PictureInput
    },

    methods: {
      onChange () {
        console.log('New picture selected!')
        if (this.$refs.pictureInput.image) {
          console.log('Picture loaded.')
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
