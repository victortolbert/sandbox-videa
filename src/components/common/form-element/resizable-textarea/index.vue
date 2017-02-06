<!-- <resizable-textarea text="ctrl.makegood.comment" initial-height="140" width="200"> -->
<template lang="pug">
  .resizable(
    r-directions = "['bottom', 'right']"
    r-height = 'initialHeight'
    resizable = ''
    style = 'height: 140px'
  )
    textarea.vui-textarea(
      v-bind:disabled = 'isDisabled'
      v-bind:readonly = 'isReadonly'
      v-bind:required = 'isRequired'
      v-model = 'text'
      name = ''
    )
    .rg-bottom
      span
    .rg-right
      span
</template>

<script>
  export default {
    props: {
      text: String,
      isReadonly: {
        type: [Boolean, String],
        default: false
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    }
  }
</script>
