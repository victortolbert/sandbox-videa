<template lang="pug">
  .child
    p Look, there's a slot below me!
    slot(
      v-bind:text = 'defaultSlotText'
    )
    slot(
      name = 'literally-the-best'
      v-bind:text = 'namedSlotText'
    )
</template>

<script>
  export default {
    data: () => ({
      defaultSlotText: 'I\'ll get rendered inside the default slot.',
      namedSlotText: 'I\'ll get rendered inside the *best* slot.'
    })
  }
</script>
