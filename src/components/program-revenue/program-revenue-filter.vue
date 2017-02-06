<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    action = ''
  )
    vui-quarter-selector

    .vui-m-right--x-small(
      style = 'align-self: center'
    ): strong #[br] or

    fieldset.vui-form-element
      label.vui-form-element__label Start Date
      .vui-form-element__control.vui-m-right--small
        vui-datepicker(
          v-model = 'startDate'
          name = 'startDate'
          placeholder = 'MM/dd/yyyy'
        )
    fieldset.vui-form-element
      label.vui-form-element__label End Date
      .vui-form-element__control.vui-m-right--small
        vui-datepicker(
          v-model = 'endDate'
          name = 'endDate'
          placeholder = 'MM/dd/yyyy'
        )
    fieldset.vui-form-element
      button.vui-button.vui-button--brand(
        @click.prevent = ''
      ) Search
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString())
      }
    }
  }
</script>
