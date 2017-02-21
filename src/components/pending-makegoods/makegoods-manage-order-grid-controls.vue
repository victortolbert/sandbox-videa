<template lang="pug">
  .vui-grid.vui-grid--align-start.vui-grid--vertical-align-center.vui-m-bottom--medium

    .vui-size--1-of-12
      ul
        li.row-padding
          a(href='', title='Click to open the Offer which has been sent and is awaiting approval', @click='showOfferDialog(item.makegoodId)')
            vui-icon(name='medicine-bottle')
          span Pending MG
        li.row-padding
          span.vui-text-link
            vui-icon(name = 'pencil-square')
          span.graft-mg-text Draft MG

    .vui-size--1-of-8
      .vui-fieldset.vui-display--inline-block
        .vui-fieldset-header
          label  Filter rows
        label.vui-radio.vui-display--block(for='view-all')
          input#view-all(name='missedRadioGroup', ng-model='isOnlyMissedShown', ng-value='false', type='radio', value='false')
          span.vui-radio--faux.vui-m-right--xxx-small
          span.vui-form-element__label View All
        label.vui-radio.vui-display--block(for='missed-only')
          input#missed-only(name='missedRadioGroup', ng-model='isOnlyMissedShown', ng-value='true', type='radio', value='true')
          span.vui-radio--faux.vui-m-right--xxx-small
          span.vui-form-element__label Missed Only

    .vui-size--4-of-12
      .vui-fieldset.vui-grid.vui-grid--align-start

        .vui-size--3-of-12.vui-align-middle
          input.vui-button.vui-button--secondary.vui-m-right--xx-small.ng-scope(type='button', value='Add Offer', ng-click='addButtonClicked()', vui-access='Admin, Seller, Rep, MediaOps', vui-access-permissions='EditMakegood')

        .vui-size--3-of-12
          label.vui-radio(for='make-good')
            input#make-good(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.makegood', type='radio', value='Makegood')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Makegood
          label.vui-radio(for='credit')
            input#credit(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.credit', type='radio', value='Credit')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Credit

        .vui-size--3-of-12
          label.vui-radio(for='r-bonus')
            input#r-bonus(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.bonus', type='radio', value='Bonus')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Bonus
          label.vui-radio(for='r-pgm-change')
            input#r-pgm-change.ng-pristine(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.programChange', type='radio', value='ProgramChange')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Pgm. Change

        .vui-size--3-of-12
          label.vui-radio(for='r-mg-preempts')
            input#r-mg-preempts(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.makegoodPlacedTrafficSpots', type='radio', value='MakegoodPlacedTrafficSpots')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label MG Preempts
          label.vui-radio(for='r-missed-spots')
            input#r-missed-spots(name='addButtonTypeRadioGroup', ng-model='addButtonType', ng-value='addButtonOptions.makegoodMissedSpots', type='radio', value='MakegoodMissedSpots')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Missed Spots

    .vui-size--1-of-12

    .vui-size--3-of-12.vui-align-top
      label.vui-checkbox
        input.vui-input(type='checkbox', ng-model='isShowSpotAllocations')
        span.vui-checkbox--faux
        span.vui-form-element__label Show Spot Allocations
      .clearfix.row-padding
</template>
