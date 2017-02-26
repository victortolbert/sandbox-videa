<template lang="pug">
.example
  flickity(ref='flickity', :options='flickityOptions')
    .carousel-cell 1
    .carousel-cell 2
    .carousel-cell 3
    .carousel-cell 4
    .carousel-cell 5

  // if you don't want to use the buttons Flickity provides
  button(@click='previous()') Custom Previous Button
  button(@click='next()') Custom Next Button
</template>

<script>
  import Flickity from 'vue-flickity'

  export default {
    components: { Flickity },

    data () {
      return {
        flickityOptions: {
          initialIndex: 3,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true

          // any options from Flickity can be used
        }
      }
    },

    methods: {
      next () {
        this.$refs.flickity.next()
      },

      previous () {
        this.$refs.flickity.previous()
      }
    }
  }
</script>
