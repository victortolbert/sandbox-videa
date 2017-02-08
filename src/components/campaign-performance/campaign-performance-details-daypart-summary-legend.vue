<template lang="pug">
  .vui-text-align--center
    .vui-box--border.vui-text-align--center.vui-show--inline-block.vui-size--2-of-3.vui-form-element__helper
      .campaign-performance-legend
        span.vui-m-right--medium Metered
        span.vui-m-right--medium
          vui-icon.vui-m-right--x-small(
            name = 'stop'
            style = 'color: #3B7F36'
          )
          | ≥ 95%
        span.vui-m-right--medium
          vui-icon.vui-m-right--x-small(
            name = 'stop'
            style = 'color: #F58220'
          )
          | 80%-94%
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
