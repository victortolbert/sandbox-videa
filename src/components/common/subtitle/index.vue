<template lang="pug">
  p.vui-text-heading--small.vui-m-bottom--medium
    slot
</template>

<script>
  export default {
    props: [ 'title' ],

    data () {
      return {
      }
    }
  }
</script>
