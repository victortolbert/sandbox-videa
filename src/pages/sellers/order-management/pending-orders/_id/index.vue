<template lang="pug">
  .order-management-show-view
    vui-title.vui-grid.vui-grid--align-spread(style='margin-bottom: 0')
      span Pending Order Details
      span  {{ order.advertiser }} &mdash; Order # {{ id }}
    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
      a(
        @click.prevent = 'showSummary'
      )
        vui-icon.vui-m-right--xx-small.vui-align-middle(
          name = 'arrow-circle-left'
        )
        span.vui-align-middle Back to Pending Orders

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = 'status'
        ) Status
        .vui-form-element__control
          span.vui-badge.new(
            v-bind:class = 'order.status'
          ) {{ order.status }}

      fieldset.vui-form-element
        label.vui-form-element__label Videa Order ID
        .vui-form-element__control
          span.vui-form-element__static {{ order.id }}

      fieldset.vui-form-element
        label.vui-form-element__label Order Type
        .vui-form-element__control
          span.vui-form-element__static {{ order.type }}

      fieldset.vui-form-element
        label.vui-form-element__label Advertiser
        .vui-form-element__control
          span.vui-form-element__static {{ order.advertiser }}

      fieldset.vui-form-element
        label.vui-form-element__label CPE
        .vui-form-element__control
          span.vui-form-element__static {{ order.cpe }}

      fieldset.vui-form-element
        label.vui-form-element__label Agency
        .vui-form-element__control
          span.vui-form-element__static {{ order.agency }}

      fieldset.vui-form-element
        label.vui-form-element__label Total Revenue
        .vui-form-element__control
          span.vui-form-element__static $ {{ order.revenue | numberWithCommas }}

      fieldset.vui-form-element
        label.vui-form-element__label Share
        .vui-form-element__control
          span.vui-form-element__static {{ $store.state["share"+order.id] | decimalToPercent }}

      fieldset.vui-form-element
        label.vui-form-element__label Total Spots
        .vui-form-element__control
          span.vui-form-element__static {{ order.spots }}

      fieldset.vui-form-element
        label.vui-form-element__label Start
        .vui-form-element__control
          span.vui-form-element__static {{ order.flightStartDate }}

      fieldset.vui-form-element
        label.vui-form-element__label End
        .vui-form-element__control
          span.vui-form-element__static {{ order.flightEndDate }}

      fieldset.vui-form-element
        label.vui-form-element__label Demo
        .vui-form-element__control
          span.vui-form-element__static {{ order.demo }}

      .vui-form-element
        label.vui-form-element__label Sales Office
        .vui-form-element__control
          span.vui-form-element__static Videa

      fieldset.vui-form-element
        label.vui-form-element__label Location
        .vui-form-element__control
          span.vui-form-element__static {{ order.salesOfficeLocation }}

      fieldset.vui-form-element
        label.vui-form-element__label Salesperson
        .vui-form-element__control
          span.vui-form-element__static {{ order.salesPerson }}

    .vui-grid.vui-grid--align-end.vui-m-bottom--medium(
      v-if = '$store.state.user.name !== "Rep User"'
    )
      .buttons
        button.vui-button--brand.vui-m-right--x-small(
          @click.prevent = 'showAcceptOrderModal = true'
        ) Accept
        button.vui-button--neutral(
          @click.prevent = 'showRejectOrderModal = true'
        ) Reject
    .vui-grid.vui-grid--align-end.vui-m-bottom--medium(
      v-if = '$store.state.user.name == "Rep User"'
    )
      .buttons
        form.vui-form--inline
          fieldset.vui-form-element
            label.vui-form-element__label(
              for = ''
            ) Share
            .vui-form-element__control
              input#stationAudienceShare.vui-input(
                v-model = '$store.state["share" + order.id]'
                style = 'width: 5rem'
                type = 'text'
              )

          fieldset.vui-form-element
            button.vui-button--brand(
              @click.prevent = ''
            ) Update


    form
      .vui-grid.vui-grid--align-spread
        .vui-text-heading--large.vui-m-bottom--medium Version History
        .vui-form--inline(ng-show = "isRep || orderInfo.sellerStatus === 'Confirmed'")
          .vui-form-element
            label.vui-form-element__label(
              for = 'manualShare'
            ) Share
            .vui-form-element__control
              input#manualShare.vui-input.u-width-small(
                name = 'manualShareField'
                type = 'number',
                ng-pattern = '/^[1-9][0-9]?$|^100$|^0$/'
                ng-model = 'ctrl.manualShareOverride'
              )
          .vui-show--inline
            button.vui-button.vui-button--neutral(
              type = 'submit'
              value = 'Update'
              ng-disabled = 'shareFrm.manualShareField.$invalid'
            ) Update

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
      fieldset.vui-col--padded.vui-form-element
        label.vui-form-element__label(for='') Version
        .vui-form-element__control.vui-text-align--center
          span.vui-form-element__static.vui-m-right--small(ng-bind='orderInfo.version') 1
      fieldset.vui-col--padded.vui-form-element
        label.vui-form-element__label(for='') Submitted by
        .vui-form-element__control
          span.vui-form-element__static(ng-bind='orderInfo.buyerName') KARINE MCMASTER
      fieldset.vui-col--padded.vui-form-element
        label.vui-form-element__label(for='') Date
        .vui-form-element__control
          span.vui-form-element__static(ng-bind="orderInfo.createdDate | date:'MM/dd/yyyy'") 01/19/2017
      fieldset.vui-col--padded.vui-col--bump-right.vui-form-element
        label.vui-form-element__label(for='') Time
        .vui-form-element__control
          span.vui-form-element__static(ng-bind="orderInfo.createdDate | date:'h:mm a'") 4:54 PM


    .vui-grid.vui-grid--align-end.vui-m-bottom--medium
      a.vui-align-middle.vui-m-right--small(
        target = '_blank'
        @click.prevent = 'showOffer(id)'
      ) Manage Schedule
      button.vui-button.vui-button--brand Redeliver

    .vui-scrollable--x.vui-m-bottom--medium
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Program
            th Time
            th Length
            th Start
            th End
            th Rate
            th Weekly Spots
            th Total Spots
            th Total Cost
            th Buyer Rating
            th Total Ratings
        tbody(
          v-for = 'version in order.versions'
        )
          tr(
            v-for = 'program in version.programs'
          )
            td {{ program.name }}
            td {{ program.time }}
            td.vui-text-align--center {{ program.length }}
            td {{ program.flightStartDate }}
            td {{ program.flightEndDate }}
            td.vui-text-align--right {{ program.rate | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.weeklySpots }}
            td.vui-text-align--right {{ program.totalSpots }}
            td.vui-text-align--right {{ program.totalCost | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.buyerRating | formatRating }}
            td.vui-text-align--right {{ program.totalRatings | formatRating }}
    .vui-grid.vui-grid--align-end.vui-m-bottom--medium
      a.vui-align-middle.vui-m-right--small(
        target = '_blank'
        @click.prevent = 'showOffer(id)'
      ) Manage Schedule
      button.vui-button.vui-button--brand Redeliver

    accept-order-modal(
      v-show='showAcceptOrderModal'
      @close='showAcceptOrderModal = false'
    )
    reject-order-modal(
      v-show='showRejectOrderModal'
      @close='showRejectOrderModal = false'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import AcceptOrderModal from '~components/pending-orders/accept-order-modal'
  import RejectOrderModal from '~components/pending-orders/reject-order-modal'

  export default {
    name: 'pending-orders-id',

    metaInfo: {
      title: 'Pending Order Details',
    },

    components: {
      AcceptOrderModal,
      RejectOrderModal
    },

    props: {
      summaryRoute: {
        type: String,
        default: 'sellers-order-management-pending-orders'
      },
      ordersRoute: {
        type: String,
        default: 'sellers-reporting-order-reporting'
      },
      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },

    data () {
      return {
        id: this.$route.params.id,
        order: {},
        showAcceptOrderModal: false,
        showRejectOrderModal: false,
        offer: {
          makegoodNumber: 12676
        }
      }
    },

    methods: {
      fetchOrder (id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      showSummary () {
        this.$router.push({
          name: this.summaryRoute
        })
      },

      showOrders () {
        this.$router.push({
          name: this.ordersRoute
        })
      },

      showOffer (id, version = '') {
        let routeInfo = {
          name: this.offerRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOrder(this.$route.params.id)
    }

  }
</script>
