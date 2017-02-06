<template lang="pug">
  span {{ Math.round(cpm) | formatMoney }}
</template>

<script>
  export default {
    props: ['rate', 'impressions'],

    computed: {
      cpm () {
        return this.rate / this.impressions
      }
    }
  }
</script>
