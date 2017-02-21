<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    action = ''
  )
    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Advertiser
      .vui-form-element__control
        input.vui-input(
          name = 'advertiser'
          placeholder = 'Advertiser'
          type = 'text'
        )

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Agency
      .vui-form-element__control
        input.vui-input(
          name = 'agency'
          placeholder = 'Agency'
          type = 'text'
        )

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Avail Number
      .vui-form-element__control
      input.vui-input(
        name = 'availNumber'
        placeholder = 'Avail #'
        type = 'text'
      )

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Status
      .vui-form-element__control
        .vui-select_container
          select.vui-select(
            v-model = 'selectedStatus'
          )
            option(
              value = ''
            ) All Avails
            option(
              v-for = 'status in statuses'
            ) {{ status }}

    fieldset.vui-form-element
      button.vui-button.vui-button--brand.vui-m-right--x-small(
        @click.prevent = ''
      ) Search
    fieldset.vui-form-element
      button.vui-button.vui-button--neutral.vui-m-right--x-small(
        @click.prevent = ''
      ) Clear
</template>

<script>
  export default {
    data () {
      return {
        selectedStatus: 'All Avails',
        statuses: [
          'All Avails',
          'Pending Buyer Request',
          'Released'
        ]
      }
    }
  }
</script>
