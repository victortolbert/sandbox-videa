<template lang="pug">
  handsontable(v-bind:data='data' v-bind:settings='{}')
</template>

<script>
  import Handsontable from 'vue-Handsontable'

  export default {
    components: {
      Handsontable
    },

    data () {
      return {
        data: [
          ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
          ['2008', 10, 11, 12, 13],
          ['2009', 20, 11, 14, 13],
          ['2010', 30, 15, 12, 13]
        ]
      }
    }
  }
</script>
