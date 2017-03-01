<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
      thead
        tr
          th(style='width: 41px')
          th(style='width: 48px') Sent
          th(style='width: 52px') Draft
          th(style='width: 68px') Select
          th(style='width: 74px'): vui-sorting-column(title='Line #')
          th(style='width: 70px'): vui-sorting-column(title='Days')
          th(style='width: 110px'): vui-sorting-column(title='Time')
          th.vui-truncate(style='width: 200px'): vui-sorting-column(title='Program')
          th(style='width: 83px'): vui-sorting-column(title='Length')
          th(style='width: 92px'): vui-sorting-column(title='Ordered<br>Spots')
          th(style='width: 88px'): vui-sorting-column(title='Open<br>Preempts')
          th(style='width: 82px'): vui-sorting-column(title='Traffic<br>Spots')
          th(style='width: 140px') Current #[br] Information
          th.spot-allocation-column(v-if='isShowSpotAllocations' style='width: 503px')
            makegoods-spot-allocation-header(v-model='orderLineItems[0].weeklySpotAllocations')
          th(style='width: 100px'): vui-sorting-column(title='Spot Rate')
          th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Buyer<br>IMP')
          th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Videa<br>IMP')
          th(style='width: 100px'): vui-sorting-column(title='Line<br>$ Total')
          th(style='width: 100px') Buyer #[br] Comment
          th(style='width: 132px') Station #[br] Order Comment
          th(style='width: 100px') Spot Option
          th(style='width: 100px') Line Type
      tbody
        template(
          v-bind:class="{ 'vui-is-selected': offer.isExpanded }"
          v-for='lineItem in orderLineItems'
          v-show='!isOnlyMissedShown || lineItem.totalMissedSpots > 0'
        )
          tr
            td(style='width: 41px')
              a(v-on:click.prevent='toggleDetail(lineItem)')
                vui-icon.vui-icon--small.vui-align-middle(
                  v-bind:name = 'lineItem.isExpanded ? "caret-lower-right" : "caret-right"'
                )
            td.vui-text-align--center(style='width: 48px')
              a.vui-m-right--xx-small(
                @click = 'showlineItemDialog(lineItem.firstSentMakegood)'
                v-show = 'lineItem.firstSentMakegood'
                title = 'Click to open the Offer which has been sent and is awaiting approval'
              )
                vui-icon(name = 'medicine-bottle')
            td.vui-text-align--center(style='width: 52px')
              a(
                @click = 'showOfferDialog(lineItem.firstDraftMakegood)'
                v-show = 'lineItem.firstDraftMakegood'
                title = 'Indicates this Buy Line has DRAFT Offers'
              )
                vui-icon.vui-icon--small(name='pencil-square')
            td.vui-text-align--center.overflow-visible(style='width: 68px')
              label.vui-checkbox(
                v-if = 'isCheckboxVisible(lineItem)'
                title = 'Select to include in lineItem'
              )
                input.vui-input(
                  @change='orderLineOnSelected(lineItem)'
                  v-model = 'lineItem.isSelected'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
            td.vui-text-align--right(
              v-bind:title = 'lineItem.lineNumber'
              v-if = '!lineItem.isOrbit'
              style = 'width: 74px'
            ) {{ lineItem.lineNumber }}
            td.vui-truncate(
              v-bind:title = 'lineItem.days'
              style = 'width: 70px'
            ) {{ lineItem.days }}
            td.vui-truncate(
              v-bind:title = 'lineItem.time'
              style = 'width: 110px'
            ) {{ lineItem.time }}
            td.vui-truncate(
              v-bind:title = 'lineItem.program'
              style = 'width: 200px'
            ) {{ lineItem.program }}
            td.vui-text-align--center(
              v-bind:title = 'lineItem.length'
              style = 'width: 83px'
            ) {{ lineItem.length }}
            td.vui-text-align--right(
              v-bind:title = 'lineItem.totalSpots'
              style = 'width: 92px'
            ) {{ lineItem.orderSpots }}
            td.vui-text-align--right.vui-text-color--error(
              v-bind:title = 'lineItem.totalMissedSpots'
              style = 'width: 88px'
            ) {{ lineItem.openPreempts }}
            td.vui-text-align--right(
              v-bind:title = 'lineItem.totalTrafficSpots'
              style = 'width: 82px'
            ) {{ lineItem.trafficSpots }}
            td.vui-text-align--center(style = 'width: 140px')
              a(
                @click = 'showCurrentInfo(lineItem)'
                title = 'Click to see current rates & ratings and matched Avails'
              )
                vui-icon.vui-icon--small(name = 'popout')
            td.spot-allocation-cell(
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-bind:spots = 'lineItem.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right.currency(
              v-bind:title = 'lineItem.orderedSpotRate'
              style = 'width: 100px'
            ) {{ lineItem.spotRate | numberWithCommas | formatMoney }}
            td.vui-text-align--right(
              v-bind:title = 'lineItem.orderedImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ lineItem.buyerRtg | formatRating }}
            td.vui-text-align--right(
              v-bind:title='lineItem.videaCurrentImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ lineItem.videaRtg | formatRating }}
            td.vui-text-align--right.currency(
              v-bind:title = 'lineItem.lineTotalMoney'
              style = 'width: 100px'
            ) {{ lineItem.lineNumberTotal | numberWithCommas | formatMoney }}
            td.vui-truncate(
              v-bind:title='lineItem.buyerComment'
              style = 'width: 100px'
            ) {{ lineItem.buyerComment }}
            td.vui-truncate(
              v-bind:title='lineItem.stationOrderComment'
              style = 'width: 132px'
            ) {{ lineItem.videaToStationComments }}
            td(style = 'width: 100px')
            td(
              v-bind:title = 'lineItem.lineType'
              style = 'width: 100px'
            ) {{ lineItem.lineType }}
          tr.vui-is-expanded(
            v-if = 'lineItem.isExpanded'
            vt-show = '!isOnlyMissedShown || lineItem.totalMissedSpots > 0'
          )
            td.vui-align-top.om-nested-table-container.bordered(colspan='14' style='padding: 0')
              makegoods-nested-order-line-grid(
                v-bind:lineItem='lineItem'
                v-bind:is-show-spot-allocations = 'isShowSpotAllocations'
                v-bind:is-missed-spots-shown = 'isMissedSpotsShown'
              )
            td.vui-align-top.om-nested-table-container.bordered(colspan='4' style='padding: 0')
              makegoods-nested-order-line-invoice-details-grid(
                v-bind:agencyInvoiceDetails='lineItem.agencyInvoiceDetails'
              )
            td.vui-align-top.om-nested-table-container.bordered(colspan='4' style='padding: 0')
              makegoods-nested-order-line-makegoods-grid(
                v-bind:makegoods='lineItem.makegoods'
              )
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    props: {
      order: {
        type: Object
      },

      isShowSpotAllocations: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        orderLineItems: [],
        isImpressionsBuyType: true,
        isOnlyMissedShown: true,
        isMissedSpotsShown: true,
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
      this.fetchOrderLineItems()
    }
  }
</script>
