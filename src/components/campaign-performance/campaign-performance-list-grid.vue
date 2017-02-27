<template lang="pug">
  div
    table.vui-table.vui-table--striped.vui-no-row-hover
      thead
        tr
          th.vui-cell-wrap(
            v-bind:style = '{ "max-width": column.width, "min-width": column.width }'
            v-for = 'column in gridColumns'
            v-show = 'column.isVisible'
          )
            vui-sorting-column(
              v-bind:column-name = 'column.label'
              v-bind:current-sorting = 'column.currentSorting'
              v-bind:sortable = 'column.sortable'
              v-bind:title = 'column.label'
              sorting-changed = 'sortingChanged(column)'
            )
      tbody(
        v-show = 'campaigns'
      )
        tr(
          v-for = 'campaign in campaigns'
        )
          td.vui-truncate(
            v-bind:title = 'campaign.stationOrderNumber'
            v-show = 'columns.stationOrderNumber.isVisible'
          )
            router-link(
              v-bind:to = '{ name: "sellers-campaign-performance-id", params: { id: campaign.stationOrderNumber } }'
            ) {{ campaign.stationOrderNumber }}
          td.vui-truncate(
            v-bind:title = 'campaign.videaOrderNumber'
            v-show = 'columns.videaOrderNumber.isVisible'
          )
            router-link(
              v-bind:to = '{ name: "sellers-reporting-order-reporting-id", params: { id: campaign.videaOrderNumber } }'
            ) {{ campaign.videaOrderNumber }}
          td.vui-truncate(
            v-bind:title = 'campaign.advertiser'
            v-show = 'columns.advertiser.isVisible'
          ) {{ campaign.advertiser }}
          td.vui-truncate(
            v-bind:title = 'campaign.agencyName'
            v-show = 'columns.agency.isVisible'
          ) {{ campaign.agency }}
          td.vui-truncate(
            v-bind:title = 'campaign.product'
            v-show = 'columns.product.isVisible'
          ) {{ campaign.product }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.estimateNumber'
            v-show = 'columns.estimateNumber.isVisible'
          ) {{ campaign.estimateNumber }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.revenue'
            v-show = 'columns.revenue.isVisible'
          ) {{ campaign.revenue | numberWithCommas | formatMoney }}
          td.vui-truncate(
            v-bind:title = 'campaign.flightStartDate'
            v-show = 'columns.flightStart.isVisible'
          ) {{ campaign.flightStartDate }}
          td.vui-truncate(
            v-bind:title = 'campaign.flightEndDate'
            v-show = 'columns.flightEnd.isVisible'
          ) {{ campaign.flightEndDate }}
          td.vui-truncate(
            v-bind:title = 'campaign.campaignDelivery'
            v-show = 'columns.campaignDelivery.isVisible'
          )
            .vui-grid.vui-grid--align-spread
              span(v-if="campaign.campaignDeliveryPercent") {{ campaign.campaignDeliveryPercent | decimalToPercent }}
              span(v-else) N/A


              span(v-if="campaign.campaignDeliveryPercent && campaign.campaignDeliveryPercent >= 0.95")
                vui-icon.vui-m-left--x-small(name='stop', style='color: #3B7F36')

              span(v-if="campaign.campaignDeliveryPercent && campaign.campaignDeliveryPercent >= 0.80 && campaign.campaignDeliveryPercent < 0.95")
                vui-icon.vui-m-left--x-small(name='stop', style='color: #F58220')


              //- span(v-if="campaign.campaignDeliveryPercent < 0.90 || campaign.campaignDeliveryPercent >= 0.80")
              //-   vui-icon.vui-m-left--x-small(name = 'stop', style='color: #F58220')
              //- span(v-else)



          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.currentGrpsImps'
            v-show = 'columns.currentRtgsImps.isVisible'
          ) {{ campaign.currentGrpsImps | formatRating }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.purchasedGrpsImps'
            v-show = 'columns.purchasedGrpsImpsToDate.isVisible'
          ) {{ campaign.purchasedGrpsImps }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.difference'
            v-show = 'columns.difference.isVisible'
          ) {{ campaign.difference }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.currentHouseholdGrpsImps'
            v-show = 'columns.currentHhGrpsImps.isVisible'
          ) {{ campaign.currentHouseholdGrpsImps }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.totalPurchasedGrpsImps'
            v-show = 'columns.totalPurchasedGrpsImps.isVisible'
          ) {{ campaign.totalPurchasedGrpsImps }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.demoName'
            v-show = 'columns.demo.isVisible'
          ) {{ campaign.demoName }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.weeksRemaining'
            v-show = 'columns.weeksRemaining.isVisible'
          ) {{ campaign.orderLastUpdated }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'campaign.weeksRemaining'
            v-show = 'columns.weeksRemaining.isVisible'
          ) {{ campaign.weeksRemaining }}
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: [
          { isVisible: true, width: '100px', field: 'stationOrderNumber', label: 'Station Order #', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'videaOrderNumber', label: 'Videa Order #', currentSorting: '', sortable: true },
          { isVisible: true, field: 'advertiser', label: 'Advertiser', currentSorting: '', sortable: true },
          { isVisible: true, field: 'agency', label: 'Agency', currentSorting: '', sortable: true },
          { isVisible: true, field: 'product: ', label: 'Product', currentSorting: '', sortable: true },
          { isVisible: true, width: '80px', field: 'estimateNumber', label: 'Est. #', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'revenue', label: 'Revenue', currentSorting: '', sortable: true },
          { isVisible: true, field: 'flightStart', label: 'Flight Start', currentSorting: '', sortable: true },
          { isVisible: true, field: 'flightEnd', label: 'Flight End', currentSorting: '', sortable: true },
          { isVisible: true, field: 'campaignDelivery', label: 'Campaign Delivery %', currentSorting: '', sortable: true },
          { isVisible: true, width: '110px', field: 'currentRtgsImps', label: 'Current RTGs/IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '130px', field: 'purchasedGrpsImpsToDate', label: 'Purchased GRPs/IMPs To Date', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'difference', label: '+/-', currentSorting: '', sortable: true },
          { isVisible: true, width: '115px', field: 'currentHhGrpsImps', label: 'Current HH GRPs/IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '130px', field: 'totalPurchasedGrpsImps', label: 'Total Purchased GRPs/ IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'demo', label: 'Demo', currentSorting: '', sortable: true },
          { isVisible: true, field: 'orderLastUpdated', label: 'Order Last Updated', currentSorting: '', sortable: true },
          { isVisible: true, width: '120px', field: 'weeksRemaining', label: 'Weeks Remainining', currentSorting: '', sortable: true }
        ],
        columns: {
          stationOrderNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          videaOrderNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          advertiser: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          agency: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          product: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          estimateNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          revenue: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          flightStart: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          flightEnd: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          campaignDelivery: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          currentRtgsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          purchasedGrpsImpsToDate: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          difference: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          currentHhGrpsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          totalPurchasedGrpsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          demo: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          orderLastUpdated: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          weeksRemaining: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true }
        },
        campaigns: require('./campaign-performance.config').context.campaigns
      }
    },
    methods: {
      showCampaignDetails (id) {
        this.$router.push({
          name: 'sellers-campaign-performance-id',
          params: {
            id: id
          }
        })
      },

      showOrderDetails (id) {
        this.$router.push({
          name: 'sellers-reporting-order-reporting-id',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>
