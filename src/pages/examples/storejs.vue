<!-- https://github.com/marcuswestin/store.js -->
<template lang="pug">
  vui-title test
</template>

<script>
  // var storejs = require('store')
  // console.dir(storejs)

  // storejs.set('user', { name:'Marcus' })
  // storejs.get('user').name == 'Marcus'

  export default {
    data: () => ({
      foo: 'bar'
    }),
    computed: {
      user () {
        // return storejs.get('user')
      }
    },

    created () {
      // storejs.set('user', { name:'Marcus' })
    }
  }
</script>
