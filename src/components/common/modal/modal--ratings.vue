<template lang="pug">
  .modal2
    p
      slot
      .body {{ ratings }}
    button(@click = '$emit("close")') close
</template>

<script>
  export default {
    props: ['ratings']
  }
</script>
