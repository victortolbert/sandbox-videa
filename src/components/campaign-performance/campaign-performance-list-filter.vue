<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end.vui-wrap.order-summary-filter-container.performance-filter-controls.station-performance-controls(
    name = 'filterForm'
  )
    fieldset.vui-form-element.on-valid
      label.vui-form-element__label(
        for = 'searchText'
      ) Search
      .vui-form-element__control
        input#searchText.vui-input(
          v-model = 'searchText'
          maxlength = '128'
          name = 'searchText'
          style = 'width: 24rem'
          type = 'text'
        )
    fieldset.vui-form-element
      .vui-form-element__control.vui-m-right--small
        .vui-select_container(
          style = 'margin-left: -1px'
        )
          select#searchType.vui-select
            option(
              label = 'Advertiser'
              selected = 'selected'
              value = 'number: 0'
            ) Advertiser
            option(
              label = 'Agency'
              value = 'number: 1'
            ) Agency
            option(
              label = 'Station Order #'
              value = 'number: 2'
            ) Station Order #
            option(
              label = 'Videa Order #'
              value = 'number: 3'
            ) Videa Order #

    vui-quarter-selector

    .vui-m-right--x-small(
      style = 'align-self: center'
    ): strong #[br] or

    fieldset.vui-form-element
      label.vui-form-element__label Start Date
      .vui-form-element__control.vui-m-right--x-small
        vui-datepicker(
          v-model = 'startDate'
          name = 'startDate'
          placeholder = 'MM/dd/yyyy'
        )

    fieldset.vui-form-element
      label.vui-form-element__label End Date
      .vui-form-element__control.vui-m-right--x-small
        vui-datepicker(
          v-model = 'endDate'
          name = 'endDate'
          placeholder = 'MM/dd/yyyy'
        )

    fieldset.vui-form-element
      input.vui-button.vui-button--brand(
        @click.prevent = 'onSubmit'
        type = 'submit'
        value = 'Search'
      )

</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        startDate: new Date(moment().subtract(14, 'days').toISOString()),
        endDate: new Date(moment().add(21, 'days').toISOString()),
        searchText: ''
      }
    },

    methods: {
      onSubmit () {

      }
    }
  }
</script>
