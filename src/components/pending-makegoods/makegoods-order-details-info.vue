<template lang="pug">
  .order-details-info(
    order-info = 'orderInfo'
  )
    span.vui-text-link--reset(
      @click.prevent = 'infoClicked'
      href = 'javascript:void(0)'
      style = 'cursor: pointer'
    )
      .vui-box.vui-theme--default(
        style = 'padding: 0.25rem 1rem'
      )
        .vui-grid.vui-grid--vertical-align-center

          icon.vui-m-right--x-small(
            v-bind:name = 'shouldShowInfo ? "caret-right" : "caret-down"'
            size = 'medium'
            style = 'color: #0177a2'
          )

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Status
            br
            badge {{ orderInfo.offerStatus }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Advertiser
            br
            span {{ orderInfo.advertiserName }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Station
            br
            span {{ $store.state.stationCallLetters }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label C/P/E
            br
            span {{ orderInfo.cpe }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Start Date
            br
            span {{ startDate | formatDate }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label End Date
            br
            span {{ endDate | formatDate }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Agency Order #
            br
            span {{ orderInfo.agencyOrderNumber }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Videa Order #
            br
            span {{ orderInfo.videaOrderNumber }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Version
            br
            span {{ orderInfo.buyerVersion }}

          .vui-col.vui-m-right--medium
            label.vui-form-element__label Station Order #
            br
            span {{ orderInfo.stationOrderId }}

    .vui-box(
      v-show = '!shouldShowInfo'
      style = 'margin-top: -1px;background: #f0f8fc'
    )
      .vui-grid

        .vui-col.vui-p-horizontal--medium

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Product
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.productName }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Campaign Name
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.campaignName }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Deal type
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.dealType }}

        .vui-col.vui-p-horizontal--medium

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Agency Name
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.agencyName }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Buyer Name
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.buyerName }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Schedule type
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.scheduleType }}

        .vui-col.vui-p-horizontal--medium

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Demo
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.demo }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Estimate
            .vui-form-element__control
              span.vui-form-element__static  {{ orderInfo.estimate }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Rep Name
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.repName }}

        .vui-col.vui-p-horizontal--medium

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large(
            v-if = '!isImpressionsBuyType'
          )
            label.vui-form-element__label Total GRPs
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.totalGuaranteeRating }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Total Spots
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.totalSpotsQuantity }}

          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Total $$$
            .vui-form-element__control
              span.vui-form-element__static {{ orderInfo.totalCost }}

        .vui-col.vui-p-horizontal--medium

          fieldset.vui-form-element.vui-m-bottom--small(
            v-if = '!isMakegoodDefined'
          )
            label.vui-form-element__label.black-text.disabled Buyer Avail Request Notes
            .vui-form-element__control
              resizable-textarea(
                v-bind:text = 'orderInfo.buyerAvailRequestNotes'
                initial-height = '60'
                is-readonly = 'true'
                title  = ''
              )

          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label.black-text.disabled Buyer Order Comment
            .vui-form-element__control
              resizable-textarea(
                v-bind:text = 'orderInfo.buyerOrderComment'
                initial-height = '60'
                is-readonly = 'true'
                title = ''
              )

          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label.black-text.disabled Customer Care Comment To Station
            .vui-form-element__control
              resizable-textarea(
                v-bind:text = 'orderInfo.customerCareCommentToStation'
                initial-height = '60'
                is-readonly = 'isCommentReadonly'
                title = ''
              )
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString()),
        orderInfo: {
          buyerStatusName: 'pending',
          offerStatus: 'pending',
          productName: 'HEA',
          campaignName: '3Q16 PTA',
          cpe: 'PHC-HEA-57',
          dealType: 'Trade',
          startDate: new Date(),
          endDate: new Date(),
          stationCallLetters: '',
          stationOrderId: '0',
          advertiserName: 'Piedmont Healthcare',
          agencyName: 'Hughes-Martin Agency',
          agencyOrderNumber: 0,
          buyerType: '',
          videaOrderNumber: 135001,
          buyerVersion: 1,
          stationOrder: 0,
          buyerName: 'Janna Valentine',
          scheduleType: 'Weekly',
          demo: 'A25-54',
          estimate: '57',
          repName: 'Brian Reed',
          totalGuaranteeRating: '23.10',
          totalSpotsQuantity: '113',
          totalCost: '0',
          buyerAvailRequestNotes: '',
          buyerOrderComment: '',
          customerCareCommentToStation: ''
        },
        isImpressionsBuyType: true,
        shouldShowInfo: true,
        isMakegoodDefined: true
      }
    },
    computed: {},
    methods: {
      infoClicked () {
        this.shouldShowInfo = !this.shouldShowInfo
      }
    }
  }
</script>
