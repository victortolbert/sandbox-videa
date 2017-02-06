<template lang="pug">
  span {{ Math.round(cpp) | formatMoney }}
</template>

<script>
  export default {
    props: ['rate', 'rating'],

    computed: {
      cpp () {
        return this.rate / this.rating
      }
    }
  }
</script>
