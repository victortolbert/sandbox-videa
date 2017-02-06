<template lang="pug">
  .om-popup-container.modal-mask.modal-transition.vui-scrollable--y(
    v-show = 'show'
    show = 'isShowDialog'
    on-hide-modal = 'hideDialog'
  )
    .ng-modal-overlay(
      @click = 'showModal'
    )
    .ng-modal-dialog(
      v-bind:style = 'dialogStyle'
    )
      .ng-modal-dialog-content
        .modal-container.ng-scope(
          style = 'width: auto; margin: 1.5rem 2rem'
        )
          .modal-header.vui-m-bottom--large
            h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
              span(
                ng-bind = 'popUpdata.header'
              )
              span.pointer.vui-icon_container.vui-m-right--x-small(
                @click = 'hideDialog'
                title = 'Close'
              )
                //- svg.vui-icon.vui-icon-text-default(aria-hidden='true', style='fill:#fff')
                //-   use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/assets/icons/utility-sprite/svg/symbols.svg#close')
                span.vui-assistive-text Close
          .modal-body
            .vui-box.vui-wrap.vui-theme--default.vui-m-bottom--small
            .vui-grid.vui-grid--align-end
              input.vui-button.vui-button--secondary.vui-m-right--xx-small(
                @click = 'showRejectDialog'
                v-bind:disabled = '!canBeRejected'
                type = 'button'
                value = 'Reject Offer'
              )
              input.vui-button.vui-button--brand(
                @click = 'acceptOffer'
                v-bind:disabled = '!canBeAccepted'
                type = 'button'
                value = 'Accept Offer'
              )
          makegoods-offers-reject-offer-popup(
            open-popup = 'showRejectDialog'
            reject-offer = 'rejectOffer'
          )
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        canBeAccepted: true,
        canBeRejected: true,
        isShowDialog: false
      }
    },
    computed: {
      dialogStyle () {
        return {}
      }
    },
    methods: {
      showModal () {},
      acceptOffer () {},
      hideDialog () {},
      showRejectDialog () {}
    }
  }
</script>
