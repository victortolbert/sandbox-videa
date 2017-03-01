<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    action = ''
  )
    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Offer Status
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option Pending

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Offer Type
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option All Offer Types


    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Agency
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option Agency


    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Advertiser
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option Advertiser

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

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Agency Status
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option All Agency Statuses

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label Station Status
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option All Station Statuses

    fieldset.vui-form-element.vui-m-right--small
      label.vui-form-element__label MG Transfers
      .vui-form-element__control(style='width: 11rem')
        .vui-select_container
          select.vui-select
            option All MG's &amp; Transferred

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
        searchKey: '',
        offerStatuses: [],
        offerTypes: [],
        agencies: [],
        advertisers: [],
        agencyStatuses: [],
        stationStatuses: [],
        makegoodTransfers: []
      }
    }
  }
</script>
