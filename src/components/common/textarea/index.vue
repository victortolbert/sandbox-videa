<template lang="pug">
  //- .vui-form-element(class='vui-has-error')
  //-   label.vui-form-element__label(for='id')
  //-     abbr.vui-required(title='required') *
  //-     | {{ name }}
  //-   .vui-form-element__control.vui-has-divider--bottom(v-if='readOnly')
  //-     .vui-form-element__static.vui-text-longform
  //-       p {{ value }}
  //-   .vui-form-element__control.vui-clearfix(v-else)
  //-     textarea.vui-textarea(
  //-       v-model = 'value'
  //-       id='id'
  //-       rows='6'
  //-       required='required'
  //-       disabled='disabled'
  //-       placeholder='placeholder'
  //-     )
  //-     .vui-form-element__help.vui-float--right {{ characterCount }} characters remaining

  .vui-form-element(v-bind:class="hasError ? 'vui-has-error': ''")
    label.vui-form-element__label(for='textarea-input-01')
      abbr.vui-required(v-if='required', title='required') *
      |  {{ label }}
    .vui-form-element__control(:class="this.readOnly ? 'vui-has-divider--bottom' : ''")
      .vui-form-element__static.vui-text-longform(v-if='readOnly')
        p {{ value }}
      textarea.vui-textarea(
        v-if = '!readOnly'
        v-bind:disabled = 'disabled'
        v-bind:placeholder = 'placeholder'
        v-model = 'value'
      )
    .vui-form-element__help(v-if='required') This field is required
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      hideLabel: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'Text Input'
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
      },
      icon: {
        type: String,
        default: 'search'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      hasIconRight: {
        type: Boolean,
        default: false
      },
      hasError: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
        default: 'This field is required'
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getIcon () {
        return this.hasError ? 'warning' : this.icon
      },
      characterCount () {
        return 0
      },
      classObject () {
        return {
          'vui-input-has-icon vui-input-has-icon--left': this.hasIcon,
          'vui-input-has-icon vui-input-has-icon--right': this.hasIcon && this.hasIconRight,
          'vui-has-divider--bottom': this.readOnly
        }
      }
    }
  }
</script>
