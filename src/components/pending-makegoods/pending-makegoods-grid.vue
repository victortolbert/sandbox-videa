<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped
      thead
        tr
          th(rowspan = '2') View #[br] Offer
          th(rowspan = '2') View #[br] Order
          th(rowspan = '2') Advertiser
          th(rowspan = '2') Agency
          th(rowspan = '2') Campaign Name
          th(rowspan = '2') Flight Start
          th(rowspan = '2') Flight End
          th(colspan = '6') Makegood
          th(colspan = '4') Station
          th(colspan = '2') Agency
          th(rowspan = '2') Videa Order
          th(rowspan = '2') MG Created by
          th(rowspan = '2') Date/Time Created
          th(rowspan = '2') MG Last updated by
          th(rowspan = '2') Date/Time last updated
          th(rowspan = '2') CPE
        tr
          th(style = 'padding-left: 0.5rem') Number
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
          td: a(
            v-bind:href = '`/sellers/order-management/pending-makegoods/${offer.orderId}/${offer.offerType}`'
            target = '_blank'
          )
            vui-icon.vui-icon--small(name='medicine-bottle')
          td: a.vui-m-right--xx-small(
            v-bind:href = '`/sellers/reporting/order-reporting/${offer.orderId}`'
            target = '_blank'
          ) Open

          td {{ offer.advertiser.toUpperCase() }}
          td {{ offer.agency.toUpperCase() }}
          td {{ offer.campaignName }}
          td {{ offer.flightStartDate }}
          td {{ offer.flightEndDate }}
          td.vui-text-align--center {{ offer.makegoodNumber }}
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
            a(@click.prevent = '')
              vui-icon(
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
              vui-icon(
                name = 'sticky-note-o'
              )
          td {{ offer.orderId }}
          td
          td
          td
          td
          td {{ offer.cpe }}
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
        default: 'sellers-order-management-pending-makegoods-id-offer'
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
            id: id,
            offer: 'makegood'
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
