<template lang="pug">
  .vui-grid.vui-grid--align-end
    input.vui-button.vui-button--secondary.vui-m-right--xx-small(
      @click='showRejectDialog = true'
      v-bind:disabled='!canBeRejected'
      type='button'
      value='⇧  ⌥ ⌫ ⌦ ⌘ Reject Offer'
    )
    input.vui-button.vui-button--brand(
      @click='acceptOffer()'
      v-bind:disabled='!canBeAccepted'
      type='button'
      value='Accept Offer'
    )
</template>

<script>
  export default {
    props: {
      canBeAccepted: {
        type: Boolean,
        default: false
      },

      canBeRejected: {
        type: Boolean,
        default: false
      },

      showRejectDialog:  {
        type: Boolean,
        default: false
      }
    },

    methods: {
      acceptOffer () {}
    }
  }
</script>
