<template lang="pug">
  .campaign-performance-delivery-indicator
    span(v-if='value') {{ value | decimalToPercent }}
    span.vui-float--left(v-else) N/A
</template>

<script>
  export default {
    props: {
      value: {
        type: [String, Boolean, Number],
        default: null
      }
    }
  }
</script>
