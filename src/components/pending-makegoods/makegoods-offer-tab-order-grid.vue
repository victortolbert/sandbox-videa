<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
      thead
        tr
          th(style='width: 41px')
          th(style='width: 48px') Sent
          th(style='width: 52px') Draft
          th(style = 'width: 68px') Select
          th(style = 'width: 74px')
            vui-sorting-column(
              column-name = 'lineNumber'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.lineNumber)'
              title = 'Line #'
            )
          th(style = 'width: 70px')
            vui-sorting-column(
              column-name = 'days'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.days)'
              title = 'Days'
            )
          th(style = 'width: 110px')
            vui-sorting-column(
              column-name = 'time'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.time)'
              title = 'Time'
            )
          th.vui-truncate(style='width: 200px')
            vui-sorting-column(
              column-name = 'programName'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.programName)'
              title = 'Program'
            )
          th(style = 'width: 83px')
            vui-sorting-column(
              column-name = 'spotLength'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.spotLength)'
              title = 'Length'
            )
          th(style = 'width: 92px')
            vui-sorting-column(
              column-name = 'totalSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalSpots)'
              title = 'Ordered<br>Spots'
            )
          th(
            style = 'width: 88px'
          )
            vui-sorting-column(
              column-name = 'totalMissedSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalMissedSpots)'
              title = 'Missed<br>Spots'
            )
          th(
            style = 'width: 82px'
          )
            vui-sorting-column(
              column-name = 'totalTrafficSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalTrafficSpots)'
              title = 'Traffic<br>Spots'
            )
          th(
            style = 'width: 140px'
          )
            | Current
            br
            | Information
          th.spot-allocation-column(
            v-if = 'isShowSpotAllocations'
            style = 'width: 503px'
          )
            makegoods-spot-allocation-header(
              v-model = 'items[0].weeklySpotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'orderedSpotRate'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderedSpotRate)'
              title = 'Spot Rate'
            )
          th(
            v-if='isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'orderedImpressions'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderedImpressions)'
              title = 'Buyer<br>IMP'
            )
          th(v-if='isImpressionsBuyType' style='width: 100px')
            vui-sorting-column(
              column-name = 'videaCurrentImpressions'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.videaCurrentImpressions)'
              title = 'Videa<br>IMP'
            )
          th(style = 'width: 100px')
            vui-sorting-column(
              column-name = 'lineTotalMoney'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.lineTotalMoney)'
              title = 'Line<br>$ Total'
            )
          th(style='width: 100px') Buyer #[br] Comment
          th(style = 'width: 132px') Station #[br] Order Comment
          th(style = 'width: 100px') Spot Option
          th(style = 'width: 100px') Line Type
      tbody
        template(
          v-bind:class = "{ 'vui-is-selected': offer.isExpanded }"
          v-for = 'offer in orderLineItems'
          v-show = '!isOnlyMissedShown || offer.totalMissedSpots > 0'
        )
          tr
            td(style='width: 41px')
              a(v-on:click.prevent='toggleDetail(offer)')
                vui-icon.vui-icon--small.vui-align-middle(
                  v-bind:name = 'offer.isExpanded ? "caret-lower-right" : "caret-right"'
                  style = 'margin-left: -1rem'
                )
            td.vui-text-align--center(style='width: 48px')
              a.vui-m-right--xx-small(
                @click = 'showOfferDialog(offer.firstSentMakegood)'
                v-show = 'offer.firstSentMakegood'
                title = 'Click to open the Offer which has been sent and is awaiting approval'
              )
                vui-icon(name = 'medicine-bottle')
            td.vui-text-align--center(style='width: 52px')
              a(
                @click = 'showOfferDialog(offer.firstDraftMakegood)'
                v-show = 'offer.firstDraftMakegood'
                title = 'Indicates this Buy Line has DRAFT Offers'
              )
                vui-icon(name='pencil-square')
            td.vui-text-align--center.overflow-visible(style='width: 68px')
              label.vui-checkbox(
                v-if = 'isCheckboxVisible(offer)'
                title = 'Select to include in Offer'
              )
                input.vui-input(
                  @change='orderLineOnSelected(offer)'
                  v-model = 'offer.isSelected'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
            td.vui-text-align--right(
              v-bind:title = 'offer.lineNumber'
              v-if = '!offer.isOrbit'
              style = 'width: 74px'
            ) {{ offer.lineNumber }}
            td.vui-truncate(
              v-bind:title = 'offer.days'
              style = 'width: 70px'
            ) {{ offer.days }}
            td.vui-truncate(
              v-bind:title = 'offer.time'
              style = 'width: 110px'
            ) {{ offer.time }}
            td.vui-truncate(
              v-bind:title = 'offer.program'
              style = 'width: 200px'
            ) {{ offer.program }}
            td.vui-text-align--center(
              v-bind:title = 'offer.length'
              style = 'width: 83px'
            ) {{ offer.length }}
            td.vui-text-align--right(
              v-bind:title = 'offer.totalSpots'
              style = 'width: 92px'
            ) {{ offer.orderSpots }}
            td.vui-text-align--right.vui-text-color--error(
              v-bind:title = 'offer.totalMissedSpots'
              style = 'width: 88px'
            ) {{ offer.openPreempts }}
            td.vui-text-align--right(
              v-bind:title = 'offer.totalTrafficSpots'
              style = 'width: 82px'
            ) {{ offer.trafficSpots }}
            td.vui-text-align--center(style = 'width: 140px')
              a(
                @click = 'showCurrentInfo(offer)'
                title = 'Click to see current rates & ratings and matched Avails'
              )
                vui-icon(name = 'popout')
            td.spot-allocation-cell(
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-model = 'offer.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right.currency(
              v-bind:title = 'offer.orderedSpotRate'
              style = 'width: 100px'
            ) {{ offer.spotRate | numberWithCommas | formatMoney }}
            td.vui-text-align--right(
              v-bind:title = 'offer.orderedImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ offer.buyerRtg }}
            td.vui-text-align--right(
              v-bind:title='offer.videaCurrentImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ offer.videaRtg }}
            td.vui-text-align--right.currency(
              v-bind:title = 'offer.lineTotalMoney'
              style = 'width: 100px'
            ) {{ offer.lineNumberTotal | numberWithCommas | formatMoney }}
            td.vui-truncate(
              v-bind:title='offer.buyerComment'
              style = 'width: 100px'
            ) {{ offer.buyerComment }}
            td.vui-truncate(
              v-bind:title='offer.stationOrderComment'
              style = 'width: 132px'
            ) {{ offer.videaToStationComments }}
            td(style = 'width: 100px')
            td(
              v-bind:title = 'offer.lineType'
              style = 'width: 100px'
            ) {{ offer.lineType }}
          tr.vui-is-expanded(
            v-if = 'offer.isExpanded'
            v-show = '!isOnlyMissedShown || offer.totalMissedSpots > 0'
          )
            td.vui-align-top.om-nested-table-container.bordered(colspan='14' style='padding: 0')
              makegoods-nested-order-line-grid
            td.vui-align-top.om-nested-table-container.bordered(colspan='4' style='padding: 0')
              makegoods-nested-order-line-invoice-details-grid
            td.vui-align-top.om-nested-table-container.bordered(colspan='4' style='padding: 0')
              makegoods-nested-order-line-makegoods-grid
    //- grid
    //-   grid-item(size = '3/4')
    //-     .vui-box.vui-theme--shade
    //-   grid-item(size = '1/4')
    //-     .vui-box.vui-theme--shade
    //-       pre {{ order }}
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    props: ['order'],

    data () {
      return {
        orderLineItems: [],
        isShowSpotAllocations: true,
        isImpressionsBuyType: true,
        isOnlyMissedShown: true,
        isMissedSpotsShown: false,
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
