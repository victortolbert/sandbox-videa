 <template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    name = 'filterForm'
    novalidate = ''
  )
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
      .vui-m-right--large
        input.vui-button.vui-button--brand(
          @click.prevent = 'onSubmit'
          type = 'submit'
          value = 'Search'
        )
    fieldset.vui-form-element
      label.vui-checkbox
        input(
          v-model = 'showUnmatchedSpotsOnly'
          name = 'unmatchedSpots'
          type = 'checkbox'
          value = 'false'
        )
        span.vui-checkbox--faux
        span.vui-form-element__label Unmatched Spots
      //- label.vui-align-middle
</template>

<script>
  import moment from 'moment'

  export default {
    props: {

    },
    data () {
      return {
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString()),
        showUnmatchedSpotsOnly: false
      }
    },
    methods: {
      onSubmit () {

      }
    }
  }
</script>
