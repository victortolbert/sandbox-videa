<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-top--medium.ng-scope
    a.vui-show(
      @click='goBack'
    )
      vui-icon(name = 'arrow-circle-left')
      span.vui-align-middle
        | Back to
        | Order Reporting
    a(
      href='',
      scroll-to-top=''
      style = 'cursor: pointer; visibility: visible'
    )
      | Back to Top
      vui-icon(name = 'arrow-circle-up')
</template>

<script>
  export default {
    methods: {
      goBack () {

      }
    }
  }
</script>
