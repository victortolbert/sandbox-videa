<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover
      thead
        tr
          th(
            rowspan = '2'
          ) View<br>Offer
          th(
            rowspan = '2'
          ) View<br>Order
          th(
            rowspan = '2'
          ) Advertiser
          th(
            rowspan = '2'
          ) Agency
          th(
            rowspan = '2'
          ) CPE
          th(
            rowspan = '2'
          ) Flight Start
          th(
            rowspan = '2'
          ) Flight End
          th(
            colspan = '6'
          ) Makegood
          th(
            colspan = '4'
          ) Station
          th(
            colspan = '2'
          ) Agency
        tr
          th(
            style = 'padding-left: 0.5rem'
          ) Number
          th Status
          th Sent
          th Due
          th Total
          th Type
          th Order
          th Status
          th Notes
          th Action
          th Status
          th Notes

      tbody
        tr(
          v-bind:class = '[ offer.overdue ? "overdue" : "" ]'
          v-for = 'offer in offers'
        )
          td
            a(
              @click.prevent = 'showOffer(offer.makegoodNumber)'
            )
              icon(
                name = 'medicine-bottle'
              )
              span {{ offer.makegoodNumber }}
          td: router-link(
            v-bind:to = '{ name: "sellers-reporting-order-reporting-id", params: { id: offer.orderId }}'
          ) {{ offer.orderId }}
          td {{ offer.advertiser }}
          td {{ offer.agency }}
          td {{ offer.cpe }}
          td {{ offer.flightStartDate }}
          td {{ offer.flightEndDate }}
          td
            a(
              @click.prevent = 'showOffer(offer.makegoodNumber)'
            )
              icon(
                name = 'medicine-bottle'
              )
              span {{ offer.makegoodNumber }}
          td
            span.vui-badge(
              v-bind:class = 'offer.offerStatus'
            ) {{ offer.offerStatus }}
          td {{ offer.makegoodNumber == 12676 ? dateMakegoodSent : offer.dateMakegoodSent }}
          td {{ offer.makegoodNumber == 12676 ? dateTimeOfferDue : offer.dateTimeOfferDue }}
          td.vui-text-align--right {{ offer.makegoodTotal | numberWithCommas | formatMoney }}
          td {{ offer.offerType }}

          td {{ offer.stationOrderNumber }}
          td
            span.vui-badge(
              v-bind:class = 'offer.acceptedByStation'
            ) {{ offer.acceptedByStation }}
          td.vui-text-align--center
            a(
              @click.prevent = ''
            )
              icon(
                name = 'sticky-note-o'
              )
          td.vui-text-align--center {{ offer.stationAction }}

          td
            span.vui-badge(
              v-bind:class = 'offer.acceptedByAgency'
            ) {{ offer.acceptedByAgency }}
          td.vui-text-align--center
            a(
              @click.prevent = ''
            )
              icon(
                name = 'sticky-note-o'
              )
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      offers: {
        type: Array
      },
      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },

    data () {
      return {
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY')
      }
    },

    methods: {
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
    }
  }
</script>
