<template lang="pug">
  .vui-panel.vui-m-bottom--large.offers-makegoods-avails-filter
    .vui-panel__heading
      h2.vui-panel__title Search Station Avails
    .vui-panel__body
      form.vui-grid.vui-grid--vertical-align-end.vui-wrap
        fieldset.vui-form--inline
          .vui-form-element
            .vui-form-element__control
              label.vui-radio
                input(
                  v-model = 'filteringType'
                  name = 'filteringTypeRadioGroup'
                  type = 'radio'
                  value = '0'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label All
        fieldset.vui-form--inline.vui-m-right--large
          .vui-form-element
            .vui-form-element__control
              label.vui-radio
                input(
                 v-model = 'filteringType'
                 name = 'filteringTypeRadioGroup'
                 type = 'radio'
                 value = '1'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Programs Ordered
        fieldset.vui-form--inline.vui-m-right--large
          .vui-form-element
            .vui-form-element__control.pointer
              a.pending-makegoods-requested-dayparts-link.v-link-active(
                @click = 'showRequestedDaypartsPopup'
              ) DPs Availed
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label(
            for = ''
          ) Start Time
          .vui-form-element__control
            .vui-select_container
              select.vui-select
                option AM
            //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='startTime')
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label(
            for = ''
          ) End Time
          .vui-form-element__control
            .vui-select_container
              select.vui-select
                option AM
            //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='endTime')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 8rem'
          )
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option All Days
            //- vui-multiselect-dropdown(placeholder='Days', items='dayItems', has-all-option='true', all-option-name='All Days')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 11rem'
          )
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option All Dayparts
            //- vui-multiselect-dropdown(placeholder='Dayparts', items='daypartItems', has-all-option='true', all-option-name='All Dayparts')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 9rem'
          )
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option All Lengths
            //- vui-multiselect-dropdown(placeholder='Spot Length', items='lengthItems', has-all-option='true', all-option-name='All Lengths')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(
            style = 'width: 8rem'
          )
            vui-datepicker(
              v-model = 'startDate'
              name = 'startDate'
              placeholder = 'MM/dd/yyyy'
            )
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(
            style = 'width: 8rem'
          )
            vui-datepicker(
              v-model = 'endDate'
              name = 'endDate'
              placeholder = 'MM/dd/yyyy'
            )
        fieldset.vui-form-element.vui-m-right--small.vui-m-top--medium
          .vui-form-element__control
            input.vui-button.vui-button--brand(
              @click = 'applyFilter'
              type = 'submit'
              value = 'Search'
            )
        fieldset.vui-form-element.vui-m-top--medium
          .vui-form-element__control
            input.vui-button.vui-button--neutral(
              @click = 'filterClear'
              type = 'button'
              value = 'Clear'
            )
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        filteringType: 0,
        startTime: '',
        endTime: '',
        dayItems: [],
        daypartItems: [],
        lengthItems: [],
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString()),

      }
    },
    methods: {
      showRequestedDaypartsPopup () {},
      applyFilter () {},
      filterClear () {}
    }
  }
</script>
