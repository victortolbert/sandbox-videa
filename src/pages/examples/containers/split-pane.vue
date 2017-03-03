<template lang="pug">
  .split-pane
    section(slot='left') Left Pane
    section(slot='right') Right Pane
</template>

<script>
  import SplitPane from 'vue-split-pane'

  export default {
    components: { SplitPane }
  }
</script>
