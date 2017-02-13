<template lang="pug">
  button.vui-button(
    v-bind:class='[classes]'
    disabled='disabled'
  )
    svg.vui-button__icon.vui-button__icon--left(aria-hidden='true')
      use(
        xlink:href="/static/shared/icons/utility-sprite/svg/symbols.svg#download"
      )
    slot
    svg.vui-button__icon.vui-button__icon--right(aria-hidden='true')
      use(
        xlink:href="/static/shared/icons/utility-sprite/svg/symbols.svg#download"
      )
</template>

<script>
  export default {
    computed: {
      classes () {
        return 'vui-button--brand'
      },
      // inputSize () {
      //   return !this.size || this.size === `default` ? `` : `form-control-${this.size}`
      // }
    }
  }
</script>
