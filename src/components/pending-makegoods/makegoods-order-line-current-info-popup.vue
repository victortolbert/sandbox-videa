<template lang="pug">
  vui-modal(size = 'large')
    .modal-header.vui-m-bottom--large
      .modal-header.vui-m-bottom--large
        h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
          span Buy Line / Current Information
          a.vui-text-align--right(@click.prevent = '$emit("close")' style='color: white')
            vui-icon(name='close', style='width: 2rem; height: 2rem')
    .modal-body
      div
        .vui-box.vui-theme--default.vui-m-bottom--large
          h4.vui-text-heading--small.vui-m-bottom--medium(
          ) {{ 'Current Rates and Ratings when Order line#' + orderLine.lineNumber }}
          .vui-grid
            fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
              label.vui-form-element__label Rate and Ratings update Date
              .vui-form-element__control
                span.vui-form-element__static(
                ) {{ orderLine.currentAsOfDate }}
            fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
              label.vui-form-element__label Demo
              .vui-form-element__control
                span.vui-form-element__static(
                ) {{ demo }}
            fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
              label.vui-form-element__label Current Rate
              .vui-form-element__control
                span.vui-form-element__static(
                ) {{ orderLine.videaCurrentSpotRate | formatMoney }}
            fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large(
              v-if = '!isImpressionsBuyType'
            )
              label.vui-form-element__label Current RTG
              .vui-form-element__control
                span.vui-form-element__static(
                ) {{ orderLine.videaCurrentRating }}
      div
        h4.vui-text-heading--small.vui-p-around--small Current Rates &amp; Ratings
        .filter-validation.vui-theme--shade.error.vui-m-bottom--large(
          v-if = '!isRatesAndRatingsFound'
        )
          ul.vui-p-top--xxx-small
            li
              //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
              | No results found. Please try again.
        .vui-m-bottom--large
          .vui-scrollable--y(
            style = 'max-height: 480px'
          )
            makegoods-order-line-curr-info-rate-rating-grid(
              items = 'ratesAndRatings'
              order-buy-type = 'orderBuyType'
            )
      .vui-grid.vui-grid--align-end
        input.vui-button.vui-button--neutral(
          @click = '$emit("close")'
          type = 'button'
          value = 'Cancel'
        )
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        demo: 'P25-54',
        show: false,
        canBeAccepted: true,
        canBeRejected: true,
        isShowDialog: false,
        isImpressionsBuyType: true,
        isRatesAndRatingsFound: true,
        orderLine: {
          lineNumber: 1,
          currentAsOfDate: moment().add(14, 'days').format('MM/DD/YY hh:MM A'),
          videaCurrentSpotRate: 350,
          videaCurrentRating: 0.4
        }
      }
    },
    computed: {
      dialogStyle () {
        return {}
      }
    },
    methods: {
      showModal () {},
      acceptOffer () {},
      hideDialog () {},
      showRejectDialog () {}
    }
  }
</script>
