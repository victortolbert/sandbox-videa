<template lang="pug">
  .componentName
    slot ⇧  ⌥ ⌫ ⌦ ⌘

</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import props from './props'

  var WPAPI = require( 'wpapi' )
  var wp = new WPAPI({ endpoint: 'http://wp.videa.design/wp-json' })

  export default {
    name: 'componentName',

    metaInfo: { title: 'componentName' },

    props,

    data: () => ({ foo: 'bar' }),

    computed: { },

    watch: {
      status(newVal, oldVal) { }
    },

    methods: { },

    beforeCreate () { },

    created () {
      wp.posts()
        .then(data => {})
        .catch(err => {})
    },

    beforeMount () { },

    mounted () { },

    updated () { },

    beforeDestroy () { },

    destroyed () { },

    components: {  }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .componentName

</style>
