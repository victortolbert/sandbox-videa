<template lang="pug">
  .nested-order-line-grid
    .vui-box(style='padding: 0.5rem; border: none;border-top: 1px solid #51535c')
      h3.vui-text-heading--label Traffic logs
    div
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(
              v-bind:style = '{ "width": orderDetailsGridExpandingColumnsWidths.blank }'
            )
            th.vui-truncate(v-bind:style='{ "width": orderDetailsGridExpandingColumnsWidths.unitAiredStatusName }')
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
            td
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
            td.vui-no-border-right(
              rowspan='0'
              title=''
            )
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
</template>

<script>
  export default {
    props: {
      lineItem: {
        type: Object
      },
      isShowSpotAllocations: {
        type: Boolean,
        default: true
      },
      isMissedSpotsShown: {
        type: Boolean,
        default: true
      },
      childItems: {
        type: Array
      }
    },

    data: () => ({
      orderDetailsGridExpandingColumnsWidths: {
        blank: '39px',
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
      spotAllocationNavigator: {
        tableCellWidth: '503px'
      },
      columnWidths: {
        blank: 39,
        unitAiredStatusName: 100,
        spotNumber: 78,
        programPlaced: 192,
        airTime: 138,
        airDay: 108,
        priority: 88,
        status: 80,
        airDate: 100,
        lineNumber: 86,
        altLineNumber: 65,
        assignedMakegoodId: 72,
        isciAdId: 100,
        invoiceDate: 100,
        externalInvoiceId: 99,
        affidavitRate: 99
      }
    })
  }
</script>
