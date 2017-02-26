<template lang="pug">
  selectize(v-model='selected', :settings='settings')
    option(:value='1') One
    option(:value='2') Two
</template>

<script>
  import Selectize from 'vue2-selectize'

  export default {
    components: {
      Selectize
    },

    data () {
      return {
        settings: { }, // https://github.com/selectize/selectize.js/blob/master/docs/usage.md
        selected: 1
      }
    }
  }
</script>

<style lang="stylus">
  @import "~selectize/dist/css/selectize.bootstrap3.css"
</style>
