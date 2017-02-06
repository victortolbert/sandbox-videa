<template lang="pug">
  .makegoods-add-bonus-offer-view
    ui-title KOKI 06/27/2016 - 09/25/2016
    ui-subtitle Order Information - Credit
    makegoods-order-details-info(
      order-info = 'orderInfo'
    )
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        | Credit
      fieldset.vui-form-element
        input.vui-button.vui-button--brand(
          @click = 'transfer'
          v-bind:disabled = '!canTransfer'
          disabled = 'disabled'
          type = 'button'
          value = 'Transfer to MediaOps'
        )
        input.vui-button.vui-button--secondary.vui-m-right--xx-small(
          @click = 'save'
          v-bind:disabled = '!canSave'
          type = 'button'
          value = 'Save'
        )
        //- close-button
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs(
        role = 'tablist'
      )
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(
          role = 'presentation'
        )
          a.vui-tabs--scoped__link(
            href = ''
          ) Makegood
    div(
      role = 'tabpanel'
    )
      .vui-p-around--large.vui-tabs--scoped__content(
        ng-form = 'makegoodForm'
      )
        .vui-grid.vui-m-bottom--x-large
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label.black-text.disabled Makegood comments
              .vui-form-element__control
                resizable-textarea(
                  initial-height = '140'
                  text = 'makegood.comment'
                  width = '200'
                )
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline
            .vui-col.vui-size--2-of-3.vui-m-top--large
              makegoods-total-grid(
                makegood = 'makegood'
                order-buy-type = 'orderInfo.orderBuyType'
                preempts-name = "'Credit s'"
              )
            .vui-form-element.vui-col.vui-size--1-of-3.vui-m-left--x-large.vui-m-top--medium
              label.vui-form-element__label Classification:
              .vui-form-element__control
                makegoods-classification-dropdown(
                  value = 'makegood.classification'
                )
        .vui-scrollable(
          style = 'height: 12rem'
        )
          makegoods-preempts-grid(
            is-edit-mode = 'true'
            item-selection-changed = 'selectedPreemptsChanged'
            items = 'allMakegoodPreempts'
            order-buy-type = 'orderInfo.orderBuyType'
          )
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    methods: {
      canTransfer () {

      },
      transfer () {

      },
      canSave () {

      },
      save () {

      }
    }
  }
</script>
