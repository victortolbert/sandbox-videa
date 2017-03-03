<template lang="pug">
  .makegoods-add-makegood-offer-view
    vui-title Order Information - Offers

    makegoods-order-details-info(v-bind:orderId = 'id')

    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span {{ $store.state.stationCallLetters }} Details

      fieldset.vui-form-element
        input.vui-button.vui-button--brand.vui-m-right--x-small(
          @click = 'transfer'
          v-bind:disabled = '!canTransfer'
          type = 'button'
          value = 'Transfer to MediaOps'
        )
        input.vui-button.vui-button--brand.vui-m-right--x-small(
          @click = 'viewGuidlines'
          type = 'button'
          value = 'Guidelines'
        )
        input.vui-button.vui-button--secondary.vui-m-right--xx-small(
          @click = 'save'
          v-bind:disabled = '!canSave'
          type = 'button'
          value = 'Save'
        )
        input.vui-button.vui-button--neutral(
          @click.prevent = 'closeWindow'
          v-bind:disabled = '!canSave'
          type = 'button'
          value = 'Close'
        )

    // Tab Label
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(role='presentation')
          a.vui-tabs--scoped__link(href='')  {{ $route.params.offer || 'Makegood' }}

    //
    div(role='tabpanel')
      form.vui-p-around--large.vui-tabs--scoped__content

        // Offer type
        .vui-grid.vui-m-bottom--xx-large


          // Comments
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label Makegood comments
              .vui-form-element__control
                vui-resizable-textarea(initial-height='140' text='' width='200')

          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline

            // Totals
            .vui-col.vui-size--2-of-3.vui-m-top--large

              makegoods-total-grid(
                makegood = 'makegood'
                offers-name = '"Makegood(s)"'
                order-buy-type = 'orderInfo.orderBuyType'
                preempts-name = '"Pre-empt(s)"'
                show-difference = 'true'
              )

            // Classification
            .vui-form-element.vui-col.vui-size--1-of-3.vui-m-left--x-large
              label.vui-form-element__label Classification
              .vui-form-element__control
                .vui-select_container
                  select.vui-select(v-model='selectedClassification')
                    option(v-for='classification in classifications') {{ classification }}

        // Preempts
        .preempts-grid.vui-m-bottom--xx-large
          .vui-grid.vui-m-bottom--small
            h4.vui-text-heading--small.vui-align-middle.vui-m-right--large Pre-Empt(s)
            fieldset.vui-form-element.vui-align-middle
              label.vui-radio
                input(
                  v-model = 'isOnlySelectedPreemptsShown'
                  name = 'selectedPreemptsRadioGroup'
                  type = 'radio'
                  value = 'false'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label All Order Preempts

              label.vui-radio
                input(
                  v-model = 'isOnlySelectedPreemptsShown'
                  name = 'selectedPreemptsRadioGroup'
                  type = 'radio'
                  value = 'true'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Selected

          //- makegoods-preempts-grid(
          //-   is-edit-mode = 'true'
          //-   is-only-selected-preempts-shown = 'isOnlySelectedPreemptsShown'
          //-   item-selection-changed = 'selectedPreemptsChanged'
          //-   items = 'allOrderPreempts'
          //-   v-bind:order = 'order'
          //-   v-bind:order-line-items = 'orderLineItems'
          //-   order-buy-type = 'orderInfo.orderBuyType'
          //- )
          // Component
          .vui-scrollable--x.vui-m-bottom--large
            //- pre {{ orderLineItems }}
            table.vui-table.vui-no-row-hover.vui-table--fixed-layout.vui-table--compact.mg-preempts
              thead
                tr
                  th(v-if='isEditMode' style='width: 35px') Sel
                  th(style='width: 90px'): vui-sorting-column(title='Air Day')
                  th(style='width: 90px'): vui-sorting-column(title='Air Time')
                  th(v-bind:style='{ width: isEditMode ? "120px" : "110px" }' style='width: 120px'): vui-sorting-column(title='Program<br>Placed')
                  th(style='width: 65px'): vui-sorting-column(title='Buy<br>Line #')
                  th.vui-cell-wrap(style='width: 70px'): vui-sorting-column(title='Spot #')
                  th(style='width: 122px'): vui-sorting-column(title='Status')
                  th(style='width: 67px'): vui-sorting-column(title='Priority')
                  th(style='width: 103px'): vui-sorting-column(title='Air Date')
                  th(style='width: 55px'): vui-sorting-column(title='Len')
                  th.spot-allocation-column(style='width: 503px')
                    makegoods-spot-allocation-header
                  th(style='width: 90px'): vui-sorting-column(title='Spot<br>Rate')
                  th(v-if='isImpressionsBuyType' style='width: 90px'): vui-sorting-column(title='Buyer<br>IMP')
                  th(v-if='isEditMode' style='width: 90px'): vui-sorting-column(title = 'Buyer<br>CPP')
                  th(style = 'width: 120px') Comment
              tbody
                tr(v-for = 'preempt in preempts')
                  td.align-center(v-if='isEditMode' style='width: 35px')
                    .checkbox.vui-checkbox.checked(
                      changed = 'orderLineOnSelected'
                      ng-change-function = 'itemSelectionChanged'
                      value = 'preempt.isSelected'
                    )
                      span.icons
                      input(type='checkbox')

                  td.vui-truncate(v-bind:title = 'preempt.airDay' style = 'width: 90px') {{ preempt.airDay }}
                  td.vui-truncate(v-bind:title = 'preempt.airTime' style = 'width: 90px') {{ preempt.airTime }}
                  td.vui-truncate(v-bind:title = 'preempt.programName' style = 'width: 120px') {{ preempt.buyerProgramOrdered }}
                  td.vui-truncate.vui-text-align--right(
                    v-bind:title = 'preempt.lineNumber'
                    style = 'width: 65px'
                  ) {{ preempt.buyerLineNumber }}
                  td.vui-truncate.vui-text-align--right(
                    v-bind:title = 'preempt.spotNumber'
                    style = 'width: 70px'
                  )
                    span {{ preempt.stationSpotNumber }}
                  td.vui-truncate(
                    v-bind:title = 'preempt.status'
                    style = 'width: 122px'
                  ) {{ preempt.status }}
                  td.vui-truncate.vui-text-align--right(
                    v-bind:title = 'preempt.priority'
                    style = 'width: 67px'
                  ) {{ preempt.priority }}
                  td.vui-truncate(
                    v-bind:title = 'preempt.airDate'
                    style = 'width: 103px'
                  ) {{ preempt.airDate }}
                  td.vui-truncate.vui-text-align--center(
                    v-bind:title = 'preempt.spotLength'
                    style = 'width: 55px'
                  ) {{ preempt.length }}
                  td.spot-allocation-cell(
                    style = 'width: 503px'
                  )
                    makegoods-spot-allocation-with-missed-spots(
                      v-bind:spots = 'weeklySpotAllocations'
                    )
                  td.vui-truncate.vui-text-align--right(
                    v-bind:title = 'preempt.spotRate'
                    style = 'width: 90px'
                  ) {{ preempt.spotRate }}
                  td.vui-text-align--right(
                    v-bind:title = 'preempt.buyerImpressions'
                    style = 'width: 90px', v-if='isImpressionsBuyType'
                  ) {{ preempt.buyerImpressions }}
                  td.vui-text-align--right(
                    v-bind:title = 'preempt.buyerCppm'
                    style = 'width: 90px', v-if='isEditMode'
                  ) {{ preempt.buyerCppm }}
                  td(
                    style = 'width: 120px'
                  )
                    input.vui-input.vui-size--1-of-1(
                      v-bind:title = 'preempt.comment'
                      v-if = 'isEditMode'
                      v-model = 'preempt.comment'
                      type = 'text'
                    )
                    | {{ preempt.comment }}

        //- makegoods-common-avail-offer-grids-wrapper(
        //-   v-bind:order = 'order'
        //-   makegood-offers = 'makegood.offers'
        //-   offers-label = '"Makegood spot(s) offered"'
        //-   on-data-changed = 'offersChanged'
        //-   order-buy-type = 'orderInfo.orderBuyType'
        //-   order-info = 'orderInfo'
        //-   selected-preemt-spot-lengths-async = 'selectedPreemtSpotLengthsAsync'
        //- )
        // Component
        .offers-makegoods-common-avail-offer-grids-wrapper
          .makegood-spots-offered.vui-m-bottom--xx-large
            .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
              .vui-align-middle
                h4.vui-text-heading--small Makegood spot(s) offered
              .vui-align-middle

                button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='addSpotsColumn' type='button')
                  vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
                  | Add a week

                button.vui-button.vui-button--brand(@click='removeSpots' type='button')
                  vui-icon.vui-align-middle.vui-m-right--xx-small(name='minus-circle')
                  | Delete Spot(s)

            .vui-scrollable.offers-makegood-offered-spots-container(style='height: 14rem')
              //- makegoods-offered-spots-grid(items='makegoodOffers')
              // Component
              .vui-scrollable--x
                table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
                  thead
                    tr
                      th.vui-cell-wrap(style='width: 80px'): vui-sorting-column(title = 'Line #')
                      th(style='width: 110px'): vui-sorting-column(title='Days')
                      th(style='width: 105px'): vui-sorting-column(title='Start Time')
                      th(style='width: 105px'): vui-sorting-column(title='End Time')
                      th(style='width: 235px'): vui-sorting-column(title='Program')
                      th(style='width: 105px'): vui-sorting-column(title='Len')
                      th.vui-cell-wrap(style='width: 75px'): vui-sorting-column(title = 'Offered Spots')
                      //- style='width: 48px'
                      th.spot-allocation-column(style='width: 503px')
                        makegoods-spot-allocation-header(v-model='weeklySpotAllocations')
                      th(style='width: 100px'): vui-sorting-column(title='Station Rate')
                      th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Station IMP')
                      th(style = 'width: 90px'): vui-sorting-column(title='Station CPM')
                      th(style='width: 120px') Makegood #[br] Comment
                  tbody
                    tr(v-if='spotsOffered' v-for='(item, index) in spotsOffered')
                      td
                        .vui-form-element
                          label.vui-checkbox
                            input(
                              v-model = 'showUnmatchedSpotsOnly'
                              name = 'unmatchedSpots'
                              type = 'checkbox'
                              value = 'false'
                            )
                            span.vui-checkbox--faux
                            span.vui-form-element__label {{ index + 1 }}
                      td
                        .vui-form-element__control
                          .vui-select_container
                            select.vui-select
                              option MO-FR

                      td
                        .vui-form-element__control
                          .vui-select_container
                            select.vui-select
                              option 12:00 am
                      td
                        .vui-form-element__control
                          .vui-select_container
                            select.vui-select
                              option 12:00 am
                      td: input.vui-input(type='text', v-model='item.program')

                      //-  Len
                      td 30 s
                      //- Ordered Spots
                      td.vui-text-align--right
                      td.spot-allocation-column(style='width: 503px')
                        .spot-allocation-row
                          .spot-allocation-container.spot-allocation-data(style='width: 455px')
                            ul.spot-allocation(style='left: 0')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                              li
                                .editable-spot-value
                                  input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      td: input.vui-input.vui-text-align--right(type='text', v-model='item.spotRate')
                      td: input.vui-input.vui-text-align--right(type='text', v-model='item.buyerImp')
                      td
                      td: input.vui-input(type='text', v-model='item.makegoodComment')


                      //- td.vui-truncate.vui-text-align--center(style='width: 80px', title='1')
                      //-   .checkbox.vui-checkbox.ng-isolate-scope(value='item.isSelected')
                      //-     span.icons
                      //-       span.vui-checkbox-unchecked
                      //-         i.glyphicon.glyphicon-ok
                      //-       span.vui-checkbox-checked
                      //-         i.glyphicon.glyphicon-ok
                      //-     input(type='checkbox')
                      //-     label(ng-bind='text', ng-disabled='cbdisabled', ng-class="{'pull-left': labelOnLeft}", ng-style="labelOnLeft ? {'margin-right': '7px'} : {}")
                      //-   span.ng-binding(ng-bind='ctrl.getLineNumber(item)') 1
                      //- td.dropdown-container.days-dropdown-selector(style='width: 110px', title='MO-FR') {{ item.days }}
                      //- td.dropdown-container.time-dropdown-selector(style='width: 105px', title='12:00 am')
                      //- td.dropdown-container.time-dropdown-selector(style='width: 105px', title='12:00 am')
                      //- td.vui-truncate(style='width: 235px')
                      //-   input.vui-input.vui-size--1-of-1(type='text', v-model='item.programName', maxlength='50')
                      //- td.dropdown-container(style='width: 105px', title='30 s')
                      //-   select.vui-select(v-model='item.spotLength', ng-options='item.duration as item.name for item in lengthItems')
                      //-     option(label='5S', value='number: 5') 5S
                      //- td.vui-text-align--center(style='width: 75px') {{ item.totalSpots }}
                      //- td.spot-allocation-cell(style='width: 503px')
                      //-   vom-spot-allocation-editable(ng-model='item.spotAllocations', navigator='ctrl.spotAllocationNavigator', on-changed='ctrl.updateTotalSpots(item)')
                      //-     .spot-allocation-row
                      //-       .spot-allocation-container.spot-allocation-data(ng-style="{'width': vm.navigator.spotsWidth}", style='width: 455px;')
                      //-         ul.spot-allocation(ng-style="{'left': vm.navigator.left + 'px'}", style='left: 0px;')

                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //-           li
                      //-             .editable-spot-value
                      //-               input(type='number', min='0', max='99', step='1', vui-max-number='99')
                      //-           // end ngRepeat: spot in vm.spots
                      //- td.vui-text-align--right(style='width:100px', title='$0.00')
                      //-   span $
                      //-   input.vui-input.vui-text-align--right.ng-pristine.ng-untouched.ng-valid.ng-not-empty.ng-valid-min(style='width:88%', ng-model='item.spotRate', type='number', min='0', step='0.01', vui-max-number='999999.99', ng-change='offersChanged()')
                      //- td.vui-text-align--right(style='width:100px', v-if='ctrl.isImpressionsBuyType')
                      //-   input.vui-input.vui-text-align--right(v-model='item.videaImpressions' ng-change='offersChanged()', type='number', min='0', step='0.1')
                      //- td.vui-truncate.vui-text-align--right(style='width:90px', ng-bind='ctrl.getStationCppm(item)')
                      //- td(style='width:120px')
                      //-   input.vui-input.vui-size--1-of-1(type='text', ng-model='item.comment')


          .station-avails
            .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
              .vui-align-middle
                h4.vui-text-heading--small Station Avails
              .vui-align-middle
                button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='createSpots' type='button')
                  vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
                  | Create Spots
                button.vui-button.vui-button--brand(@click='addSpots' type='button')
                  vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
                  | Add Spot(s)

            makegoods-avails-filter(
              v-bind:order  = 'order'
              show-requested-dayparts = 'showRequestedDayparts'
            )


            div(style='height: 25rem')
              //- makegoods-avails-grid(
              //-   order-buy-type = 'orderBuyType'
              //-   items = 'availsItems'
              //-   v-bind:order-line-items = 'orderLineItems'
              //- )

              // Component
              //- .offers-makegoods-common-avail-offer-grids-wrapper
              //-   .makegood-spots-offered.vui-m-bottom--xx-large
              //-     .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
              //-       .vui-align-middle
              //-         h4.vui-text-heading--small Makegood spot(s) offered
              //-       .vui-align-middle

              //-         button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='addSpotsColumn' type='button')
              //-           vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
              //-           | Add a week

              //-         button.vui-button.vui-button--brand(@click='removeSpots' type='button')
              //-           vui-icon.vui-align-middle.vui-m-right--xx-small(name='minus-circle')
              //-           | Delete Spot(s)

              //-     .vui-scrollable.offers-makegood-offered-spots-container(style='height: 14rem')
              //-       makegoods-offered-spots-grid(items='makegoodOffers')
              //-   .station-avails
              //-     .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
              //-       .vui-align-middle
              //-         h4.vui-text-heading--small Station Avails
              //-       .vui-align-middle
              //-         button.vui-button.vui-button--neutral.vui-m-right--x-small(@click='createSpots' type='button')
              //-           vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
              //-           | Create Spots
              //-         button.vui-button.vui-button--brand(@click='addSpots' type='button')
              //-           vui-icon.vui-align-middle.vui-m-right--xx-small(name='plus-circle')
              //-           | Add Spot(s)

              //-     makegoods-avails-filter(
              //-       v-bind:order  = 'order'
              //-       show-requested-dayparts = 'showRequestedDayparts'
              //-     )

              //-     div(style='height: 25rem')
              //-       makegoods-avails-grid(
              //-         order-buy-type = 'orderBuyType'
              //-         items = 'availsItems'
              //-         v-bind:order-line-items = 'orderLineItems'
              //-       )
              //-     .vui-m-top--medium
              //-       label Found Avails Count:
              //-       span {{ availsCount }}

            .vui-m-top--medium
              label Found Avails Count:
              span {{ availsCount }}
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    name: 'pending-makegoods-id-offer',

    metaInfo: {
      title: 'Pending Makegood / Offer'
    },

    data () {
      return {
        // Preempts
        isEditMode: true,
        isImpressionsBuyType: true,
        preempts: require('~components/open-preempts/open-preempts.config').context.preempts,
        weeklySpotAllocations: require('~components/open-preempts/open-preempts.config').context.weeklySpotAllocations,
        spotsOffered: [],
        //
        availsCount: 0,


        id: this.$route.params.id,
        order: { },
        orderLineItems: [],
        isOnlySelectedPreemptsShown: true,
        mgComment: '',
        canTransfer: false,
        canSave: true,
        selectedClassification: 'Unknown',
        classifications: [
          'Unknown',
          'MG for Missed Spot',
          'MG for Programing Change',
          'MG for Live event schedule changes',
          'MK to fix schedule',
          'Technical difficulties',
          'Wrong or no copy',
          'Buyer request'
        ]
      }
    },

    // computed: {
    //   preempts () {
    //     return this.order.preempts
    //   }
    // },

    methods: {
      fetchOrder (id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      fetchOrderLineItems () {
        axios.get(`/orderLineItems`)
          .then((response) => {
            this.orderLineItems = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },


      addSpotsColumn () {},
      removeSpots () {},

      viewGuidlines () {
        alert('Sorry this feature has not been implemented')
      },

      createSpots () {
        this.spotsOffered.push(
          {
            lineNumber: 0,
            days: 'Testing'
          }
        )
      },

      addSpots () {},


      transfer () {},
      save () {},
      closeWindow () {
        window.close()
      }
    },

    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOrder(this.$route.params.id)
      this.fetchOrderLineItems()
    }
  }
</script>
