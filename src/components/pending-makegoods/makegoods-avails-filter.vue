<template lang="pug">
  .vui-panel.vui-m-bottom--large.offers-makegoods-avails-filter
    .vui-panel__heading
      h2.vui-panel__title Search Station Avails
    .vui-panel__body
      form.vui-grid.vui-grid--vertical-align-end.vui-wrap(
        name = 'filterForm'
      )
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
            //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='startTime')
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label(
            for = ''
          ) End Time
          .vui-form-element__control
            //- vui-time-input(on-time-changed='timeChanged', is-time-invalid='!isTimeRangeValid', model='endTime')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 8rem'
          )
            //- vui-multiselect-dropdown(placeholder='Days', items='dayItems', has-all-option='true', all-option-name='All Days')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 11rem'
          )
            //- vui-multiselect-dropdown(placeholder='Dayparts', items='daypartItems', has-all-option='true', all-option-name='All Dayparts')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control.dropdown-container.days-dropdown-selector(
            style = 'width: 9rem'
          )
            //- vui-multiselect-dropdown(placeholder='Spot Length', items='lengthItems', has-all-option='true', all-option-name='All Lengths')
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(
            style = 'width: 8rem'
          )
            //- vui-date-picker(v-model='startDate', min-date='minDate', placeholder="'Start Date'")
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(
            style = 'width: 8rem'
          )
            //- vui-date-picker(v-model='endDate', min-date='minDate', placeholder="'End Date'")
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
  export default {
    data () {
      return {
        filteringType: 0,
        startTime: '',
        endTime: '',
        dayItems: [],
        daypartItems: [],
        lengthItems: [],
        startDate: '',
        endDate: ''

      }
    },
    methods: {
      showRequestedDaypartsPopup () {},
      applyFilter () {},
      filterClear () {}
    }
  }
</script>
