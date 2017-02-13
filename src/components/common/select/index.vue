<template lang="pug">
  .vui-form-element(sclass='vui-has-error')
    label.vui-form-element__label(for='id')
      abbr.vui-required(
        v-if = 'required'
        title = 'required'
      ) *
      | {{ label }}
    .vui-form-element__control
      .vui-select_container
        select.vui-select(
          id='id'
          v-bind:value = 'value'
          v-on:input = 'updateSelectedOption'
          v-bind:disabled = 'disabled'
          smultiple=''
        )
          option(value='-1') Select
          option(
            v-for='option in options'
            v-bind:value='option'
          ) {{ option }}
    .vui-form-element__help.vui-float--right(v-if='required') This field is required
</template>
<script>
  export default {
    props: {
      value: {
        type: String
      },
      label: {
        type: String
      },
      id: {
        type: String
      },
      options: {
        type: Array
      },
      disabled: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    // data () {
    //   return {
    //     selectedOption: -1
    //   }
    // }
    computed: {
      selectionOption () {

      }
    },
    methods: {
      updateSelectedOption (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
