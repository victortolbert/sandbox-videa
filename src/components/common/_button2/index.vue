<!-- https://blog.codeminer42.com/building-scalable-client-side-components-615e472e7106 -->
<template lang="pug">
  button.vui-button(:class='"vui-button--" + type')
    slot
</template>

<script>
  export default {
    props: {
      buttonType: {
        type: String,
        default: 'button',
        validator (value) {
          return ['button', 'submit', 'reset'].includes(value)
        }
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return ['default', 'primary', 'link'].includes(value)
        }
      },
      shape: {
        type: String,
        validator (value) {
          return ['full', 'circle'].includes(value)
        }
      },
      size: {
        type: String,
        default: 'medium',
        validator (value) {
          return ['small', 'medium', 'large'].includes(value)
        }
      },
      icon: String,
      disabled: Boolean,
      loading: Boolean,
      autofocus: Boolean,
      action: {
        default: () => {},
        type: Function
      }
    },
    computed: {
      classes () {
        return {
          btn: true,
          [`btn-${this.type}`]: this.type,
          [`btn-${this.shape}`]: this.shape,
          [`btn-${this.size}`]: this.size,
          'btn-disabled': this.isDisabled,
          'btn-loading': this.loading
        }
      },
      isDisabled () {
        return this.disabled || this.loading
      },
      iconClass () {
        return `icon icon-${this.icon}`
      }
    }
  }
</script>
