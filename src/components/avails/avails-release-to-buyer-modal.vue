<template lang="pug">
  vui-modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show'
    size = 'large'
  )
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium(
        v-if = 'showExportProposal'
      ) Export Avail
      h3.vui-text-heading--medium(
        v-else
      ) Release To Buyer
    .modal-body
      #release-to-buyer(
        v-if = '!showExportProposal'
      )
        p.vui-text-longform.vui-m-bottom--large
          | Are you sure you want to submit the avail
          | to the buyer?

        .vui-form-element.vui-m-bottom--large
          label.vui-label.vui-label--custom-1(
            for = ''
          ) Expiration Date
          vui-datepicker#endDate(
            v-bind:value = 'expirationDate'
            name = 'expirationDate'
          )
        .vui-text-align--right
          button.vui-button.vui-button--brand.vui-m-right--x-small(
            @click.prevent = 'showExportProposal = true'
          ) Submit
          button.vui-button.vui-button--neutral(
            @click.prevent = 'close'
          ) Cancel

      #export-proposal(
        v-if = 'showExportProposal'
      )
        h4.vui-text-heading--small.vui-text-align--center.vui-m-bottom--large
          | Select a format in which you would like to export your avail.

        .vui-text-align--center
          button.vui-button.vui-button--neutral.vui-m-right--x-small(
            @click.prevent = 'close'
          ) None
          button.vui-button.vui-button--brand.vui-m--x-small(
            @click.prevent = 'exportAvail'
          ) CSV
          button.vui-button.vui-button--brand.vui-m--x-small(
            @click.prevent = 'exportAvail'
          ) XML
          button.vui-button.vui-button--brand.vui-m--x-small(
            @click.prevent = 'exportAvail'
          ) Both XML and CSV
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['show'],

    data () {
      return {
        comment: '',
        showExportProposal: false,
        expirationDate: new Date(moment().add(14, 'days').toISOString())
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      exportAvail () {
        require('downloadjs')('hello world', 'piedmont-healthcare-avail.xml', 'text/xml')
        setTimeout(() => this.close(), 300)
      },

      showExportProposal () {
        this.showExportProposal = true
      }
    }
  }
</script>
