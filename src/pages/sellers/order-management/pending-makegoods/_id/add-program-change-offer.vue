<template lang="pug">
  .makegoods-add-program-change-offer-view
    ui-title KOKI 06/27/2016 - 09/25/2016
    ui-subtitle Order Information - Credit
    makegoods-order-details-info(
      order-info = 'orderInfo'
    )
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        | Program Name Change
      fieldset.vui-form-element
        input.vui-button.vui-button--brand(
          @click = 'transfer'
          v-bind:disabled = '!canTransfer'
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
          ) Program Name Change
    div(
      role = 'tabpanel'
    )
      .vui-p-around--large.vui-tabs--scoped__content
        form.vui-grid(
          ng-form = 'makegoodForm'
        )
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label Makegood comments:
              .vui-form-element__control
                resizable-textarea(
                  initial-height = '60'
                  text = 'makegood.comment'
                )
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline.vui-p-top--medium
            .vui-form-element.vui-float--left
              label.vui-form-element__label Classification:
              .vui-form-element__control
                makegoods-classification-dropdown(
                  value = 'makegood.classification'
                  width = '300'
                )
        .vui-grid.vui-m-top--small(
          ng-form = 'programChangeForm'
        )
          .vui-grid.vui-col.vui-p-right--medium
            .vui-large-size--3-of-5
              .vui-form-element
                label.vui-form-element__label New program name:
                .vui-form-element__control
                  input.vui-input(
                    v-model = 'newProgramName'
                    maxlength = '50'
                    name = 'newProgramName'
                    required = ''
                    type = 'text'
                  )
              .vui-form-element
                label.vui-form-element__label MG comment:
                .vui-form-element__control
                  input.vui-input(
                    v-model = 'mgComment'
                    type = 'text'
                  )
            .vui-large-size--2-of-5.vui-text-align--right
              .vui-form-element
                label.vui-form-element__label.vui-size--2-of-3 Effective from:
                .vui-form-element__control.vui-float--right.vui-size--2-of-3
                  //- vui-date-picker(offers-makegoods-effective-from-validator='orderInfo', v-model='effectiveFrom', min-date='orderInfo.startDate', max-date='effectiveThrough')
              .vui-form-element.vui-clear
                label.vui-form-element__label.vui-size--2-of-3 Effective through:
                .vui-form-element__control.vui-float--right.vui-size--2-of-3
                  //- vui-date-picker(v-model='effectiveThrough', min-date='orderInfo.startDate')
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-m-top--large
            .program-change-container.vui-fieldset.vui-dropdown--large
              .vui-fieldset-header.vui-text-align--center
                label Only enter if Days/Times changed:
              .vui-grid.vui-grid--align-space.vui-p-top--medium.vui-p-bottom--x-small
                .vui-form-element
                  label.vui-form-element__label Days:
                  .vui-form-element__control.dropdown-container.days-dropdown-selector(
                    style = 'width: 8rem'
                  )
                    //- vui-multiselect-dropdown(items='dayItems')
                .vui-form-element
                  label.vui-form-element__label Start Time:
                  .vui-form-element__control
                    //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='startTime')
                .vui-form-element
                  label.vui-form-element__label End Time:
                  .vui-form-element__control
                    //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='endTime')
        .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
          .vui-col--padded.vui-align-middle
            h4.vui-text-heading--small Select Program line(s) to change
          .vui-col--padded
            button.vui-button.vui-button--brand(
              @click = 'addSpots'
              type = 'button'
            )
              icon.vui-m-right--xx-small.vui-align-middle(
                name = 'plus-circle'
              ) Add Spot(s)
        div(
          style = 'height: 15rem'
        )
          makegoods-program-name-change-lines-grid(
            order-buy-type = 'orderInfo.orderBuyType'
            is-edit-mode = 'true'
            items = 'orderItems'
          )
        .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
          .vui-col--padded.vui-align-middle
            h4.vui-text-heading--small New Program MG Spots Offered
          .vui-col--padded
            button.vui-button.vui-button--brand(
              @click = 'removeSpots'
              type = 'button'
            )
              icon(
                name = 'plus-circle'
              ) Delete Spot(s)
        div(
          style = 'height: 12rem'
        )
          makegoods-offer-spots-grid(
            items = 'makegood.offers'
            order-buy-type = 'orderInfo.orderBuyType'
            transaction-type = 'transactionType'
          )
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newProgramName: '',
        mgComment: ''
      }
    },
    methods: {
      addSpots () {

      },
      removeSpots () {

      },
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
