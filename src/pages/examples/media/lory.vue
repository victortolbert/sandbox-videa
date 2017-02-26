<template lang="pug">
  lory(:options='{ enableMouseEvents: true, infinite: 1 }')
    item 1
    item 2
    item 3
    item 4
    item 5
    item 6
    prev(slot='actions')
    next(slot='actions')

</template>

<script>
  import { Lory, Item, Prev, Next } from 'vue-lory'

  export default {
    components: {
      Lory,
      Item,
      Prev,
      Next
    }
  }
  </script>
