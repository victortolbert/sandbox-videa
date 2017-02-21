<template lang="pug">
  div
    span.tooltip-trigger(ref='trigger')
      slot
    div(class="['tooltip','fade','in',tooltipAlignment]", ref='tooltip')
      .tooltip-inner
        .tooltip-arrow
        .tooltip-content
          span(v-html='text', v-if='text')
          .tooltip-content-wrapper
            slot(name='content', v-if='!text')

</template>

<script>
  export default {
    replace: true,
    computed: {}
  }
</script>
