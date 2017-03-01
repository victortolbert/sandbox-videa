<template lang="pug">
  //- .vui-scrollable--x
  //-   table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-missed-spots
  //-     thead
  //-       tr
  //-         th.vui-truncate(style='width: 240px')
  //-           vui-sorting-column(
  //-             column-name = 'programName'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Program'
  //-           )
  //-         th(style='width: 102px')
  //-           vui-sorting-column(
  //-             column-name = 'startTime'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Start Time'
  //-           )
  //-         th(style = 'width: 102px')
  //-           vui-sorting-column(
  //-             column-name = 'endTime'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'End Time'
  //-           )
  //-         th(style = 'width: 95px')
  //-           vui-sorting-column(
  //-             column-name = 'days'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Days'
  //-           )
  //-         th(style = 'width: 140px')
  //-           vui-sorting-column(
  //-             column-name = 'dayPartName'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Daypart'
  //-           )
  //-         th(style = 'width: 60px')
  //-           vui-sorting-column(
  //-             column-name = 'spotLength'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Len'
  //-           )
  //-         th(style = 'width: 77px')
  //-           vui-sorting-column(
  //-             column-name = 'totalSpots'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'MG<br>Spots'
  //-           )
  //-         th.spot-allocation-column(
  //-           style='width: 48px'
  //-         )
  //-           makegoods-spot-allocation-header(
  //-             v-model='items[0].spotAllocations'
  //-             navigator='spotAllocationNavigator'
  //-           )
  //-         th(style='width: 100px')
  //-           vui-sorting-column(
  //-             column-name = 'spotRate'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Spot Rate'
  //-           )
  //-         th(v-if='isImpressionsBuyType' style='width: 122px')
  //-           vui-sorting-column(
  //-             column-name = 'videaImpressions'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Videa<br>Impressions'
  //-           )
  //-         th(v-if='isImpressionsBuyType' style='width: 85px')
  //-           vui-sorting-column(
  //-             column-name = 'stationCpm'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Station<br>CPM'
  //-           )
  //-         th(style = 'width: 110px')
  //-           vui-sorting-column(
  //-             column-name = 'comment'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title='Makegood<br>Comment'
  //-           )
  //-         th(style='width: 85px')
  //-           vui-sorting-column(
  //-             column-name = 'gDLNS'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'GDLNS'
  //-           )
  //-         th(style='width: 255px')
  //-           vui-sorting-column(
  //-             column-name = 'gdlnsWarnings'
  //-             current-sorting = 'sorting'
  //-             sorting-changed = 'sortingChanged(column)'
  //-             title = 'Guidelines Warnings / Violations'
  //-           )
  //-     tbody(v-for='lineItem in orderLineItems')
  //-       tr(v-bind:class = '{ "vui-is-selected": lineItem.isExpanded }')
  //-         td.vui-text-align--center(style='width: 80px')
  //-           a(v-on:click = 'lineItem.isExpanded = !lineItem.isExpanded')
  //-             vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
  //-               v-bind:name = 'lineItem.isExpanded ? "caret-lower-right" : "caret-right"'
  //-             )
  //-         td.vui-text-align--right(
  //-           v-bind:title = 'lineItem.lineNumber'
  //-           style = 'width: 78px'
  //-         ) {{ lineItem.lineNumber }}
  //-         td(v-bind:title='lineItem.days' style='width: 82px') {{ lineItem.days }}
  //-         td.vui-truncate(v-bind:title='lineItem.time' style='width: 110px') {{ lineItem.time }}
  //-         td.vui-truncate(v-bind:title='lineItem.programName' style='width: 200px') {{ lineItem.program }}
  //-         td(v-bind:title='lineItem.spotLength' style='width: 88px') {{ lineItem.length }}
  //-         td.vui-text-align--right(v-bind:title='lineItem.totalSpots' style='width: 116px') {{ lineItem.orderSpots }}
  //-         td.vui-text-align--right(v-bind:title='lineItem.totalMissedSpots' style='width: 100px') {{ lineItem.openPreempts }}
  //-         td.vui-text-align--right(v-bind:title='lineItem.totalTrafficSpots' style='width: 86px') {{ lineItem.trafficSpots }}
  //-         td.vui-text-align--center(style='width: 140px')
  //-           a.pointer.current-info.popup(
  //-             v-on:click='showCurrentInfo(lineItem)'
  //-           )
  //-             vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
  //-               name = 'popout'
  //-             )
  //-         td(:title='lineItem.startDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.startDate }}
  //-         td(:title='lineItem.endDate' v-if='!isShowSpotAllocations' style='width: 120px') {{ lineItem.endDate }}
  //-         td.spot-allocation-cell(
  //-           v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
  //-           v-if = 'isShowSpotAllocations'
  //-           style = 'width: 503px'
  //-         )
  //-           makegoods-spot-allocation-with-missed-spots(
  //-             v-if = 'isMissedSpotsShown'
  //-             v-bind:spots = 'lineItem.weeklySpotAllocations'
  //-             navigator = 'spotAllocationNavigator'
  //-           )
  //-           makegoods-spot-allocation-with-traffic-spots(
  //-             v-if = '!isMissedSpotsShown'
  //-             v-bind:spots = 'lineItem.weeklySpotAllocations'
  //-             navigator = 'spotAllocationNavigator'
  //-           )
  //-         td.vui-text-align--right(v-bind:title='lineItem.orderedSpotRate' style='width: 100px') {{ lineItem.spotRate | numberWithCommas | formatMoney }}
  //-         td.vui-text-align--right(
  //-           v-if = '!isImpressionsBuyType'
  //-           v-bind:title = 'lineItem.orderedRating'
  //-           style = 'width: 100px'
  //-         ) {{ lineItem.buyerRtg | formatRating }}
  //-         td.vui-text-align--right(
  //-           v-if = '!isImpressionsBuyType'
  //-           v-bind:title = 'lineItem.videaCurrentRating'
  //-           style = 'width: 100px'
  //-         ) {{ lineItem.videaRtg }}
  //-         td.vui-text-align--right.currency(v-bind:title='lineItem.lineTotalMoney' style='width: 100px') {{ lineItem.lineNumberTotal | numberWithCommas | formatMoney }}
  //-         td(v-bind:title='lineItem.buyerComment' style='width: 100px') {{ lineItem.buyerComment }}
  //-         td(v-bind:title='lineItem.stationOrderComment' style='width: 150px') {{ lineItem.videaToStationComments }}
  //-         td(title='' style='width: 100px')
  //-         td(v-bind:title='lineItem.lineType' style='width: 100px') {{ lineItem.lineType }}
  //-       tr.vui-is-expanded(v-if='lineItem.isExpanded')
  //-         td.vui-align-top.om-nested-table-container.bordered(
  //-           v-bind:colspan = 'isShowSpotAllocations ? 11 : 10',
  //-           style = 'padding: 0'
  //-         )
  //-           .nested-order-line-grid

  //-             .vui-box(style='padding: 0.5rem; border:none; border-top: 1px solid #51535c')
  //-               h3.vui-text-heading--label Traffic logs

  //-             div
  //-               table.vui-table.vui-no-row-hover.vui-table--fixed-layout
  //-                 thead
  //-                   tr
  //-                     th.vui-truncate(v-bind:style="{ 'width': orderDetailsGridExpandingColumnsWidths.unitAiredStatusName }")
  //-                       vui-sorting-column(title='Aired<br>Status')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.spotNumber }')
  //-                       vui-sorting-column(title = 'Spot #')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airDay }')
  //-                       vui-sorting-column(title='Air Day')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airTime }')
  //-                       vui-sorting-column(title='Air Time')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.programPlaced }')
  //-                       vui-sorting-column(title='Program Placed')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.priority }')
  //-                       vui-sorting-column(title='Priority')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.status }')
  //-                       vui-sorting-column(title='Status<br>Name')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.airDate }')
  //-                       vui-sorting-column(title='Air Date')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.lineNumber }')
  //-                       vui-sorting-column(title='Station<br>Line #')
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.altLineNumber }') Alt. #[br] Line #
  //-                     th.vui-no-border-right(v-bind:style = '{ "width": orderDetailsGridExpandingColumnsWidths.assignedMakegoodId }') MG #
  //-                     th(
  //-                       v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
  //-                       v-if = 'isShowSpotAllocations'
  //-                       style = 'background-color: rgb(240, 248, 252)'
  //-                     )
  //-                 tbody
  //-                   tr.with-row-span(v-for='trafficLog in lineItem.trafficLogs')
  //-                     td.vui-truncate(
  //-                     ) {{ !!trafficLog.airedBroadcastingDateTime ? trafficLog.unitAiredStatusName : null }}
  //-                     td.vui-text-align--right(
  //-                       v-bind:title = 'trafficLog.spotNumber '
  //-                     ) {{ trafficLog.spotNumber }}
  //-                     td.vui-truncate(
  //-                       v-bind:title = 'trafficLog.airDay'
  //-                     ) {{ trafficLog.airDay }}
  //-                     td(
  //-                       v-bind:title = 'trafficLog.airTime'
  //-                     ) {{ trafficLog.airTime }}
  //-                     td.vui-truncate(
  //-                       v-bind:title = 'trafficLog.programName'
  //-                     ) {{ trafficLog.programPlaced }}
  //-                     td(
  //-                       v-bind:title = 'trafficLog.priority'
  //-                     ) {{ trafficLog.priority }}
  //-                     td.vui-truncate(
  //-                       v-bind:title = 'trafficLog.statusName'
  //-                       ) {{ trafficLog.statusName }}
  //-                     td(
  //-                       v-bind:title = 'trafficLog.airDate'
  //-                     ) {{ trafficLog.airDate }}
  //-                     td.vui-text-align--right(
  //-                       v-bind:title = 'trafficLog.lineNumber'
  //-                     ) {{ trafficLog.stationLineNumber }}
  //-                     td.vui-text-align--right(
  //-                       v-bind:title = 'trafficLog.altLineNumber'
  //-                     ) {{ trafficLog.altLineNumber }}
  //-                     td.vui-no-border-right(
  //-                       rowspan='0'
  //-                       title=''
  //-                     )
  //-                       //- a.text-underline(
  //-                       //-   href = ''
  //-                       //-   ng-click = 'openMakegood(trafficLog.assignedMakegoodData)'
  //-                       //- ) {{ trafficLog.assignedMakegoodData.sellerOfferId }}

  //-         td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding: 0')

  //-           .nested-order-line-invoice-details-grid

  //-             .vui-box(style='padding:.5rem;border:none;border-top:1px solid #51535c')
  //-               h3.vui-text-heading--label Agency Invoice Details

  //-             div
  //-               table.vui-table.vui-no-row-hover.vui-table--fixed-layout
  //-                 caption
  //-                 thead
  //-                   tr
  //-                     th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.isciAdId }')
  //-                       | ISCI #[br] AD ID
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.invoiceDate }')
  //-                       | Station #[br] Inv Date
  //-                     th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.affidavitRate }')
  //-                       | Station #[br] Inv Amt
  //-                     th.vui-truncate.vui-no-border-right(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.externalInvoiceId }')
  //-                       | Station #[br] Inv #
  //-                 tbody
  //-                   tr.with-row-span(v-for='agencyInvoiceDetail in lineItem.agencyInvoiceDetails')
  //-                     td.vui-no-border-left(:title='agencyInvoiceDetail.isciAdId') {{ agencyInvoiceDetail.isciAdId }}
  //-                     td.vui-truncate(:title='agencyInvoiceDetail.invoiceDate') {{ agencyInvoiceDetail.invoiceDate }}
  //-                     td.vui-truncate.vui-text-align--right(
  //-                       v-bind:class="{ 'currency': agencyInvoiceDetail.detailsAffidavitRate }"
  //-                       v-bind:title='agencyInvoiceDetail.detailsAffidavitRate') {{ agencyInvoiceDetail.detailsAffidavitRate }}
  //-                     td.vui-truncate.vui-no-border-right(:title='agencyInvoiceDetail.externalInvoiceId') {{ agencyInvoiceDetail.externalInvoiceId }}

  //-         td.vui-align-top.om-nested-table-container.bordered(colspan='6', style='padding: 0')

  //-           .nested-order-line-makegoods-grid

  //-             .vui-box(style='padding: 0.5rem; border:none; border-top: 1px solid #51535c')
  //-               h3.vui-text-heading--label Makegoods

  //-             .vui-scrollable--x
  //-               table.vui-table.vui-no-row-hover.vui-table--fixed-layout(cg-busy='promise')
  //-                 thead
  //-                   tr
  //-                     th.vui-truncate.vui-no-border-left(v-bind:style='{ "width": expandingMakegoodColumnsWidths.sellerOfferId }')
  //-                       vui-sorting-column(title='MG #')
  //-                     th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.statusName }')
  //-                       vui-sorting-column(title='MG<br>Status')
  //-                     th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.confirmDate }')
  //-                       vui-sorting-column(title='MG<br>Applied')
  //-                     th.vui-truncate(v-bind:style='{ "width": expandingMakegoodColumnsWidths.newMakegoodLines }')
  //-                       vui-sorting-column(title='MG<br>New Lines')
  //-                 tbody
  //-                   tr(v-for='makegood in lineItem.makegoods')
  //-                     td {{ makegood.makegoodNumber }}
  //-                     td {{ makegood.makegoodStatus }}
  //-                     td {{ makegood.makegoodApplied }}
  //-                     td {{ makegood.makegoodNewLines }}

</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { spotAllocations: [] }
        ]
      }
    }
  }
</script>
