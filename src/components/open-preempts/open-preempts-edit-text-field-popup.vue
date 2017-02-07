<template lang="pug">
  .modal-mask.modal-transition(v-show='show', show='isShowEditNotesDialog', hide-modal='hideDialog')
    .ng-modal-overlay(@click='showModal')
    .ng-modal-dialog(:style='dialogStyle')
      .ng-modal-dialog-content
        .modal-container.modal-container--xx-large
          .modal-header.vui-m-bottom--large
            h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
              div Open Preempt Note
              span.pointer.vui-icon_container.vui-m-right--x-small(@click='hideDialog')
                vui-icon(name='close')
          .modal-body
            form(novalidate='', @submit='')
              .filter-validation.vui-theme--shade.error
                ul.vui-p-top--xxx-small
                  li
                    //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
                    | Note should be no more than 255 characters
              .vui-form-element.vui-m-bottom--large
                .vui-form-element__control
                  textarea.vui-textarea(v-model='text', style='height: 300px', name="'note'", maxlength='255')
              .vui-grid.vui-grid--align-end
                input.vui-button.vui-button--neutral.vui-m-right--x-small(type='button', value='Close', @click='hideDialog')
                input.vui-button.vui-button--brand(type='submit', value='Save')
</template>

<script>
  export default {
    props: [ 'show', 'text' ],
    data () {
      return {

      }
    },
    methods: {
      showModal () {},
      hideDialog () {}
    },
    computed: {
      dialogStyle () {}
    }
  }
</script>
