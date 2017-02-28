 <!-- v-on:click = 'showOrder(order.id)' -->
<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--large
    table.vui-table.vui-table--striped
      thead
        tr
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
              title = 'Open<br>Preempts'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Missed<br>Value'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Traffic Spots'
            )
          th(
            style = 'width: 90px'
          ) Order #[br] Completed

          th(
            style = 'width: 150px'
          ) Date/Time Order #[br] Completed
          th(
            style = 'width: 120px'
          ) Order #[br] Completed By
      tbody
        tr(
          v-for = 'order in orders'
          style = 'cursor: pointer'
        )
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.stationCallLetters'
            style = 'width: 70px'
          ) {{ $store.state.stationCallLetters }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.stationOrderNumber'
            style = 'width: 100px'
          ) {{ order.stationOrderNumber }}
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
              @click.prevent = 'showOffer(order.id)'
            ) Manage
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.agencyOrderNumber'
            style = 'width: 110px'
          ) {{ order.agencyOrderNumber }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.id'
            style = 'width: 110px'
          ) {{ order.id }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.advertiser'
            style = 'width: 280px'
          ) {{ order.advertiser.toUpperCase() }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.agency'
            style = 'width: 110px'
          )  {{ order.agency.toUpperCase() }}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.estimate'
            style = 'width: 90px'
          ) {{ order.estimate }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.flightStartDate'
            style = 'width: 100px'
          ) {{ order.flightStartDate }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.flightEndDate'
            style = 'width: 90px'
          ) {{ order.flightEndDate }}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.revenue'
            style = 'width: 100px'
          ) {{ order.revenue | numberWithCommas | formatMoney }}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.spotsOrdered'
            style = 'width: 100px'
          ) {{ order.spotsOrdered }}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.spotsMissed'
            style = 'width: 100px'
          ) {{ order.spotsMissed }}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.missedValue'
            style = 'width: 100px'
          ) {{ order.missedValue ? order.missedValue : '' | numberWithCommas | formatMoney}}
          td.vui-text-align--right.vui-truncate(
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.trafficSpots'
            style = 'width: 100px'
          ) {{ order.trafficSpots }}

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
            @click = 'showOrder(order.id)'
            v-bind:title = 'order.videaArchivedDateTime'
            style = 'width: 150px'
          ) {{ order.videaArchivedDateTime }}
          td.vui-truncate(
            @click = 'showOrder(order.id)'
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

      orderRoute: {
        type: String,
        default: 'sellers-order-management-order-search-id'
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
    //       //   stationOrderNumber: '133661',
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
      showOrder (id) {
        window.open(`/sellers/order-management/order-search/${id}`, '_blank')
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

      updateBuyMakegoods (item) {

      }
    }
  }
</script>
