<template lang="pug">
  cleave.vui-input(
    placeholder = 'Enter your credit card number'
    v-bind:options='{ creditCard: true }'
  )
</template>

<script>
  import Cleave from 'vue-cleave'

  export default {
    components: {
      Cleave
    }
  }
</script>
