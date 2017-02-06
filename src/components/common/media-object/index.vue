<template lang="pug">
  .vui-media
    .vui-media__body
      p.vui-align-middle
        span.vui-m-right--xx-small {{ label }}
        span.vui-text-heading--medium
          slot
</template>

<script>
  export default {
    props: ['label']
  }
</script>
