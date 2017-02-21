<template lang="pug">
  .vui-panel.vui-m-bottom--large
    .vui-panel__heading
      h2.vui-panel__title Search Order Listing
    .vui-panel__body
      form.vui-grid.vui-grid--vertical-align-end.vui-wrap(
        name = 'filterForm'
      )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Station Order
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            //- input.vui-input(type='text', placeholder='Station Order #', name='stationIdPattern', v-model='stationIdPattern')
            input.vui-input(
              @input = 'stationIdPattern = $event.target.value'
              v-bind:value = 'stationIdPattern'
              name = 'stationIdPattern'
              placeholder = 'Station Order #'
              type = 'text'
            )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Videa Order #
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            input.vui-input(
              v-model = 'videaIdPattern'
              name = 'videaIdPattern'
              placeholder = 'Videa Order #'
              type = 'text'
            )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Advertiser
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            .vui-select_container
              select.vui-select(
                v-model = 'selectedAdvertiser'
              )
                option(
                  v-for = 'advertiser in advertisers'
                ) {{ advertiser }}
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Agency
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            .vui-select_container
              select.vui-select(
                v-model = 'selectedAgency'
              )
                option(
                  value = ''
                ) Select Agency
                option(
                  v-for = 'agency in agencies'
                ) {{ agency }}
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Estimate
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            input.vui-input(
              v-model = 'estimatePattern'
              name = 'estimatePattern'
              placeholder = 'Estimate'
              type = 'text'
            )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Start Date
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            vui-datepicker(
              v-model = 'startDate'
              date-changed = 'startDateOnChange'
              name = 'startDate'
              placeholder = "'Start Date'"
            )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label End Date
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            vui-datepicker(
              v-model = 'endDate'
              date-changed = 'endDateOnChange'
              name = 'endDate'
              placeholder = "'End Date'"
            )
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Completed Status
          .vui-form-element__control(
            style = 'width: 11rem'
          )
            .vui-select_container
              select.vui-select(
                v-model = 'selectedCompletedStatus'
              )
                option(
                  disabled = 'disabled'
                  value = ''
                ) Completed Status
                option(
                  v-for = 'item in completedStatuses'
                  v-bind:selected = 'item == "Active Orders"'
                  v-bind:value = 'item'
                ) {{ item }}
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
        stationIdPattern: '',
        videaIdPattern: '',
        estimatePattern: '',
        startDate: new Date(),
        endDate: new Date(),
        selectedAdvertiser: '',
        advertisers: [
          'Community Loans, Inc.',
          'Metro Wireless',
          'Papa Johns Pizza',
          'Piedmont Healthcare',
          'Southeast Ford',
          'Sun Valley Bank'
        ],
        selectedAgency: '',
        agencies: [
          'Auto Advertising Partners',
          'Hughes-Martin Agency',
          'Mullberry Way Group',
          'The Media Masters Group',
          'Vanthrop and Associates',
          'Zone Group Advertising'
        ],
        selectedCompletedStatus: 'All Orders',
        completedStatuses: [
          'All Orders',
          'Completed Orders',
          'Active Orders'
        ]
      }
    },
    methods: {
      filterClear () {

      },

      applyFilter () {

      }
    }
  }
</script>
