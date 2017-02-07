<template lang="pug">
    .vui-scrollable--x
      table.vui-table.vui-table--striped.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(
              style = 'width: 60px'
            ) View #[br] Order
            th(
              style = 'width: 60px'
            ) Create #[br] MG's
            th(
              style = 'width: 125px'
            ) Open Pre-empt #[br] Note
            th(
              style = 'width: 90px'
            )
              vui-sorting-column(
                title = 'Station<br>Order'
              )
            th(
              style = 'width: 106px'
            ) Videa Order
            th(
              style = 'width: 130px'
            )
              vui-sorting-column(
                title = 'Total $<br>Pre-empted'
            )
            th(
              style = 'width: 110px'
            )
              vui-sorting-column(
                title = 'Air Date'
            )
            th(
              style = 'width: 110px'
            )
              vui-sorting-column(
                title = 'Air Time'
            )
            th(
              style = 'width: 120px'
            )
              vui-sorting-column(
                title = 'Pre-empt<br>Reason'
            )
            th(
              style = 'width: 300px'
            )
              vui-sorting-column(
                title = 'Agency'
            )
            th(
              style = 'width: 250px'
            )
              vui-sorting-column(
                title = 'Advertiser'
            )
            th(
              style = 'width: 250px'
            ) Campaign Name
            th(
              style = 'width: 140px'
            )
              vui-sorting-column(
                title = 'C/P/E'
            )
            th(
              style = 'width: 116px'
            )
              vui-sorting-column(
                title = 'Flight Start'
            )
            th(
              style = 'width: 110px'
            )
              vui-sorting-column(
                title = 'Flight End'
            )
            th(
              style = 'width: 90px'
            ) Demo
            th(
              style = 'width: 200px'
            ) Buyer Name
        tbody
          tr(
            v-for = 'item in items'
          )
            td.vui-text-align--center(
              style = 'width: 60px'
            )
              a.pointer.text-underline(
                v-show = 'item.videaOrderNumber'
                target = '_blank'
                title = 'Click to view this Order'
              ) Open
            td.vui-text-align--center(
              style = 'width: 60px'
            )
              a.pointer(
                v-show = 'item.videaOrderNumber'
                target = '_blank'
                title = 'Click to create a MG Offer'
              )
                vui-icon.vui-icon--small(
                  name = 'medicine-bottle'
                )
            td.vui-text-align--center(
              @click = 'openEditNotesPopup(item)'
              v-bind:title = 'item.customerCareNotes'
              style = 'width: 125px'
            )
              a.exists(
                v-bind:class = '{"exists": item.customerCareNotes, "notExists": !item.customerCareNotes}'
                title = 'Click to update Customer Care notes'
              )
                vui-icon(
                  name = 'sticky-note-o'
                )
            td(
              v-bind:title = 'item.orderNumber'
              style = 'width: 90px'
            ) {{ item.orderNumber }}
            td(
              v-bind:title = 'item.videaOrderNumber'
              style = 'width: 106px'
            ) {{ item.videaOrderNumber }}
            td.vui-text-align--right.currency(
              v-bind:title = 'item.programSpotUnitRate'
              style = 'width: 130px'
            ) {{ item.programSpotUnitRate }}
            td.vui-truncate(
              v-bind:title = 'item.airDateTime'
              style = 'width: 110px'
            ) {{ item.airDateTime }}
            td.vui-truncate(
              v-bind:title = 'item.airDateTime'
              style = 'width: 110px'
            ) {{ item.airDateTime }}
            td(
              v-bind:title = 'item.currentStateDescription'
              style = 'width: 120px'
            ) {{ item.currentStateDescription }}
            td.vui-truncate(
              v-bind:title = 'item.agencyName'
              style = 'width: 300px'
            ) {{ item.agencyName }}
            td.vui-truncate(
              v-bind:title = 'item.advertiserName'
              style = 'width: 250px'
            ) {{ item.advertiserName }}
            td.vui-truncate(
              v-bind:title = 'item.campaignName'
              style = 'width: 250px'
            ) {{ item.campaignName }}
            td(
              v-bind:title = 'item.cpe'
              style = 'width: 140px'
            ) {{ item.cpe }}
            td(
              v-bind:title = 'item.orderStartDate'
              style = 'width: 116px'
            ) {{ item.orderStartDate }}
            td(
              v-bind:title = 'item.orderEndDate'
              style = 'width: 110px'
            ) {{ item.orderEndDate }}
            td(
              v-bind:title = 'item.demo'
              style = 'width: 90px'
            ) {{ item.demo }}
            td(
              v-bind:title = 'item.buyerName'
              style = 'width: 200px'
            ) {{ item.buyerName }}
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            orderNumber: '139610',
            stationOrderNumber: '5004',
            videaOrderNumber: 'V0005004',
            advertiserName: 'WHATABURGER',
            agencyName: 'KSM AUSTIN',
            productName: 'CORPORATE',
            estimate: '0016',
            revenue: '5230',
            flightStartDate: '09/26/2016',
            flightEndDate: '12/25/2016',
            currentGrpsImps: '',
            purchasedGrpsImps: '',
            difference: '',
            currentHouseholdGrpsImps: '',
            totalPurchasedGrpsImps: '88.3',
            demoName: ' P18-49',
            weeksRemaining: 2,
            programSpotUnitRate: '400',
            airDateTime: '10/22/2016 12:00 am',
            buyerName: 'Kathy Waldman',
            customerCareNotes: 'MARK kelley\'s note as a test. I also updated the open preempt note via the EOM screen.',
            orderStartDate: '06/27/2016',
            orderEndDate: '12/25/2016',
            cpe: 'Y1O/TRU/248',
            campaignName: '2016 NCAA FOOTBALL'
          }
        ]
      }
    },
    methods: {
      openEditNotesPopup (item) {

      }
    }
  }
</script>
