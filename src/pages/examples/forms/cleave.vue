<template lang="pug">
  cleave(placeholder="Enter your credit card number", :options="{ creditCard: true }")
</template>

<script>
  import Cleave from 'vue-cleave'

  export default {
    components: {
      Cleave
    }
  }
</script>
