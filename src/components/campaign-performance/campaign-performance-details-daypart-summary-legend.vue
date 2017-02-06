<template lang="pug">
  .campaign-performance-legend
    span.vui-m-right--medium Metered
    span.vui-m-right--medium
      vui-icon.vui-m-right--x-small(
        name = 'stop'
        style = 'color: #3B7F36'
      )
      | ≥ 90%
    span.vui-m-right--medium
      vui-icon.vui-m-right--x-small(
        name = 'stop'
        style = 'color: #F58220'
      )
      | 80%-89%
    span.vui-m-right--medium
      vui-icon.vui-m-right--x-small(
        name = 'stop'
        style = 'color: #C5103D'
      )
      | ≤ 79%
</template>

<script>
  export default {
    props: {
      campaign: {
        type: Object
      }
    }
  }
</script>
