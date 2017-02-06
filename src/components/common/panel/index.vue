<template lang="pug">
  .vui-panel.vui-m-bottom--large
    .vui-panel__heading.vui-grid.vui-grid--align-spread
      h2.vui-panel__title.vui-align-middle {{ title }}
    .vui-panel__body
      slot
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'View Selection'
      }
    },

    data () {
      return {
        label: 'View Selection Panel'
      }
    }
  }
</script>
