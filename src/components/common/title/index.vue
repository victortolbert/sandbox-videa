<template lang="pug">
  h1.vui-text-heading--large.vui-m-bottom--medium
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
