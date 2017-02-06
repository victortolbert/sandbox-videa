<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    action = ''
  )
    fieldset.vui-form-element
      label.vui-form-element__label Offer Status
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'offer-status'
          placeholder = 'Pending'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Offer Type
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'offer-status'
          placeholder = 'All Offer Types'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Agency
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'agency'
          placeholder = 'Agency'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Advertiser
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'advertiser'
          placeholder = 'Advertiser'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Campaign Name
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'campaign'
          placeholder = 'Campaign'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Agency Status
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'campaign'
          placeholder = 'All Agency Statuses'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label Station Status
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey',
          name = 'campaign'
          placeholder = 'All Station Statuses'
          ref = 'searchKey'
          type = 'text'
        )

    fieldset.vui-form-element
      label.vui-form-element__label MG Transfers
      .vui-form-element__control.vui-m-right--small
        input.vui-input(
          v-model = 'searchKey'
          name = 'campaign'
          placeholder = "All MG's & Transferred"
          ref = 'searchKey'
          type = 'text'
        )

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
        searchKey: ''
      }
    }
  }
</script>
