<template lang="pug">
.example
  span(v-el:trigger='')
    slot
  div(v-el:popover='', v-if='show', style='display:block;', :class="['tooltip',placement]", :transition='effect')
    .tooltip-arrow
    .tooltip-inner
      slot(name='content')
</template>

<script>
  import PopoverMixin from '~utils/popover-mixins'

  export default {
    mixins: [PopoverMixin],
    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      effect: {
        type: String,
        default: 'scale'
      }
    }
  }
</script>

<style lang="stylus">
  .tooltip.top,
  .tooltip.left,
  .tooltip.right,
  .tooltip.bottom
    opacity: 0.9
  .fadein-enter
    animation: fadein-in 0.3s ease-in
  .fadein-leave
    animation: fadein-out 0.3s ease-out
  @keyframes
    0%
      opacity: 0
    100%
      opacity: .9
  @keyframes
    0%
      opacity: .9
    100%
      opacity: 0
</style>
