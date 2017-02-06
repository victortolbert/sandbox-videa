<template lang="pug">
  .rejected-offer-dialog-container.modal-mask.modal-transition(
    v-show = 'show'
    show = 'isShowDialog'
    hide-modal = 'hideDialog'
  )
    .ng-modal-overlay(
      @click = 'showModal'
    )
    .ng-modal-dialog(
      v-bind:style = 'dialogStyle'
    )
      .ng-modal-dialog-content
        .modal-container.modal-container--xx-large
          .modal-header
            .ng-modal-header
              h3.vui-text-heading--medium Dayparts Requested By Buyer
          .modal-body
            .fixed-header-grid(
              style = 'display: flex; flex-direction: column; position: relative; height: 100%'
            )
              div(
                style = 'overflow: hidden; flex: 0 0 auto; width: 0px'
              )
                table.vui-table.vui-table--fixed-layout(
                  style = 'position: relative'
                )
                  thead
                    tr
                      th
                        vui-sorting-column(
                          column-name = 'daypartColumn'
                          current-sorting = 'sorting'
                          sorting-changed = 'sortingChanged(column)'
                          title = ''
                        )
              .vui-scrollable(
                style = 'flex: 0 1 auto'
              )
                table.vui-table.vui-table--fixed-layout
                  tbody
            fieldset.vui-form-element
              input.vui-button.vui-button--neutral(
                @click = 'hideDialog'
                type = 'button'
                value = 'Cancel'
              )
</template>
