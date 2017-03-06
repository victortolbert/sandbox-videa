<!-- https://blog.codeminer42.com/building-scalable-client-side-components-615e472e7106 -->
<template lang="pug">
  button(
    @click='this.$emit("click")',
    :class='[classObj]',
    :disabled='disabled'
  )
    icon(
      v-if='iconName',
      :class='[iconClassObj]',
      :name='iconName'
    )
    slot Submit
    icon(
      v-if='iconName && iconRight',
      :name='iconName'
    )
</template>

<script>
  export default {
    props: require('./props'),

    data: () => ({
      isActive: true,
      error: null
    }),

    computed: {
      classObject () {
        return {
          [`${this.prefix}button`]: this.prefix,
          [`${this.prefix}button--${this.type}`]: this.type,
          [`${this.prefix}button--${this.size}`]: this.size,
          'text-danger': this.error && this.error.type === 'fatal',
          'active': this.isActive && !this.error
        }
      },

      inputSize () {
        return !this.size || this.size === `default`
          ? ``
          : `form-control-${this.size}`
      },

      isDisabled () {
        return this.disabled || this.loading
      },

      iconClass () {
        return `icon icon-${this.icon}`
      }
    },

    methods: {
      onButtonClick () {
        this.$emit('onButtonClick')
      }
    },
  }
</script>
