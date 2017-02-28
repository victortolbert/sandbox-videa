<template lang="pug">
.vui-scrollable--x
  table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
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
            v-model = 'items[0].weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
        th(style='width: 100px') Spot #[br] Rate
        th(
          v-if = '!isImpressionsBuyType'
          style = 'width: 100px'
        ) Buyer #[br] IMP
        th(
          v-if = '!isImpressionsBuyType'
          style = 'width: 100px'
        ) Videa #[br] IMP
        th(style='width: 100px') Line #[br] $ Total
        th(style='width: 100px') Buyer #[br] Comment
        th(style='width: 110px') Videa to Station #[br] Comment
        th(style='width: 100px') Spot #[br] Option
        th(style='width: 100px') Line #[br] Type
    tbody(v-for = 'item in orderLineItems')
      tr(v-bind:class = '{ "vui-is-selected": item.isExpanded }')
        td.vui-text-align--center(style='width: 80px')
          a(v-on:click = 'item.isExpanded = !item.isExpanded')
            vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
              v-bind:name = 'item.isExpanded ? "caret-lower-right" : "caret-right"'
            )
        td.vui-text-align--right(
          v-bind:title = 'item.lineNumber'
          style = 'width: 78px'
        ) {{ item.lineNumber }}
        td(v-bind:title='item.days' style='width: 82px') {{ item.days }}
        td.vui-truncate(v-bind:title='item.time' style='width: 110px') {{ item.time }}
        td.vui-truncate(v-bind:title='item.programName' style='width: 200px') {{ item.program }}
        td(v-bind:title='item.spotLength' style='width: 88px') {{ item.length }}
        td.vui-text-align--right(v-bind:title='item.totalSpots' style='width: 116px') {{ item.orderSpots }}
        td.vui-text-align--right(v-bind:title='item.totalMissedSpots' style='width: 100px') {{ item.openPreempts }}
        td.vui-text-align--right(v-bind:title='item.totalTrafficSpots' style='width: 86px') {{ item.trafficSpots }}
        td.vui-text-align--center(style='width: 140px')
          a.pointer.current-info.popup(
            v-on:click='showCurrentInfo(item)'
          )
            vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
              name = 'popout'
            )
        td(
          v-bind:title = 'item.startDate'
          v-if = '!isShowSpotAllocations'
          style = 'width: 120px'
        ) {{ item.startDate }}
        td(
          v-bind:title = 'item.endDate'
          v-if = '!isShowSpotAllocations'
          style = 'width: 120px'
        ) {{ item.endDate }}
        td.spot-allocation-cell(
          v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
          v-if = 'isShowSpotAllocations'
          style = 'width: 503px'
        )
          makegoods-spot-allocation-with-missed-spots(
            v-if = 'isMissedSpotsShown'
            v-model = 'item.weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
          makegoods-spot-allocation-with-traffic-spots(
            v-if = '!isMissedSpotsShown'
            v-model = 'item.weeklySpotAllocations'
            navigator = 'spotAllocationNavigator'
          )
        td.vui-text-align--right(v-bind:title='item.orderedSpotRate' style='width: 100px') {{ item.spotRate | numberWithCommas | formatMoney }}
        td.vui-text-align--right(
          v-if = '!isImpressionsBuyType'
          v-bind:title = 'item.orderedRating'
          style = 'width: 100px'
        ) {{ item.buyerRtg | formatRating }}
        td.vui-text-align--right(
          v-if = '!isImpressionsBuyType'
          v-bind:title = 'item.videaCurrentRating'
          style = 'width: 100px'
        ) {{ item.videaRtg }}
        td.vui-text-align--right.currency(v-bind:title='item.lineTotalMoney' style='width: 100px') {{ item.lineNumberTotal | numberWithCommas | formatMoney }}
        td(v-bind:title='item.buyerComment' style='width: 100px') {{ item.buyerComment }}
        td(v-bind:title='item.stationOrderComment' style='width: 150px') {{ item.videaToStationComments }}
        td(title='' style='width: 100px')
        td(v-bind:title='item.lineType' style='width: 100px') {{ item.lineType }}
      tr.vui-is-expanded(v-if='item.isExpanded')
        td.vui-align-top.om-nested-table-container.bordered(
          v-bind:colspan = 'isShowSpotAllocations ? 11 : 10',
          style='padding: 0'
        )
          .nested-order-line-grid(
            child-items = 'item.child'
            column-widths = 'expandingColumnsWidths'
            is-show-spot-allocations = 'isShowSpotAllocations'
            open-makegood = 'showOfferDialog'
            order-line-id = 'item.orderDetailsId'
            spot-allocation-navigator = 'spotAllocationNavigator'
          )
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
                    th.vui-no-border-right(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.assignedMakegoodId }') MG #
                    th(
                      v-bind:style='{ "width": spotAllocationNavigator.tableCellWidth }'
                      v-if = 'isShowSpotAllocations'
                      style = 'background-color: rgb(240, 248, 252)'
                    )
                tbody
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.spotNumber', title='2') 2
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDay', title='Tuesday') Tuesday
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airTime|vuiTimeWithSeconds', title='07:43:24 pm') 07:43:24 pm
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.programName', title='Jeopardy') Jeopardy
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.priority', title='P05-SB') P05-SB
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.statusName', title='Placed') Placed
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDate|vuiDate', title='04/11/2017') 04/11/2017
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.lineNumber', title='1') 1
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.altLineNumber', title='1') 1
                  //-   td.vui-no-border-right(rowspan='0', ng-if='item.isMain', title='')
                  //-     a.text-underline(href='', ng-bind='::item.assignedMakegoodData.sellerOfferId', ng-click='openMakegood(item.assignedMakegoodData)')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.spotNumber', title='1') 1
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDay', title='Wednesday') Wednesday
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airTime|vuiTimeWithSeconds', title='07:43:34 pm') 07:43:34 pm
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.programName', title='Jeopardy') Jeopardy
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.priority', title='P05-SB') P05-SB
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.statusName', title='Placed') Placed
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDate|vuiDate', title='04/12/2017') 04/12/2017
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.lineNumber', title='1') 1
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.altLineNumber', title='1') 1
                  //-   td.vui-no-border-right(rowspan='0', ng-if='item.isMain', title='')
                  //-     a.text-underline(href='', ng-bind='::item.assignedMakegoodData.sellerOfferId', ng-click='openMakegood(item.assignedMakegoodData)')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.spotNumber', title='4') 4
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDay', title='Monday') Monday
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airTime|vuiTimeWithSeconds', title='07:50:51 pm') 07:50:51 pm
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.programName', title='Jeopardy') Jeopardy
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.priority', title='P05-SB') P05-SB
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.statusName', title='Placed') Placed
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDate|vuiDate', title='04/17/2017') 04/17/2017
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.lineNumber', title='1') 1
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.altLineNumber', title='1') 1
                  //-   td.vui-no-border-right(rowspan='0', ng-if='item.isMain', title='')
                  //-     a.text-underline(href='', ng-bind='::item.assignedMakegoodData.sellerOfferId', ng-click='openMakegood(item.assignedMakegoodData)')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.spotNumber', title='3') 3
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDay', title='Friday') Friday
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airTime|vuiTimeWithSeconds', title='07:43:39 pm') 07:43:39 pm
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.programName', title='Jeopardy') Jeopardy
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.priority', title='P05-SB') P05-SB
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.statusName', title='Placed') Placed
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDate|vuiDate', title='04/21/2017') 04/21/2017
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.lineNumber', title='1') 1
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.altLineNumber', title='1') 1
                  //-   td.vui-no-border-right(rowspan='0', ng-if='item.isMain', title='')
                  //-     a.text-underline(href='', ng-bind='::item.assignedMakegoodData.sellerOfferId', ng-click='openMakegood(item.assignedMakegoodData)')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.spotNumber', title='5') 5
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDay', title='Thursday') Thursday
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airTime|vuiTimeWithSeconds', title='07:35:12 pm') 07:35:12 pm
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.programName', title='Jeopardy') Jeopardy
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.priority', title='P05-SB') P05-SB
                  //-   td.vui-truncate(rowspan='0', ng-if='item.isMain', ng-bind='::item.statusName', title='Placed') Placed
                  //-   td(rowspan='0', ng-if='item.isMain', ng-bind='::item.airDate|vuiDate', title='04/27/2017') 04/27/2017
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.lineNumber', title='1') 1
                  //-   td.vui-text-align--right(rowspan='0', ng-if='item.isMain', ng-bind='::item.altLineNumber', title='1') 1
                  //-   td.vui-no-border-right(rowspan='0', ng-if='item.isMain', title='')
                  //-     a.text-underline(href='', ng-bind='::item.assignedMakegoodData.sellerOfferId', ng-click='openMakegood(item.assignedMakegoodData)')
        td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding: 0')
          .nested-order-line-invoice-details-grid(
            v-bind:is-show-spot-allocations = 'isShowSpotAllocations'
            child-items = 'item.child'
            column-widths = 'expandingColumnsWidths'
            order-line-id = 'item.orderDetailsId'
            spot-allocation-navigator = 'spotAllocationNavigator'
          )
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
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-no-border-left(ng-bind='::item.isciAdId', title='')
                  //-   td.vui-truncate(ng-bind='::item.invoiceDate|vuiDate', title='')
                  //-   td.vui-truncate.vui-text-align--right(ng-bind='::item.detailsAffidavitRate|vuiDecimal', title='', ng-class="::{'currency': item.detailsAffidavitRate}")
                  //-   td.vui-truncate.vui-no-border-right(ng-bind='::item.externalInvoiceId', title='')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-no-border-left(ng-bind='::item.isciAdId', title='')
                  //-   td.vui-truncate(ng-bind='::item.invoiceDate|vuiDate', title='')
                  //-   td.vui-truncate.vui-text-align--right(ng-bind='::item.detailsAffidavitRate|vuiDecimal', title='', ng-class="::{'currency': item.detailsAffidavitRate}")
                  //-   td.vui-truncate.vui-no-border-right(ng-bind='::item.externalInvoiceId', title='')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-no-border-left(ng-bind='::item.isciAdId', title='')
                  //-   td.vui-truncate(ng-bind='::item.invoiceDate|vuiDate', title='')
                  //-   td.vui-truncate.vui-text-align--right(ng-bind='::item.detailsAffidavitRate|vuiDecimal', title='', ng-class="::{'currency': item.detailsAffidavitRate}")
                  //-   td.vui-truncate.vui-no-border-right(ng-bind='::item.externalInvoiceId', title='')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-no-border-left(ng-bind='::item.isciAdId', title='')
                  //-   td.vui-truncate(ng-bind='::item.invoiceDate|vuiDate', title='')
                  //-   td.vui-truncate.vui-text-align--right(ng-bind='::item.detailsAffidavitRate|vuiDecimal', title='', ng-class="::{'currency': item.detailsAffidavitRate}")
                  //-   td.vui-truncate.vui-no-border-right(ng-bind='::item.externalInvoiceId', title='')
                  //- tr.with-row-span(ng-repeat='item in childItems')
                  //-   td.vui-no-border-left(ng-bind='::item.isciAdId', title='')
                  //-   td.vui-truncate(ng-bind='::item.invoiceDate|vuiDate', title='')
                  //-   td.vui-truncate.vui-text-align--right(ng-bind='::item.detailsAffidavitRate|vuiDecimal', title='', ng-class="::{'currency': item.detailsAffidavitRate}")
                  //-   td.vui-truncate.vui-no-border-right(ng-bind='::item.externalInvoiceId', title='')
        td.vui-align-top.om-nested-table-container.bordered(colspan='6', style='padding: 0')
          .nested-order-line-makegoods-grid(
            column-widths = 'expandingMakegoodColumnsWidths'
            items = 'item.makegoods'
            order-line-id = 'item.orderDetailsId'
            show-offer-dialog = 'showOfferDialog'
          )
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
                  tr
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
        items: [
          {
            weeklySpotAllocations: null,
            isExpanded: false,
            lineNumber: 1,
            isOrbit: true,
            days: 'MO-FR',
            time: '7:30 - 8pm',
            startDate: moment().add(14, 'days').format('MM/DD/YY'),
            endDate: moment().add(5, 'days').format('MM/DD/YY'),
            programName: 'Jeopady',
            spotLength: '30 s',
            totalSpots: 5,
            totalMissedSpots: 0,
            totalTrafficSpots: 5,
            orderedSpotRate: 425,
            orderedRating: 23.1,
            videaCurrentRating: 0,
            lineTotalMoney: 2125,
            buyerComment: '',
            stationOrderComment: '',
            lineType: 'Original',
          }
        ],
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
