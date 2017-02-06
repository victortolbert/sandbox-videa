<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--large
    table.vui-table.vui-table--striped.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(
            style = 'width: 90px'
          ) Order #[br] Completed
          th(
            style = 'width: 80px'
          ) Stations
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Station<br>Order #'
            )
          th(
            style = 'width: 130px'
          ) Manage #[br] Schedule
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Agency<br>Order #'
            )
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              title = 'Videa<br>Order #'
            )
          th(
            style = 'width: 280px'
          )
            vui-sorting-column(
              title = 'Advertiser'
            )
          th(
            style = 'width: 250px'
          )
            vui-sorting-column(
              title = 'Agency'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              title = 'Estimate'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Start Date'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'End Date'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Order<br>Value'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Spots<br>Ordered'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Spots<br>Missed'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Missed<br>Value'
            )
          th(
            style = 'width: 150px'
          ) Date/Time Order #[br] Completed
          th(
            style = 'width: 120px'
          ) Order #[br] Completed By
      tbody
        tr(
          v-for = 'order in orders'
        )
          td.vui-text-align--center(
            style = 'width: 90px'
          )
            label.vui-checkbox
              input(
                type = 'checkbox'
                v-model = 'order.isVideaArchived'
              )
              span.vui-checkbox--faux
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.stationCallLetters'
            style = 'width: 70px'
          ) {{ $store.state.stationCallLetters }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.externalTrafficOrderNumber'
            style = 'width: 100px'
          ) {{ order.externalTrafficOrderNumber }}
          td.vui-truncate(
            @click.prevent = 'updateBuyMakegoods(order)'
            v-bind:title = '"Update Buy/Makegoods"'
            style = 'width: 130px'
          )
            //- router-link(
            //-   v-bind:to = '{ name: "sellers-order-management-order-search-id", params: { id: order.videaOrderNumber } }'
            //- ) Manage
            a.vui-align-middle.vui-m-right--small(
              target = '_blank'
              @click.prevent = 'showOffer(offer.makegoodNumber)'
            ) Manage
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.agencyOrderNumber'
            style = 'width: 110px'
          ) {{ order.agencyOrderNumber }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.id'
            style = 'width: 110px'
          ) {{ order.id }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.advertiser'
            style = 'width: 280px'
          ) {{ order.advertiser }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.agency'
            style = 'width: 110px'
          )  {{ order.agency }}
          td.vui-text-align--right.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.estimate'
            style = 'width: 90px'
          ) {{ order.estimate }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.flightStartDate'
            style = 'width: 100px'
          ) {{ order.flightStartDate }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.endDate'
            style = 'width: 90px'
          ) {{ order.endDate }}
          td.vui-text-align--right.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.totalCost'
            style = 'width: 100px'
          ) {{ order.totalCost }}
          td.vui-text-align--right.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.totalSpotsNumber'
            style = 'width: 100px'
          ) {{ order.totalSpotsNumber }}
          td.vui-text-align--right.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.totalMissedSpots'
            style = 'width: 100px'
          ) {{ order.totalMissedSpots }}
          td.vui-text-align--right.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.totalMissedSpotCost'
            style = 'width: 100px'
          ) {{ order.totalMissedSpotCost }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.videaArchivedDateTime'
            style = 'width: 150px'
          ) {{ order.videaArchivedDateTime }}
          td.vui-truncate(
            @click = 'clickRow(order)'
            v-bind:title = 'order.videaArchivedByName'
            style = 'width: 120px'
          ) {{ order.videaArchivedByName }}
</template>

<script>
  export default {
    props: {
      orders: {
        type: Array
      },
      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },
    data () {
      return {
        offer: {
          makegoodNumber: 12676
        }
      }
    },
    // data () {
    //   return {
    //     orders: [
    //       // {
    //       //   isVideaArchived: true,
    //       //   stationCallLetters: 'KMYT',
    //       //   externalTrafficOrderNumber: '133661',
    //       //   agencyOrderNumber: '00791791',
    //       //   videaOrderNumber: 'V0005009',
    //       //   advertiserName: 'CARL KARCHER ENT INC',
    //       //   agencyName: 'INITIATIVE LA',
    //       //   estimate: '0121',
    //       //   startDate: '09/26/2016',
    //       //   endDate: '12/25/2016',
    //       //   totalCost: '1050',
    //       //   totalSpotsNumber: 30,
    //       //   totalMissedSpots: 0,
    //       //   totalMissedSpotCost: 0,
    //       //   videaArchivedDate: '12/25/2016',
    //       //   videaArchivedByName: '12/25/2016'
    //       // }
    //     ]
    //   }
    // },
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
      },

      clickRow (item) {

      },

      updateBuyMakegoods (item) {

      }
    }
  }
</script>
