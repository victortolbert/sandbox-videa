<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Transfer Open Preempt(s)
    .modal-body
      h4.vui-text-heading--small.vui-m-bottom--medium Title
      form
        fieldset.vui-form-element
          label.vui-form-element__label(
            for = 'from-date'
          ) Due back
          .vui-form-element__control
            datepicker#from-date(
              v-bind:value = 'fromDate'
              name = 'fromDate'
            )
        fieldset.vui-form-element
          label.vui-form-element__label(
            for = ''
          )

        fieldset.vui-form-element.vui-m-bottom--large
          label.vui-form-element__label Internal comments for station and Videa only
          .vui-form-element_control
            textarea.vui-textarea

        fieldset
          button.vui-button.vui-button--brand.vui-m-right--xx-small Send Transfer
          button.vui-button.vui-button--secondary.vui-m-right--xx-small Recall Transfer
          button.vui-button.vui-button--neutral Cancel
</template>

<script>
  export default {
    props: ['show'],

    data () {
      return {
        fromDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
      }
    }
  }
</script>
