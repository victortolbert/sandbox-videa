<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end.vui-wrap(
    action = ''
  )
    fieldset.vui-form-element
      label.vui-form-element__label Search
      .vui-form-element__control
        input.vui-input(
          v-model = 'searchKey'
          name = 'searchText'
          placeholder = 'Advertiser or Agency'
          ref = 'searchKey'
          style = 'width: 24rem'
          type = 'text'
        )
    fieldset.vui-form-element
      .vui-form-element__control.vui-m-right--large
        .vui-select_container(
          style = 'margin-left: -1px'
        )
          select#searchType.vui-select(
            @change = ''
          )
            option(
              label = 'Advertiser'
              selected = 'selected'
              value = 'number: 0'
            ) Advertiser
            option(
              label = 'Agency'
              value = 'number: 1'
            ) Agency

    vui-quarter-selector

    .vui-m-right--x-small(
      style = 'align-self: center'
    ): strong #[br] or

    fieldset.vui-form-element
      label.vui-form-element__label.vui-m-right--x-small(
        for = 'fromDate'
      ) Start Date
      .vui-form-element__control.vui-m-right--small
        vui-datepicker#fromDate(
          v-model = 'fromDate'
          name = 'fromDate'
        )

    fieldset.vui-form-element
      label.vui-form-element__label.vui-m-right--x-small(
        for = 'fromDate'
      ) End Date
      .vui-form-element__control.vui-m-right--small
        vui-datepicker#toDate(
          v-model = 'toDate'
          name = 'toDate'
        )

    button.vui-button.vui-button--brand.vui-m-right--large Search

    fieldset.vui-form-element.vui-m-right--small
      .vui-form-element__control(
        style = 'margin-top: -2rem'
      )
        input#checkbox-01.vui-m-right--xx-small(
          type = 'checkbox'
          name = 'options'
        )
        span.vui-checkbox--faux
        span.vui-form-element__label Exclude $0 Spots
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        fromDate: new Date(moment().add(14, 'days').toISOString()),
        toDate: new Date(moment().add(5, 'days').toISOString()),
        searchKey: ''
      }
    }
  }
</script>
