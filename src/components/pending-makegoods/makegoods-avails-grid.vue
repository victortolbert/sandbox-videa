<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-missed-spots
      thead
        tr
          th.vui-truncate(style='width: 240px'): vui-sorting-column(title='Program')
          th(style='width: 102px'): vui-sorting-column(title='Start Time')
          th(style='width: 102px'): vui-sorting-column(title='End Time')
          th(style='width: 95px'): vui-sorting-column(title='Days')
          th(style='width: 140px')
            vui-sorting-column(title='Daypart')
          th(style='width: 60px')
            vui-sorting-column(title='Len')
          th(style='width: 77px')
            vui-sorting-column(title='MG<br>Spots')
          //- style='width: 48px'
          th.spot-allocation-column
            //- makegoods-spot-allocation-header(v-model='orderLineItems[0].weeklySpotAllocations')
          th(style='width: 100px')
            vui-sorting-column(title='Spot Rate')
          th(v-if='isImpressionsBuyType' style='width: 122px')
            vui-sorting-column(title='Videa<br>Impressions')
          th(v-if='isImpressionsBuyType' style='width: 85px')
            vui-sorting-column(title='Station<br>CPM')
          th(style='width: 110px')
            vui-sorting-column(title='Makegood<br>Comment')
          th(style='width: 85px')
            vui-sorting-column(title = 'GDLNS')
          th(style='width: 255px')
            vui-sorting-column(title = 'Guidelines Warnings / Violations')
      //- tbody(v-for='lineItem in orderLineItems')
      //-   tr(v-bind:class = '{ "vui-is-selected": lineItem.isExpanded }')
      //-     td.vui-text-align--center(style='width: 80px')
      //-       a(v-on:click = 'lineItem.isExpanded = !lineItem.isExpanded')
      //-         vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
      //-           v-bind:name='lineItem.isExpanded ? "caret-lower-right" : "caret-right"'
      //-         )
      //-     td.vui-text-align--right(:title='lineItem.lineNumber' style='width: 78px') {{ lineItem.lineNumber }}
      //-     td(v-bind:title='lineItem.days' style='width: 82px') {{ lineItem.days }}
      //-     td.vui-truncate(v-bind:title='lineItem.time' style='width: 110px') {{ lineItem.time }}
      //-     td.vui-truncate(v-bind:title='lineItem.programName' style='width: 200px') {{ lineItem.program }}
      //-     td(v-bind:title='lineItem.spotLength' style='width: 88px') {{ lineItem.length }}
      //-     td.vui-text-align--right(v-bind:title='lineItem.totalSpots' style='width: 116px') {{ lineItem.orderSpots }}
      //-     td.vui-text-align--right(v-bind:title='lineItem.totalMissedSpots' style='width: 100px') {{ lineItem.openPreempts }}
      //-     td.vui-text-align--right(v-bind:title='lineItem.totalTrafficSpots' style='width: 86px') {{ lineItem.trafficSpots }}
      //-     td.vui-text-align--center(style='width: 140px')
      //-       a.pointer.current-info.popup(v-on:click='showCurrentInfo(lineItem)')
      //-         vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(name='popout')
      //-     td(:title='lineItem.startDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.startDate }}
      //-     td(:title='lineItem.endDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.endDate }}
      //-     td.spot-allocation-cell(
      //-       v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
      //-       v-if = 'isShowSpotAllocations'
      //-     )
      //-       //- makegoods-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown'
      //-       //-   v-bind:spots = 'lineItem.weeklySpotAllocations'
      //-       //- )
      //-       //- makegoods-spot-allocation-with-traffic-spots(
      //-       //-   v-bind:spots = 'lineItem.weeklySpotAllocations'
      //-       //-   v-if = '!isMissedSpotsShown'
      //-       //- )
      //-     td.vui-text-align--right(
      //-       v-bind:title='lineItem.orderedSpotRate' style='width: 100px') {{ lineItem.spotRate | numberWithCommas | formatMoney }}
      //-     td.vui-text-align--right(
      //-       v-if = '!isImpressionsBuyType'
      //-       v-bind:title = 'lineItem.orderedRating'
      //-       style = 'width: 100px'
      //-     ) {{ lineItem.buyerRtg | formatRating }}
      //-     td.vui-text-align--right(
      //-       v-if = '!isImpressionsBuyType'
      //-       v-bind:title = 'lineItem.videaCurrentRating'
      //-       style = 'width: 100px'
      //-     ) {{ lineItem.videaRtg }}
      //-     td.vui-text-align--right.currency(v-bind:title='lineItem.lineTotalMoney' style='width: 100px') {{ lineItem.lineNumberTotal | numberWithCommas | formatMoney }}
      //-     td(v-bind:title='lineItem.buyerComment' style='width: 100px') {{ lineItem.buyerComment }}
      //-     td(v-bind:title='lineItem.stationOrderComment' style='width: 150px') {{ lineItem.videaToStationComments }}
      //-     td(title='' style='width: 100px')
      //-     td(v-bind:title='lineItem.lineType' style='width: 100px') {{ lineItem.lineType }}
      //-   tr.vui-is-expanded(v-if='lineItem.isExpanded')

      //-     td.vui-align-top.om-nested-table-container.bordered(
      //-       v-bind:colspan = 'isShowSpotAllocations ? 11 : 10',
      //-       style = 'padding: 0'
      //-     )
      //-       makegoods-nested-order-line-grid(
      //-         v-bind:lineItem='lineItem'
      //-         v-bind:is-show-spot-allocations = 'isShowSpotAllocations'
      //-         v-bind:is-missed-spots-shown = 'isMissedSpotsShown'
      //-       )

      //-     td.vui-align-top.om-nested-table-container.bordered(colspan='4' style='padding: 0')
      //-       makegoods-nested-order-line-invoice-details-grid(
      //-         v-bind:agencyInvoiceDetails='lineItem.agencyInvoiceDetails'
      //-       )
      //-     td.vui-align-top.om-nested-table-container.bordered(colspan='6' style='padding: 0')
      //-       makegoods-nested-order-line-makegoods-grid(
      //-         v-bind:makegoods='lineItem.makegoods'
      //-       )
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    props: {
      orderLineItems: {
        type: Array
      },

      order: {
        type: Object
      }
    },

    data () {
      return {
        // orderLineItems: [],
        spotAllocationNavigator: {
          tableCellWidth: '503px'
        },
        isShowSpotAllocations: true,
        isImpressionsBuyType: true,
        isOnlyMissedShown: true,
        isMissedSpotsShown: false,
        orderDetailsGridExpandingColumnsWidths: {
          blank: '0px',
          unitAiredStatusName: '80px',
          spotNumber: '78px',
          programPlaced: '200px',
          airTime: '110px',
          airDay: '82px',
          priority: '88px',
          status: '116px',
          airDate: '100px',
          lineNumber: '86px',
          altLineNumber: '60px',
          assignedMakegoodId: '72px',
          isciAdId: '80px',
          invoiceDate: '85px',
          externalInvoiceId: '81px',
          affidavitRate: '81px'
        },
        items: [
          {
            isExpanded: false,
            isSelected: false,
            firstSentMakegood: null,
            firstDraftMakegood: null,
            totalMissedSpots: 1,
            isOrbit: true,
            lineNumber: 1,
            days: 'MO-FR',
            time: '6 - 6:30pm',
            programName: ' FOX NEWS AT',
            spotLength: '30 s',
            totalSpots: 1,
            totalTrafficSpots: 1,
            weeklySpotAllocations: [],
            orderedSpotRate: '0',
            orderedImpressions: ' 8.4',
            videaCurrentImpressions: '',
            lineTotalMoney: '0',
            buyerComment: '',
            stationOrderComment: '',
            lineType: 'Original'
          }
        ],
        nestedOrderLineGridColumns: {
          unitAiredStatusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Aired<br>Status', columnName: 'unitAiredStatusName' },
          spotNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spot#', columnName: 'spotNumber' },
          programPlaced: { sortable: true, isSorted: false, sortedDesc: false, title: 'Program Placed', columnName: 'programName' },
          statusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Status<br>Name', columnName: 'statusName' },
          priority: { sortable: true, isSorted: false, sortedDesc: false, title: 'Priority', columnName: 'priority' },
          airDay: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Day', columnName: 'airDay' },
          airDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Date', columnName: 'airDate' },
          airTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Time', columnName: 'airTime' },
          spotLength: { sortable: true, isSorted: false, sortedDesc: false, title: 'Length', columnName: 'spotLength' },
          reason: { sortable: true, isSorted: false, sortedDesc: false, title: 'Reason', columnName: 'currentStateDescription' },
          lineNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station Line#', columnName: 'lineNumber' }
        },
        nestedOrderLineInvoiceDetailsGridColumns: {
          isciAdId: { sortable: true, isSorted: false, sortedDesc: false, title: 'ISCI<br>AD ID', columnName: 'isciAdId' },
          invoiceDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station<br>Inv. Date', columnName: 'invoiceDate' },
          externalInvoiceId: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station<br>Inv. Number', columnName: 'externalInvoiceId' },
          affidavitRate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station Inv. Amt.', columnName: 'affidavitRate' }
        },
        nestedOrderLineMakegoodsGridColumns: {
          sellerOfferId: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG#', columnName: 'sellerOfferId' },
          statusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG Status', columnName: 'statusName' },
          confirmDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG Applied', columnName: 'confirmDate' },
          newMakegoodLines: { sortable: true, isSorted: false, sortedDesc: false, title: 'New MG Lines', columnName: 'newMakegoodLines' }
        }
      }
    },

    watch: {
      orderLineItems () {
        this.orderLineItems = this.value
      }
    },

    methods: {
      fetchOrderLineItems () {
        axios.get('/orderLineItems')
          .then((response) => {
            this.orderLineItems = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      toggleDetail (offer) {
        offer.isExpanded = !offer.isExpanded
      },

      isCheckboxVisible (item) {},
      orderLineOnSelected (item) {},
      showCurrentInfo (item) {}
    },

    created () {
      // this.fetchOrderLineItems()
    }
  }
</script>
