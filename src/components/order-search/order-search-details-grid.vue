<template lang="pug">
.vui-scrollable--x
  table.vui-table.vui-no-row-hover.vui-table--fixed-layout
    thead
      tr
        th(style='width: 80px')
        th(style='width: 78px')
          vui-sorting-column(
            column-name = 'lineNumber'
            current-sorting = 'sorting'
            title = 'Line #'
          )
        th(style='width: 82px') Days
        th(style='width: 110px') Time
        th(style='width: 200px')
          vui-sorting-column(
            column-name = 'programName'
            current-sorting = 'sorting'
            title = 'Program'
          )
        th(style='width: 88px') Len
        th(style='width: 116px') Ordered #[br] Spots
        th(style='width: 100px') Open#[br] Preempts
        th(style='width: 86px') Traffic #[br] Spots
        th(style='width: 140px') Current #[br] Information
        th(v-if='!isShowSpotAllocations' style='width: 120px')
          vui-sorting-column(title='Start Date')
        th(v-if='!isShowSpotAllocations' style='width: 120px')
          vui-sorting-column(title='End Date')
        th.spot-allocation-column(
          v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
          v-if = 'isShowSpotAllocations'
          style = 'width: 503px'
        )
          makegoods-spot-allocation-header(
            v-model = 'orderLineItems[0].weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
        th(style='width: 100px') Spot #[br] Rate
        th(
          v-if = '!isImpressionsBuyType'
          style = 'width: 100px'
        ) Buyer #[br] RTG
        th(
          v-if = '!isImpressionsBuyType'
          style = 'width: 100px'
        ) Videa #[br] RTG
        th(style='width: 100px') Line $#[br] Total
        th(style='width: 100px') Buyer #[br] Comment
        th(style='width: 150px') Videa to Station #[br] Comment
        th(style='width: 100px') Spot #[br] Option
        th(style='width: 100px') Line #[br] Type
    tbody(v-for = '(lineItem, index) in orderLineItems', :class='(index % 2 === 0) ? "vui-highlight" : ""')
      tr(v-bind:class = '{ "vui-is-selected": lineItem.isExpanded }')
        td.vui-text-align--center(style='width: 80px')
          a(v-on:click = 'lineItem.isExpanded = !lineItem.isExpanded')
            vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
              v-bind:name = 'lineItem.isExpanded ? "caret-lower-right" : "caret-right"'
            )
        td.vui-text-align--right(
          v-bind:title = 'lineItem.lineNumber'
          style = 'width: 78px'
        ) {{ lineItem.lineNumber }}
        td(v-bind:title='lineItem.days' style='width: 82px') {{ lineItem.days }}
        td.vui-truncate(v-bind:title='lineItem.time' style='width: 110px') {{ lineItem.time }}
        td.vui-truncate(v-bind:title='lineItem.programName' style='width: 200px') {{ lineItem.program }}
        td(v-bind:title='lineItem.spotLength' style='width: 88px') {{ lineItem.length }}
        td.vui-text-align--right(v-bind:title='lineItem.totalSpots' style='width: 116px') {{ lineItem.orderSpots }}
        td.vui-text-align--right.vui-text-color--error(v-bind:title='lineItem.totalMissedSpots' style='width: 100px') {{ lineItem.openPreempts }}
        td.vui-text-align--right(v-bind:title='lineItem.totalTrafficSpots' style='width: 86px') {{ lineItem.trafficSpots }}
        td.vui-text-align--center(style='width: 140px')
          a.pointer.current-info.popup(
            v-on:click='showCurrentInfo(lineItem)'
          )
            vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
              name = 'popout'
            )
        td(:title='lineItem.startDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.startDate }}
        td(:title='lineItem.endDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.endDate }}
        td.spot-allocation-cell(
          v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
          v-if = 'isShowSpotAllocations'
          style = 'width: 503px'
        )
          makegoods-spot-allocation-with-missed-spots(
            v-if = 'isMissedSpotsShown'
            v-bind:spots = 'lineItem.weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
          makegoods-spot-allocation-with-traffic-spots(
            v-if = '!isMissedSpotsShown'
            v-bind:spots = 'lineItem.weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
        td.vui-text-align--right(v-bind:title='lineItem.orderedSpotRate' style='width: 100px') {{ lineItem.spotRate | numberWithCommas | formatMoney }}
        td.vui-text-align--right(
          v-if = '!isImpressionsBuyType'
          v-bind:title = 'lineItem.orderedRating'
          style = 'width: 100px'
        ) {{ lineItem.buyerRtg | formatRating }}
        td.vui-text-align--right(
          v-if = '!isImpressionsBuyType'
          v-bind:title = 'lineItem.videaCurrentRating'
          style = 'width: 100px'
        ) {{ lineItem.videaRtg | formatRating }}
        td.vui-text-align--right.currency(v-bind:title='lineItem.lineTotalMoney' style='width: 100px') {{ lineItem.lineNumberTotal | numberWithCommas | formatMoney }}
        td(v-bind:title='lineItem.buyerComment' style='width: 100px') {{ lineItem.buyerComment }}
        td(v-bind:title='lineItem.stationOrderComment' style='width: 150px') {{ lineItem.videaToStationComments }}
        td(title='' style='width: 100px')
        td(v-bind:title='lineItem.lineType' style='width: 100px') {{ lineItem.lineType }}
      tr.vui-is-expanded(v-if='lineItem.isExpanded')
        td.vui-align-top.om-nested-table-container.bordered(
          v-bind:colspan = 'isShowSpotAllocations ? 11 : 10',
          style = 'padding: 0'
        )
          .nested-order-line-grid

            .vui-box(style='padding: 0.5rem; border:none; border-top: 1px solid #51535c')
              h3.vui-text-heading--label Traffic logs

            div
              table.vui-table.vui-no-row-hover.vui-table--fixed-layout
                thead
                  tr
                    th.vui-truncate(v-bind:style="{ 'width': orderDetailsGridExpandingColumnsWidths.unitAiredStatusName }")
                      vui-sorting-column(title='Aired<br>Status')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.spotNumber }')
                      vui-sorting-column(title = 'Spot #')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airDay }')
                      vui-sorting-column(title='Air Day')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airTime }')
                      vui-sorting-column(title='Air Time')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.programPlaced }')
                      vui-sorting-column(title='Program Placed')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.priority }')
                      vui-sorting-column(title='Priority')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.status }')
                      vui-sorting-column(title='Status<br>Name')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airDate }')
                      vui-sorting-column(title='Air Date')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.lineNumber }')
                      vui-sorting-column(title='Station<br>Line #')
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.altLineNumber }') Alt. #[br] Line #
                    th.vui-no-border-right(v-bind:style = '{ "width": orderDetailsGridExpandingColumnsWidths.assignedMakegoodId }') MG #
                    th(
                      v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
                      v-if = 'isShowSpotAllocations'
                      style = 'background-color: rgb(240, 248, 252)'
                    )
                tbody
                  tr.with-row-span(v-for='trafficLog in lineItem.trafficLogs')
                    td.vui-truncate(
                    ) {{ !!trafficLog.airedBroadcastingDateTime ? trafficLog.unitAiredStatusName : null }}
                    td.vui-text-align--right(
                      v-bind:title = 'trafficLog.spotNumber '
                    ) {{ trafficLog.spotNumber }}
                    td.vui-truncate(
                      v-bind:title = 'trafficLog.airDay'
                    ) {{ trafficLog.airDay }}
                    td(
                      v-bind:title = 'trafficLog.airTime'
                    ) {{ trafficLog.airTime }}
                    td.vui-truncate(
                      v-bind:title = 'trafficLog.programName'
                    ) {{ trafficLog.programPlaced }}
                    td(
                      v-bind:title = 'trafficLog.priority'
                    ) {{ trafficLog.priority }}
                    td.vui-truncate(
                      v-bind:title = 'trafficLog.statusName'
                      ) {{ trafficLog.statusName }}
                    td(
                      v-bind:title = 'trafficLog.airDate'
                    ) {{ trafficLog.airDate }}
                    td.vui-text-align--right(
                      v-bind:title = 'trafficLog.lineNumber'
                    ) {{ trafficLog.stationLineNumber }}
                    td.vui-text-align--right(
                      v-bind:title = 'trafficLog.altLineNumber'
                    ) {{ trafficLog.altLineNumber }}
                    td.vui-no-border-right
                    td.spot-allocation-cell(v-if='isShowSpotAllocations')
                      makegoods-spot-allocation-with-missed-spots(
                        v-if = 'isMissedSpotsShown'
                        v-bind:spots = 'lineItem.weeklySpotAllocations'
                        navigator = 'spotAllocationNavigator'
                      )
                      makegoods-spot-allocation-with-traffic-spots(
                        v-if = '!isMissedSpotsShown'
                        v-bind:spots = 'lineItem.weeklySpotAllocations'
                        navigator = 'spotAllocationNavigator'
                      )
                      //- a.text-underline(
                      //-   href = ''
                      //-   ng-click = 'openMakegood(trafficLog.assignedMakegoodData)'
                      //- ) {{ trafficLog.assignedMakegoodData.sellerOfferId }}

        td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding: 0')

          .nested-order-line-invoice-details-grid

            .vui-box(style='padding:.5rem;border:none;border-top:1px solid #51535c')
              h3.vui-text-heading--label Agency Invoice Details

            div
              table.vui-table.vui-no-row-hover.vui-table--fixed-layout
                caption
                thead
                  tr
                    th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.isciAdId }')
                      | ISCI #[br] AD ID
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.invoiceDate }')
                      | Station #[br] Inv Date
                    th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.affidavitRate }')
                      | Station #[br] Inv Amt
                    th.vui-truncate.vui-no-border-right(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.externalInvoiceId }')
                      | Station #[br] Inv #
                tbody
                  tr.with-row-span(v-for='agencyInvoiceDetail in lineItem.agencyInvoiceDetails')
                    td.vui-no-border-left(:title='agencyInvoiceDetail.isciAdId') {{ agencyInvoiceDetail.isciAdId }}
                    td.vui-truncate(:title='agencyInvoiceDetail.invoiceDate') {{ agencyInvoiceDetail.invoiceDate }}
                    td.vui-truncate.vui-text-align--right(
                      v-bind:class="{ 'currency': agencyInvoiceDetail.detailsAffidavitRate }"
                      v-bind:title='agencyInvoiceDetail.detailsAffidavitRate') {{ agencyInvoiceDetail.detailsAffidavitRate }}
                    td.vui-truncate.vui-no-border-right(:title='agencyInvoiceDetail.externalInvoiceId') {{ agencyInvoiceDetail.externalInvoiceId }}

        td.vui-align-top.om-nested-table-container.bordered(colspan='6', style='padding: 0')

          .nested-order-line-makegoods-grid

            .vui-box(style='padding: 0.5rem; border:none; border-top: 1px solid #51535c')
              h3.vui-text-heading--label Makegoods

            .vui-scrollable--x
              table.vui-table.vui-no-row-hover.vui-table--fixed-layout(cg-busy='promise')
                thead
                  tr
                    th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": expandingMakegoodColumnsWidths.sellerOfferId }')
                      vui-sorting-column(title='MG #')
                    th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.statusName }')
                      vui-sorting-column(title='MG<br>Status')
                    th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.confirmDate }')
                      vui-sorting-column(title='MG<br>Applied')
                    th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.newMakegoodLines }')
                      vui-sorting-column(title='MG<br>New Lines')
                tbody
                  tr(v-for='makegood in lineItem.makegoods')
                    td {{ makegood.makegoodNumber }}
                    td {{ makegood.makegoodStatus }}
                    td {{ makegood.makegoodApplied }}
                    td {{ makegood.makegoodNewLines }}

  makegoods-order-line-current-info-popup(
    v-show = 'showCurrentInfoPopup'
    @close = 'showCurrentInfoPopup = false'
  )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    props: {
      order: {
        type: Object
      },
      isShowSpotAllocations: {
        type: Boolean,
        default: false
      },
      isMissedSpotsShown: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        showCurrentInfoPopup: false,
        orderLineItems: [],
        tabItems: [
          {
            orderId: 1,
            tabHeader: 'Original Order Version #1'
          }
        ],
        isImpressionsBuyType: false,
        currentTabOrderId: 1,
        spotAllocationNavigator: {
          tableCellWidth: '503px'
        },
        orderTabOrderGridExpandingColumnsWidths: {
          blank: '39px',
          unitAiredStatusName: '100px',
          spotNumber: '78px',
          programPlaced: '192px',
          airTime: '138px',
          airDay: '108px',
          priority: '88px',
          status: '80px',
          airDate: '100px',
          lineNumber: '86px',
          altLineNumber: '65px',
          assignedMakegoodId: '72px',
          isciAdId: '100px',
          invoiceDate: '100px',
          externalInvoiceId: '99px',
          affidavitRate: '99px'
        },
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
        expandingMakegoodColumnsWidths: {
          sellerOfferId: '97px',
          statusName: '100px',
          confirmDate: '100px',
          newMakegoodLines: '100px'
        },
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
        },
        columnWidths: { }
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
      getTrafficLogsTableSpan () {
        // Returns colspan value for traffic logs table wrapper based on shown columns
        // of main table.
        return this.isShowSpotAllocations ? 11 : 10
      },

      getInvoiceDetailsTableSpan () {
        return 4
      },

      getMakegoodTableSpan () {
        // Returns colspan value for makegood table wrapper based on shown columns
        // of main table.
        var spareColumns = this.isShowSpotAllocations ? 0 : 2
        var defaultSpan = 4

        return spareColumns + defaultSpan
      },

      showCurrentInfo(item) {
        this.showCurrentInfoPopup = true
      }
    },

    created () {
      this.fetchOrderLineItems()
    }
  }
</script>
