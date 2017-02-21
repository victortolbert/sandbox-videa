<template lang="pug">
    .vui-scrollable--x
      table.vui-table.vui-table--striped.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(style='width: 80px') View #[br] Order
            th(style='width: 60px') Create #[br] MG's
            th(style = 'width: 125px') Open Pre-empt #[br] Note
            th(style = 'width: 90px')
              vui-sorting-column(title = 'Station<br>Order')
            th(style = 'width: 106px') Videa Order
            th(style = 'width: 130px')
              vui-sorting-column(title = 'Total $<br>Pre-empted')
            th(style = 'width: 110px')
              vui-sorting-column(title = 'Air Date')
            th(style = 'width: 110px')
              vui-sorting-column(title = 'Air Time')
            th(style = 'width: 120px')
              vui-sorting-column(title = 'Pre-empt<br>Reason')
            th(style = 'width: 300px')
              vui-sorting-column(title = 'Agency')
            th(style = 'width: 250px')
              vui-sorting-column(title = 'Advertiser')
            th(style = 'width: 250px') Campaign Name
            th(style = 'width: 140px')
              vui-sorting-column(title = 'C/P/E')
            th(style = 'width: 116px')
              vui-sorting-column(title = 'Flight Start')
            th(style = 'width: 110px')
              vui-sorting-column(title = 'Flight End')
            th(style = 'width: 90px') Demo
            th(style = 'width: 200px') Buyer Name
        tbody
          tr(v-for = 'item in items')
            td.vui-text-align--center(style = 'width: 80px')
              a.pointer.text-underline(
                v-on:click = 'showOrder(item.videaOrderNumber)'
                v-show = 'item.videaOrderNumber'
                target = '_blank'
                title = 'Click to view this Order'
              ) Open
            td.vui-text-align--center(style = 'width: 60px')
              a.pointer(
                v-on:click = 'createOffer(item.videaOrderNumber)'
                v-on:click.prevent = 'showOffer(item.offerId)'
                v-show = 'item.videaOrderNumber'
                target = '_blank'
                title = 'Click to create a MG Offer'
              )
                vui-icon.vui-icon--small(name='medicine-bottle')
            td.vui-text-align--center(
              @click = 'openEditNotesPopup(item)'
              v-bind:title = 'item.customerCareNotes'
              style = 'width: 125px'
            )
              a.exists(
                v-bind:class = '{"exists": item.customerCareNotes, "notExists": !item.customerCareNotes}'
                title = 'Click to update Customer Care notes'
              )
                vui-icon(name = 'sticky-note-o')
            td(v-bind:title='item.orderNumber' style='width: 90px') {{ item.stationOrderNumber }}
            td(v-bind:title='item.videaOrderNumber' style='width: 106px') {{ item.videaOrderNumber }}
            td.vui-text-align--right.currency(v-bind:title='item.programSpotUnitRate' style='width: 130px') {{ item.programSpotUnitRate | numberWithCommas | formatMoney }}
            td.vui-truncate(v-bind:title='item.airDate' style='width: 110px') {{ item.airDate }}
            td.vui-truncate(v-bind:title='item.airTime' style='width: 110px') {{ item.airTime }}
            td(v-bind:title='item.currentStateDescription' style='width: 120px') {{ item.currentStateDescription }}
            td.vui-truncate(v-bind:title='item.agencyName' style='width: 300px') {{ item.agencyName }}
            td.vui-truncate(v-bind:title='item.advertiserName' style='width: 250px') {{ item.advertiserName }}
            td.vui-truncate(v-bind:title='item.campaignName' style='width: 250px') {{ item.campaignName }}
            td(v-bind:title='item.cpe' style='width: 140px') {{ item.cpe }}
            td(v-bind:title='item.flightStartDate' style='width: 116px') {{ item.flightStartDate }}
            td(v-bind:title='item.flightEndDate' style='width: 110px') {{ item.flightEndDate }}
            td(v-bind:title='item.demoName' style='width: 90px') {{ item.demoName }}
            td(v-bind:title='item.buyerName' style='width: 200px') {{ item.buyerName }}
</template>

<script>
  export default {
    props: {
      items: {
        type: Array
      },

      orders: {
        type: Array
      },

      orderRoute: {
        type: String,
        default: 'sellers-order-management-order-search-id'
      },

      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },

    methods: {
      openEditNotesPopup (item) {
      },

      showOrder (id, version = '') {
        let routeInfo = {
          name: this.orderRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
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
      },
    }
  }
</script>
