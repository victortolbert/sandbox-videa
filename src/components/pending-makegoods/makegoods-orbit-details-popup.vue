<template lang="pug">
  .modal-mask.modal-transition(
    v-show = 'show'
    show = 'isShowDialog'
  )
    .ng-modal-overlay(
      @click = 'showModal'
    )
    .ng-modal-dialog(
      v-bind:style = 'dialogStyle'
    )
      .ng-modal-dialog-content
        .modal-container(
          style = 'width: 1200px'
        )
          .modal-header.vui-m-bottom--large
            .modal-header.ng-modal-header
              h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
                div Orbit Details
                a(
                  @click = 'hideDialog'
                )
                  span.pointer.vui-icon_container.vui-m-right--x-small(
                    title = 'description of icon when needed'
                  )
                    vui-icon(name='delete')
          .modal-body
            div
              .filter-validation.vui-theme--shade.error.vui-m-bottom--large(
                v-if = '!isOrbitDetailsFound'
              )
                ul.vui-p-top--xxx-small
                  li
                    //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
                    | No results found. Please try again.
              .vui-m-bottom--large
                .vui-grid.vui-grid--pull-padded
                  .vui-col--padded
                    .vui-scrollable--y(
                      style = 'max-height: 480px'
                    )
                      makegoods-orbit-details-popup-grid(
                        items = 'items'
                      )
            .vui-grid.vui-grid--align-end
              input.vui-button.vui-button--neutral(
                @click = 'hideDialog'
                type = 'button'
                value = 'Cancel'
              )
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        canBeAccepted: true,
        canBeRejected: true,
        isShowDialog: false,
        isOrbitDetailsFound: true
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
