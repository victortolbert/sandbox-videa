<template lang="pug">
  #avails-request
    vui-title Request Avails

    .primary-information.vui-m-bottom--xx-large
      .vui-grid.vui-grid--align-spread
        div
          h2.vui-text-heading--medium Primary Information
          p.vui-m-bottom--large Fields marked #[span.required *] are required
        .vui-text-align--right
          router-link.vui-m-right--xx-small.vui-button.vui-button--brand(
            v-bind:disabled = 'daypartMixTotal !== 100'
            v-bind:to = '{ name: "buyers-avails-request-summary" }'
            tag = 'button'
          ) Submit
          button.vui-button.vui-button--neutral Cancel

      .vui-box.vui-grid.vui-grid--align-spread.vui-theme--default
        // Client
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large.vui-m-bottom--large
          label.vui-form-element__label(
            for = 'client'
          ) Client #[span.required *]
          .vui-form-element__control
            .vui-select_container
              select#client.vui-select(
                v-model = 'selectedAdvertiser'
              )
                option
                option(
                  v-bind:value = 'advertiser.id'
                  v-for = 'advertiser in advertisers'
                ) {{ advertiser.name }}

        // Product
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          label.vui-form-element__label(
            for = 'product'
          ) Product #[span.required *]
          .vui-form-element__control
            input#product.vui-input(
              v-bind:disabled = '!selectedAdvertiser'
              type = 'text'
            )

        // Estimate
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          label.vui-form-element__label(
            for = 'product'
          ) Estimate #[span.required *]
          .vui-form-element__control
            input#estimate.vui-input(
              type = 'text'
            )

      .vui-box.vui-grid.vui-grid--align-spread.vui-theme--default
        // Campain Name
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          label.vui-form-element__label(
            for = 'campaign-name'
          ) Campaign Name
          .vui-form-element__control
            input#campaign-name.vui-input(
              type = 'text'
            )

        // Gender
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          legend.vui-form-element__label.vui-form-element__label--top Gender
          .vui-form-element__control.vui-grid
            label.vui-radio(
              for = 'male'
            )
              input#male(
                name = 'gender'
                type = 'radio'
              )
              span.vui-radio--faux
              span.vui-form-element__label Male
            label.vui-radio(
              for = 'female'
            )
              input#female(
                name = 'gender'
                type = 'radio'
              )
              span.vui-radio--faux
              span.vui-form-element__label Female
            label.vui-radio(
              for = 'persons'
            )
              input#persons(
                checked = 'true'
                name = 'gender'
                type = 'radio'
              )
              span.vui-radio--faux
              span.vui-form-element__label Persons
            label.vui-radio(
              for = 'household'
            )
              input#household(
                name = 'gender'
                type = 'radio'
              )
              span.vui-radio--faux
              span.vui-form-element__label HH

        // Age Range
        fieldset.vui-form-element.vui-size--1-of-3.vui-m-bottom--xx-large.vui-p-right--large
          label.vui-form-element__label(
            for = 'age-range'
          ) Age Range
          .vui-form-element__control
            #age-range

      .vui-box.vui-grid.vui-grid--align-spread.vui-theme--default
        // Market
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          label.vui-form-element__label(
            for = 'market'
          ) Market #[span.required *]
          .vui-form-element__control
            .vui-select_container
              select#markets.vui-select(
                v-model = 'selectedMarket'
              )
                option(
                  value = 'none'
                ) Select Market
                option(
                  value = 'atl'
                ) Atlanta
                option(
                  value = 'bos'
                ) Boston
                option(
                  value = 'was'
                ) Washington

        // Stations
        fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
          label.vui-form-element__label Stations #[span.required *]
          #stations(
            style = 'width: 450px; height: 10.75rem; overflow-y: scroll; border: 1px solid #d8dde6'
          )
            template(
              v-for = 'market in markets'
            )
              vui-checkbox-list(
                v-bind:items = 'market.stations'
                v-if = 'selectedMarket == market.id && market.id !== "none"'
              )

        // Spot Length
        fieldset.vui-form-element.vui-size--1-of-3
          legend.vui-form-element__label.vui-form-element__label--top Spot Length #[span.required *]
          .vui-grid
            .vui-form-element
              label.vui-checkbox(
                for = 'fiveSeconds'
              )
                input#fiveSeconds(
                  name = 'spotLengths'
                  type = 'checkbox'
                  v-bind:disabled = 'true'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 5S
            .vui-form-element
              label.vui-checkbox(
                for = 'tenSeconds'
              )
                input#tenSeconds(
                  name = 'spotLengths'
                  type = 'checkbox'
                  v-bind:disabled = 'true'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 10S
            .vui-form-element
              label.vui-checkbox(
                for = 'fifteenSeconds'
              )
                input#fifteenSeconds(
                  v-bind:disabled = 'false'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 15S
            .vui-form-element
              label.vui-checkbox(
                for = 'twentySeconds'
              )
                input#twentySeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 20S
            .vui-form-element
              label.vui-checkbox(
                for = 'thirtySeconds'
              )
                input#thirtySeconds(
                  v-bind:disabled = 'false'
                  checked = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 30S
            .vui-form-element
              label.vui-checkbox(
                for = 'fortyFiveSeconds'
              )
                input#fortyFiveSeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 45S
            .vui-form-element
              label.vui-checkbox(
                for = 'sixtySeconds'
              )
                input#sixtySeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 60S
            .vui-form-element
              label.vui-checkbox(
                for = 'seventyFiveSeconds'
              )
                input#seventyFiveSeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 75S
            .vui-form-element
              label.vui-checkbox(
                for = 'ninetySeconds'
              )
                input#ninetySeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 90S
            .vui-form-element
              label.vui-checkbox(
                for = 'oneHundredTwentySeconds'
              )
                input#oneHundredTwentySeconds(
                  v-bind:disabled = 'true'
                  name = 'spotLengths'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
                span.vui-form-element__label 120S

    .vui-grid.vui-grid--align-spread
      // Dayparts
      .dayparts.vui-m-bottom--large.vui-size--2-of-5.vui-p-right--large
        h2.vui-text-heading--medium.vui-m-bottom--medium Parameters #[span.required *]

        .vui-box(
          style = 'background-color: #ccc'
        )
          form.vui-form--inline(
            action = ''
          )
            label.vui-radio(
              for = 'cpp'
            )
              input#cpp.vui-m-right--x-small(
                checked = 'true'
                name = 'when'
                type = 'radio'
              )
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPP
            label.vui-radio.vui-m-right--large(
              for = 'cpm'
            )
              input#cpm(
                name = 'when'
                type = 'radio'
              )
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPM
            .vui-form-element
              label.vui-form-element__label(
                for = 'grossBudget'
              ) Gross Budget #[span.required *]
              .vui-form-element__control
                input#grossBudget.vui-input(
                  v-model = 'grossBudget'
                  style = 'width: 6rem; text-align: right'
                )
            .vui-form-element
              label.vui-form-element__label(
                for = 'grpGoal'
              ) GRP Goal
              .vui-form-element__control
                input#grpGoal.vui-input(
                  style = 'width: 6rem; text-align: right'
                  value = '0'
                )
        table.vui-table.vui-no-row-hover
          thead
            tr
              th Daypart
              th.u-width-medium Target #[br] CPP #[span.required *]
              th.u-width-medium Daypart #[br] Mix %#[span.required *]
              th.u-width-medium Target #[br] GRP
          tfoot
            tr
              td.vui-text-align--right #[b Total]
              td
              td.vui-text-align--right #[b {{ (daypartMixTotal > 0) ? daypartMixTotal : '' }}]
              td
          tbody
            tr(
              v-for = '(daypart, index) in dayparts'
            )
              td(
                v-bind:class = '(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""'
              ) {{ daypart.name }}
              td(
                v-bind:class = '(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""'
              )
                input.vui-input.vui-text-align--right(
                  v-model.number = 'daypart.targetCpp'
                )
              td(
                v-bind:class = '(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""'
              )
                input.vui-input.vui-text-align--right(
                  v-model.number = 'daypart.daypartMix'
                )
              td(
                v-bind:class = '(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""'
              )
                input.vui-input.vui-text-align--right(
                  v-model.number = 'daypart.targetGrp'
                )

      // Flight Days
      .flight-days.vui-m-bottom--large.vui-size--3-of-5
        .vui-grid.vui-grid--align-spread
          h2.vui-text-heading--medium.vui-m-bottom--medium Flight Dates #[span.required *]

          .vui-grid.vui-grid--align-end.vui-grid--vertical-align-center
            .vui-grid.vui-align-middle.vui-m-right--medium
              span.vui-align-middle.vui-table-legend.vui-table-legend--selected.vui-m-right--x-small
              span.vui-align-middle Selected
            .vui-grid.vui-align-middle
              span.vui-align-middle.vui-table-legend.vui-table-legend--unselected.vui-m-right--x-small
              span.vui-align-middle Unselected

        .vui-box.vui-m-bottom--xx-small(
          style = 'background-color: #ccc'
        )
          form.vui-form--inline(
            action = ''
          )
            .vui-form-element
              label.vui-form-element__label(
                for = ''
              ) Start #[span.required *]
              .vui-form-element__control
                vui-datepicker#startDate(
                  v-bind:value = 'startDate'
                  name = 'startDate'
                )
            .vui-form-element
              label.vui-form-element__label End #[span.required *]
              .vui-form-element__control
                vui-datepicker#endDate(
                  v-bind:value = 'endDate'
                  name = 'endDate'
                )

            button.vui-button.vui-button--neutral(
              @click.prevent = 'selectOrDeselectAllWeeks'
            ) {{ selectButtonText }} all weeks
            //- button.vui-button.vui-button--neutral(@click.prevent='selectOrDeselectAllWeekends') {{ selectButtonText }} all weekends
            //- button.vui-button.vui-button--neutral(@click.prevent='deselectAllWeeks') Deselect all weeks
        .vui-box.vui-grid.vui-grid--align-spread(
          style = 'background-color: #ccc'
        )
          a(
            @click.prevent = 'goTo(-1)'
            href = '#'
          )
            vui-icon.vui-align-middle.vui-m-right--xx-small(
              name = 'arrow-circle-left'
            )
            span.vui-align-middle Previous
          a(
            @click.prevent = 'goTo(1)'
            href = '#'
          )
            span.vui-align-middle.vui-m-right--xx-small Next
            vui-icon.vui-align-middle(
              name = 'arrow-circle-right'
            )

        table#flight-days.vui-table.vui-table--calendar.vui-m-bottom--large.vui-no-row-hover
          thead
            tr
              th(
                rowspan = '2'
              ) Week
              th.vui-text-align--center(
                @click = 'monthClick'
                colspan = '7'
              ) February 2017
            tr
              th.vui-text-align--center.monday(
                @click = 'dayOfWeekHeaderRowClick("monday")'
                style = 'padding-left: 0.5rem'
              ) Mon
              th.vui-text-align--center.tuesday(
                @click = 'dayOfWeekHeaderRowClick("tuesday")'
              ) Tue
              th.vui-text-align--center.wednesday(
                @click = 'dayOfWeekHeaderRowClick("wednesday")'
              ) Wed
              th.vui-text-align--center.thursdey(
                @click = 'dayOfWeekHeaderRowClick("thursday")'
              ) Thu
              th.vui-text-align--center.friday(
                @click = 'dayOfWeekHeaderRowClick("friday")'
              ) Fri
              th.vui-text-align--center.saturday(
                @click = 'dayOfWeekHeaderRowClick("saturday")'
              ) Sat
              th.vui-text-align--center.sunday(
                @click = 'dayOfWeekHeaderRowClick("sunday")'
              ) Sun
          tbody
            tr
              td(
                @click='weekNumberClick'
              ) Week 1
              td.vui-text-align--center.monday(
                @click = 'dayOfWeekClick'
              ) 13
              td.vui-text-align--center.tuesday(
                @click = 'dayOfWeekClick'
              ) 14
              td.vui-text-align--center.wednesday(
                @click = 'dayOfWeekClick'
              ) 15
              td.vui-text-align--center.thursday(
                @click = 'dayOfWeekClick'
              ) 16
              td.vui-text-align--center.friday(
                @click = 'dayOfWeekClick'
              ) 17
              td.vui-text-align--center.saturday(
                @click = 'dayOfWeekClick'
              ) 18
              td.vui-text-align--center.sunday(
                @click = 'dayOfWeekClick'
              ) 19
            tr
              td(
                @click='weekNumberClick'
              ) Week 2
              td.vui-text-align--center.monday(
                @click = 'dayOfWeekClick'
              ) 20
              td.vui-text-align--center.tuesday(
                @click = 'dayOfWeekClick'
              ) 21
              td.vui-text-align--center.wednesday(
                @click = 'dayOfWeekClick'
              ) 22
              td.vui-text-align--center.thursday(
                @click = 'dayOfWeekClick'
              ) 23
              td.vui-text-align--center.friday(
                @click = 'dayOfWeekClick'
              ) 24
              td.vui-text-align--center.saturday(
                @click = 'dayOfWeekClick'
              ) 25
              td.vui-text-align--center.sunday(
                @click = 'dayOfWeekClick'
              ) 26
          thead
            tr
              th(
                rowspan='2'
              ) Week
              th.vui-text-align--center(
                @click = 'monthClick'
                colspan = '7'
              ) March 2017
            tr
              th.vui-text-align--center.monday(
                @click = 'dayOfWeekHeaderRowClick'
                style = 'padding-left: 0.5rem'
              ) Mon
              th.vui-text-align--center.tuesday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Tue
              th.vui-text-align--center.wednesday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Wed
              th.vui-text-align--center.thursday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Thu
              th.vui-text-align--center.friday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Fri
              th.vui-text-align--center.saturday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Sat
              th.vui-text-align--center.sunday(
                @click = 'dayOfWeekHeaderRowClick'
              ) Sun
          tbody
            tr
              td(
                @click = 'weekNumberClick'
              ) Week 3
              td.vui-text-align--center.monday(
                @click = 'dayOfWeekClick'
              ) 27
              td.vui-text-align--center.tuesday(
                @click = 'dayOfWeekClick'
              ) 28
              td.vui-text-align--center.wednesday(
                @click = 'dayOfWeekClick'
              ) 01
              td.vui-text-align--center.thursday(
                @click = 'dayOfWeekClick'
              ) 02
              td.vui-text-align--center.friday(
                @click = 'dayOfWeekClick'
              ) 03
              td.vui-text-align--center.saturday(
                @click = 'dayOfWeekClick'
              ) 04
              td.vui-text-align--center.sunday(
                @click = 'dayOfWeekClick'
              ) 05
            tr
              td(
                @click='weekNumberClick'
              ) Week 4
              td.vui-text-align--center.monday(
                @click = 'dayOfWeekClick'
              ) 06
              td.vui-text-align--center.tuesday(
                @click = 'dayOfWeekClick'
              ) 07
              td.vui-text-align--center.wednesday(
                @click = 'dayOfWeekClick'
              ) 08
              td.vui-text-align--center.thursday(
                @click = 'dayOfWeekClick'
              ) 09
              td.vui-text-align--center.friday(
                @click = 'dayOfWeekClick'
              ) 10
              td.vui-text-align--center.saturday(
                @click = 'dayOfWeekClick'
              ) 11
              td.vui-text-align--center.sunday(
                @click = 'dayOfWeekClick'
              ) 12
          tr
            td(
              @click='weekNumberClick'
            ) Week 5
            td.vui-text-align--center.monday(
              @click = 'dayOfWeekClick'
            ) 13
            td.vui-text-align--center.tuesday(
              @click = 'dayOfWeekClick'
            ) 14
            td.vui-text-align--center.wednesday(
              @click = 'dayOfWeekClick'
            ) 15
            td.vui-text-align--center.thursday(
              @click = 'dayOfWeekClick'
            ) 16
            td.vui-text-align--center.friday(
              @click = 'dayOfWeekClick'
            ) 17
            td.vui-text-align--center.saturday(
              @click = 'dayOfWeekClick'
            ) 18
            td.vui-text-align--center.sunday(
              @click = 'dayOfWeekClick'
            ) 19
          tr
            td(
              @click='weekNumberClick'
            ) Week 6
            td.vui-text-align--center.monday(
              @click = 'dayOfWeekClick'
            ) 20
            td.vui-text-align--center.tuesday(
              @click = 'dayOfWeekClick'
            ) 21
            td.vui-text-align--center.wednesday(
              @click = 'dayOfWeekClick'
            ) 22
            td.vui-text-align--center.thursday(
              @click = 'dayOfWeekClick'
            ) 23
            td.vui-text-align--center.friday(
              @click = 'dayOfWeekClick'
            ) 24
            td.vui-text-align--center.saturday(
              @click = 'dayOfWeekClick'
            ) 25
            td.vui-text-align--center.sunday(
              @click = 'dayOfWeekClick'
            ) 26
        .vui-text-align--right
          router-link.vui-m-right--xx-small.vui-button.vui-button--brand(
            v-bind:disabled = 'daypartMixTotal !== 100'
            v-bind:to = '{ name: "buyers-avails-request-summary" }'
            tag = 'button'
          ) Submit
          button.vui-button.vui-button--neutral Cancel
</template>

<script>
  // import $ from 'jquery'
  // import store from 'store'
  import noUiSlider from 'nouislider'

  export default {
    data () {
      return {
        // sharedState: store.state,
        startDate: new Date('2017-02-13T12:24:00'),
        endDate: new Date('2017-03-26T12:24:00'),
        grossBudget: 0,
        selected: '',
        advertiser: '',
        selectButtonText: 'Select',
        selectWeekendButtonText: 'Select',
        weekClicked: false,
        advertisers: [
          {
            id: 135001,
            name: 'Piedmont Healthcare'
          }
        ],
        selectedAdvertiser: '',
        unplannedDayparts: [],
        selectedDayparts: [
          'earlyMorning',
          'daytime'
        ],
        dayparts: [
          { id: 'earlyMorning', name: 'Early Morning', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'daytime', name: 'Daytime', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'earlyFringe', name: 'Early Fringe', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'earlyNews', name: 'Early News', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'primeAccess', name: 'Prime Access', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'primeSpecials', name: 'Prime/Specials', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'sports', name: 'Sports', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'lateNews', name: 'Late News', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'lateFringe', name: 'Late Fringe', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'weekend', name: 'Weekend', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'overnight', name: 'Overnight', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null }
        ],
        selectedMarket: 'none',
        markets: [
          {
            id: 'none',
            stations: []
          },
          {
            id: 'atl',
            stations: [
              {
                id: 1,
                name: 'WSB'
              },
              {
                id: 2,
                name: 'WGCL'
              },
              {
                id: 3,
                name: 'WAGA'
              },
              {
                id: 4,
                name: 'WXIA'
              },
              {
                id: 5,
                name: 'WUPA'
              }
            ]
          },
          {
            id: 'bos',
            stations: [
              {
                id: 1,
                name: 'WAAA'
              },
              {
                id: 2,
                name: 'WAAB'
              },
              {
                id: 3,
                name: 'WAAC'
              }
            ]
          },
          {
            id: 'was',
            stations: [
              {
                id: 1,
                name: 'WVVV'
              },
              {
                id: 2,
                name: 'WAAB'
              },
              {
                id: 3,
                name: 'WAAC'
              }
            ]
          }
        ]
      }
    },

    computed: {
      daypartMixTotal () {
        return this.dayparts.reduce((total, daypart) => {
          return total + daypart.daypartMix
        }, 0)
      },

      testDayparts () {
        return this.dayparts.reduce((memo, daypart) => {
          let selected = false

          this.selectedDayparts.forEach(function (selectedDaypart) {
            if (selectedDaypart === daypart.id) selected = true
          })

          // if (daypart.id == 'earlyMorning') { // this serves as our `filter`
          memo.push({ // this serves as our `map`
            doctorNumber: '#' + daypart.id,
            active: selected ? 'active' : null,
            yearsPlayed: daypart.end - daypart.begin + 1
          })
          // }
          return memo
        }, [])
      }
    },

    methods: {
      selectOrDeselectAllWeeks () {
        // let days = $('#flight-days').find('tbody td:not(:first-child)')

        if (this.selectButtonText === 'Select') {
          // days.addClass('vui-selected')
          this.selectButtonText = 'Deselect'
        } else {
          // days.removeClass('vui-selected')
          this.selectButtonText = 'Select'
        }
      },

      selectOrDeselectAllWeekends () {
        if (this.selectWeekendButtonText === 'Select') {
          // $('#flight-days').find('tbody td.saturday').addClass('vui-selected')
          // $('#flight-days').find('tbody td.sunday').addClass('vui-selected')
          this.selectWeekendButtonText = 'Deselect'
        } else {
          // $('#flight-days').find('tbody td.saturday').removeClass('vui-selected')
          // $('#flight-days').find('tbody td.sunday').removeClass('vui-selected')
          this.selectWeekendButtonText = 'Select'
        }
      },

      selectAllWeeks () {
        // $('#flight-days').find('tbody td:not(:first-child)').addClass('vui-selected')
      },

      deselectAllWeeks () {
        // $('#flight-days').find('tbody td:not(:first-child)').removeClass('vui-selected')
      },

      dayOfWeekHeaderRowClick (day) {
        // let $element = $('#flight-days').find('tbody td.' + day)

        // if ($element.hasClass('vui-selected')) {
        //   $element.removeClass('vui-selected')
        // } else {
        //   $element.addClass('vui-selected')
        // }
      },

      dayOfWeekClick (event) {
        event.target.classList.toggle('vui-selected')
      },

      monthClick (event) {
        // let $element = $(event.target).closest('thead').next('tbody').find('td:not(:first-child)')

        // if ($element.hasClass('vui-selected')) {
        //   $element.removeClass('vui-selected')
        // } else {
        //   $element.addClass('vui-selected')
        // }
      },

      weekNumberClick (event) {
        // let days = $(event.target.parentNode).find('td:not(:first-child)')
        // if (this.weekClicked === true) {
        //   days.removeClass('vui-selected')
        //   this.weekClicked = false
        // } else {
        //   days.addClass('vui-selected')
        //   this.weekClicked = true
        // }
      },

      foundDaypart (daypart) {
        return (this.unplannedDayparts.indexOf(daypart) !== -1)
      },

      toggleUnplanned (daypart) {
        let item = this.unplannedDayparts.indexOf(daypart)

        if (item === -1) {
          this.unplannedDayparts.push(daypart)
        } else {
          this.unplannedDayparts.splice(item, 1)
        }
      },

      toggleDaypartSelection (event) {
        // console.log($(event.target).toggleClass('vui-selected'))
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'buyers'
    },

    mounted () {
      let ageRange = document.getElementById('age-range')

      noUiSlider.create(ageRange, {
        start: [25.0, 54.0],
        tooltips: true,
        step: 1,
        connect: true,
        range: {
          'min': 0,
          'max': 100
        },
        format: {
          to (value) {
            return value + ''
          },
          from (value) {
            return value.replace('', '')
          }
        },
        pips: {
          mode: 'range',
          values: [18, 100],
          density: 100
        }
      })
    }
  }
</script>
