<!-- https://blog.codeminer42.com/building-scalable-client-side-components-615e472e7106 -->
<template lang="pug">
  //- button.vui-button(
  //-   v-bind:class='[classes]'
  //-   disabled='disabled'
  //- )
  //-   svg.vui-button__icon.vui-button__icon--left(aria-hidden='true')
  //-     use(
  //-       xlink:href="/static/shared/icons/utility-sprite/svg/symbols.svg#download"
  //-     )
  //-   slot
  //-   svg.vui-button__icon.vui-button__icon--right(aria-hidden='true')
  //-     use(
  //-       xlink:href="/static/shared/icons/utility-sprite/svg/symbols.svg#download"
  //-     )

  //- button.vui-button(
  //-   @click = 'buttonClick'
  //-   v-bind:class = '"vui-button--" + type'
  //- )
  button.vui-button(
    @click = 'buttonClick'
    v-bind:class = '[ primary ? "vui-button--brand" : "vui-button--neutral" ]'
  )
    slot Submit
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

      // primary: {
      //   type: Boolean,
      //   default: false
      // },

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

    methods: {
      buttonClick () {
        this.$emit('buttonClick')
      }
    },

    computed: {
      // classes () {
      //   return 'vui-button--brand'
      // },

      // inputSize () {
      //   return !this.size || this.size === `default` ? `` : `form-control-${this.size}`
      // },

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
