<template lang="pug">
  modal(
    v-bind:show = 'show'
    v-bind:on-close = 'close'
    size = 'large'
  )
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Reject Offer
    .modal-body
      fieldset.vui-form-element.vui-m-bottom--large
        label.vui-form-element__label(
          for = 'reject-order-notes'
        ) Seller comments about why this offer is being rejected
        .vui-form-element__control
          textarea#reject-order-notes.vui-textarea

      .vui-text-align--right
        button.vui-button.vui-button--brand.vui-m-right--x-small(
          @click.prevent = 'close'
        ) Send Offer Rejection
        button.vui-button.vui-button--neutral(
          @click.prevent = 'close'
        ) Close
</template>

<script>
  export default {
    props: ['show'],

    data () {
      return {
        comment: '',
        expirationDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      }
    }
  }
</script>
