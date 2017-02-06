<template lang="pug">
  td {{ status }}
  td
    span(
      v-bind:style = '{ width: decimalToPercent(percentComplete), backgroundColor: setBackgroundColor(percentComplete)}'
    ) {{ formattedPercentComplete }}
</template>

<script>
  export default {
    props: ['status', 'percentComplete'],

    data () {
      return {
      }
    },

    computed: {
    },

    methods: {
      setBackgroundColor (percent) {
        if (percent >= 0.96) return 'ahead'
        if (percent >= 0.87) return 'on-track'
        return 'behind'
      },

      decimalToPercent () {
        return (this.percentComplete * 100).toFixed(0) + '%'
      }

    }
  }
</script>

