<template lang="pug">
  .modal-mask.modal-transition(
    size = 'large'
  )
    .ng-modal-overlay(v-on:click='showModal')
    .ng-modal-dialog(v-bind:style='dialogStyle')
      .ng-modal-dialog-content
        .modal-container(style = 'width: 1600px; height: 700px')
          .modal-header.vui-m-bottom--large
            h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
              span Order eBiz History
              span.pointer.vui-icon_container.vui-m-right--x-small(
                @click = 'hideDialog'
                title = 'Close'
              )
                vui-icon(name='delete')
          .modal-body(
            cg-busy = 'dataPromise'
          )
            .vui-tabs--scoped.details-tabs-header-container
              ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(
                role = 'tablist'
              )
                li.vui-tabs--scoped__item.vui-text-heading--label(
                  v-bind:class = '{ "vui-active": currentTab === tabs.transactionHistory }'
                )
                  a.vui-tabs--scoped__link(
                    @click = 'changeTab(tabs.transactionHistory)'
                    v-text = 'tabs.transactionHistory'
                  ) Transaction History
                li.vui-tabs--scoped__item.vui-text-heading--label(
                  v-bind:class = '{ "vui-active": currentTab === tabs.revisionHistory }'
                )
                  a.vui-tabs--scoped__link(
                    @click = 'changeTab(tabs.revisionHistory)'
                    v-text = 'tabs.revisionHistory'
                  ) Revision History
            .table.vui-tabs--scoped__content.vui-p-around--x-large(
              style = 'height: 500px; overflow-y: auto'
            )
              makegoods-ebiz-history-grid(
                v-show = 'currentTab === tabs.transactionHistory'
                is-show-delnotes = 'isShowDelnotes'
                items = 'transactionHistoryItems'
              )
              makegoods-revision-history-grid(
                v-show = 'currentTab == tabs.revisionHistory'
                is-order-type-impression = 'isOrderTypeImpression'
                items = 'revisionHistoryItems'
              )
            .vui-grid.vui-grid--pull-padded.vui-grid--vertical-align-end
              .vui-col--padded
                .vui-grid.vui-grid--align-end
                  label.vui-checkbox(
                    v-show = 'currentTab === tabs.transactionHistory'
                  )
                    input.vui-input(
                      v-model = 'isShowDelnotes'
                      type = 'checkbox'
                    )
                    span.vui-checkbox--faux
                    span.vui-form-element__label Show Delivery Notifications
                  input.vui-button.vui-button--neutral(
                    @click = 'hideDialog'
                    type = 'button'
                    value = 'Close'
                  )
</template>
