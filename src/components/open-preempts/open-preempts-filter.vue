<template lang="pug">
  .offer-preempts-filter

    form.vui-grid.vui-grid--vertical-align-end(
      name = 'filterForm'
    )

      fieldset.vui-form-element.on-valid(
        v-bind:class = "isShowFilterErrors && !isDatesValid  ? 'vui-has-error' : 'on-valid'"
      )
        label.vui-form-element__label Start Date
        .vui-form-element__control.vui-m-right--x-small
          vui-datepicker(
            v-model = 'startDate'
            max-date = 'endDate'
            placeholder = "MM/dd/yyyy"
          )

      fieldset.vui-form-element.on-valid(
        v-bind:class = "isShowFilterErrors && !isDatesValid ? 'vui-has-error' : 'on-valid'"
      )
        label.vui-form-element__label End Date
        .vui-form-element__control.vui-m-right--x-small
          vui-datepicker(
            v-model = 'endDate'
            min-date = 'startDate'
            placeholder = "MM/dd/yyyy"
          )

      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label {{ agencyConfig.displayName }}
        .vui-form-element__control(
          style ='width: 11rem'
        )
          .vui-select_container
            select.vui-select(
              v-model = 'selectedAgency'
            )
              option(
                v-for = 'agency in agencies'
              ) {{ agency }}

      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label {{ advertiserConfig.displayName }}
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
        label.vui-form-element__label(
          for = ''
        ) Station Order #
        .vui-form-element__control
          input.vui-input(
            v-model = 'stationOrderPattern'
            maxlength = '128'
            name = 'stationOrderPattern'
            placeholder = 'Station Order #'
            type = 'text'
          )

      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label(
          for = ''
        ) Videa Order #
        .vui-form-element__control
          input.vui-input(
            v-model = 'videaOrderPattern'
            maxlength = '128'
            name = 'videaOrderPattern'
            placeholder = 'Videa Order #'
            type = 'text'
          )

      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label Status
        .vui-form-element__control(
          style = 'width: 11rem'
        )
          .vui-select_container
            select.vui-select(
              v-model = 'selectedStatus'
            )
              option(
                disabled = 'disabled'
                value = ''
              ) Status
              option(
                v-bind:value = 'status'
                v-for = 'status in statuses'
              ) {{ status }}

      fieldset.vui-form-element.vui-m-right--small
        input.vui-button.vui-button--brand(
          @click = 'applyFilter'
          type = 'submit'
          value = 'Search'
        )

      fieldset.vui-form-element
        input.vui-button.vui-button--neutral(
          @click = 'filterClear'
          type = 'button'
          value = 'Clear'
        )
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        isShowFilterErrors: false,
        isDatesValid: true,
        stationOrderPattern: '',
        startDate: null,
        endDate: null,
        videaOrderPattern: '',
        selectedStatus: 'All Open Preempts',
        statuses: [
          'All Open Preempts',
          'Only Open Preempts with MGs Assigned',
          'Only Open Preempts with NO MGs Assigned'
        ],
        agencyConfig: {
          displayName: 'Agency'
        },
        selectedAgency: '',
        agencies: [
          'Hughes-Martin Agency'
        ],
        selectedAdvertiser: '',
        advertisers: [
          'Piedmont Healthcare'
        ],
        advertiserConfig: {
          displayName: 'Advertiser'
        }
      }
    },
    methods: {
      applyFilter () {

      },
      filterClear () {

      }
    }
  }
</script>
