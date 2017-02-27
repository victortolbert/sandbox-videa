<template lang="pug">
  .order-details-info.vui-m-bottom--medium
    span.vui-text-link--reset(
      @click.prevent = 'infoClicked'
      href = 'javascript:void(0)'
      style = 'cursor: pointer'
    )
      .vui-box.vui-box--small.vui-theme--default
        .vui-scrollable--x.vui-p-bottom--x-small
          .vui-grid.vui-grid--vertical-align-center

            vui-icon.vui-icon--small.vui-m-right--x-small(
              v-bind:name = 'shouldShowInfo ? "caret-right" : "caret-down"'
              size = 'medium'
              style = 'color: #0177a2'
            )

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Status
              br
              vui-badge {{ order.status }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Advertiser
              br
              span {{ order.advertiser }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Station
              br
              span {{ $store.state.stationCallLetters }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label C/P/E
              br
              span {{ order.cpe }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Start Date
              br
              span {{ order.flightStartDate | formatDate }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label End Date
              br
              span {{ order.flightEndDate | formatDate }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Agency Order #
              br
              span {{ order.agencyOrderNumber }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Videa Order #
              br
              span {{ order.id }}

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Version
              br
              span {{ order.buyerVersion }} 1

            .vui-col.vui-m-right--medium
              label.vui-form-element__label Station Order #
              br
              span {{ order.stationOrderNumber }}

    .vui-box(
      v-show = '!shouldShowInfo'
      style = 'margin-top: -1px;background: #f0f8fc'
    )
      .vui-scrollable--x.vui-p-bottom--x-small
        .vui-grid.vui-p-around--large
          .vui-grid.vui-col(style='width: 75%')
            .vui-col(style='width: 25%')

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Product
                .vui-form-element__control
                  span.vui-form-element__static {{ order.product }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Campaign Name
                .vui-form-element__control
                  span.vui-form-element__static {{ order.campaign }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Deal type
                .vui-form-element__control
                  span.vui-form-element__static {{ order.dealType }}
            .vui-col(style='width: 25%')

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Agency Name
                .vui-form-element__control
                  span.vui-form-element__static {{ order.agency }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Buyer Name
                .vui-form-element__control
                  span.vui-form-element__static {{ order.buyer }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Schedule type
                .vui-form-element__control
                  span.vui-form-element__static {{ order.scheduleType }}
            .vui-col(style='width: 25%')

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Demo
                .vui-form-element__control
                  span.vui-form-element__static {{ order.demo }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Estimate
                .vui-form-element__control
                  span.vui-form-element__static  {{ order.estimate }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Rep Name
                .vui-form-element__control
                  span.vui-form-element__static {{ order.salesPerson }}
            .vui-col(style='width: 25%')

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large(
                v-if = '!isImpressionsBuyType'
              )
                label.vui-form-element__label Total GRPs
                .vui-form-element__control
                  span.vui-form-element__static {{ order.totalGuaranteeRating }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Total Spots
                .vui-form-element__control
                  span.vui-form-element__static {{ order.spots }}

              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Total $$$
                .vui-form-element__control
                  span.vui-form-element__static {{ order.revenue | numberWithCommas | formatMoney }}
          .vui-col(style='width: 25%')
            .vui-col.vui-p-horizontal--medium
              fieldset.vui-form-element.vui-m-bottom--small(v-if ='!isMakegoodDefined')
                label.vui-form-element__label.black-text.disabled Buyer Avail Request Notes
                .vui-form-element__control
                  vui-resizable-textarea(
                    v-bind:text = 'order.buyerAvailRequestNotes'
                    initial-height = '60'
                    is-readonly = 'true'
                    title  = ''
                  )

              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label.black-text.disabled Buyer Order Comment
                .vui-form-element__control
                  vui-resizable-textarea(
                    v-bind:text = 'order.buyerOrderComment'
                    initial-height = '60'
                    is-readonly = 'true'
                    title = ''
                  )

              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label.black-text.disabled Customer Care Comment To Station
                .vui-form-element__control
                  vui-resizable-textarea(
                    v-bind:text = 'order.customerCareCommentToStation'
                    initial-height = '60'
                    is-readonly = 'isCommentReadonly'
                    title = ''
                  )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    props: {
      orderId: {
        type: [String, Number]
      }
    },

    data () {
      return {
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString()),
        offer: {},
        order: {},
        isImpressionsBuyType: true,
        shouldShowInfo: true,
        isMakegoodDefined: true
      }
    },
    computed: {

    },

    methods: {
      fetchOffer(id) {
        axios.get(`/offers/${id}`)
          .then((response) => {
            this.offer = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      fetchOrder (id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },


      infoClicked () {
        this.shouldShowInfo = !this.shouldShowInfo
      }
    },

    created () {
      // this.fetchOffer(this.$route.params.id)
    },

    mounted () {
      this.fetchOrder(this.$route.params.id)
    }
  }
</script>
