<template lang="pug">
  main.main
    article.article
      h2.article__headline Photos

      carousel-3d
        slide(v-for='(slide, i) in slides', :index='i')
          h1 {{ slide.title }}
          p {{ slide.desc }}

</template>

<script>
  export default {
    data () {
      return {
        slides: [
          {
            title: 'Slide 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
            src: 'http://placehold.it/360x270'
          },
          {
            title: 'Slide 2',
            desc: 'Lorem ipsum dolor sit amet ',
            src: 'http://placehold.it/360x270'
          },
          {
            title: 'Slide 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            src: 'http://placehold.it/360x270'
          },
          {
            title: 'Slide 4',
            desc: 'Lorem ipsum dolor sit amet,  Enim, maxime.',
            src: 'http://placehold.it/360x270'
          },
          {
            title: 'Slide 5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
            src: 'http://placehold.it/360x270'
          }
        ]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'morehouse1987'
    }
  }
</script>
